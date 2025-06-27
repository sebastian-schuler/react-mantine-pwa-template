export function isDefined<T>(arg: T): arg is Exclude<T, null | undefined> {
    return arg !== null && arg !== undefined && Number.isNaN(arg) === false;
}
