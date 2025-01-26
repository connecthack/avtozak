import os
import re
import hashlib
import pandas as pd
from datetime import datetime
from selenium import webdriver
from selenium.webdriver.firefox.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.firefox import GeckoDriverManager

def generate_person_id(name: str, birth_date: str) -> str:
    unique_string = (name + birth_date).strip().lower()
    return hashlib.md5(unique_string.encode('utf-8')).hexdigest()[:8]

def parse_fedsfm():
    print("Запуск парсинга...")

    driver = None
    try:
        service = Service(GeckoDriverManager().install())
        driver = webdriver.Firefox(service=service)

        url = "https://www.fedsfm.ru/documents/terrorists-catalog-portal-act"
        print(f"Открытие страницы: {url}")
        driver.get(url)

        print("Нажатие на 'Национальная часть'...")
        national_part = WebDriverWait(driver, 15).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, 'a[data-toggle="collapse"][href="#NationalPart"]'))
        )
        national_part.click()

        print("Нажатие на 'Физические лица'...")
        russian_fl = WebDriverWait(driver, 15).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, 'a[data-toggle="collapse"][href="#russianFL"]'))
        )
        russian_fl.click()

        print("Получение списка физических лиц...")
        persons_list = WebDriverWait(driver, 15).until(
            EC.presence_of_all_elements_located((By.CSS_SELECTOR, '#russianFL li'))
        )

        print("Извлечение данных из списка...")
        data = []
        for person in persons_list:
            text = person.text
            try:
                terrorist = '*' in text

                number_match = re.match(r'(\d+)\.', text)
                number = number_match.group(1) if number_match else ""

                birth_date_match = re.search(r'(\d{2}\.\d{2}\.\d{4}) г.р.', text)
                birth_date = birth_date_match.group(1) if birth_date_match else ""

                if number_match and birth_date_match:
                    name = text[number_match.end():birth_date_match.start()].strip()
                else:
                    name = ""

                name = name.replace('*', '')
                name = name.rstrip(',')
                location = text[birth_date_match.end():].strip() if birth_date_match else ""
                location = location.rstrip(';').lstrip(',')

                person_id = generate_person_id(name, birth_date)

                data.append([
                    person_id,
                    number,
                    name,
                    birth_date,
                    location,
                    terrorist
                ])

            except Exception as e:
                print(f"Ошибка при обработке строки: {text} - {e}")
                data.append(["Ошибка", "", text, "", "", ""])

        if not data:
            raise ValueError("Данные не найдены на странице.")

        df = pd.DataFrame(
            data,
            columns=["ID", "Порядковый номер", "Имя", "Дата рождения", "Местоположение", "Террорист"]
        )

        current_time = datetime.now().strftime("%d%m%Y_%H%M")
        filename = f"fedsfm_{current_time}.csv"
        df.to_csv(filename, index=False, encoding='utf-8')
        print(f"Данные сохранены в файл {filename}")

    except Exception as e:
        print(f"Произошла ошибка: {e}")

    finally:
        if driver:
            driver.quit()
            print("Закрытие браузера.")

if __name__ == '__main__':
    parse_fedsfm()
