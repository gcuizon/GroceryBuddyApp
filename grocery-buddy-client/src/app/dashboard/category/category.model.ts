/**
 * Class representing each category in the dashboard
 */
export class Category{
  description: string;
  url: string;

  constructor(description:string, url:string) { 
    this.description = description;
    this.url = url;
  }

}
