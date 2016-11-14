export class Weather {
  public maxTemperature: Number;
	public minTemperature: Number;
	public city: string;
	public description: string;
  public day: string;
  public month: string;
  public year: string;
  public hh: string;
  public mm: string;
  public ss: string;
  public icon: string;
  public display: boolean;

	constructor(city: string, minTemperature: Number, maxTemperature: Number,
              description: string, day: string, month: string, year: string,
              hh: string, mm: string, ss: string, icon:string, display:boolean) {
		this.city = city;
    this.minTemperature = minTemperature;
		this.maxTemperature = maxTemperature;
		this.description = description;
    this.day = day;
    this.month = month;
    this.year = year;
    this.hh = hh;
    this.mm = mm;
    this.ss = ss;
    this.icon = icon;
    this.display = display;
	}

}
