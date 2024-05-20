import PaymentStrategy from "./PaymentStrategyInterface";

export default class PayPalStrategy implements PaymentStrategy {
    processPayment(amount: number): void {
      console.log(`Paid ${amount} using PayPal.`);
    }
  }