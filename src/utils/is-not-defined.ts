import { isDefined } from './is-defined';

export function isNotDefined<T>(arg: T): boolean {
    return !isDefined(arg);
}
