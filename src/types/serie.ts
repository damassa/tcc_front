export class SerieResponse {
  constructor(
    public uid: number,
    public name: string,
    public year: number,
    public image: string,
    public bigImage: string,
    public opening_video: string,
    public plot: string,
  ) {
    this.uid = uid;
    this.name = name;
    this.year = year;
    this.image = image;
    this.bigImage = bigImage;
    this.opening_video = opening_video;
    this.plot = plot;
  }
}
