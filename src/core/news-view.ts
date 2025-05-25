export class NewsView {
  constructor(
    public readonly id: number,
    public readonly date: Date,
    public readonly label: string | null,
    public readonly title: string,
    public readonly text: string,
    public readonly imageUri: string,
  ) { }
}
