import { ValidationOptions, ValidateByOptions, IsIpVersion, IsISBNVersion, UUIDVersion, IsNumberOptions, ArrayUniqueIdentifier } from 'class-validator';
import { CountryCode } from 'libphonenumber-js';
import ValidatorJS$1 from 'validator';

/**
 * If object has both allowed and not allowed properties a validation error will be thrown.
 */
declare const Allow: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if value is defined (!== undefined, !== null).
 */
declare const IsDefined: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if given value is not empty (!== '', !== null, !== undefined).
 */
declare const IsOptional: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Performs validation based on the given custom validation class.
 * Validation class must be decorated with ValidatorConstraint decorator.
 */
declare const Validate: (constraintClass: Function, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Performs validation based on the given custom validation class.
 * Validation class must be decorated with ValidatorConstraint decorator.
 */
declare const ValidateBy: (options: ValidateByOptions, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Ignores the other validators on a property when the provided condition function returns false.
 */
declare const ValidateIf: (condition: (object: any, value: any) => boolean, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Objects / object arrays marked with this decorator will also be validated.
 */
declare const ValidateNested: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Objects / object arrays marked with this decorator will also be validated.
 */
declare const ValidatePromise: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if value matches ("===") the comparison.
 */
declare const Equals: (comparison: any, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if value does not match ("!==") the comparison.
 */
declare const NotEquals: (comparison: any, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if given value is empty (=== '', === null, === undefined).
 */
declare const IsEmpty: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if given value is not empty (!== '', !== null, !== undefined).
 */
declare const IsNotEmpty: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if given value is in a array of allowed values.
 */
declare const IsIn: (values: readonly any[], validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if given value not in a array of allowed values.
 */
declare const IsNotIn: (values: readonly any[], validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if value is a number that's divisible by another.
 */
declare const IsDivisibleBy: (num: number, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the value is a negative number smaller than zero.
 */
declare const IsPositive: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the value is a negative number smaller than zero.
 */
declare const IsNegative: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the first number is less than or equal to the second.
 */
declare const Max: (maxValue: number, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the first number is less than or equal to the second.
 */
declare const Min: (minValue: number, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the value is a date that's after the specified date.
 */
declare const MinDate: (date: Date, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the value is a date that's after the specified date.
 */
declare const MaxDate: (date: Date, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the first number is less than or equal to the second.
 */
declare const Contains: (seed: string, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the string does not contain the seed.
 * If given value is not a string, then it returns false.
 */
declare const NotContains: (seed: string, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the string contains only letters (a-zA-Z).
 * If given value is not a string, then it returns false.
 */
declare const IsAlpha: (locale?: string, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the string contains only letters and numbers.
 * If given value is not a string, then it returns false.
 */
declare const IsAlphanumeric: (locale?: string, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the string is a valid decimal.
 * If given value is not a string, then it returns false.
 */
declare const IsDecimal: (options?: ValidatorJS.IsDecimalOptions, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the string contains ASCII chars only.
 * If given value is not a string, then it returns false.
 */
declare const IsAscii: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Check if a string is base32 encoded.
 * If given value is not a string, then it returns false.
 */
declare const IsBase64: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the string's length (in bytes) falls in a range.
 * If given value is not a string, then it returns false.
 */
declare const IsByteLength: (min: number, max?: number, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Check if the string is a valid BTC address.
 * If given value is not a string, then it returns false.
 */
declare const IsCreditCard: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the string is a valid currency amount.
 * If given value is not a string, then it returns false.
 */
declare const IsCurrency: (options?: ValidatorJS.IsCurrencyOptions, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the string is an email.
 * If given value is not a string, then it returns false.
 */
declare const IsEmail: (options?: ValidatorJS.IsEmailOptions, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

declare const IsFQDN: (options?: ValidatorJS.IsFQDNOptions, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the string contains any full-width chars.
 * If given value is not a string, then it returns false.
 */
declare const IsFullWidth: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the string contains any full-width chars.
 * If given value is not a string, then it returns false.
 */
declare const IsHalfWidth: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the string contains variable-width chars.
 * If given value is not a string, then it returns false.
 */
declare const IsVariableWidth: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the string is a hexadecimal color.
 * If given value is not a string, then it returns false.
 */
declare const IsHexColor: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the string contains any full-width chars.
 * If given value is not a string, then it returns false.
 */
declare const IsHexadecimal: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the string is an IP (version 4 or 6).
 * If given value is not a string, then it returns false.
 */
declare const IsIP: (version?: IsIpVersion, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Check if the string is a valid port number.
 */
declare const IsPort: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the string is an IP (version 4 or 6).
 * If given value is not a string, then it returns false.
 */
declare const IsISBN: (version?: IsISBNVersion, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the string is an ISIN (stock/security identifier).
 * If given value is not a string, then it returns false.
 */
declare const IsISIN: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the string is valid JSON (note: uses JSON.parse).
 * If given value is not a string, then it returns false.
 */
declare const IsJSON: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the string is valid JWT token.
 * If given value is not a string, then it returns false.
 */
declare const IsJWT: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the string is lowercase.
 * If given value is not a string, then it returns false.
 */
declare const IsLowercase: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the string is a mobile phone number (locale is either an array of locales (e.g ['sk-SK', 'sr-RS'])
 * OR one of ['am-Am', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', ar-JO', 'ar-KW', 'ar-SA', 'ar-SY', 'ar-TN', 'be-BY',
 * 'bg-BG', 'bn-BD', 'cs-CZ', 'da-DK', 'de-DE', 'de-AT', 'el-GR', 'en-AU', 'en-CA', 'en-GB', 'en-GG', 'en-GH', 'en-HK',
 * 'en-MO', 'en-IE', 'en-IN', 'en-KE', 'en-MT', 'en-MU', 'en-NG', 'en-NZ', 'en-PK', 'en-RW', 'en-SG', 'en-SL', 'en-UG',
 * 'en-US', 'en-TZ', 'en-ZA', 'en-ZM', 'es-CL', 'es-CR', 'es-EC', 'es-ES', 'es-MX', 'es-PA', 'es-PY', 'es-UY', 'et-EE',
 * 'fa-IR', 'fi-FI', 'fj-FJ', 'fo-FO', 'fr-BE', 'fr-FR', 'fr-GF', 'fr-GP', 'fr-MQ', 'fr-RE', 'he-IL', 'hu-HU', 'id-ID',
 * 'it-IT', 'ja-JP', 'kk-KZ', 'kl-GL', 'ko-KR', 'lt-LT', 'ms-MY', 'nb-NO', 'ne-NP', 'nl-BE', 'nl-NL', 'nn-NO', 'pl-PL',
 * 'pt-BR', 'pt-PT', 'ro-RO', 'ru-RU', 'sl-SI', 'sk-SK', 'sr-RS', 'sv-SE', 'th-TH', 'tr-TR', 'uk-UA', 'vi-VN', 'zh-CN',
 * 'zh-HK', 'zh-MO', 'zh-TW']
 * If given value is not a string, then it returns false.
 */
declare const IsMobilePhone: (locale?: ValidatorJS.MobilePhoneLocale, options?: ValidatorJS.IsMobilePhoneOptions, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the string is a valid hex-encoded representation of a MongoDB ObjectId.
 * If given value is not a string, then it returns false.
 */
declare const IsMongoId: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the string contains one or more multibyte chars.
 * If given value is not a string, then it returns false.
 */
declare const IsMultibyte: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the string contains any surrogate pairs chars.
 * If given value is not a string, then it returns false.
 */
declare const IsSurrogatePair: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the string is an url.
 * If given value is not a string, then it returns false.
 */
declare const IsUrl: (options?: ValidatorJS.IsURLOptions, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the string is a UUID (version 3, 4 or 5).
 * If given value is not a string, then it returns false.
 */
declare const IsUUID: (version?: UUIDVersion, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the string is a Firebase Push Id
 * If given value is not a Firebase Push Id, it returns false
 */
declare const IsFirebasePushId: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the string is uppercase.
 * If given value is not a string, then it returns false.
 */
declare const IsUppercase: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the string's length falls in a range. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
declare const Length: (min: number, max?: number, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the string's MaxLength is not more than given number.
 *  Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
declare const MaxLength: (max: number, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the string's MinLength is not more than given number.
 *  Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
declare const MinLength: (min: number, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if string matches the pattern. Either matches('foo', /foo/i).
 * If given value is not a string, then it returns false.
 */
declare const Matches: (pattern: string, modifiers?: string, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the string is a valid phone number. To successfully validate any phone number the text must include
 * the intl. calling code, if the calling code wont be provided then the region must be set.
 *
 * @param region 2 characters uppercase country code (e.g. DE, US, CH) for country specific validation.
 * If text doesn't start with the international calling code (e.g. +41), then you must set this parameter.
 */
declare const IsPhoneNumber: (region?: CountryCode, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the string represents a time without a given timezone in the format HH:MM (military)
 * If the given value does not match the pattern HH:MM, then it returns false.
 */
declare const IsMilitaryTime: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Check if the string is a hash of type algorithm.
 * Algorithm is one of ['md4', 'md5', 'sha1', 'sha256', 'sha384', 'sha512', 'ripemd128', 'ripemd160', 'tiger128',
 * 'tiger160', 'tiger192', 'crc32', 'crc32b']
 */
declare const IsHash: (algorithm: string, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Alias for IsISO8601 validator
 */
declare const IsDateString: (options?: ValidatorJS.IsISO8601Options, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if a string is a boolean.
 * If given value is not a string, then it returns false.
 */
declare const IsBooleanString: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the string is numeric.
 * If given value is not a string, then it returns false.
 */
declare const IsNumberString: (options?: ValidatorJS.IsNumericOptions, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Check if a string is base32 encoded.
 * If given value is not a string, then it returns false.
 */
declare const IsBase32: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Check if a string is a BIC (Bank Identification Code) or SWIFT code.
 * If given value is not a string, then it returns false.
 */
declare const IsBIC: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Check if the string is a valid BTC address.
 * If given value is not a string, then it returns false.
 */
declare const IsBtcAddress: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Check if the string is a data uri format.
 * If given value is not a string, then it returns false.
 */
declare const IsDataURI: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Check if the string is an EAN (European Article Number).
 * If given value is not a string, then it returns false.
 */
declare const IsEAN: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Check if the string is an Ethereum address using basic regex. Does not validate address checksums.
 * If given value is not a string, then it returns false.
 */
declare const IsEthereumAddress: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Check if the string is an HSL (hue, saturation, lightness, optional alpha)
 *  color based on CSS Colors Level 4 specification.
 * Comma-separated format supported.
 *  Space-separated format supported with the exception of a few edge cases (ex: hsl(200grad+.1%62%/1)).
 * If given value is not a string, then it returns false.
 */
declare const IsHSL: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Check if a string is a IBAN (International Bank Account Number).
 * If given value is not a string, then it returns false.
 */
declare const IsIBAN: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Check if the string is a locale.
 * If given value is not a string, then it returns false.
 */
declare const IsLocale: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Check if the string is a magnet uri format.
 * If given value is not a string, then it returns false.
 */
declare const IsMagnetURI: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Check if the string matches to a valid MIME type format
 * If given value is not a string, then it returns false.
 */
declare const IsMimeType: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Check if the string is a valid octal number.
 * If given value is not a string, then it returns false.
 */
declare const IsOctal: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Check if the string is a valid passport number relative to a specific country code.
 * If given value is not a string, then it returns false.
 */
declare const IsPassportNumber: (countryCode: string, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Check if the string is a postal code,
 * (locale is one of [ 'AD', 'AT', 'AU', 'BE', 'BG', 'BR', 'CA', 'CH', 'CZ', 'DE', 'DK', 'DZ', 'EE', 'ES', 'FI', 'FR',
 *  'GB', 'GR', 'HR', 'HU', 'ID', 'IE' 'IL', 'IN', 'IR', 'IS', 'IT', 'JP', 'KE', 'LI', 'LT', 'LU', 'LV', 'MT', 'MX',
 *  'NL', 'NO', 'NZ', 'PL', 'PR', 'PT', 'RO', 'RU', 'SA', 'SE', 'SI', 'TN', 'TW', 'UA', 'US', 'ZA', 'ZM' ] OR 'any'.
 *  If 'any' is used, function will check if any of the locals match. Locale list is validator.isPostalCodeLocales.).
 * If given value is not a string, then it returns false.
 */
declare const IsPostalCode: (locale?: 'any' | ValidatorJS$1.PostalCodeLocale, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Check if the string is a valid RFC 3339 date.
 * If given value is not a string, then it returns false.
 */
declare const IsRFC3339: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Check if the string is a rgb or rgba color.
 * `includePercentValues` defaults to true. If you don't want to allow to set rgb or rgba values with percents,
 *  like rgb(5%,5%,5%), or rgba(90%,90%,90%,.3), then set it to false.
 * If given value is not a string, then it returns false.
 */
declare const IsRgbColor: (includePercentValues?: boolean, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Check if the string is a Semantic Versioning Specification (SemVer).
 * If given value is not a string, then it returns false.
 */
declare const IsSemVer: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if a given value is a boolean.
 */
declare const IsBoolean: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if a given value is a date.
 */
declare const IsDate: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if a value is a number.
 */
declare const IsNumber: (options?: IsNumberOptions, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if a given value is an enum
 */
declare const IsEnum: (entity: object, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if value is an integer.
 */
declare const IsInt: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if a given value is a real string.
 */
declare const IsString: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if a given value is an array
 */
declare const IsArray: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the value is valid Object.
 * Returns false if the value is not an object.
 */
declare const IsObject: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if array contains all values from the given array of values.
 * If null or undefined is given then this function returns false.
 */
declare const ArrayContains: (values: any[], validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if array does not contain any of the given values.
 * If null or undefined is given then this function returns false.
 */
declare const ArrayNotContains: (values: any[], validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if given array is not empty.
 * If null or undefined is given then this function returns false.
 */
declare const ArrayNotEmpty: (validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the array's length is greater than or equal to the specified number.
 * If null or undefined is given then this function returns false.
 */
declare const ArrayMinSize: (min: number, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the array's length is less or equal to the specified number.
 * If null or undefined is given then this function returns false.
 */
declare const ArrayMaxSize: (max: number, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if all array's values are unique. Comparison for objects is reference-based.
 * If null or undefined is given then this function returns false.
 */
declare const ArrayUnique: (array: ArrayUniqueIdentifier<[
]> | ValidationOptions, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the value is valid Object & not empty.
 * Returns false if the value is not an object or an empty valid object.
 */
declare const IsNotEmptyObject: (options?: {
    nullable?: boolean;
}, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

/**
 * Checks if the value is an instance of the specified object.
 */
declare const IsInstance: (targetType: new (...args: any[]) => any, validationOptions?: ValidationOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

declare enum ClassValidatorEnum {
    ARRAY_CONTAIN = "ARRAY_CONTAIN",
    ARRAY_MAX_SIZE = "ARRAY_MAX_SIZE",
    ARRAY_MIN_SIZE = "ARRAY_MIN_SIZE",
    ARRAY_NOT_CONTAINS = "ARRAY_NOT_CONTAINS",
    ARRAY_NOT_EMPTY = "ARRAY_NOT_EMPTY",
    ARRAY_UNIQUE = "ARRAY_UNIQUE",
    SHOULD_ALLOW = "SHOULD_ALLOW",
    EQUALS = "EQUALS",
    IS_DEFINED = "IS_DEFINED",
    IS_EMPTY = "IS_EMPTY",
    IS_IN = "IS_IN",
    IS_NOT_EMPTY = "IS_NOT_EMPTY",
    IS_NOT_IN = "IS_NOT_IN",
    IS_OPTIONAL = "IS_OPTIONAL",
    NOT_EQUALS = "NOT_EQUALS",
    VALIDATE = "VALIDATE",
    VALIDATE_BY = "VALIDATE_BY",
    VALIDATE_IF = "VALIDATE_IF",
    VALIDATE_NESTED = "VALIDATE_NESTED",
    VALIDATE_PROMISE = "VALIDATE_PROMISE",
    MAX_DATE = "MAX_DATE",
    MIN_DATE = "MIN_DATE",
    IS_DIVISIBLE_BY = "IS_DIVISIBLE_BY",
    IS_NEGATIVE = "IS_NEGATIVE",
    IS_POSITIVE = "IS_POSITIVE",
    MAX = "MAX",
    MIN = "MIN",
    IS_INSTANCE = "IS_INSTANCE",
    IS_NOT_EMPTY_OBJECT = "IS_NOT_EMPTY_OBJECT",
    CONTAINS = "CONTAINS",
    IS_ALPHA = "IS_ALPHA",
    IS_ALPHA_NUMERIC = "IS_ALPHA_NUMERIC",
    IS_ASCII = "IS_ASCII",
    IS_BASE_32 = "IS_BASE_32",
    IS_BASE_64 = "IS_BASE_64",
    IS_BIC = "IS_BIC",
    IS_BOOLEAN_STRING = "IS_BOOLEAN_STRING",
    IS_BTC_ADDRESS = "IS_BTC_ADDRESS",
    IS_BYTE_LENGTH = "IS_BYTE_LENGTH",
    IS_CREDIT_CARD = "IS_CREDIT_CARD",
    IS_DATA_URI = "IS_DATA_URI",
    IS_CURRENCY = "IS_CURRENCY",
    IS_DATE_STRING = "IS_DATE_STRING",
    IS_DECIMAL = "IS_DECIMAL",
    IS_EAN = "IS_EAN",
    IS_EMAIL = "IS_EMAIL",
    IS_FIREBASE_PUSH_ID = "IS_FIREBASE_PUSH_ID",
    IS_FQDN = "IS_FQDN",
    IS_FULL_WIDTH = "IS_FULL_WIDTH",
    IS_HALF_WIDTH = "IS_HALF_WIDTH",
    IS_HASH = "IS_HASH",
    IS_HEXA_DECIMAL = "IS_HEXA_DECIMAL",
    IS_HEX_COLOR = "IS_HEX_COLOR",
    IS_HSL = "IS_HSL",
    IS_IBAN = "IS_IBAN",
    IS_IP = "IS_IP",
    IS_ISBN = "IS_ISBN",
    IS_ISIN = "IS_ISIN",
    IS_JSON = "IS_JSON",
    IS_JWT = "IS_JWT",
    IS_LOCALE = "IS_LOCALE",
    IS_LOWER_CASE = "IS_LOWER_CASE",
    IS_MAGNET_URI = "IS_MAGNET_URI",
    IS_MILITARY_TIME = "IS_MILITARY_TIME",
    IS_MIME_TYPE = "IS_MIME_TYPE",
    IS_MONGO_ID = "IS_MONGO_ID",
    IS_MOBILE_PHONE = "IS_MOBILE_PHONE",
    IS_MULTI_BYTE = "IS_MULTI_BYTE",
    IS_NUMBER_STRING = "IS_NUMBER_STRING",
    IS_OCTAL = "IS_OCTAL",
    IS_PASSPORT_NUMBER = "IS_PASSPORT_NUMBER",
    IS_PHONE_NUMBER = "IS_PHONE_NUMBER",
    IS_PORT = "IS_PORT",
    IS_POSTAL_CODE = "IS_POSTAL_CODE",
    IS_RFC_3339 = "IS_RFC_3339",
    IS_RGB_COLOR = "IS_RGB_COLOR",
    IS_SEM_VER = "IS_SEM_VER",
    IS_SURROGATE_PAIR = "IS_SURROGATE_PAIR",
    IS_UPPER_CASE = "IS_UPPER_CASE",
    IS_URL = "IS_URL",
    IS_UUID = "IS_UUID",
    IS_VARIABLE_WIDTH = "IS_VARIABLE_WIDTH",
    LENGTH = "LENGTH",
    MATCHES = "MATCHES",
    MAX_LENGTH = "MAX_LENGTH",
    MIN_LENGTH = "MIN_LENGTH",
    NOT_CONTAINS = "NOT_CONTAINS",
    IS_ETHEREUM_ADDRESS = "IS_ETHEREUM_ADDRESS",
    IS_ARRAY = "IS_ARRAY",
    IS_BOOLEAN = "IS_BOOLEAN",
    IS_DATE = "IS_DATE",
    IS_ENUM = "IS_ENUM",
    IS_INT = "IS_INT",
    IS_NUMBER = "IS_NUMBER",
    IS_OBJECT = "IS_OBJECT",
    IS_STRING = "IS_STRING",
    INVALID_UUID = "INVALID_UUID"
}

export { Allow, ArrayContains, ArrayMaxSize, ArrayMinSize, ArrayNotContains, ArrayNotEmpty, ArrayUnique, ClassValidatorEnum, Contains, Equals, IsAlpha, IsAlphanumeric, IsArray, IsAscii, IsBIC, IsBase32, IsBase64, IsBoolean, IsBooleanString, IsBtcAddress, IsByteLength, IsCreditCard, IsCurrency, IsDataURI, IsDate, IsDateString, IsDecimal, IsDefined, IsDivisibleBy, IsEAN, IsEmail, IsEmpty, IsEnum, IsEthereumAddress, IsFQDN, IsFirebasePushId, IsFullWidth, IsHSL, IsHalfWidth, IsHash, IsHexColor, IsHexadecimal, IsIBAN, IsIP, IsISBN, IsISIN, IsIn, IsInstance, IsInt, IsJSON, IsJWT, IsLocale, IsLowercase, IsMagnetURI, IsMilitaryTime, IsMimeType, IsMobilePhone, IsMongoId, IsMultibyte, IsNegative, IsNotEmpty, IsNotEmptyObject, IsNotIn, IsNumber, IsNumberString, IsObject, IsOctal, IsOptional, IsPassportNumber, IsPhoneNumber, IsPort, IsPositive, IsPostalCode, IsRFC3339, IsRgbColor, IsSemVer, IsString, IsSurrogatePair, IsUUID, IsUppercase, IsUrl, IsVariableWidth, Length, Matches, Max, MaxDate, MaxLength, Min, MinDate, MinLength, NotContains, NotEquals, Validate, ValidateBy, ValidateIf, ValidateNested, ValidatePromise };
