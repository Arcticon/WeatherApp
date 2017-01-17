export class Weather {

  private city: string;
  private date: string;
  private temperature: number;
  private humidity: number;
  private icon: string;
  private description: string;
  private windDeg: number;

  constructor(city:string, date:string, temperature:number, humidity:number, icon:string, description:string, windDeg:number) {
    this.city = city || "";
    this.date = date || "";
    this.temperature = temperature || 0;
    this.humidity = humidity || 0;
    this.icon = icon || "";
    this.description = description || "";
    this.windDeg = windDeg || 0;
  }

	setCity(city: string): void{
    this.city = city;
  }

	getCity(): string{
	  return this.city;
  }

}
