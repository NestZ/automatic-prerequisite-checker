export default abstract class Expression {
	print?(): void;

	setIsNon?(): void;

	eval?(std: any, courses: any): boolean;
}