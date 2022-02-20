export default abstract class Expression {
	print?(): string;

	setIsNon?(): void;

	eval?(std: any, courses: any): boolean;
}