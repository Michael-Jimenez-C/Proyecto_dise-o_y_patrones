import PaymentStrategy from "./PaymentStrategyInterface";

export default class CreditCardStrategy implements PaymentStrategy {
    createOrder(){}

    processPayment(amount: number): void {
      console.log(`Paid ${amount} using Credit Card.`);
    }

    captureOrder(){}
}