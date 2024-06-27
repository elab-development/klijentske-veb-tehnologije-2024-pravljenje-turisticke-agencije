import TourPackage from './TourPackage';

class UserProfile {
  id: number;
  name: string;
  email: string;
  phone: string;
  bookingHistory: TourPackage[];

  constructor(id: number, name: string, email: string, phone: string, bookingHistory: TourPackage[] = []) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.bookingHistory = bookingHistory;
  }

  addBooking(booking: TourPackage): void {
    this.bookingHistory.push(booking);
  }

  getProfileSummary(): string {
    return `Name: ${this.name}\nEmail: ${this.email}\nPhone: ${this.phone}`;
  }

  getBookingHistory(): string {
    return this.bookingHistory.map(
      (booking, index) => `Booking ${index + 1}: ${booking.getSummary()}`
    ).join('\n');
  }
}

export default UserProfile;
