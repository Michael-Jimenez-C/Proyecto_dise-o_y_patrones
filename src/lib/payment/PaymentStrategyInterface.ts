export default interface PaymentStrategy {
    processPayment(amount: number): void;
}