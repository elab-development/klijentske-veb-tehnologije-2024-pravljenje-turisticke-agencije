class TourPackage {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: number;
  destinations: string[];
  imageUrl: string;

  constructor(id: number, name: string, description: string, price: number, duration: number, destinations: string[], imageUrl: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.duration = duration;
    this.destinations = destinations;
    this.imageUrl = imageUrl;
  }

  getSummary(): string {
    return `${this.name} - ${this.duration} days for $${this.price}`;
  }

  getDetails(): string {
    return `Package: ${this.name}\nDescription: ${this.description}\nPrice: $${this.price}\nDuration: ${this.duration} days\nDestinations: ${this.destinations.join(', ')}`;
  }
}

export default TourPackage;
