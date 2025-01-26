import { Suggestions as SuggestionsWidget } from '@/app/components/Suggestions';
import { Page } from '@/app/components/Page';
import { getSuggestions } from '@/app/helpers/service';

export default async function Suggestionsd() {
  const suggestions = await getSuggestions();

  return (
    <Page title="Предложения РФМ">
      <SuggestionsWidget suggestions={suggestions} />
    </Page>
  );
}
