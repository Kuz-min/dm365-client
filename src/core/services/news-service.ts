import type { News } from "@core/news";
import type { NewsLabel } from '@core/news-label';
import { NewsView } from "@core/news-view";

export class NewsService {

  public async searchAsync(text?: string): Promise<NewsView[]> {

    const url = new URL('/api/news', window.origin);

    if (text && text.trim().length > 0)
      url.searchParams.append('q', text);

    const response = await fetch(url);

    if (!response.ok)
      throw new Error(`invalid code ${response.status}`);

    const data = await response.json() as { news?: News[], labels?: NewsLabel[] };

    const news = data.news?.map(o => new NewsView(
      o.id,
      new Date(o.date),
      o.labelid && data.labels ? data.labels.find(l => l.id == o.labelid)?.title ?? null : null,
      o.title,
      o.text,
      o.imageuri,
    ));

    if (!news)
      throw new Error(`invalid data`);

    return news;
  }

}
