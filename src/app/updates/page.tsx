import { Page } from '@/app/components/Page';
import { Updates as UpdatesWidget } from '@/app/components/Updates';
import { getUpdates } from '@/app/helpers/service';

export default async function Updates() {
  const updates = await getUpdates();

  return (
    <Page title="Обновление РФМ">
      <UpdatesWidget updates={updates} />
    </Page>
  );
}
