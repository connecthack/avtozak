import { Page } from '@/app/components/Page';
import { Updates as UpdatesWidget } from '@/app/components/Updates';
import { getUpdates } from '@/app/helpers/service';

export default async function Courts() {
  const updates = await getUpdates();

  return (
    <Page title="Обновление суды">
      <UpdatesWidget updates={updates} />
    </Page>
  );
}
