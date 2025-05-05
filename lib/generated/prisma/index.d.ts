
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Save
 * 
 */
export type Save = $Result.DefaultSelection<Prisma.$SavePayload>
/**
 * Model Pokemon
 * 
 */
export type Pokemon = $Result.DefaultSelection<Prisma.$PokemonPayload>
/**
 * Model Object
 * 
 */
export type Object = $Result.DefaultSelection<Prisma.$ObjectPayload>
/**
 * Model SavePokemonLink
 * 
 */
export type SavePokemonLink = $Result.DefaultSelection<Prisma.$SavePokemonLinkPayload>
/**
 * Model SaveObjectLink
 * 
 */
export type SaveObjectLink = $Result.DefaultSelection<Prisma.$SaveObjectLinkPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Saves
 * const saves = await prisma.save.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Saves
   * const saves = await prisma.save.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.save`: Exposes CRUD operations for the **Save** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Saves
    * const saves = await prisma.save.findMany()
    * ```
    */
  get save(): Prisma.SaveDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pokemon`: Exposes CRUD operations for the **Pokemon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pokemon
    * const pokemon = await prisma.pokemon.findMany()
    * ```
    */
  get pokemon(): Prisma.PokemonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.object`: Exposes CRUD operations for the **Object** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Objects
    * const objects = await prisma.object.findMany()
    * ```
    */
  get object(): Prisma.ObjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savePokemonLink`: Exposes CRUD operations for the **SavePokemonLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavePokemonLinks
    * const savePokemonLinks = await prisma.savePokemonLink.findMany()
    * ```
    */
  get savePokemonLink(): Prisma.SavePokemonLinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.saveObjectLink`: Exposes CRUD operations for the **SaveObjectLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SaveObjectLinks
    * const saveObjectLinks = await prisma.saveObjectLink.findMany()
    * ```
    */
  get saveObjectLink(): Prisma.SaveObjectLinkDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Save: 'Save',
    Pokemon: 'Pokemon',
    Object: 'Object',
    SavePokemonLink: 'SavePokemonLink',
    SaveObjectLink: 'SaveObjectLink'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "save" | "pokemon" | "object" | "savePokemonLink" | "saveObjectLink"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Save: {
        payload: Prisma.$SavePayload<ExtArgs>
        fields: Prisma.SaveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePayload>
          }
          findFirst: {
            args: Prisma.SaveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePayload>
          }
          findMany: {
            args: Prisma.SaveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePayload>[]
          }
          create: {
            args: Prisma.SaveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePayload>
          }
          createMany: {
            args: Prisma.SaveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaveCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePayload>[]
          }
          delete: {
            args: Prisma.SaveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePayload>
          }
          update: {
            args: Prisma.SaveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePayload>
          }
          deleteMany: {
            args: Prisma.SaveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SaveUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePayload>[]
          }
          upsert: {
            args: Prisma.SaveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePayload>
          }
          aggregate: {
            args: Prisma.SaveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSave>
          }
          groupBy: {
            args: Prisma.SaveGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaveGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaveCountArgs<ExtArgs>
            result: $Utils.Optional<SaveCountAggregateOutputType> | number
          }
        }
      }
      Pokemon: {
        payload: Prisma.$PokemonPayload<ExtArgs>
        fields: Prisma.PokemonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PokemonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PokemonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          findFirst: {
            args: Prisma.PokemonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PokemonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          findMany: {
            args: Prisma.PokemonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>[]
          }
          create: {
            args: Prisma.PokemonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          createMany: {
            args: Prisma.PokemonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PokemonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>[]
          }
          delete: {
            args: Prisma.PokemonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          update: {
            args: Prisma.PokemonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          deleteMany: {
            args: Prisma.PokemonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PokemonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PokemonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>[]
          }
          upsert: {
            args: Prisma.PokemonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          aggregate: {
            args: Prisma.PokemonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePokemon>
          }
          groupBy: {
            args: Prisma.PokemonGroupByArgs<ExtArgs>
            result: $Utils.Optional<PokemonGroupByOutputType>[]
          }
          count: {
            args: Prisma.PokemonCountArgs<ExtArgs>
            result: $Utils.Optional<PokemonCountAggregateOutputType> | number
          }
        }
      }
      Object: {
        payload: Prisma.$ObjectPayload<ExtArgs>
        fields: Prisma.ObjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ObjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ObjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectPayload>
          }
          findFirst: {
            args: Prisma.ObjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ObjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectPayload>
          }
          findMany: {
            args: Prisma.ObjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectPayload>[]
          }
          create: {
            args: Prisma.ObjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectPayload>
          }
          createMany: {
            args: Prisma.ObjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ObjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectPayload>[]
          }
          delete: {
            args: Prisma.ObjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectPayload>
          }
          update: {
            args: Prisma.ObjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectPayload>
          }
          deleteMany: {
            args: Prisma.ObjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ObjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ObjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectPayload>[]
          }
          upsert: {
            args: Prisma.ObjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjectPayload>
          }
          aggregate: {
            args: Prisma.ObjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateObject>
          }
          groupBy: {
            args: Prisma.ObjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ObjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ObjectCountArgs<ExtArgs>
            result: $Utils.Optional<ObjectCountAggregateOutputType> | number
          }
        }
      }
      SavePokemonLink: {
        payload: Prisma.$SavePokemonLinkPayload<ExtArgs>
        fields: Prisma.SavePokemonLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavePokemonLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePokemonLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavePokemonLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePokemonLinkPayload>
          }
          findFirst: {
            args: Prisma.SavePokemonLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePokemonLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavePokemonLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePokemonLinkPayload>
          }
          findMany: {
            args: Prisma.SavePokemonLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePokemonLinkPayload>[]
          }
          create: {
            args: Prisma.SavePokemonLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePokemonLinkPayload>
          }
          createMany: {
            args: Prisma.SavePokemonLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavePokemonLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePokemonLinkPayload>[]
          }
          delete: {
            args: Prisma.SavePokemonLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePokemonLinkPayload>
          }
          update: {
            args: Prisma.SavePokemonLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePokemonLinkPayload>
          }
          deleteMany: {
            args: Prisma.SavePokemonLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavePokemonLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SavePokemonLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePokemonLinkPayload>[]
          }
          upsert: {
            args: Prisma.SavePokemonLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePokemonLinkPayload>
          }
          aggregate: {
            args: Prisma.SavePokemonLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavePokemonLink>
          }
          groupBy: {
            args: Prisma.SavePokemonLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavePokemonLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavePokemonLinkCountArgs<ExtArgs>
            result: $Utils.Optional<SavePokemonLinkCountAggregateOutputType> | number
          }
        }
      }
      SaveObjectLink: {
        payload: Prisma.$SaveObjectLinkPayload<ExtArgs>
        fields: Prisma.SaveObjectLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaveObjectLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaveObjectLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaveObjectLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaveObjectLinkPayload>
          }
          findFirst: {
            args: Prisma.SaveObjectLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaveObjectLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaveObjectLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaveObjectLinkPayload>
          }
          findMany: {
            args: Prisma.SaveObjectLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaveObjectLinkPayload>[]
          }
          create: {
            args: Prisma.SaveObjectLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaveObjectLinkPayload>
          }
          createMany: {
            args: Prisma.SaveObjectLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaveObjectLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaveObjectLinkPayload>[]
          }
          delete: {
            args: Prisma.SaveObjectLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaveObjectLinkPayload>
          }
          update: {
            args: Prisma.SaveObjectLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaveObjectLinkPayload>
          }
          deleteMany: {
            args: Prisma.SaveObjectLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaveObjectLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SaveObjectLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaveObjectLinkPayload>[]
          }
          upsert: {
            args: Prisma.SaveObjectLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaveObjectLinkPayload>
          }
          aggregate: {
            args: Prisma.SaveObjectLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaveObjectLink>
          }
          groupBy: {
            args: Prisma.SaveObjectLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaveObjectLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaveObjectLinkCountArgs<ExtArgs>
            result: $Utils.Optional<SaveObjectLinkCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    save?: SaveOmit
    pokemon?: PokemonOmit
    object?: ObjectOmit
    savePokemonLink?: SavePokemonLinkOmit
    saveObjectLink?: SaveObjectLinkOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SaveCountOutputType
   */

  export type SaveCountOutputType = {
    pokemons: number
    objects: number
  }

  export type SaveCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemons?: boolean | SaveCountOutputTypeCountPokemonsArgs
    objects?: boolean | SaveCountOutputTypeCountObjectsArgs
  }

  // Custom InputTypes
  /**
   * SaveCountOutputType without action
   */
  export type SaveCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaveCountOutputType
     */
    select?: SaveCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SaveCountOutputType without action
   */
  export type SaveCountOutputTypeCountPokemonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavePokemonLinkWhereInput
  }

  /**
   * SaveCountOutputType without action
   */
  export type SaveCountOutputTypeCountObjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaveObjectLinkWhereInput
  }


  /**
   * Count Type PokemonCountOutputType
   */

  export type PokemonCountOutputType = {
    saves: number
  }

  export type PokemonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saves?: boolean | PokemonCountOutputTypeCountSavesArgs
  }

  // Custom InputTypes
  /**
   * PokemonCountOutputType without action
   */
  export type PokemonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonCountOutputType
     */
    select?: PokemonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PokemonCountOutputType without action
   */
  export type PokemonCountOutputTypeCountSavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavePokemonLinkWhereInput
  }


  /**
   * Count Type ObjectCountOutputType
   */

  export type ObjectCountOutputType = {
    saves: number
  }

  export type ObjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saves?: boolean | ObjectCountOutputTypeCountSavesArgs
  }

  // Custom InputTypes
  /**
   * ObjectCountOutputType without action
   */
  export type ObjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectCountOutputType
     */
    select?: ObjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ObjectCountOutputType without action
   */
  export type ObjectCountOutputTypeCountSavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaveObjectLinkWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Save
   */

  export type AggregateSave = {
    _count: SaveCountAggregateOutputType | null
    _avg: SaveAvgAggregateOutputType | null
    _sum: SaveSumAggregateOutputType | null
    _min: SaveMinAggregateOutputType | null
    _max: SaveMaxAggregateOutputType | null
  }

  export type SaveAvgAggregateOutputType = {
    id: number | null
    playerLevel: number | null
    money: number | null
  }

  export type SaveSumAggregateOutputType = {
    id: number | null
    playerLevel: number | null
    money: number | null
  }

  export type SaveMinAggregateOutputType = {
    id: number | null
    userMail: string | null
    userName: string | null
    playerLevel: number | null
    money: number | null
  }

  export type SaveMaxAggregateOutputType = {
    id: number | null
    userMail: string | null
    userName: string | null
    playerLevel: number | null
    money: number | null
  }

  export type SaveCountAggregateOutputType = {
    id: number
    userMail: number
    userName: number
    playerLevel: number
    money: number
    _all: number
  }


  export type SaveAvgAggregateInputType = {
    id?: true
    playerLevel?: true
    money?: true
  }

  export type SaveSumAggregateInputType = {
    id?: true
    playerLevel?: true
    money?: true
  }

  export type SaveMinAggregateInputType = {
    id?: true
    userMail?: true
    userName?: true
    playerLevel?: true
    money?: true
  }

  export type SaveMaxAggregateInputType = {
    id?: true
    userMail?: true
    userName?: true
    playerLevel?: true
    money?: true
  }

  export type SaveCountAggregateInputType = {
    id?: true
    userMail?: true
    userName?: true
    playerLevel?: true
    money?: true
    _all?: true
  }

  export type SaveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Save to aggregate.
     */
    where?: SaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Saves to fetch.
     */
    orderBy?: SaveOrderByWithRelationInput | SaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Saves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Saves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Saves
    **/
    _count?: true | SaveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaveMaxAggregateInputType
  }

  export type GetSaveAggregateType<T extends SaveAggregateArgs> = {
        [P in keyof T & keyof AggregateSave]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSave[P]>
      : GetScalarType<T[P], AggregateSave[P]>
  }




  export type SaveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaveWhereInput
    orderBy?: SaveOrderByWithAggregationInput | SaveOrderByWithAggregationInput[]
    by: SaveScalarFieldEnum[] | SaveScalarFieldEnum
    having?: SaveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaveCountAggregateInputType | true
    _avg?: SaveAvgAggregateInputType
    _sum?: SaveSumAggregateInputType
    _min?: SaveMinAggregateInputType
    _max?: SaveMaxAggregateInputType
  }

  export type SaveGroupByOutputType = {
    id: number
    userMail: string
    userName: string
    playerLevel: number
    money: number
    _count: SaveCountAggregateOutputType | null
    _avg: SaveAvgAggregateOutputType | null
    _sum: SaveSumAggregateOutputType | null
    _min: SaveMinAggregateOutputType | null
    _max: SaveMaxAggregateOutputType | null
  }

  type GetSaveGroupByPayload<T extends SaveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaveGroupByOutputType[P]>
            : GetScalarType<T[P], SaveGroupByOutputType[P]>
        }
      >
    >


  export type SaveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userMail?: boolean
    userName?: boolean
    playerLevel?: boolean
    money?: boolean
    pokemons?: boolean | Save$pokemonsArgs<ExtArgs>
    objects?: boolean | Save$objectsArgs<ExtArgs>
    _count?: boolean | SaveCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["save"]>

  export type SaveSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userMail?: boolean
    userName?: boolean
    playerLevel?: boolean
    money?: boolean
  }, ExtArgs["result"]["save"]>

  export type SaveSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userMail?: boolean
    userName?: boolean
    playerLevel?: boolean
    money?: boolean
  }, ExtArgs["result"]["save"]>

  export type SaveSelectScalar = {
    id?: boolean
    userMail?: boolean
    userName?: boolean
    playerLevel?: boolean
    money?: boolean
  }

  export type SaveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userMail" | "userName" | "playerLevel" | "money", ExtArgs["result"]["save"]>
  export type SaveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemons?: boolean | Save$pokemonsArgs<ExtArgs>
    objects?: boolean | Save$objectsArgs<ExtArgs>
    _count?: boolean | SaveCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SaveIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SaveIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SavePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Save"
    objects: {
      pokemons: Prisma.$SavePokemonLinkPayload<ExtArgs>[]
      objects: Prisma.$SaveObjectLinkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userMail: string
      userName: string
      playerLevel: number
      money: number
    }, ExtArgs["result"]["save"]>
    composites: {}
  }

  type SaveGetPayload<S extends boolean | null | undefined | SaveDefaultArgs> = $Result.GetResult<Prisma.$SavePayload, S>

  type SaveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaveCountAggregateInputType | true
    }

  export interface SaveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Save'], meta: { name: 'Save' } }
    /**
     * Find zero or one Save that matches the filter.
     * @param {SaveFindUniqueArgs} args - Arguments to find a Save
     * @example
     * // Get one Save
     * const save = await prisma.save.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaveFindUniqueArgs>(args: SelectSubset<T, SaveFindUniqueArgs<ExtArgs>>): Prisma__SaveClient<$Result.GetResult<Prisma.$SavePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Save that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaveFindUniqueOrThrowArgs} args - Arguments to find a Save
     * @example
     * // Get one Save
     * const save = await prisma.save.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaveFindUniqueOrThrowArgs>(args: SelectSubset<T, SaveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaveClient<$Result.GetResult<Prisma.$SavePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Save that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaveFindFirstArgs} args - Arguments to find a Save
     * @example
     * // Get one Save
     * const save = await prisma.save.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaveFindFirstArgs>(args?: SelectSubset<T, SaveFindFirstArgs<ExtArgs>>): Prisma__SaveClient<$Result.GetResult<Prisma.$SavePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Save that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaveFindFirstOrThrowArgs} args - Arguments to find a Save
     * @example
     * // Get one Save
     * const save = await prisma.save.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaveFindFirstOrThrowArgs>(args?: SelectSubset<T, SaveFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaveClient<$Result.GetResult<Prisma.$SavePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Saves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Saves
     * const saves = await prisma.save.findMany()
     * 
     * // Get first 10 Saves
     * const saves = await prisma.save.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saveWithIdOnly = await prisma.save.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaveFindManyArgs>(args?: SelectSubset<T, SaveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Save.
     * @param {SaveCreateArgs} args - Arguments to create a Save.
     * @example
     * // Create one Save
     * const Save = await prisma.save.create({
     *   data: {
     *     // ... data to create a Save
     *   }
     * })
     * 
     */
    create<T extends SaveCreateArgs>(args: SelectSubset<T, SaveCreateArgs<ExtArgs>>): Prisma__SaveClient<$Result.GetResult<Prisma.$SavePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Saves.
     * @param {SaveCreateManyArgs} args - Arguments to create many Saves.
     * @example
     * // Create many Saves
     * const save = await prisma.save.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaveCreateManyArgs>(args?: SelectSubset<T, SaveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Saves and returns the data saved in the database.
     * @param {SaveCreateManyAndReturnArgs} args - Arguments to create many Saves.
     * @example
     * // Create many Saves
     * const save = await prisma.save.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Saves and only return the `id`
     * const saveWithIdOnly = await prisma.save.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaveCreateManyAndReturnArgs>(args?: SelectSubset<T, SaveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Save.
     * @param {SaveDeleteArgs} args - Arguments to delete one Save.
     * @example
     * // Delete one Save
     * const Save = await prisma.save.delete({
     *   where: {
     *     // ... filter to delete one Save
     *   }
     * })
     * 
     */
    delete<T extends SaveDeleteArgs>(args: SelectSubset<T, SaveDeleteArgs<ExtArgs>>): Prisma__SaveClient<$Result.GetResult<Prisma.$SavePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Save.
     * @param {SaveUpdateArgs} args - Arguments to update one Save.
     * @example
     * // Update one Save
     * const save = await prisma.save.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaveUpdateArgs>(args: SelectSubset<T, SaveUpdateArgs<ExtArgs>>): Prisma__SaveClient<$Result.GetResult<Prisma.$SavePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Saves.
     * @param {SaveDeleteManyArgs} args - Arguments to filter Saves to delete.
     * @example
     * // Delete a few Saves
     * const { count } = await prisma.save.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaveDeleteManyArgs>(args?: SelectSubset<T, SaveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Saves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Saves
     * const save = await prisma.save.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaveUpdateManyArgs>(args: SelectSubset<T, SaveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Saves and returns the data updated in the database.
     * @param {SaveUpdateManyAndReturnArgs} args - Arguments to update many Saves.
     * @example
     * // Update many Saves
     * const save = await prisma.save.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Saves and only return the `id`
     * const saveWithIdOnly = await prisma.save.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SaveUpdateManyAndReturnArgs>(args: SelectSubset<T, SaveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Save.
     * @param {SaveUpsertArgs} args - Arguments to update or create a Save.
     * @example
     * // Update or create a Save
     * const save = await prisma.save.upsert({
     *   create: {
     *     // ... data to create a Save
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Save we want to update
     *   }
     * })
     */
    upsert<T extends SaveUpsertArgs>(args: SelectSubset<T, SaveUpsertArgs<ExtArgs>>): Prisma__SaveClient<$Result.GetResult<Prisma.$SavePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Saves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaveCountArgs} args - Arguments to filter Saves to count.
     * @example
     * // Count the number of Saves
     * const count = await prisma.save.count({
     *   where: {
     *     // ... the filter for the Saves we want to count
     *   }
     * })
    **/
    count<T extends SaveCountArgs>(
      args?: Subset<T, SaveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Save.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SaveAggregateArgs>(args: Subset<T, SaveAggregateArgs>): Prisma.PrismaPromise<GetSaveAggregateType<T>>

    /**
     * Group by Save.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaveGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SaveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaveGroupByArgs['orderBy'] }
        : { orderBy?: SaveGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SaveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Save model
   */
  readonly fields: SaveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Save.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pokemons<T extends Save$pokemonsArgs<ExtArgs> = {}>(args?: Subset<T, Save$pokemonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavePokemonLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    objects<T extends Save$objectsArgs<ExtArgs> = {}>(args?: Subset<T, Save$objectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaveObjectLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Save model
   */
  interface SaveFieldRefs {
    readonly id: FieldRef<"Save", 'Int'>
    readonly userMail: FieldRef<"Save", 'String'>
    readonly userName: FieldRef<"Save", 'String'>
    readonly playerLevel: FieldRef<"Save", 'Int'>
    readonly money: FieldRef<"Save", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Save findUnique
   */
  export type SaveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Save
     */
    select?: SaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Save
     */
    omit?: SaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveInclude<ExtArgs> | null
    /**
     * Filter, which Save to fetch.
     */
    where: SaveWhereUniqueInput
  }

  /**
   * Save findUniqueOrThrow
   */
  export type SaveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Save
     */
    select?: SaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Save
     */
    omit?: SaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveInclude<ExtArgs> | null
    /**
     * Filter, which Save to fetch.
     */
    where: SaveWhereUniqueInput
  }

  /**
   * Save findFirst
   */
  export type SaveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Save
     */
    select?: SaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Save
     */
    omit?: SaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveInclude<ExtArgs> | null
    /**
     * Filter, which Save to fetch.
     */
    where?: SaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Saves to fetch.
     */
    orderBy?: SaveOrderByWithRelationInput | SaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Saves.
     */
    cursor?: SaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Saves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Saves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Saves.
     */
    distinct?: SaveScalarFieldEnum | SaveScalarFieldEnum[]
  }

  /**
   * Save findFirstOrThrow
   */
  export type SaveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Save
     */
    select?: SaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Save
     */
    omit?: SaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveInclude<ExtArgs> | null
    /**
     * Filter, which Save to fetch.
     */
    where?: SaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Saves to fetch.
     */
    orderBy?: SaveOrderByWithRelationInput | SaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Saves.
     */
    cursor?: SaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Saves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Saves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Saves.
     */
    distinct?: SaveScalarFieldEnum | SaveScalarFieldEnum[]
  }

  /**
   * Save findMany
   */
  export type SaveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Save
     */
    select?: SaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Save
     */
    omit?: SaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveInclude<ExtArgs> | null
    /**
     * Filter, which Saves to fetch.
     */
    where?: SaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Saves to fetch.
     */
    orderBy?: SaveOrderByWithRelationInput | SaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Saves.
     */
    cursor?: SaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Saves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Saves.
     */
    skip?: number
    distinct?: SaveScalarFieldEnum | SaveScalarFieldEnum[]
  }

  /**
   * Save create
   */
  export type SaveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Save
     */
    select?: SaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Save
     */
    omit?: SaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveInclude<ExtArgs> | null
    /**
     * The data needed to create a Save.
     */
    data: XOR<SaveCreateInput, SaveUncheckedCreateInput>
  }

  /**
   * Save createMany
   */
  export type SaveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Saves.
     */
    data: SaveCreateManyInput | SaveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Save createManyAndReturn
   */
  export type SaveCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Save
     */
    select?: SaveSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Save
     */
    omit?: SaveOmit<ExtArgs> | null
    /**
     * The data used to create many Saves.
     */
    data: SaveCreateManyInput | SaveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Save update
   */
  export type SaveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Save
     */
    select?: SaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Save
     */
    omit?: SaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveInclude<ExtArgs> | null
    /**
     * The data needed to update a Save.
     */
    data: XOR<SaveUpdateInput, SaveUncheckedUpdateInput>
    /**
     * Choose, which Save to update.
     */
    where: SaveWhereUniqueInput
  }

  /**
   * Save updateMany
   */
  export type SaveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Saves.
     */
    data: XOR<SaveUpdateManyMutationInput, SaveUncheckedUpdateManyInput>
    /**
     * Filter which Saves to update
     */
    where?: SaveWhereInput
    /**
     * Limit how many Saves to update.
     */
    limit?: number
  }

  /**
   * Save updateManyAndReturn
   */
  export type SaveUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Save
     */
    select?: SaveSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Save
     */
    omit?: SaveOmit<ExtArgs> | null
    /**
     * The data used to update Saves.
     */
    data: XOR<SaveUpdateManyMutationInput, SaveUncheckedUpdateManyInput>
    /**
     * Filter which Saves to update
     */
    where?: SaveWhereInput
    /**
     * Limit how many Saves to update.
     */
    limit?: number
  }

  /**
   * Save upsert
   */
  export type SaveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Save
     */
    select?: SaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Save
     */
    omit?: SaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveInclude<ExtArgs> | null
    /**
     * The filter to search for the Save to update in case it exists.
     */
    where: SaveWhereUniqueInput
    /**
     * In case the Save found by the `where` argument doesn't exist, create a new Save with this data.
     */
    create: XOR<SaveCreateInput, SaveUncheckedCreateInput>
    /**
     * In case the Save was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaveUpdateInput, SaveUncheckedUpdateInput>
  }

  /**
   * Save delete
   */
  export type SaveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Save
     */
    select?: SaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Save
     */
    omit?: SaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveInclude<ExtArgs> | null
    /**
     * Filter which Save to delete.
     */
    where: SaveWhereUniqueInput
  }

  /**
   * Save deleteMany
   */
  export type SaveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Saves to delete
     */
    where?: SaveWhereInput
    /**
     * Limit how many Saves to delete.
     */
    limit?: number
  }

  /**
   * Save.pokemons
   */
  export type Save$pokemonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavePokemonLink
     */
    select?: SavePokemonLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavePokemonLink
     */
    omit?: SavePokemonLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavePokemonLinkInclude<ExtArgs> | null
    where?: SavePokemonLinkWhereInput
    orderBy?: SavePokemonLinkOrderByWithRelationInput | SavePokemonLinkOrderByWithRelationInput[]
    cursor?: SavePokemonLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavePokemonLinkScalarFieldEnum | SavePokemonLinkScalarFieldEnum[]
  }

  /**
   * Save.objects
   */
  export type Save$objectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaveObjectLink
     */
    select?: SaveObjectLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaveObjectLink
     */
    omit?: SaveObjectLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveObjectLinkInclude<ExtArgs> | null
    where?: SaveObjectLinkWhereInput
    orderBy?: SaveObjectLinkOrderByWithRelationInput | SaveObjectLinkOrderByWithRelationInput[]
    cursor?: SaveObjectLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaveObjectLinkScalarFieldEnum | SaveObjectLinkScalarFieldEnum[]
  }

  /**
   * Save without action
   */
  export type SaveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Save
     */
    select?: SaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Save
     */
    omit?: SaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveInclude<ExtArgs> | null
  }


  /**
   * Model Pokemon
   */

  export type AggregatePokemon = {
    _count: PokemonCountAggregateOutputType | null
    _avg: PokemonAvgAggregateOutputType | null
    _sum: PokemonSumAggregateOutputType | null
    _min: PokemonMinAggregateOutputType | null
    _max: PokemonMaxAggregateOutputType | null
  }

  export type PokemonAvgAggregateOutputType = {
    id: number | null
  }

  export type PokemonSumAggregateOutputType = {
    id: number | null
  }

  export type PokemonMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type PokemonMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type PokemonCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type PokemonAvgAggregateInputType = {
    id?: true
  }

  export type PokemonSumAggregateInputType = {
    id?: true
  }

  export type PokemonMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type PokemonMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type PokemonCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type PokemonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pokemon to aggregate.
     */
    where?: PokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pokemon to fetch.
     */
    orderBy?: PokemonOrderByWithRelationInput | PokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pokemon.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pokemon
    **/
    _count?: true | PokemonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PokemonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PokemonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PokemonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PokemonMaxAggregateInputType
  }

  export type GetPokemonAggregateType<T extends PokemonAggregateArgs> = {
        [P in keyof T & keyof AggregatePokemon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePokemon[P]>
      : GetScalarType<T[P], AggregatePokemon[P]>
  }




  export type PokemonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokemonWhereInput
    orderBy?: PokemonOrderByWithAggregationInput | PokemonOrderByWithAggregationInput[]
    by: PokemonScalarFieldEnum[] | PokemonScalarFieldEnum
    having?: PokemonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PokemonCountAggregateInputType | true
    _avg?: PokemonAvgAggregateInputType
    _sum?: PokemonSumAggregateInputType
    _min?: PokemonMinAggregateInputType
    _max?: PokemonMaxAggregateInputType
  }

  export type PokemonGroupByOutputType = {
    id: number
    name: string
    _count: PokemonCountAggregateOutputType | null
    _avg: PokemonAvgAggregateOutputType | null
    _sum: PokemonSumAggregateOutputType | null
    _min: PokemonMinAggregateOutputType | null
    _max: PokemonMaxAggregateOutputType | null
  }

  type GetPokemonGroupByPayload<T extends PokemonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PokemonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PokemonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PokemonGroupByOutputType[P]>
            : GetScalarType<T[P], PokemonGroupByOutputType[P]>
        }
      >
    >


  export type PokemonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    saves?: boolean | Pokemon$savesArgs<ExtArgs>
    _count?: boolean | PokemonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pokemon"]>

  export type PokemonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["pokemon"]>

  export type PokemonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["pokemon"]>

  export type PokemonSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type PokemonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["pokemon"]>
  export type PokemonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saves?: boolean | Pokemon$savesArgs<ExtArgs>
    _count?: boolean | PokemonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PokemonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PokemonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PokemonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pokemon"
    objects: {
      saves: Prisma.$SavePokemonLinkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["pokemon"]>
    composites: {}
  }

  type PokemonGetPayload<S extends boolean | null | undefined | PokemonDefaultArgs> = $Result.GetResult<Prisma.$PokemonPayload, S>

  type PokemonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PokemonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PokemonCountAggregateInputType | true
    }

  export interface PokemonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pokemon'], meta: { name: 'Pokemon' } }
    /**
     * Find zero or one Pokemon that matches the filter.
     * @param {PokemonFindUniqueArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PokemonFindUniqueArgs>(args: SelectSubset<T, PokemonFindUniqueArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pokemon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PokemonFindUniqueOrThrowArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PokemonFindUniqueOrThrowArgs>(args: SelectSubset<T, PokemonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pokemon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonFindFirstArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PokemonFindFirstArgs>(args?: SelectSubset<T, PokemonFindFirstArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pokemon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonFindFirstOrThrowArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PokemonFindFirstOrThrowArgs>(args?: SelectSubset<T, PokemonFindFirstOrThrowArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pokemon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pokemon
     * const pokemon = await prisma.pokemon.findMany()
     * 
     * // Get first 10 Pokemon
     * const pokemon = await prisma.pokemon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pokemonWithIdOnly = await prisma.pokemon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PokemonFindManyArgs>(args?: SelectSubset<T, PokemonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pokemon.
     * @param {PokemonCreateArgs} args - Arguments to create a Pokemon.
     * @example
     * // Create one Pokemon
     * const Pokemon = await prisma.pokemon.create({
     *   data: {
     *     // ... data to create a Pokemon
     *   }
     * })
     * 
     */
    create<T extends PokemonCreateArgs>(args: SelectSubset<T, PokemonCreateArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pokemon.
     * @param {PokemonCreateManyArgs} args - Arguments to create many Pokemon.
     * @example
     * // Create many Pokemon
     * const pokemon = await prisma.pokemon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PokemonCreateManyArgs>(args?: SelectSubset<T, PokemonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pokemon and returns the data saved in the database.
     * @param {PokemonCreateManyAndReturnArgs} args - Arguments to create many Pokemon.
     * @example
     * // Create many Pokemon
     * const pokemon = await prisma.pokemon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pokemon and only return the `id`
     * const pokemonWithIdOnly = await prisma.pokemon.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PokemonCreateManyAndReturnArgs>(args?: SelectSubset<T, PokemonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pokemon.
     * @param {PokemonDeleteArgs} args - Arguments to delete one Pokemon.
     * @example
     * // Delete one Pokemon
     * const Pokemon = await prisma.pokemon.delete({
     *   where: {
     *     // ... filter to delete one Pokemon
     *   }
     * })
     * 
     */
    delete<T extends PokemonDeleteArgs>(args: SelectSubset<T, PokemonDeleteArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pokemon.
     * @param {PokemonUpdateArgs} args - Arguments to update one Pokemon.
     * @example
     * // Update one Pokemon
     * const pokemon = await prisma.pokemon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PokemonUpdateArgs>(args: SelectSubset<T, PokemonUpdateArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pokemon.
     * @param {PokemonDeleteManyArgs} args - Arguments to filter Pokemon to delete.
     * @example
     * // Delete a few Pokemon
     * const { count } = await prisma.pokemon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PokemonDeleteManyArgs>(args?: SelectSubset<T, PokemonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pokemon
     * const pokemon = await prisma.pokemon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PokemonUpdateManyArgs>(args: SelectSubset<T, PokemonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pokemon and returns the data updated in the database.
     * @param {PokemonUpdateManyAndReturnArgs} args - Arguments to update many Pokemon.
     * @example
     * // Update many Pokemon
     * const pokemon = await prisma.pokemon.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pokemon and only return the `id`
     * const pokemonWithIdOnly = await prisma.pokemon.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PokemonUpdateManyAndReturnArgs>(args: SelectSubset<T, PokemonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pokemon.
     * @param {PokemonUpsertArgs} args - Arguments to update or create a Pokemon.
     * @example
     * // Update or create a Pokemon
     * const pokemon = await prisma.pokemon.upsert({
     *   create: {
     *     // ... data to create a Pokemon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pokemon we want to update
     *   }
     * })
     */
    upsert<T extends PokemonUpsertArgs>(args: SelectSubset<T, PokemonUpsertArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonCountArgs} args - Arguments to filter Pokemon to count.
     * @example
     * // Count the number of Pokemon
     * const count = await prisma.pokemon.count({
     *   where: {
     *     // ... the filter for the Pokemon we want to count
     *   }
     * })
    **/
    count<T extends PokemonCountArgs>(
      args?: Subset<T, PokemonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PokemonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PokemonAggregateArgs>(args: Subset<T, PokemonAggregateArgs>): Prisma.PrismaPromise<GetPokemonAggregateType<T>>

    /**
     * Group by Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PokemonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PokemonGroupByArgs['orderBy'] }
        : { orderBy?: PokemonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PokemonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPokemonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pokemon model
   */
  readonly fields: PokemonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pokemon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PokemonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    saves<T extends Pokemon$savesArgs<ExtArgs> = {}>(args?: Subset<T, Pokemon$savesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavePokemonLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pokemon model
   */
  interface PokemonFieldRefs {
    readonly id: FieldRef<"Pokemon", 'Int'>
    readonly name: FieldRef<"Pokemon", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pokemon findUnique
   */
  export type PokemonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where: PokemonWhereUniqueInput
  }

  /**
   * Pokemon findUniqueOrThrow
   */
  export type PokemonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where: PokemonWhereUniqueInput
  }

  /**
   * Pokemon findFirst
   */
  export type PokemonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where?: PokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pokemon to fetch.
     */
    orderBy?: PokemonOrderByWithRelationInput | PokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pokemon.
     */
    cursor?: PokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pokemon.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pokemon.
     */
    distinct?: PokemonScalarFieldEnum | PokemonScalarFieldEnum[]
  }

  /**
   * Pokemon findFirstOrThrow
   */
  export type PokemonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where?: PokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pokemon to fetch.
     */
    orderBy?: PokemonOrderByWithRelationInput | PokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pokemon.
     */
    cursor?: PokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pokemon.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pokemon.
     */
    distinct?: PokemonScalarFieldEnum | PokemonScalarFieldEnum[]
  }

  /**
   * Pokemon findMany
   */
  export type PokemonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where?: PokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pokemon to fetch.
     */
    orderBy?: PokemonOrderByWithRelationInput | PokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pokemon.
     */
    cursor?: PokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pokemon.
     */
    skip?: number
    distinct?: PokemonScalarFieldEnum | PokemonScalarFieldEnum[]
  }

  /**
   * Pokemon create
   */
  export type PokemonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * The data needed to create a Pokemon.
     */
    data: XOR<PokemonCreateInput, PokemonUncheckedCreateInput>
  }

  /**
   * Pokemon createMany
   */
  export type PokemonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pokemon.
     */
    data: PokemonCreateManyInput | PokemonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pokemon createManyAndReturn
   */
  export type PokemonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * The data used to create many Pokemon.
     */
    data: PokemonCreateManyInput | PokemonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pokemon update
   */
  export type PokemonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * The data needed to update a Pokemon.
     */
    data: XOR<PokemonUpdateInput, PokemonUncheckedUpdateInput>
    /**
     * Choose, which Pokemon to update.
     */
    where: PokemonWhereUniqueInput
  }

  /**
   * Pokemon updateMany
   */
  export type PokemonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pokemon.
     */
    data: XOR<PokemonUpdateManyMutationInput, PokemonUncheckedUpdateManyInput>
    /**
     * Filter which Pokemon to update
     */
    where?: PokemonWhereInput
    /**
     * Limit how many Pokemon to update.
     */
    limit?: number
  }

  /**
   * Pokemon updateManyAndReturn
   */
  export type PokemonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * The data used to update Pokemon.
     */
    data: XOR<PokemonUpdateManyMutationInput, PokemonUncheckedUpdateManyInput>
    /**
     * Filter which Pokemon to update
     */
    where?: PokemonWhereInput
    /**
     * Limit how many Pokemon to update.
     */
    limit?: number
  }

  /**
   * Pokemon upsert
   */
  export type PokemonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * The filter to search for the Pokemon to update in case it exists.
     */
    where: PokemonWhereUniqueInput
    /**
     * In case the Pokemon found by the `where` argument doesn't exist, create a new Pokemon with this data.
     */
    create: XOR<PokemonCreateInput, PokemonUncheckedCreateInput>
    /**
     * In case the Pokemon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PokemonUpdateInput, PokemonUncheckedUpdateInput>
  }

  /**
   * Pokemon delete
   */
  export type PokemonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter which Pokemon to delete.
     */
    where: PokemonWhereUniqueInput
  }

  /**
   * Pokemon deleteMany
   */
  export type PokemonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pokemon to delete
     */
    where?: PokemonWhereInput
    /**
     * Limit how many Pokemon to delete.
     */
    limit?: number
  }

  /**
   * Pokemon.saves
   */
  export type Pokemon$savesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavePokemonLink
     */
    select?: SavePokemonLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavePokemonLink
     */
    omit?: SavePokemonLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavePokemonLinkInclude<ExtArgs> | null
    where?: SavePokemonLinkWhereInput
    orderBy?: SavePokemonLinkOrderByWithRelationInput | SavePokemonLinkOrderByWithRelationInput[]
    cursor?: SavePokemonLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavePokemonLinkScalarFieldEnum | SavePokemonLinkScalarFieldEnum[]
  }

  /**
   * Pokemon without action
   */
  export type PokemonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
  }


  /**
   * Model Object
   */

  export type AggregateObject = {
    _count: ObjectCountAggregateOutputType | null
    _avg: ObjectAvgAggregateOutputType | null
    _sum: ObjectSumAggregateOutputType | null
    _min: ObjectMinAggregateOutputType | null
    _max: ObjectMaxAggregateOutputType | null
  }

  export type ObjectAvgAggregateOutputType = {
    id: number | null
    price: number | null
    stock: number | null
    level: number | null
  }

  export type ObjectSumAggregateOutputType = {
    id: number | null
    price: number | null
    stock: number | null
    level: number | null
  }

  export type ObjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    stock: number | null
    level: number | null
  }

  export type ObjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    stock: number | null
    level: number | null
  }

  export type ObjectCountAggregateOutputType = {
    id: number
    name: number
    price: number
    stock: number
    level: number
    _all: number
  }


  export type ObjectAvgAggregateInputType = {
    id?: true
    price?: true
    stock?: true
    level?: true
  }

  export type ObjectSumAggregateInputType = {
    id?: true
    price?: true
    stock?: true
    level?: true
  }

  export type ObjectMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    stock?: true
    level?: true
  }

  export type ObjectMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    stock?: true
    level?: true
  }

  export type ObjectCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    stock?: true
    level?: true
    _all?: true
  }

  export type ObjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Object to aggregate.
     */
    where?: ObjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Objects to fetch.
     */
    orderBy?: ObjectOrderByWithRelationInput | ObjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ObjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Objects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Objects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Objects
    **/
    _count?: true | ObjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ObjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ObjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObjectMaxAggregateInputType
  }

  export type GetObjectAggregateType<T extends ObjectAggregateArgs> = {
        [P in keyof T & keyof AggregateObject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObject[P]>
      : GetScalarType<T[P], AggregateObject[P]>
  }




  export type ObjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObjectWhereInput
    orderBy?: ObjectOrderByWithAggregationInput | ObjectOrderByWithAggregationInput[]
    by: ObjectScalarFieldEnum[] | ObjectScalarFieldEnum
    having?: ObjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObjectCountAggregateInputType | true
    _avg?: ObjectAvgAggregateInputType
    _sum?: ObjectSumAggregateInputType
    _min?: ObjectMinAggregateInputType
    _max?: ObjectMaxAggregateInputType
  }

  export type ObjectGroupByOutputType = {
    id: number
    name: string
    price: number
    stock: number
    level: number
    _count: ObjectCountAggregateOutputType | null
    _avg: ObjectAvgAggregateOutputType | null
    _sum: ObjectSumAggregateOutputType | null
    _min: ObjectMinAggregateOutputType | null
    _max: ObjectMaxAggregateOutputType | null
  }

  type GetObjectGroupByPayload<T extends ObjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ObjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObjectGroupByOutputType[P]>
            : GetScalarType<T[P], ObjectGroupByOutputType[P]>
        }
      >
    >


  export type ObjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    stock?: boolean
    level?: boolean
    saves?: boolean | Object$savesArgs<ExtArgs>
    _count?: boolean | ObjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["object"]>

  export type ObjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    stock?: boolean
    level?: boolean
  }, ExtArgs["result"]["object"]>

  export type ObjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    stock?: boolean
    level?: boolean
  }, ExtArgs["result"]["object"]>

  export type ObjectSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    stock?: boolean
    level?: boolean
  }

  export type ObjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "stock" | "level", ExtArgs["result"]["object"]>
  export type ObjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saves?: boolean | Object$savesArgs<ExtArgs>
    _count?: boolean | ObjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ObjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ObjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ObjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Object"
    objects: {
      saves: Prisma.$SaveObjectLinkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: number
      stock: number
      level: number
    }, ExtArgs["result"]["object"]>
    composites: {}
  }

  type ObjectGetPayload<S extends boolean | null | undefined | ObjectDefaultArgs> = $Result.GetResult<Prisma.$ObjectPayload, S>

  type ObjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ObjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ObjectCountAggregateInputType | true
    }

  export interface ObjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Object'], meta: { name: 'Object' } }
    /**
     * Find zero or one Object that matches the filter.
     * @param {ObjectFindUniqueArgs} args - Arguments to find a Object
     * @example
     * // Get one Object
     * const object = await prisma.object.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ObjectFindUniqueArgs>(args: SelectSubset<T, ObjectFindUniqueArgs<ExtArgs>>): Prisma__ObjectClient<$Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Object that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ObjectFindUniqueOrThrowArgs} args - Arguments to find a Object
     * @example
     * // Get one Object
     * const object = await prisma.object.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ObjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ObjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ObjectClient<$Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Object that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectFindFirstArgs} args - Arguments to find a Object
     * @example
     * // Get one Object
     * const object = await prisma.object.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ObjectFindFirstArgs>(args?: SelectSubset<T, ObjectFindFirstArgs<ExtArgs>>): Prisma__ObjectClient<$Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Object that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectFindFirstOrThrowArgs} args - Arguments to find a Object
     * @example
     * // Get one Object
     * const object = await prisma.object.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ObjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ObjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ObjectClient<$Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Objects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Objects
     * const objects = await prisma.object.findMany()
     * 
     * // Get first 10 Objects
     * const objects = await prisma.object.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const objectWithIdOnly = await prisma.object.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ObjectFindManyArgs>(args?: SelectSubset<T, ObjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Object.
     * @param {ObjectCreateArgs} args - Arguments to create a Object.
     * @example
     * // Create one Object
     * const Object = await prisma.object.create({
     *   data: {
     *     // ... data to create a Object
     *   }
     * })
     * 
     */
    create<T extends ObjectCreateArgs>(args: SelectSubset<T, ObjectCreateArgs<ExtArgs>>): Prisma__ObjectClient<$Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Objects.
     * @param {ObjectCreateManyArgs} args - Arguments to create many Objects.
     * @example
     * // Create many Objects
     * const object = await prisma.object.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ObjectCreateManyArgs>(args?: SelectSubset<T, ObjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Objects and returns the data saved in the database.
     * @param {ObjectCreateManyAndReturnArgs} args - Arguments to create many Objects.
     * @example
     * // Create many Objects
     * const object = await prisma.object.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Objects and only return the `id`
     * const objectWithIdOnly = await prisma.object.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ObjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ObjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Object.
     * @param {ObjectDeleteArgs} args - Arguments to delete one Object.
     * @example
     * // Delete one Object
     * const Object = await prisma.object.delete({
     *   where: {
     *     // ... filter to delete one Object
     *   }
     * })
     * 
     */
    delete<T extends ObjectDeleteArgs>(args: SelectSubset<T, ObjectDeleteArgs<ExtArgs>>): Prisma__ObjectClient<$Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Object.
     * @param {ObjectUpdateArgs} args - Arguments to update one Object.
     * @example
     * // Update one Object
     * const object = await prisma.object.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ObjectUpdateArgs>(args: SelectSubset<T, ObjectUpdateArgs<ExtArgs>>): Prisma__ObjectClient<$Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Objects.
     * @param {ObjectDeleteManyArgs} args - Arguments to filter Objects to delete.
     * @example
     * // Delete a few Objects
     * const { count } = await prisma.object.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ObjectDeleteManyArgs>(args?: SelectSubset<T, ObjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Objects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Objects
     * const object = await prisma.object.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ObjectUpdateManyArgs>(args: SelectSubset<T, ObjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Objects and returns the data updated in the database.
     * @param {ObjectUpdateManyAndReturnArgs} args - Arguments to update many Objects.
     * @example
     * // Update many Objects
     * const object = await prisma.object.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Objects and only return the `id`
     * const objectWithIdOnly = await prisma.object.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ObjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ObjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Object.
     * @param {ObjectUpsertArgs} args - Arguments to update or create a Object.
     * @example
     * // Update or create a Object
     * const object = await prisma.object.upsert({
     *   create: {
     *     // ... data to create a Object
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Object we want to update
     *   }
     * })
     */
    upsert<T extends ObjectUpsertArgs>(args: SelectSubset<T, ObjectUpsertArgs<ExtArgs>>): Prisma__ObjectClient<$Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Objects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectCountArgs} args - Arguments to filter Objects to count.
     * @example
     * // Count the number of Objects
     * const count = await prisma.object.count({
     *   where: {
     *     // ... the filter for the Objects we want to count
     *   }
     * })
    **/
    count<T extends ObjectCountArgs>(
      args?: Subset<T, ObjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Object.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ObjectAggregateArgs>(args: Subset<T, ObjectAggregateArgs>): Prisma.PrismaPromise<GetObjectAggregateType<T>>

    /**
     * Group by Object.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ObjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ObjectGroupByArgs['orderBy'] }
        : { orderBy?: ObjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ObjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Object model
   */
  readonly fields: ObjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Object.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ObjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    saves<T extends Object$savesArgs<ExtArgs> = {}>(args?: Subset<T, Object$savesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaveObjectLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Object model
   */
  interface ObjectFieldRefs {
    readonly id: FieldRef<"Object", 'Int'>
    readonly name: FieldRef<"Object", 'String'>
    readonly price: FieldRef<"Object", 'Int'>
    readonly stock: FieldRef<"Object", 'Int'>
    readonly level: FieldRef<"Object", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Object findUnique
   */
  export type ObjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Object
     */
    select?: ObjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Object
     */
    omit?: ObjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectInclude<ExtArgs> | null
    /**
     * Filter, which Object to fetch.
     */
    where: ObjectWhereUniqueInput
  }

  /**
   * Object findUniqueOrThrow
   */
  export type ObjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Object
     */
    select?: ObjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Object
     */
    omit?: ObjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectInclude<ExtArgs> | null
    /**
     * Filter, which Object to fetch.
     */
    where: ObjectWhereUniqueInput
  }

  /**
   * Object findFirst
   */
  export type ObjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Object
     */
    select?: ObjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Object
     */
    omit?: ObjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectInclude<ExtArgs> | null
    /**
     * Filter, which Object to fetch.
     */
    where?: ObjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Objects to fetch.
     */
    orderBy?: ObjectOrderByWithRelationInput | ObjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Objects.
     */
    cursor?: ObjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Objects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Objects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Objects.
     */
    distinct?: ObjectScalarFieldEnum | ObjectScalarFieldEnum[]
  }

  /**
   * Object findFirstOrThrow
   */
  export type ObjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Object
     */
    select?: ObjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Object
     */
    omit?: ObjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectInclude<ExtArgs> | null
    /**
     * Filter, which Object to fetch.
     */
    where?: ObjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Objects to fetch.
     */
    orderBy?: ObjectOrderByWithRelationInput | ObjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Objects.
     */
    cursor?: ObjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Objects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Objects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Objects.
     */
    distinct?: ObjectScalarFieldEnum | ObjectScalarFieldEnum[]
  }

  /**
   * Object findMany
   */
  export type ObjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Object
     */
    select?: ObjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Object
     */
    omit?: ObjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectInclude<ExtArgs> | null
    /**
     * Filter, which Objects to fetch.
     */
    where?: ObjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Objects to fetch.
     */
    orderBy?: ObjectOrderByWithRelationInput | ObjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Objects.
     */
    cursor?: ObjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Objects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Objects.
     */
    skip?: number
    distinct?: ObjectScalarFieldEnum | ObjectScalarFieldEnum[]
  }

  /**
   * Object create
   */
  export type ObjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Object
     */
    select?: ObjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Object
     */
    omit?: ObjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Object.
     */
    data: XOR<ObjectCreateInput, ObjectUncheckedCreateInput>
  }

  /**
   * Object createMany
   */
  export type ObjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Objects.
     */
    data: ObjectCreateManyInput | ObjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Object createManyAndReturn
   */
  export type ObjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Object
     */
    select?: ObjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Object
     */
    omit?: ObjectOmit<ExtArgs> | null
    /**
     * The data used to create many Objects.
     */
    data: ObjectCreateManyInput | ObjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Object update
   */
  export type ObjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Object
     */
    select?: ObjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Object
     */
    omit?: ObjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Object.
     */
    data: XOR<ObjectUpdateInput, ObjectUncheckedUpdateInput>
    /**
     * Choose, which Object to update.
     */
    where: ObjectWhereUniqueInput
  }

  /**
   * Object updateMany
   */
  export type ObjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Objects.
     */
    data: XOR<ObjectUpdateManyMutationInput, ObjectUncheckedUpdateManyInput>
    /**
     * Filter which Objects to update
     */
    where?: ObjectWhereInput
    /**
     * Limit how many Objects to update.
     */
    limit?: number
  }

  /**
   * Object updateManyAndReturn
   */
  export type ObjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Object
     */
    select?: ObjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Object
     */
    omit?: ObjectOmit<ExtArgs> | null
    /**
     * The data used to update Objects.
     */
    data: XOR<ObjectUpdateManyMutationInput, ObjectUncheckedUpdateManyInput>
    /**
     * Filter which Objects to update
     */
    where?: ObjectWhereInput
    /**
     * Limit how many Objects to update.
     */
    limit?: number
  }

  /**
   * Object upsert
   */
  export type ObjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Object
     */
    select?: ObjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Object
     */
    omit?: ObjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Object to update in case it exists.
     */
    where: ObjectWhereUniqueInput
    /**
     * In case the Object found by the `where` argument doesn't exist, create a new Object with this data.
     */
    create: XOR<ObjectCreateInput, ObjectUncheckedCreateInput>
    /**
     * In case the Object was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ObjectUpdateInput, ObjectUncheckedUpdateInput>
  }

  /**
   * Object delete
   */
  export type ObjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Object
     */
    select?: ObjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Object
     */
    omit?: ObjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectInclude<ExtArgs> | null
    /**
     * Filter which Object to delete.
     */
    where: ObjectWhereUniqueInput
  }

  /**
   * Object deleteMany
   */
  export type ObjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Objects to delete
     */
    where?: ObjectWhereInput
    /**
     * Limit how many Objects to delete.
     */
    limit?: number
  }

  /**
   * Object.saves
   */
  export type Object$savesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaveObjectLink
     */
    select?: SaveObjectLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaveObjectLink
     */
    omit?: SaveObjectLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveObjectLinkInclude<ExtArgs> | null
    where?: SaveObjectLinkWhereInput
    orderBy?: SaveObjectLinkOrderByWithRelationInput | SaveObjectLinkOrderByWithRelationInput[]
    cursor?: SaveObjectLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaveObjectLinkScalarFieldEnum | SaveObjectLinkScalarFieldEnum[]
  }

  /**
   * Object without action
   */
  export type ObjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Object
     */
    select?: ObjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Object
     */
    omit?: ObjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectInclude<ExtArgs> | null
  }


  /**
   * Model SavePokemonLink
   */

  export type AggregateSavePokemonLink = {
    _count: SavePokemonLinkCountAggregateOutputType | null
    _avg: SavePokemonLinkAvgAggregateOutputType | null
    _sum: SavePokemonLinkSumAggregateOutputType | null
    _min: SavePokemonLinkMinAggregateOutputType | null
    _max: SavePokemonLinkMaxAggregateOutputType | null
  }

  export type SavePokemonLinkAvgAggregateOutputType = {
    saveId: number | null
    pokemonId: number | null
  }

  export type SavePokemonLinkSumAggregateOutputType = {
    saveId: number | null
    pokemonId: number | null
  }

  export type SavePokemonLinkMinAggregateOutputType = {
    saveId: number | null
    pokemonId: number | null
  }

  export type SavePokemonLinkMaxAggregateOutputType = {
    saveId: number | null
    pokemonId: number | null
  }

  export type SavePokemonLinkCountAggregateOutputType = {
    saveId: number
    pokemonId: number
    _all: number
  }


  export type SavePokemonLinkAvgAggregateInputType = {
    saveId?: true
    pokemonId?: true
  }

  export type SavePokemonLinkSumAggregateInputType = {
    saveId?: true
    pokemonId?: true
  }

  export type SavePokemonLinkMinAggregateInputType = {
    saveId?: true
    pokemonId?: true
  }

  export type SavePokemonLinkMaxAggregateInputType = {
    saveId?: true
    pokemonId?: true
  }

  export type SavePokemonLinkCountAggregateInputType = {
    saveId?: true
    pokemonId?: true
    _all?: true
  }

  export type SavePokemonLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavePokemonLink to aggregate.
     */
    where?: SavePokemonLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavePokemonLinks to fetch.
     */
    orderBy?: SavePokemonLinkOrderByWithRelationInput | SavePokemonLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavePokemonLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavePokemonLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavePokemonLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavePokemonLinks
    **/
    _count?: true | SavePokemonLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SavePokemonLinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SavePokemonLinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavePokemonLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavePokemonLinkMaxAggregateInputType
  }

  export type GetSavePokemonLinkAggregateType<T extends SavePokemonLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateSavePokemonLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavePokemonLink[P]>
      : GetScalarType<T[P], AggregateSavePokemonLink[P]>
  }




  export type SavePokemonLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavePokemonLinkWhereInput
    orderBy?: SavePokemonLinkOrderByWithAggregationInput | SavePokemonLinkOrderByWithAggregationInput[]
    by: SavePokemonLinkScalarFieldEnum[] | SavePokemonLinkScalarFieldEnum
    having?: SavePokemonLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavePokemonLinkCountAggregateInputType | true
    _avg?: SavePokemonLinkAvgAggregateInputType
    _sum?: SavePokemonLinkSumAggregateInputType
    _min?: SavePokemonLinkMinAggregateInputType
    _max?: SavePokemonLinkMaxAggregateInputType
  }

  export type SavePokemonLinkGroupByOutputType = {
    saveId: number
    pokemonId: number
    _count: SavePokemonLinkCountAggregateOutputType | null
    _avg: SavePokemonLinkAvgAggregateOutputType | null
    _sum: SavePokemonLinkSumAggregateOutputType | null
    _min: SavePokemonLinkMinAggregateOutputType | null
    _max: SavePokemonLinkMaxAggregateOutputType | null
  }

  type GetSavePokemonLinkGroupByPayload<T extends SavePokemonLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavePokemonLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavePokemonLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavePokemonLinkGroupByOutputType[P]>
            : GetScalarType<T[P], SavePokemonLinkGroupByOutputType[P]>
        }
      >
    >


  export type SavePokemonLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    saveId?: boolean
    pokemonId?: boolean
    save?: boolean | SaveDefaultArgs<ExtArgs>
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savePokemonLink"]>

  export type SavePokemonLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    saveId?: boolean
    pokemonId?: boolean
    save?: boolean | SaveDefaultArgs<ExtArgs>
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savePokemonLink"]>

  export type SavePokemonLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    saveId?: boolean
    pokemonId?: boolean
    save?: boolean | SaveDefaultArgs<ExtArgs>
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savePokemonLink"]>

  export type SavePokemonLinkSelectScalar = {
    saveId?: boolean
    pokemonId?: boolean
  }

  export type SavePokemonLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"saveId" | "pokemonId", ExtArgs["result"]["savePokemonLink"]>
  export type SavePokemonLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    save?: boolean | SaveDefaultArgs<ExtArgs>
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }
  export type SavePokemonLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    save?: boolean | SaveDefaultArgs<ExtArgs>
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }
  export type SavePokemonLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    save?: boolean | SaveDefaultArgs<ExtArgs>
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }

  export type $SavePokemonLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavePokemonLink"
    objects: {
      save: Prisma.$SavePayload<ExtArgs>
      pokemon: Prisma.$PokemonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      saveId: number
      pokemonId: number
    }, ExtArgs["result"]["savePokemonLink"]>
    composites: {}
  }

  type SavePokemonLinkGetPayload<S extends boolean | null | undefined | SavePokemonLinkDefaultArgs> = $Result.GetResult<Prisma.$SavePokemonLinkPayload, S>

  type SavePokemonLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavePokemonLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavePokemonLinkCountAggregateInputType | true
    }

  export interface SavePokemonLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavePokemonLink'], meta: { name: 'SavePokemonLink' } }
    /**
     * Find zero or one SavePokemonLink that matches the filter.
     * @param {SavePokemonLinkFindUniqueArgs} args - Arguments to find a SavePokemonLink
     * @example
     * // Get one SavePokemonLink
     * const savePokemonLink = await prisma.savePokemonLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavePokemonLinkFindUniqueArgs>(args: SelectSubset<T, SavePokemonLinkFindUniqueArgs<ExtArgs>>): Prisma__SavePokemonLinkClient<$Result.GetResult<Prisma.$SavePokemonLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavePokemonLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavePokemonLinkFindUniqueOrThrowArgs} args - Arguments to find a SavePokemonLink
     * @example
     * // Get one SavePokemonLink
     * const savePokemonLink = await prisma.savePokemonLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavePokemonLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, SavePokemonLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavePokemonLinkClient<$Result.GetResult<Prisma.$SavePokemonLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavePokemonLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavePokemonLinkFindFirstArgs} args - Arguments to find a SavePokemonLink
     * @example
     * // Get one SavePokemonLink
     * const savePokemonLink = await prisma.savePokemonLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavePokemonLinkFindFirstArgs>(args?: SelectSubset<T, SavePokemonLinkFindFirstArgs<ExtArgs>>): Prisma__SavePokemonLinkClient<$Result.GetResult<Prisma.$SavePokemonLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavePokemonLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavePokemonLinkFindFirstOrThrowArgs} args - Arguments to find a SavePokemonLink
     * @example
     * // Get one SavePokemonLink
     * const savePokemonLink = await prisma.savePokemonLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavePokemonLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, SavePokemonLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavePokemonLinkClient<$Result.GetResult<Prisma.$SavePokemonLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavePokemonLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavePokemonLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavePokemonLinks
     * const savePokemonLinks = await prisma.savePokemonLink.findMany()
     * 
     * // Get first 10 SavePokemonLinks
     * const savePokemonLinks = await prisma.savePokemonLink.findMany({ take: 10 })
     * 
     * // Only select the `saveId`
     * const savePokemonLinkWithSaveIdOnly = await prisma.savePokemonLink.findMany({ select: { saveId: true } })
     * 
     */
    findMany<T extends SavePokemonLinkFindManyArgs>(args?: SelectSubset<T, SavePokemonLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavePokemonLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavePokemonLink.
     * @param {SavePokemonLinkCreateArgs} args - Arguments to create a SavePokemonLink.
     * @example
     * // Create one SavePokemonLink
     * const SavePokemonLink = await prisma.savePokemonLink.create({
     *   data: {
     *     // ... data to create a SavePokemonLink
     *   }
     * })
     * 
     */
    create<T extends SavePokemonLinkCreateArgs>(args: SelectSubset<T, SavePokemonLinkCreateArgs<ExtArgs>>): Prisma__SavePokemonLinkClient<$Result.GetResult<Prisma.$SavePokemonLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavePokemonLinks.
     * @param {SavePokemonLinkCreateManyArgs} args - Arguments to create many SavePokemonLinks.
     * @example
     * // Create many SavePokemonLinks
     * const savePokemonLink = await prisma.savePokemonLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavePokemonLinkCreateManyArgs>(args?: SelectSubset<T, SavePokemonLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavePokemonLinks and returns the data saved in the database.
     * @param {SavePokemonLinkCreateManyAndReturnArgs} args - Arguments to create many SavePokemonLinks.
     * @example
     * // Create many SavePokemonLinks
     * const savePokemonLink = await prisma.savePokemonLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavePokemonLinks and only return the `saveId`
     * const savePokemonLinkWithSaveIdOnly = await prisma.savePokemonLink.createManyAndReturn({
     *   select: { saveId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavePokemonLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, SavePokemonLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavePokemonLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SavePokemonLink.
     * @param {SavePokemonLinkDeleteArgs} args - Arguments to delete one SavePokemonLink.
     * @example
     * // Delete one SavePokemonLink
     * const SavePokemonLink = await prisma.savePokemonLink.delete({
     *   where: {
     *     // ... filter to delete one SavePokemonLink
     *   }
     * })
     * 
     */
    delete<T extends SavePokemonLinkDeleteArgs>(args: SelectSubset<T, SavePokemonLinkDeleteArgs<ExtArgs>>): Prisma__SavePokemonLinkClient<$Result.GetResult<Prisma.$SavePokemonLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavePokemonLink.
     * @param {SavePokemonLinkUpdateArgs} args - Arguments to update one SavePokemonLink.
     * @example
     * // Update one SavePokemonLink
     * const savePokemonLink = await prisma.savePokemonLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavePokemonLinkUpdateArgs>(args: SelectSubset<T, SavePokemonLinkUpdateArgs<ExtArgs>>): Prisma__SavePokemonLinkClient<$Result.GetResult<Prisma.$SavePokemonLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavePokemonLinks.
     * @param {SavePokemonLinkDeleteManyArgs} args - Arguments to filter SavePokemonLinks to delete.
     * @example
     * // Delete a few SavePokemonLinks
     * const { count } = await prisma.savePokemonLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavePokemonLinkDeleteManyArgs>(args?: SelectSubset<T, SavePokemonLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavePokemonLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavePokemonLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavePokemonLinks
     * const savePokemonLink = await prisma.savePokemonLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavePokemonLinkUpdateManyArgs>(args: SelectSubset<T, SavePokemonLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavePokemonLinks and returns the data updated in the database.
     * @param {SavePokemonLinkUpdateManyAndReturnArgs} args - Arguments to update many SavePokemonLinks.
     * @example
     * // Update many SavePokemonLinks
     * const savePokemonLink = await prisma.savePokemonLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SavePokemonLinks and only return the `saveId`
     * const savePokemonLinkWithSaveIdOnly = await prisma.savePokemonLink.updateManyAndReturn({
     *   select: { saveId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SavePokemonLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, SavePokemonLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavePokemonLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SavePokemonLink.
     * @param {SavePokemonLinkUpsertArgs} args - Arguments to update or create a SavePokemonLink.
     * @example
     * // Update or create a SavePokemonLink
     * const savePokemonLink = await prisma.savePokemonLink.upsert({
     *   create: {
     *     // ... data to create a SavePokemonLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavePokemonLink we want to update
     *   }
     * })
     */
    upsert<T extends SavePokemonLinkUpsertArgs>(args: SelectSubset<T, SavePokemonLinkUpsertArgs<ExtArgs>>): Prisma__SavePokemonLinkClient<$Result.GetResult<Prisma.$SavePokemonLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavePokemonLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavePokemonLinkCountArgs} args - Arguments to filter SavePokemonLinks to count.
     * @example
     * // Count the number of SavePokemonLinks
     * const count = await prisma.savePokemonLink.count({
     *   where: {
     *     // ... the filter for the SavePokemonLinks we want to count
     *   }
     * })
    **/
    count<T extends SavePokemonLinkCountArgs>(
      args?: Subset<T, SavePokemonLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavePokemonLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavePokemonLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavePokemonLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SavePokemonLinkAggregateArgs>(args: Subset<T, SavePokemonLinkAggregateArgs>): Prisma.PrismaPromise<GetSavePokemonLinkAggregateType<T>>

    /**
     * Group by SavePokemonLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavePokemonLinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SavePokemonLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavePokemonLinkGroupByArgs['orderBy'] }
        : { orderBy?: SavePokemonLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SavePokemonLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavePokemonLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavePokemonLink model
   */
  readonly fields: SavePokemonLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavePokemonLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavePokemonLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    save<T extends SaveDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SaveDefaultArgs<ExtArgs>>): Prisma__SaveClient<$Result.GetResult<Prisma.$SavePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pokemon<T extends PokemonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PokemonDefaultArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SavePokemonLink model
   */
  interface SavePokemonLinkFieldRefs {
    readonly saveId: FieldRef<"SavePokemonLink", 'Int'>
    readonly pokemonId: FieldRef<"SavePokemonLink", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SavePokemonLink findUnique
   */
  export type SavePokemonLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavePokemonLink
     */
    select?: SavePokemonLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavePokemonLink
     */
    omit?: SavePokemonLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavePokemonLinkInclude<ExtArgs> | null
    /**
     * Filter, which SavePokemonLink to fetch.
     */
    where: SavePokemonLinkWhereUniqueInput
  }

  /**
   * SavePokemonLink findUniqueOrThrow
   */
  export type SavePokemonLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavePokemonLink
     */
    select?: SavePokemonLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavePokemonLink
     */
    omit?: SavePokemonLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavePokemonLinkInclude<ExtArgs> | null
    /**
     * Filter, which SavePokemonLink to fetch.
     */
    where: SavePokemonLinkWhereUniqueInput
  }

  /**
   * SavePokemonLink findFirst
   */
  export type SavePokemonLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavePokemonLink
     */
    select?: SavePokemonLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavePokemonLink
     */
    omit?: SavePokemonLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavePokemonLinkInclude<ExtArgs> | null
    /**
     * Filter, which SavePokemonLink to fetch.
     */
    where?: SavePokemonLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavePokemonLinks to fetch.
     */
    orderBy?: SavePokemonLinkOrderByWithRelationInput | SavePokemonLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavePokemonLinks.
     */
    cursor?: SavePokemonLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavePokemonLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavePokemonLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavePokemonLinks.
     */
    distinct?: SavePokemonLinkScalarFieldEnum | SavePokemonLinkScalarFieldEnum[]
  }

  /**
   * SavePokemonLink findFirstOrThrow
   */
  export type SavePokemonLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavePokemonLink
     */
    select?: SavePokemonLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavePokemonLink
     */
    omit?: SavePokemonLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavePokemonLinkInclude<ExtArgs> | null
    /**
     * Filter, which SavePokemonLink to fetch.
     */
    where?: SavePokemonLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavePokemonLinks to fetch.
     */
    orderBy?: SavePokemonLinkOrderByWithRelationInput | SavePokemonLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavePokemonLinks.
     */
    cursor?: SavePokemonLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavePokemonLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavePokemonLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavePokemonLinks.
     */
    distinct?: SavePokemonLinkScalarFieldEnum | SavePokemonLinkScalarFieldEnum[]
  }

  /**
   * SavePokemonLink findMany
   */
  export type SavePokemonLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavePokemonLink
     */
    select?: SavePokemonLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavePokemonLink
     */
    omit?: SavePokemonLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavePokemonLinkInclude<ExtArgs> | null
    /**
     * Filter, which SavePokemonLinks to fetch.
     */
    where?: SavePokemonLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavePokemonLinks to fetch.
     */
    orderBy?: SavePokemonLinkOrderByWithRelationInput | SavePokemonLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavePokemonLinks.
     */
    cursor?: SavePokemonLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavePokemonLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavePokemonLinks.
     */
    skip?: number
    distinct?: SavePokemonLinkScalarFieldEnum | SavePokemonLinkScalarFieldEnum[]
  }

  /**
   * SavePokemonLink create
   */
  export type SavePokemonLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavePokemonLink
     */
    select?: SavePokemonLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavePokemonLink
     */
    omit?: SavePokemonLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavePokemonLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a SavePokemonLink.
     */
    data: XOR<SavePokemonLinkCreateInput, SavePokemonLinkUncheckedCreateInput>
  }

  /**
   * SavePokemonLink createMany
   */
  export type SavePokemonLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavePokemonLinks.
     */
    data: SavePokemonLinkCreateManyInput | SavePokemonLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavePokemonLink createManyAndReturn
   */
  export type SavePokemonLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavePokemonLink
     */
    select?: SavePokemonLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavePokemonLink
     */
    omit?: SavePokemonLinkOmit<ExtArgs> | null
    /**
     * The data used to create many SavePokemonLinks.
     */
    data: SavePokemonLinkCreateManyInput | SavePokemonLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavePokemonLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavePokemonLink update
   */
  export type SavePokemonLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavePokemonLink
     */
    select?: SavePokemonLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavePokemonLink
     */
    omit?: SavePokemonLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavePokemonLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a SavePokemonLink.
     */
    data: XOR<SavePokemonLinkUpdateInput, SavePokemonLinkUncheckedUpdateInput>
    /**
     * Choose, which SavePokemonLink to update.
     */
    where: SavePokemonLinkWhereUniqueInput
  }

  /**
   * SavePokemonLink updateMany
   */
  export type SavePokemonLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavePokemonLinks.
     */
    data: XOR<SavePokemonLinkUpdateManyMutationInput, SavePokemonLinkUncheckedUpdateManyInput>
    /**
     * Filter which SavePokemonLinks to update
     */
    where?: SavePokemonLinkWhereInput
    /**
     * Limit how many SavePokemonLinks to update.
     */
    limit?: number
  }

  /**
   * SavePokemonLink updateManyAndReturn
   */
  export type SavePokemonLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavePokemonLink
     */
    select?: SavePokemonLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavePokemonLink
     */
    omit?: SavePokemonLinkOmit<ExtArgs> | null
    /**
     * The data used to update SavePokemonLinks.
     */
    data: XOR<SavePokemonLinkUpdateManyMutationInput, SavePokemonLinkUncheckedUpdateManyInput>
    /**
     * Filter which SavePokemonLinks to update
     */
    where?: SavePokemonLinkWhereInput
    /**
     * Limit how many SavePokemonLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavePokemonLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavePokemonLink upsert
   */
  export type SavePokemonLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavePokemonLink
     */
    select?: SavePokemonLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavePokemonLink
     */
    omit?: SavePokemonLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavePokemonLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the SavePokemonLink to update in case it exists.
     */
    where: SavePokemonLinkWhereUniqueInput
    /**
     * In case the SavePokemonLink found by the `where` argument doesn't exist, create a new SavePokemonLink with this data.
     */
    create: XOR<SavePokemonLinkCreateInput, SavePokemonLinkUncheckedCreateInput>
    /**
     * In case the SavePokemonLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavePokemonLinkUpdateInput, SavePokemonLinkUncheckedUpdateInput>
  }

  /**
   * SavePokemonLink delete
   */
  export type SavePokemonLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavePokemonLink
     */
    select?: SavePokemonLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavePokemonLink
     */
    omit?: SavePokemonLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavePokemonLinkInclude<ExtArgs> | null
    /**
     * Filter which SavePokemonLink to delete.
     */
    where: SavePokemonLinkWhereUniqueInput
  }

  /**
   * SavePokemonLink deleteMany
   */
  export type SavePokemonLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavePokemonLinks to delete
     */
    where?: SavePokemonLinkWhereInput
    /**
     * Limit how many SavePokemonLinks to delete.
     */
    limit?: number
  }

  /**
   * SavePokemonLink without action
   */
  export type SavePokemonLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavePokemonLink
     */
    select?: SavePokemonLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavePokemonLink
     */
    omit?: SavePokemonLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavePokemonLinkInclude<ExtArgs> | null
  }


  /**
   * Model SaveObjectLink
   */

  export type AggregateSaveObjectLink = {
    _count: SaveObjectLinkCountAggregateOutputType | null
    _avg: SaveObjectLinkAvgAggregateOutputType | null
    _sum: SaveObjectLinkSumAggregateOutputType | null
    _min: SaveObjectLinkMinAggregateOutputType | null
    _max: SaveObjectLinkMaxAggregateOutputType | null
  }

  export type SaveObjectLinkAvgAggregateOutputType = {
    saveId: number | null
    objectId: number | null
  }

  export type SaveObjectLinkSumAggregateOutputType = {
    saveId: number | null
    objectId: number | null
  }

  export type SaveObjectLinkMinAggregateOutputType = {
    saveId: number | null
    objectId: number | null
  }

  export type SaveObjectLinkMaxAggregateOutputType = {
    saveId: number | null
    objectId: number | null
  }

  export type SaveObjectLinkCountAggregateOutputType = {
    saveId: number
    objectId: number
    _all: number
  }


  export type SaveObjectLinkAvgAggregateInputType = {
    saveId?: true
    objectId?: true
  }

  export type SaveObjectLinkSumAggregateInputType = {
    saveId?: true
    objectId?: true
  }

  export type SaveObjectLinkMinAggregateInputType = {
    saveId?: true
    objectId?: true
  }

  export type SaveObjectLinkMaxAggregateInputType = {
    saveId?: true
    objectId?: true
  }

  export type SaveObjectLinkCountAggregateInputType = {
    saveId?: true
    objectId?: true
    _all?: true
  }

  export type SaveObjectLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaveObjectLink to aggregate.
     */
    where?: SaveObjectLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaveObjectLinks to fetch.
     */
    orderBy?: SaveObjectLinkOrderByWithRelationInput | SaveObjectLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaveObjectLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaveObjectLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaveObjectLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SaveObjectLinks
    **/
    _count?: true | SaveObjectLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaveObjectLinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaveObjectLinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaveObjectLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaveObjectLinkMaxAggregateInputType
  }

  export type GetSaveObjectLinkAggregateType<T extends SaveObjectLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateSaveObjectLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaveObjectLink[P]>
      : GetScalarType<T[P], AggregateSaveObjectLink[P]>
  }




  export type SaveObjectLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaveObjectLinkWhereInput
    orderBy?: SaveObjectLinkOrderByWithAggregationInput | SaveObjectLinkOrderByWithAggregationInput[]
    by: SaveObjectLinkScalarFieldEnum[] | SaveObjectLinkScalarFieldEnum
    having?: SaveObjectLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaveObjectLinkCountAggregateInputType | true
    _avg?: SaveObjectLinkAvgAggregateInputType
    _sum?: SaveObjectLinkSumAggregateInputType
    _min?: SaveObjectLinkMinAggregateInputType
    _max?: SaveObjectLinkMaxAggregateInputType
  }

  export type SaveObjectLinkGroupByOutputType = {
    saveId: number
    objectId: number
    _count: SaveObjectLinkCountAggregateOutputType | null
    _avg: SaveObjectLinkAvgAggregateOutputType | null
    _sum: SaveObjectLinkSumAggregateOutputType | null
    _min: SaveObjectLinkMinAggregateOutputType | null
    _max: SaveObjectLinkMaxAggregateOutputType | null
  }

  type GetSaveObjectLinkGroupByPayload<T extends SaveObjectLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaveObjectLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaveObjectLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaveObjectLinkGroupByOutputType[P]>
            : GetScalarType<T[P], SaveObjectLinkGroupByOutputType[P]>
        }
      >
    >


  export type SaveObjectLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    saveId?: boolean
    objectId?: boolean
    save?: boolean | SaveDefaultArgs<ExtArgs>
    object?: boolean | ObjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saveObjectLink"]>

  export type SaveObjectLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    saveId?: boolean
    objectId?: boolean
    save?: boolean | SaveDefaultArgs<ExtArgs>
    object?: boolean | ObjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saveObjectLink"]>

  export type SaveObjectLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    saveId?: boolean
    objectId?: boolean
    save?: boolean | SaveDefaultArgs<ExtArgs>
    object?: boolean | ObjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saveObjectLink"]>

  export type SaveObjectLinkSelectScalar = {
    saveId?: boolean
    objectId?: boolean
  }

  export type SaveObjectLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"saveId" | "objectId", ExtArgs["result"]["saveObjectLink"]>
  export type SaveObjectLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    save?: boolean | SaveDefaultArgs<ExtArgs>
    object?: boolean | ObjectDefaultArgs<ExtArgs>
  }
  export type SaveObjectLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    save?: boolean | SaveDefaultArgs<ExtArgs>
    object?: boolean | ObjectDefaultArgs<ExtArgs>
  }
  export type SaveObjectLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    save?: boolean | SaveDefaultArgs<ExtArgs>
    object?: boolean | ObjectDefaultArgs<ExtArgs>
  }

  export type $SaveObjectLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SaveObjectLink"
    objects: {
      save: Prisma.$SavePayload<ExtArgs>
      object: Prisma.$ObjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      saveId: number
      objectId: number
    }, ExtArgs["result"]["saveObjectLink"]>
    composites: {}
  }

  type SaveObjectLinkGetPayload<S extends boolean | null | undefined | SaveObjectLinkDefaultArgs> = $Result.GetResult<Prisma.$SaveObjectLinkPayload, S>

  type SaveObjectLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaveObjectLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaveObjectLinkCountAggregateInputType | true
    }

  export interface SaveObjectLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SaveObjectLink'], meta: { name: 'SaveObjectLink' } }
    /**
     * Find zero or one SaveObjectLink that matches the filter.
     * @param {SaveObjectLinkFindUniqueArgs} args - Arguments to find a SaveObjectLink
     * @example
     * // Get one SaveObjectLink
     * const saveObjectLink = await prisma.saveObjectLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaveObjectLinkFindUniqueArgs>(args: SelectSubset<T, SaveObjectLinkFindUniqueArgs<ExtArgs>>): Prisma__SaveObjectLinkClient<$Result.GetResult<Prisma.$SaveObjectLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SaveObjectLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaveObjectLinkFindUniqueOrThrowArgs} args - Arguments to find a SaveObjectLink
     * @example
     * // Get one SaveObjectLink
     * const saveObjectLink = await prisma.saveObjectLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaveObjectLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, SaveObjectLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaveObjectLinkClient<$Result.GetResult<Prisma.$SaveObjectLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SaveObjectLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaveObjectLinkFindFirstArgs} args - Arguments to find a SaveObjectLink
     * @example
     * // Get one SaveObjectLink
     * const saveObjectLink = await prisma.saveObjectLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaveObjectLinkFindFirstArgs>(args?: SelectSubset<T, SaveObjectLinkFindFirstArgs<ExtArgs>>): Prisma__SaveObjectLinkClient<$Result.GetResult<Prisma.$SaveObjectLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SaveObjectLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaveObjectLinkFindFirstOrThrowArgs} args - Arguments to find a SaveObjectLink
     * @example
     * // Get one SaveObjectLink
     * const saveObjectLink = await prisma.saveObjectLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaveObjectLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, SaveObjectLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaveObjectLinkClient<$Result.GetResult<Prisma.$SaveObjectLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SaveObjectLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaveObjectLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SaveObjectLinks
     * const saveObjectLinks = await prisma.saveObjectLink.findMany()
     * 
     * // Get first 10 SaveObjectLinks
     * const saveObjectLinks = await prisma.saveObjectLink.findMany({ take: 10 })
     * 
     * // Only select the `saveId`
     * const saveObjectLinkWithSaveIdOnly = await prisma.saveObjectLink.findMany({ select: { saveId: true } })
     * 
     */
    findMany<T extends SaveObjectLinkFindManyArgs>(args?: SelectSubset<T, SaveObjectLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaveObjectLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SaveObjectLink.
     * @param {SaveObjectLinkCreateArgs} args - Arguments to create a SaveObjectLink.
     * @example
     * // Create one SaveObjectLink
     * const SaveObjectLink = await prisma.saveObjectLink.create({
     *   data: {
     *     // ... data to create a SaveObjectLink
     *   }
     * })
     * 
     */
    create<T extends SaveObjectLinkCreateArgs>(args: SelectSubset<T, SaveObjectLinkCreateArgs<ExtArgs>>): Prisma__SaveObjectLinkClient<$Result.GetResult<Prisma.$SaveObjectLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SaveObjectLinks.
     * @param {SaveObjectLinkCreateManyArgs} args - Arguments to create many SaveObjectLinks.
     * @example
     * // Create many SaveObjectLinks
     * const saveObjectLink = await prisma.saveObjectLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaveObjectLinkCreateManyArgs>(args?: SelectSubset<T, SaveObjectLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SaveObjectLinks and returns the data saved in the database.
     * @param {SaveObjectLinkCreateManyAndReturnArgs} args - Arguments to create many SaveObjectLinks.
     * @example
     * // Create many SaveObjectLinks
     * const saveObjectLink = await prisma.saveObjectLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SaveObjectLinks and only return the `saveId`
     * const saveObjectLinkWithSaveIdOnly = await prisma.saveObjectLink.createManyAndReturn({
     *   select: { saveId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaveObjectLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, SaveObjectLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaveObjectLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SaveObjectLink.
     * @param {SaveObjectLinkDeleteArgs} args - Arguments to delete one SaveObjectLink.
     * @example
     * // Delete one SaveObjectLink
     * const SaveObjectLink = await prisma.saveObjectLink.delete({
     *   where: {
     *     // ... filter to delete one SaveObjectLink
     *   }
     * })
     * 
     */
    delete<T extends SaveObjectLinkDeleteArgs>(args: SelectSubset<T, SaveObjectLinkDeleteArgs<ExtArgs>>): Prisma__SaveObjectLinkClient<$Result.GetResult<Prisma.$SaveObjectLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SaveObjectLink.
     * @param {SaveObjectLinkUpdateArgs} args - Arguments to update one SaveObjectLink.
     * @example
     * // Update one SaveObjectLink
     * const saveObjectLink = await prisma.saveObjectLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaveObjectLinkUpdateArgs>(args: SelectSubset<T, SaveObjectLinkUpdateArgs<ExtArgs>>): Prisma__SaveObjectLinkClient<$Result.GetResult<Prisma.$SaveObjectLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SaveObjectLinks.
     * @param {SaveObjectLinkDeleteManyArgs} args - Arguments to filter SaveObjectLinks to delete.
     * @example
     * // Delete a few SaveObjectLinks
     * const { count } = await prisma.saveObjectLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaveObjectLinkDeleteManyArgs>(args?: SelectSubset<T, SaveObjectLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaveObjectLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaveObjectLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SaveObjectLinks
     * const saveObjectLink = await prisma.saveObjectLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaveObjectLinkUpdateManyArgs>(args: SelectSubset<T, SaveObjectLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaveObjectLinks and returns the data updated in the database.
     * @param {SaveObjectLinkUpdateManyAndReturnArgs} args - Arguments to update many SaveObjectLinks.
     * @example
     * // Update many SaveObjectLinks
     * const saveObjectLink = await prisma.saveObjectLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SaveObjectLinks and only return the `saveId`
     * const saveObjectLinkWithSaveIdOnly = await prisma.saveObjectLink.updateManyAndReturn({
     *   select: { saveId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SaveObjectLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, SaveObjectLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaveObjectLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SaveObjectLink.
     * @param {SaveObjectLinkUpsertArgs} args - Arguments to update or create a SaveObjectLink.
     * @example
     * // Update or create a SaveObjectLink
     * const saveObjectLink = await prisma.saveObjectLink.upsert({
     *   create: {
     *     // ... data to create a SaveObjectLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SaveObjectLink we want to update
     *   }
     * })
     */
    upsert<T extends SaveObjectLinkUpsertArgs>(args: SelectSubset<T, SaveObjectLinkUpsertArgs<ExtArgs>>): Prisma__SaveObjectLinkClient<$Result.GetResult<Prisma.$SaveObjectLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SaveObjectLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaveObjectLinkCountArgs} args - Arguments to filter SaveObjectLinks to count.
     * @example
     * // Count the number of SaveObjectLinks
     * const count = await prisma.saveObjectLink.count({
     *   where: {
     *     // ... the filter for the SaveObjectLinks we want to count
     *   }
     * })
    **/
    count<T extends SaveObjectLinkCountArgs>(
      args?: Subset<T, SaveObjectLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaveObjectLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SaveObjectLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaveObjectLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SaveObjectLinkAggregateArgs>(args: Subset<T, SaveObjectLinkAggregateArgs>): Prisma.PrismaPromise<GetSaveObjectLinkAggregateType<T>>

    /**
     * Group by SaveObjectLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaveObjectLinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SaveObjectLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaveObjectLinkGroupByArgs['orderBy'] }
        : { orderBy?: SaveObjectLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SaveObjectLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaveObjectLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SaveObjectLink model
   */
  readonly fields: SaveObjectLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SaveObjectLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaveObjectLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    save<T extends SaveDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SaveDefaultArgs<ExtArgs>>): Prisma__SaveClient<$Result.GetResult<Prisma.$SavePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    object<T extends ObjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ObjectDefaultArgs<ExtArgs>>): Prisma__ObjectClient<$Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SaveObjectLink model
   */
  interface SaveObjectLinkFieldRefs {
    readonly saveId: FieldRef<"SaveObjectLink", 'Int'>
    readonly objectId: FieldRef<"SaveObjectLink", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SaveObjectLink findUnique
   */
  export type SaveObjectLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaveObjectLink
     */
    select?: SaveObjectLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaveObjectLink
     */
    omit?: SaveObjectLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveObjectLinkInclude<ExtArgs> | null
    /**
     * Filter, which SaveObjectLink to fetch.
     */
    where: SaveObjectLinkWhereUniqueInput
  }

  /**
   * SaveObjectLink findUniqueOrThrow
   */
  export type SaveObjectLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaveObjectLink
     */
    select?: SaveObjectLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaveObjectLink
     */
    omit?: SaveObjectLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveObjectLinkInclude<ExtArgs> | null
    /**
     * Filter, which SaveObjectLink to fetch.
     */
    where: SaveObjectLinkWhereUniqueInput
  }

  /**
   * SaveObjectLink findFirst
   */
  export type SaveObjectLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaveObjectLink
     */
    select?: SaveObjectLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaveObjectLink
     */
    omit?: SaveObjectLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveObjectLinkInclude<ExtArgs> | null
    /**
     * Filter, which SaveObjectLink to fetch.
     */
    where?: SaveObjectLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaveObjectLinks to fetch.
     */
    orderBy?: SaveObjectLinkOrderByWithRelationInput | SaveObjectLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaveObjectLinks.
     */
    cursor?: SaveObjectLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaveObjectLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaveObjectLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaveObjectLinks.
     */
    distinct?: SaveObjectLinkScalarFieldEnum | SaveObjectLinkScalarFieldEnum[]
  }

  /**
   * SaveObjectLink findFirstOrThrow
   */
  export type SaveObjectLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaveObjectLink
     */
    select?: SaveObjectLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaveObjectLink
     */
    omit?: SaveObjectLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveObjectLinkInclude<ExtArgs> | null
    /**
     * Filter, which SaveObjectLink to fetch.
     */
    where?: SaveObjectLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaveObjectLinks to fetch.
     */
    orderBy?: SaveObjectLinkOrderByWithRelationInput | SaveObjectLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaveObjectLinks.
     */
    cursor?: SaveObjectLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaveObjectLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaveObjectLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaveObjectLinks.
     */
    distinct?: SaveObjectLinkScalarFieldEnum | SaveObjectLinkScalarFieldEnum[]
  }

  /**
   * SaveObjectLink findMany
   */
  export type SaveObjectLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaveObjectLink
     */
    select?: SaveObjectLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaveObjectLink
     */
    omit?: SaveObjectLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveObjectLinkInclude<ExtArgs> | null
    /**
     * Filter, which SaveObjectLinks to fetch.
     */
    where?: SaveObjectLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaveObjectLinks to fetch.
     */
    orderBy?: SaveObjectLinkOrderByWithRelationInput | SaveObjectLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SaveObjectLinks.
     */
    cursor?: SaveObjectLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaveObjectLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaveObjectLinks.
     */
    skip?: number
    distinct?: SaveObjectLinkScalarFieldEnum | SaveObjectLinkScalarFieldEnum[]
  }

  /**
   * SaveObjectLink create
   */
  export type SaveObjectLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaveObjectLink
     */
    select?: SaveObjectLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaveObjectLink
     */
    omit?: SaveObjectLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveObjectLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a SaveObjectLink.
     */
    data: XOR<SaveObjectLinkCreateInput, SaveObjectLinkUncheckedCreateInput>
  }

  /**
   * SaveObjectLink createMany
   */
  export type SaveObjectLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SaveObjectLinks.
     */
    data: SaveObjectLinkCreateManyInput | SaveObjectLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SaveObjectLink createManyAndReturn
   */
  export type SaveObjectLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaveObjectLink
     */
    select?: SaveObjectLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SaveObjectLink
     */
    omit?: SaveObjectLinkOmit<ExtArgs> | null
    /**
     * The data used to create many SaveObjectLinks.
     */
    data: SaveObjectLinkCreateManyInput | SaveObjectLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveObjectLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SaveObjectLink update
   */
  export type SaveObjectLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaveObjectLink
     */
    select?: SaveObjectLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaveObjectLink
     */
    omit?: SaveObjectLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveObjectLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a SaveObjectLink.
     */
    data: XOR<SaveObjectLinkUpdateInput, SaveObjectLinkUncheckedUpdateInput>
    /**
     * Choose, which SaveObjectLink to update.
     */
    where: SaveObjectLinkWhereUniqueInput
  }

  /**
   * SaveObjectLink updateMany
   */
  export type SaveObjectLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SaveObjectLinks.
     */
    data: XOR<SaveObjectLinkUpdateManyMutationInput, SaveObjectLinkUncheckedUpdateManyInput>
    /**
     * Filter which SaveObjectLinks to update
     */
    where?: SaveObjectLinkWhereInput
    /**
     * Limit how many SaveObjectLinks to update.
     */
    limit?: number
  }

  /**
   * SaveObjectLink updateManyAndReturn
   */
  export type SaveObjectLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaveObjectLink
     */
    select?: SaveObjectLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SaveObjectLink
     */
    omit?: SaveObjectLinkOmit<ExtArgs> | null
    /**
     * The data used to update SaveObjectLinks.
     */
    data: XOR<SaveObjectLinkUpdateManyMutationInput, SaveObjectLinkUncheckedUpdateManyInput>
    /**
     * Filter which SaveObjectLinks to update
     */
    where?: SaveObjectLinkWhereInput
    /**
     * Limit how many SaveObjectLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveObjectLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SaveObjectLink upsert
   */
  export type SaveObjectLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaveObjectLink
     */
    select?: SaveObjectLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaveObjectLink
     */
    omit?: SaveObjectLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveObjectLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the SaveObjectLink to update in case it exists.
     */
    where: SaveObjectLinkWhereUniqueInput
    /**
     * In case the SaveObjectLink found by the `where` argument doesn't exist, create a new SaveObjectLink with this data.
     */
    create: XOR<SaveObjectLinkCreateInput, SaveObjectLinkUncheckedCreateInput>
    /**
     * In case the SaveObjectLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaveObjectLinkUpdateInput, SaveObjectLinkUncheckedUpdateInput>
  }

  /**
   * SaveObjectLink delete
   */
  export type SaveObjectLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaveObjectLink
     */
    select?: SaveObjectLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaveObjectLink
     */
    omit?: SaveObjectLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveObjectLinkInclude<ExtArgs> | null
    /**
     * Filter which SaveObjectLink to delete.
     */
    where: SaveObjectLinkWhereUniqueInput
  }

  /**
   * SaveObjectLink deleteMany
   */
  export type SaveObjectLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaveObjectLinks to delete
     */
    where?: SaveObjectLinkWhereInput
    /**
     * Limit how many SaveObjectLinks to delete.
     */
    limit?: number
  }

  /**
   * SaveObjectLink without action
   */
  export type SaveObjectLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaveObjectLink
     */
    select?: SaveObjectLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaveObjectLink
     */
    omit?: SaveObjectLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveObjectLinkInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SaveScalarFieldEnum: {
    id: 'id',
    userMail: 'userMail',
    userName: 'userName',
    playerLevel: 'playerLevel',
    money: 'money'
  };

  export type SaveScalarFieldEnum = (typeof SaveScalarFieldEnum)[keyof typeof SaveScalarFieldEnum]


  export const PokemonScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type PokemonScalarFieldEnum = (typeof PokemonScalarFieldEnum)[keyof typeof PokemonScalarFieldEnum]


  export const ObjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    stock: 'stock',
    level: 'level'
  };

  export type ObjectScalarFieldEnum = (typeof ObjectScalarFieldEnum)[keyof typeof ObjectScalarFieldEnum]


  export const SavePokemonLinkScalarFieldEnum: {
    saveId: 'saveId',
    pokemonId: 'pokemonId'
  };

  export type SavePokemonLinkScalarFieldEnum = (typeof SavePokemonLinkScalarFieldEnum)[keyof typeof SavePokemonLinkScalarFieldEnum]


  export const SaveObjectLinkScalarFieldEnum: {
    saveId: 'saveId',
    objectId: 'objectId'
  };

  export type SaveObjectLinkScalarFieldEnum = (typeof SaveObjectLinkScalarFieldEnum)[keyof typeof SaveObjectLinkScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type SaveWhereInput = {
    AND?: SaveWhereInput | SaveWhereInput[]
    OR?: SaveWhereInput[]
    NOT?: SaveWhereInput | SaveWhereInput[]
    id?: IntFilter<"Save"> | number
    userMail?: StringFilter<"Save"> | string
    userName?: StringFilter<"Save"> | string
    playerLevel?: IntFilter<"Save"> | number
    money?: IntFilter<"Save"> | number
    pokemons?: SavePokemonLinkListRelationFilter
    objects?: SaveObjectLinkListRelationFilter
  }

  export type SaveOrderByWithRelationInput = {
    id?: SortOrder
    userMail?: SortOrder
    userName?: SortOrder
    playerLevel?: SortOrder
    money?: SortOrder
    pokemons?: SavePokemonLinkOrderByRelationAggregateInput
    objects?: SaveObjectLinkOrderByRelationAggregateInput
  }

  export type SaveWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SaveWhereInput | SaveWhereInput[]
    OR?: SaveWhereInput[]
    NOT?: SaveWhereInput | SaveWhereInput[]
    userMail?: StringFilter<"Save"> | string
    userName?: StringFilter<"Save"> | string
    playerLevel?: IntFilter<"Save"> | number
    money?: IntFilter<"Save"> | number
    pokemons?: SavePokemonLinkListRelationFilter
    objects?: SaveObjectLinkListRelationFilter
  }, "id">

  export type SaveOrderByWithAggregationInput = {
    id?: SortOrder
    userMail?: SortOrder
    userName?: SortOrder
    playerLevel?: SortOrder
    money?: SortOrder
    _count?: SaveCountOrderByAggregateInput
    _avg?: SaveAvgOrderByAggregateInput
    _max?: SaveMaxOrderByAggregateInput
    _min?: SaveMinOrderByAggregateInput
    _sum?: SaveSumOrderByAggregateInput
  }

  export type SaveScalarWhereWithAggregatesInput = {
    AND?: SaveScalarWhereWithAggregatesInput | SaveScalarWhereWithAggregatesInput[]
    OR?: SaveScalarWhereWithAggregatesInput[]
    NOT?: SaveScalarWhereWithAggregatesInput | SaveScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Save"> | number
    userMail?: StringWithAggregatesFilter<"Save"> | string
    userName?: StringWithAggregatesFilter<"Save"> | string
    playerLevel?: IntWithAggregatesFilter<"Save"> | number
    money?: IntWithAggregatesFilter<"Save"> | number
  }

  export type PokemonWhereInput = {
    AND?: PokemonWhereInput | PokemonWhereInput[]
    OR?: PokemonWhereInput[]
    NOT?: PokemonWhereInput | PokemonWhereInput[]
    id?: IntFilter<"Pokemon"> | number
    name?: StringFilter<"Pokemon"> | string
    saves?: SavePokemonLinkListRelationFilter
  }

  export type PokemonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    saves?: SavePokemonLinkOrderByRelationAggregateInput
  }

  export type PokemonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PokemonWhereInput | PokemonWhereInput[]
    OR?: PokemonWhereInput[]
    NOT?: PokemonWhereInput | PokemonWhereInput[]
    name?: StringFilter<"Pokemon"> | string
    saves?: SavePokemonLinkListRelationFilter
  }, "id">

  export type PokemonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: PokemonCountOrderByAggregateInput
    _avg?: PokemonAvgOrderByAggregateInput
    _max?: PokemonMaxOrderByAggregateInput
    _min?: PokemonMinOrderByAggregateInput
    _sum?: PokemonSumOrderByAggregateInput
  }

  export type PokemonScalarWhereWithAggregatesInput = {
    AND?: PokemonScalarWhereWithAggregatesInput | PokemonScalarWhereWithAggregatesInput[]
    OR?: PokemonScalarWhereWithAggregatesInput[]
    NOT?: PokemonScalarWhereWithAggregatesInput | PokemonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pokemon"> | number
    name?: StringWithAggregatesFilter<"Pokemon"> | string
  }

  export type ObjectWhereInput = {
    AND?: ObjectWhereInput | ObjectWhereInput[]
    OR?: ObjectWhereInput[]
    NOT?: ObjectWhereInput | ObjectWhereInput[]
    id?: IntFilter<"Object"> | number
    name?: StringFilter<"Object"> | string
    price?: IntFilter<"Object"> | number
    stock?: IntFilter<"Object"> | number
    level?: IntFilter<"Object"> | number
    saves?: SaveObjectLinkListRelationFilter
  }

  export type ObjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    level?: SortOrder
    saves?: SaveObjectLinkOrderByRelationAggregateInput
  }

  export type ObjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ObjectWhereInput | ObjectWhereInput[]
    OR?: ObjectWhereInput[]
    NOT?: ObjectWhereInput | ObjectWhereInput[]
    name?: StringFilter<"Object"> | string
    price?: IntFilter<"Object"> | number
    stock?: IntFilter<"Object"> | number
    level?: IntFilter<"Object"> | number
    saves?: SaveObjectLinkListRelationFilter
  }, "id">

  export type ObjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    level?: SortOrder
    _count?: ObjectCountOrderByAggregateInput
    _avg?: ObjectAvgOrderByAggregateInput
    _max?: ObjectMaxOrderByAggregateInput
    _min?: ObjectMinOrderByAggregateInput
    _sum?: ObjectSumOrderByAggregateInput
  }

  export type ObjectScalarWhereWithAggregatesInput = {
    AND?: ObjectScalarWhereWithAggregatesInput | ObjectScalarWhereWithAggregatesInput[]
    OR?: ObjectScalarWhereWithAggregatesInput[]
    NOT?: ObjectScalarWhereWithAggregatesInput | ObjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Object"> | number
    name?: StringWithAggregatesFilter<"Object"> | string
    price?: IntWithAggregatesFilter<"Object"> | number
    stock?: IntWithAggregatesFilter<"Object"> | number
    level?: IntWithAggregatesFilter<"Object"> | number
  }

  export type SavePokemonLinkWhereInput = {
    AND?: SavePokemonLinkWhereInput | SavePokemonLinkWhereInput[]
    OR?: SavePokemonLinkWhereInput[]
    NOT?: SavePokemonLinkWhereInput | SavePokemonLinkWhereInput[]
    saveId?: IntFilter<"SavePokemonLink"> | number
    pokemonId?: IntFilter<"SavePokemonLink"> | number
    save?: XOR<SaveScalarRelationFilter, SaveWhereInput>
    pokemon?: XOR<PokemonScalarRelationFilter, PokemonWhereInput>
  }

  export type SavePokemonLinkOrderByWithRelationInput = {
    saveId?: SortOrder
    pokemonId?: SortOrder
    save?: SaveOrderByWithRelationInput
    pokemon?: PokemonOrderByWithRelationInput
  }

  export type SavePokemonLinkWhereUniqueInput = Prisma.AtLeast<{
    saveId_pokemonId?: SavePokemonLinkSaveIdPokemonIdCompoundUniqueInput
    AND?: SavePokemonLinkWhereInput | SavePokemonLinkWhereInput[]
    OR?: SavePokemonLinkWhereInput[]
    NOT?: SavePokemonLinkWhereInput | SavePokemonLinkWhereInput[]
    saveId?: IntFilter<"SavePokemonLink"> | number
    pokemonId?: IntFilter<"SavePokemonLink"> | number
    save?: XOR<SaveScalarRelationFilter, SaveWhereInput>
    pokemon?: XOR<PokemonScalarRelationFilter, PokemonWhereInput>
  }, "saveId_pokemonId">

  export type SavePokemonLinkOrderByWithAggregationInput = {
    saveId?: SortOrder
    pokemonId?: SortOrder
    _count?: SavePokemonLinkCountOrderByAggregateInput
    _avg?: SavePokemonLinkAvgOrderByAggregateInput
    _max?: SavePokemonLinkMaxOrderByAggregateInput
    _min?: SavePokemonLinkMinOrderByAggregateInput
    _sum?: SavePokemonLinkSumOrderByAggregateInput
  }

  export type SavePokemonLinkScalarWhereWithAggregatesInput = {
    AND?: SavePokemonLinkScalarWhereWithAggregatesInput | SavePokemonLinkScalarWhereWithAggregatesInput[]
    OR?: SavePokemonLinkScalarWhereWithAggregatesInput[]
    NOT?: SavePokemonLinkScalarWhereWithAggregatesInput | SavePokemonLinkScalarWhereWithAggregatesInput[]
    saveId?: IntWithAggregatesFilter<"SavePokemonLink"> | number
    pokemonId?: IntWithAggregatesFilter<"SavePokemonLink"> | number
  }

  export type SaveObjectLinkWhereInput = {
    AND?: SaveObjectLinkWhereInput | SaveObjectLinkWhereInput[]
    OR?: SaveObjectLinkWhereInput[]
    NOT?: SaveObjectLinkWhereInput | SaveObjectLinkWhereInput[]
    saveId?: IntFilter<"SaveObjectLink"> | number
    objectId?: IntFilter<"SaveObjectLink"> | number
    save?: XOR<SaveScalarRelationFilter, SaveWhereInput>
    object?: XOR<ObjectScalarRelationFilter, ObjectWhereInput>
  }

  export type SaveObjectLinkOrderByWithRelationInput = {
    saveId?: SortOrder
    objectId?: SortOrder
    save?: SaveOrderByWithRelationInput
    object?: ObjectOrderByWithRelationInput
  }

  export type SaveObjectLinkWhereUniqueInput = Prisma.AtLeast<{
    saveId_objectId?: SaveObjectLinkSaveIdObjectIdCompoundUniqueInput
    AND?: SaveObjectLinkWhereInput | SaveObjectLinkWhereInput[]
    OR?: SaveObjectLinkWhereInput[]
    NOT?: SaveObjectLinkWhereInput | SaveObjectLinkWhereInput[]
    saveId?: IntFilter<"SaveObjectLink"> | number
    objectId?: IntFilter<"SaveObjectLink"> | number
    save?: XOR<SaveScalarRelationFilter, SaveWhereInput>
    object?: XOR<ObjectScalarRelationFilter, ObjectWhereInput>
  }, "saveId_objectId">

  export type SaveObjectLinkOrderByWithAggregationInput = {
    saveId?: SortOrder
    objectId?: SortOrder
    _count?: SaveObjectLinkCountOrderByAggregateInput
    _avg?: SaveObjectLinkAvgOrderByAggregateInput
    _max?: SaveObjectLinkMaxOrderByAggregateInput
    _min?: SaveObjectLinkMinOrderByAggregateInput
    _sum?: SaveObjectLinkSumOrderByAggregateInput
  }

  export type SaveObjectLinkScalarWhereWithAggregatesInput = {
    AND?: SaveObjectLinkScalarWhereWithAggregatesInput | SaveObjectLinkScalarWhereWithAggregatesInput[]
    OR?: SaveObjectLinkScalarWhereWithAggregatesInput[]
    NOT?: SaveObjectLinkScalarWhereWithAggregatesInput | SaveObjectLinkScalarWhereWithAggregatesInput[]
    saveId?: IntWithAggregatesFilter<"SaveObjectLink"> | number
    objectId?: IntWithAggregatesFilter<"SaveObjectLink"> | number
  }

  export type SaveCreateInput = {
    userMail: string
    userName: string
    playerLevel: number
    money: number
    pokemons?: SavePokemonLinkCreateNestedManyWithoutSaveInput
    objects?: SaveObjectLinkCreateNestedManyWithoutSaveInput
  }

  export type SaveUncheckedCreateInput = {
    id?: number
    userMail: string
    userName: string
    playerLevel: number
    money: number
    pokemons?: SavePokemonLinkUncheckedCreateNestedManyWithoutSaveInput
    objects?: SaveObjectLinkUncheckedCreateNestedManyWithoutSaveInput
  }

  export type SaveUpdateInput = {
    userMail?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    playerLevel?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    pokemons?: SavePokemonLinkUpdateManyWithoutSaveNestedInput
    objects?: SaveObjectLinkUpdateManyWithoutSaveNestedInput
  }

  export type SaveUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userMail?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    playerLevel?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    pokemons?: SavePokemonLinkUncheckedUpdateManyWithoutSaveNestedInput
    objects?: SaveObjectLinkUncheckedUpdateManyWithoutSaveNestedInput
  }

  export type SaveCreateManyInput = {
    id?: number
    userMail: string
    userName: string
    playerLevel: number
    money: number
  }

  export type SaveUpdateManyMutationInput = {
    userMail?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    playerLevel?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
  }

  export type SaveUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userMail?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    playerLevel?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
  }

  export type PokemonCreateInput = {
    name: string
    saves?: SavePokemonLinkCreateNestedManyWithoutPokemonInput
  }

  export type PokemonUncheckedCreateInput = {
    id?: number
    name: string
    saves?: SavePokemonLinkUncheckedCreateNestedManyWithoutPokemonInput
  }

  export type PokemonUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    saves?: SavePokemonLinkUpdateManyWithoutPokemonNestedInput
  }

  export type PokemonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    saves?: SavePokemonLinkUncheckedUpdateManyWithoutPokemonNestedInput
  }

  export type PokemonCreateManyInput = {
    id?: number
    name: string
  }

  export type PokemonUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PokemonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ObjectCreateInput = {
    name: string
    price: number
    stock: number
    level: number
    saves?: SaveObjectLinkCreateNestedManyWithoutObjectInput
  }

  export type ObjectUncheckedCreateInput = {
    id?: number
    name: string
    price: number
    stock: number
    level: number
    saves?: SaveObjectLinkUncheckedCreateNestedManyWithoutObjectInput
  }

  export type ObjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    saves?: SaveObjectLinkUpdateManyWithoutObjectNestedInput
  }

  export type ObjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    saves?: SaveObjectLinkUncheckedUpdateManyWithoutObjectNestedInput
  }

  export type ObjectCreateManyInput = {
    id?: number
    name: string
    price: number
    stock: number
    level: number
  }

  export type ObjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
  }

  export type ObjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
  }

  export type SavePokemonLinkCreateInput = {
    save: SaveCreateNestedOneWithoutPokemonsInput
    pokemon: PokemonCreateNestedOneWithoutSavesInput
  }

  export type SavePokemonLinkUncheckedCreateInput = {
    saveId: number
    pokemonId: number
  }

  export type SavePokemonLinkUpdateInput = {
    save?: SaveUpdateOneRequiredWithoutPokemonsNestedInput
    pokemon?: PokemonUpdateOneRequiredWithoutSavesNestedInput
  }

  export type SavePokemonLinkUncheckedUpdateInput = {
    saveId?: IntFieldUpdateOperationsInput | number
    pokemonId?: IntFieldUpdateOperationsInput | number
  }

  export type SavePokemonLinkCreateManyInput = {
    saveId: number
    pokemonId: number
  }

  export type SavePokemonLinkUpdateManyMutationInput = {

  }

  export type SavePokemonLinkUncheckedUpdateManyInput = {
    saveId?: IntFieldUpdateOperationsInput | number
    pokemonId?: IntFieldUpdateOperationsInput | number
  }

  export type SaveObjectLinkCreateInput = {
    save: SaveCreateNestedOneWithoutObjectsInput
    object: ObjectCreateNestedOneWithoutSavesInput
  }

  export type SaveObjectLinkUncheckedCreateInput = {
    saveId: number
    objectId: number
  }

  export type SaveObjectLinkUpdateInput = {
    save?: SaveUpdateOneRequiredWithoutObjectsNestedInput
    object?: ObjectUpdateOneRequiredWithoutSavesNestedInput
  }

  export type SaveObjectLinkUncheckedUpdateInput = {
    saveId?: IntFieldUpdateOperationsInput | number
    objectId?: IntFieldUpdateOperationsInput | number
  }

  export type SaveObjectLinkCreateManyInput = {
    saveId: number
    objectId: number
  }

  export type SaveObjectLinkUpdateManyMutationInput = {

  }

  export type SaveObjectLinkUncheckedUpdateManyInput = {
    saveId?: IntFieldUpdateOperationsInput | number
    objectId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SavePokemonLinkListRelationFilter = {
    every?: SavePokemonLinkWhereInput
    some?: SavePokemonLinkWhereInput
    none?: SavePokemonLinkWhereInput
  }

  export type SaveObjectLinkListRelationFilter = {
    every?: SaveObjectLinkWhereInput
    some?: SaveObjectLinkWhereInput
    none?: SaveObjectLinkWhereInput
  }

  export type SavePokemonLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SaveObjectLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SaveCountOrderByAggregateInput = {
    id?: SortOrder
    userMail?: SortOrder
    userName?: SortOrder
    playerLevel?: SortOrder
    money?: SortOrder
  }

  export type SaveAvgOrderByAggregateInput = {
    id?: SortOrder
    playerLevel?: SortOrder
    money?: SortOrder
  }

  export type SaveMaxOrderByAggregateInput = {
    id?: SortOrder
    userMail?: SortOrder
    userName?: SortOrder
    playerLevel?: SortOrder
    money?: SortOrder
  }

  export type SaveMinOrderByAggregateInput = {
    id?: SortOrder
    userMail?: SortOrder
    userName?: SortOrder
    playerLevel?: SortOrder
    money?: SortOrder
  }

  export type SaveSumOrderByAggregateInput = {
    id?: SortOrder
    playerLevel?: SortOrder
    money?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type PokemonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PokemonAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PokemonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PokemonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PokemonSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ObjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    level?: SortOrder
  }

  export type ObjectAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    level?: SortOrder
  }

  export type ObjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    level?: SortOrder
  }

  export type ObjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    level?: SortOrder
  }

  export type ObjectSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    level?: SortOrder
  }

  export type SaveScalarRelationFilter = {
    is?: SaveWhereInput
    isNot?: SaveWhereInput
  }

  export type PokemonScalarRelationFilter = {
    is?: PokemonWhereInput
    isNot?: PokemonWhereInput
  }

  export type SavePokemonLinkSaveIdPokemonIdCompoundUniqueInput = {
    saveId: number
    pokemonId: number
  }

  export type SavePokemonLinkCountOrderByAggregateInput = {
    saveId?: SortOrder
    pokemonId?: SortOrder
  }

  export type SavePokemonLinkAvgOrderByAggregateInput = {
    saveId?: SortOrder
    pokemonId?: SortOrder
  }

  export type SavePokemonLinkMaxOrderByAggregateInput = {
    saveId?: SortOrder
    pokemonId?: SortOrder
  }

  export type SavePokemonLinkMinOrderByAggregateInput = {
    saveId?: SortOrder
    pokemonId?: SortOrder
  }

  export type SavePokemonLinkSumOrderByAggregateInput = {
    saveId?: SortOrder
    pokemonId?: SortOrder
  }

  export type ObjectScalarRelationFilter = {
    is?: ObjectWhereInput
    isNot?: ObjectWhereInput
  }

  export type SaveObjectLinkSaveIdObjectIdCompoundUniqueInput = {
    saveId: number
    objectId: number
  }

  export type SaveObjectLinkCountOrderByAggregateInput = {
    saveId?: SortOrder
    objectId?: SortOrder
  }

  export type SaveObjectLinkAvgOrderByAggregateInput = {
    saveId?: SortOrder
    objectId?: SortOrder
  }

  export type SaveObjectLinkMaxOrderByAggregateInput = {
    saveId?: SortOrder
    objectId?: SortOrder
  }

  export type SaveObjectLinkMinOrderByAggregateInput = {
    saveId?: SortOrder
    objectId?: SortOrder
  }

  export type SaveObjectLinkSumOrderByAggregateInput = {
    saveId?: SortOrder
    objectId?: SortOrder
  }

  export type SavePokemonLinkCreateNestedManyWithoutSaveInput = {
    create?: XOR<SavePokemonLinkCreateWithoutSaveInput, SavePokemonLinkUncheckedCreateWithoutSaveInput> | SavePokemonLinkCreateWithoutSaveInput[] | SavePokemonLinkUncheckedCreateWithoutSaveInput[]
    connectOrCreate?: SavePokemonLinkCreateOrConnectWithoutSaveInput | SavePokemonLinkCreateOrConnectWithoutSaveInput[]
    createMany?: SavePokemonLinkCreateManySaveInputEnvelope
    connect?: SavePokemonLinkWhereUniqueInput | SavePokemonLinkWhereUniqueInput[]
  }

  export type SaveObjectLinkCreateNestedManyWithoutSaveInput = {
    create?: XOR<SaveObjectLinkCreateWithoutSaveInput, SaveObjectLinkUncheckedCreateWithoutSaveInput> | SaveObjectLinkCreateWithoutSaveInput[] | SaveObjectLinkUncheckedCreateWithoutSaveInput[]
    connectOrCreate?: SaveObjectLinkCreateOrConnectWithoutSaveInput | SaveObjectLinkCreateOrConnectWithoutSaveInput[]
    createMany?: SaveObjectLinkCreateManySaveInputEnvelope
    connect?: SaveObjectLinkWhereUniqueInput | SaveObjectLinkWhereUniqueInput[]
  }

  export type SavePokemonLinkUncheckedCreateNestedManyWithoutSaveInput = {
    create?: XOR<SavePokemonLinkCreateWithoutSaveInput, SavePokemonLinkUncheckedCreateWithoutSaveInput> | SavePokemonLinkCreateWithoutSaveInput[] | SavePokemonLinkUncheckedCreateWithoutSaveInput[]
    connectOrCreate?: SavePokemonLinkCreateOrConnectWithoutSaveInput | SavePokemonLinkCreateOrConnectWithoutSaveInput[]
    createMany?: SavePokemonLinkCreateManySaveInputEnvelope
    connect?: SavePokemonLinkWhereUniqueInput | SavePokemonLinkWhereUniqueInput[]
  }

  export type SaveObjectLinkUncheckedCreateNestedManyWithoutSaveInput = {
    create?: XOR<SaveObjectLinkCreateWithoutSaveInput, SaveObjectLinkUncheckedCreateWithoutSaveInput> | SaveObjectLinkCreateWithoutSaveInput[] | SaveObjectLinkUncheckedCreateWithoutSaveInput[]
    connectOrCreate?: SaveObjectLinkCreateOrConnectWithoutSaveInput | SaveObjectLinkCreateOrConnectWithoutSaveInput[]
    createMany?: SaveObjectLinkCreateManySaveInputEnvelope
    connect?: SaveObjectLinkWhereUniqueInput | SaveObjectLinkWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SavePokemonLinkUpdateManyWithoutSaveNestedInput = {
    create?: XOR<SavePokemonLinkCreateWithoutSaveInput, SavePokemonLinkUncheckedCreateWithoutSaveInput> | SavePokemonLinkCreateWithoutSaveInput[] | SavePokemonLinkUncheckedCreateWithoutSaveInput[]
    connectOrCreate?: SavePokemonLinkCreateOrConnectWithoutSaveInput | SavePokemonLinkCreateOrConnectWithoutSaveInput[]
    upsert?: SavePokemonLinkUpsertWithWhereUniqueWithoutSaveInput | SavePokemonLinkUpsertWithWhereUniqueWithoutSaveInput[]
    createMany?: SavePokemonLinkCreateManySaveInputEnvelope
    set?: SavePokemonLinkWhereUniqueInput | SavePokemonLinkWhereUniqueInput[]
    disconnect?: SavePokemonLinkWhereUniqueInput | SavePokemonLinkWhereUniqueInput[]
    delete?: SavePokemonLinkWhereUniqueInput | SavePokemonLinkWhereUniqueInput[]
    connect?: SavePokemonLinkWhereUniqueInput | SavePokemonLinkWhereUniqueInput[]
    update?: SavePokemonLinkUpdateWithWhereUniqueWithoutSaveInput | SavePokemonLinkUpdateWithWhereUniqueWithoutSaveInput[]
    updateMany?: SavePokemonLinkUpdateManyWithWhereWithoutSaveInput | SavePokemonLinkUpdateManyWithWhereWithoutSaveInput[]
    deleteMany?: SavePokemonLinkScalarWhereInput | SavePokemonLinkScalarWhereInput[]
  }

  export type SaveObjectLinkUpdateManyWithoutSaveNestedInput = {
    create?: XOR<SaveObjectLinkCreateWithoutSaveInput, SaveObjectLinkUncheckedCreateWithoutSaveInput> | SaveObjectLinkCreateWithoutSaveInput[] | SaveObjectLinkUncheckedCreateWithoutSaveInput[]
    connectOrCreate?: SaveObjectLinkCreateOrConnectWithoutSaveInput | SaveObjectLinkCreateOrConnectWithoutSaveInput[]
    upsert?: SaveObjectLinkUpsertWithWhereUniqueWithoutSaveInput | SaveObjectLinkUpsertWithWhereUniqueWithoutSaveInput[]
    createMany?: SaveObjectLinkCreateManySaveInputEnvelope
    set?: SaveObjectLinkWhereUniqueInput | SaveObjectLinkWhereUniqueInput[]
    disconnect?: SaveObjectLinkWhereUniqueInput | SaveObjectLinkWhereUniqueInput[]
    delete?: SaveObjectLinkWhereUniqueInput | SaveObjectLinkWhereUniqueInput[]
    connect?: SaveObjectLinkWhereUniqueInput | SaveObjectLinkWhereUniqueInput[]
    update?: SaveObjectLinkUpdateWithWhereUniqueWithoutSaveInput | SaveObjectLinkUpdateWithWhereUniqueWithoutSaveInput[]
    updateMany?: SaveObjectLinkUpdateManyWithWhereWithoutSaveInput | SaveObjectLinkUpdateManyWithWhereWithoutSaveInput[]
    deleteMany?: SaveObjectLinkScalarWhereInput | SaveObjectLinkScalarWhereInput[]
  }

  export type SavePokemonLinkUncheckedUpdateManyWithoutSaveNestedInput = {
    create?: XOR<SavePokemonLinkCreateWithoutSaveInput, SavePokemonLinkUncheckedCreateWithoutSaveInput> | SavePokemonLinkCreateWithoutSaveInput[] | SavePokemonLinkUncheckedCreateWithoutSaveInput[]
    connectOrCreate?: SavePokemonLinkCreateOrConnectWithoutSaveInput | SavePokemonLinkCreateOrConnectWithoutSaveInput[]
    upsert?: SavePokemonLinkUpsertWithWhereUniqueWithoutSaveInput | SavePokemonLinkUpsertWithWhereUniqueWithoutSaveInput[]
    createMany?: SavePokemonLinkCreateManySaveInputEnvelope
    set?: SavePokemonLinkWhereUniqueInput | SavePokemonLinkWhereUniqueInput[]
    disconnect?: SavePokemonLinkWhereUniqueInput | SavePokemonLinkWhereUniqueInput[]
    delete?: SavePokemonLinkWhereUniqueInput | SavePokemonLinkWhereUniqueInput[]
    connect?: SavePokemonLinkWhereUniqueInput | SavePokemonLinkWhereUniqueInput[]
    update?: SavePokemonLinkUpdateWithWhereUniqueWithoutSaveInput | SavePokemonLinkUpdateWithWhereUniqueWithoutSaveInput[]
    updateMany?: SavePokemonLinkUpdateManyWithWhereWithoutSaveInput | SavePokemonLinkUpdateManyWithWhereWithoutSaveInput[]
    deleteMany?: SavePokemonLinkScalarWhereInput | SavePokemonLinkScalarWhereInput[]
  }

  export type SaveObjectLinkUncheckedUpdateManyWithoutSaveNestedInput = {
    create?: XOR<SaveObjectLinkCreateWithoutSaveInput, SaveObjectLinkUncheckedCreateWithoutSaveInput> | SaveObjectLinkCreateWithoutSaveInput[] | SaveObjectLinkUncheckedCreateWithoutSaveInput[]
    connectOrCreate?: SaveObjectLinkCreateOrConnectWithoutSaveInput | SaveObjectLinkCreateOrConnectWithoutSaveInput[]
    upsert?: SaveObjectLinkUpsertWithWhereUniqueWithoutSaveInput | SaveObjectLinkUpsertWithWhereUniqueWithoutSaveInput[]
    createMany?: SaveObjectLinkCreateManySaveInputEnvelope
    set?: SaveObjectLinkWhereUniqueInput | SaveObjectLinkWhereUniqueInput[]
    disconnect?: SaveObjectLinkWhereUniqueInput | SaveObjectLinkWhereUniqueInput[]
    delete?: SaveObjectLinkWhereUniqueInput | SaveObjectLinkWhereUniqueInput[]
    connect?: SaveObjectLinkWhereUniqueInput | SaveObjectLinkWhereUniqueInput[]
    update?: SaveObjectLinkUpdateWithWhereUniqueWithoutSaveInput | SaveObjectLinkUpdateWithWhereUniqueWithoutSaveInput[]
    updateMany?: SaveObjectLinkUpdateManyWithWhereWithoutSaveInput | SaveObjectLinkUpdateManyWithWhereWithoutSaveInput[]
    deleteMany?: SaveObjectLinkScalarWhereInput | SaveObjectLinkScalarWhereInput[]
  }

  export type SavePokemonLinkCreateNestedManyWithoutPokemonInput = {
    create?: XOR<SavePokemonLinkCreateWithoutPokemonInput, SavePokemonLinkUncheckedCreateWithoutPokemonInput> | SavePokemonLinkCreateWithoutPokemonInput[] | SavePokemonLinkUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: SavePokemonLinkCreateOrConnectWithoutPokemonInput | SavePokemonLinkCreateOrConnectWithoutPokemonInput[]
    createMany?: SavePokemonLinkCreateManyPokemonInputEnvelope
    connect?: SavePokemonLinkWhereUniqueInput | SavePokemonLinkWhereUniqueInput[]
  }

  export type SavePokemonLinkUncheckedCreateNestedManyWithoutPokemonInput = {
    create?: XOR<SavePokemonLinkCreateWithoutPokemonInput, SavePokemonLinkUncheckedCreateWithoutPokemonInput> | SavePokemonLinkCreateWithoutPokemonInput[] | SavePokemonLinkUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: SavePokemonLinkCreateOrConnectWithoutPokemonInput | SavePokemonLinkCreateOrConnectWithoutPokemonInput[]
    createMany?: SavePokemonLinkCreateManyPokemonInputEnvelope
    connect?: SavePokemonLinkWhereUniqueInput | SavePokemonLinkWhereUniqueInput[]
  }

  export type SavePokemonLinkUpdateManyWithoutPokemonNestedInput = {
    create?: XOR<SavePokemonLinkCreateWithoutPokemonInput, SavePokemonLinkUncheckedCreateWithoutPokemonInput> | SavePokemonLinkCreateWithoutPokemonInput[] | SavePokemonLinkUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: SavePokemonLinkCreateOrConnectWithoutPokemonInput | SavePokemonLinkCreateOrConnectWithoutPokemonInput[]
    upsert?: SavePokemonLinkUpsertWithWhereUniqueWithoutPokemonInput | SavePokemonLinkUpsertWithWhereUniqueWithoutPokemonInput[]
    createMany?: SavePokemonLinkCreateManyPokemonInputEnvelope
    set?: SavePokemonLinkWhereUniqueInput | SavePokemonLinkWhereUniqueInput[]
    disconnect?: SavePokemonLinkWhereUniqueInput | SavePokemonLinkWhereUniqueInput[]
    delete?: SavePokemonLinkWhereUniqueInput | SavePokemonLinkWhereUniqueInput[]
    connect?: SavePokemonLinkWhereUniqueInput | SavePokemonLinkWhereUniqueInput[]
    update?: SavePokemonLinkUpdateWithWhereUniqueWithoutPokemonInput | SavePokemonLinkUpdateWithWhereUniqueWithoutPokemonInput[]
    updateMany?: SavePokemonLinkUpdateManyWithWhereWithoutPokemonInput | SavePokemonLinkUpdateManyWithWhereWithoutPokemonInput[]
    deleteMany?: SavePokemonLinkScalarWhereInput | SavePokemonLinkScalarWhereInput[]
  }

  export type SavePokemonLinkUncheckedUpdateManyWithoutPokemonNestedInput = {
    create?: XOR<SavePokemonLinkCreateWithoutPokemonInput, SavePokemonLinkUncheckedCreateWithoutPokemonInput> | SavePokemonLinkCreateWithoutPokemonInput[] | SavePokemonLinkUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: SavePokemonLinkCreateOrConnectWithoutPokemonInput | SavePokemonLinkCreateOrConnectWithoutPokemonInput[]
    upsert?: SavePokemonLinkUpsertWithWhereUniqueWithoutPokemonInput | SavePokemonLinkUpsertWithWhereUniqueWithoutPokemonInput[]
    createMany?: SavePokemonLinkCreateManyPokemonInputEnvelope
    set?: SavePokemonLinkWhereUniqueInput | SavePokemonLinkWhereUniqueInput[]
    disconnect?: SavePokemonLinkWhereUniqueInput | SavePokemonLinkWhereUniqueInput[]
    delete?: SavePokemonLinkWhereUniqueInput | SavePokemonLinkWhereUniqueInput[]
    connect?: SavePokemonLinkWhereUniqueInput | SavePokemonLinkWhereUniqueInput[]
    update?: SavePokemonLinkUpdateWithWhereUniqueWithoutPokemonInput | SavePokemonLinkUpdateWithWhereUniqueWithoutPokemonInput[]
    updateMany?: SavePokemonLinkUpdateManyWithWhereWithoutPokemonInput | SavePokemonLinkUpdateManyWithWhereWithoutPokemonInput[]
    deleteMany?: SavePokemonLinkScalarWhereInput | SavePokemonLinkScalarWhereInput[]
  }

  export type SaveObjectLinkCreateNestedManyWithoutObjectInput = {
    create?: XOR<SaveObjectLinkCreateWithoutObjectInput, SaveObjectLinkUncheckedCreateWithoutObjectInput> | SaveObjectLinkCreateWithoutObjectInput[] | SaveObjectLinkUncheckedCreateWithoutObjectInput[]
    connectOrCreate?: SaveObjectLinkCreateOrConnectWithoutObjectInput | SaveObjectLinkCreateOrConnectWithoutObjectInput[]
    createMany?: SaveObjectLinkCreateManyObjectInputEnvelope
    connect?: SaveObjectLinkWhereUniqueInput | SaveObjectLinkWhereUniqueInput[]
  }

  export type SaveObjectLinkUncheckedCreateNestedManyWithoutObjectInput = {
    create?: XOR<SaveObjectLinkCreateWithoutObjectInput, SaveObjectLinkUncheckedCreateWithoutObjectInput> | SaveObjectLinkCreateWithoutObjectInput[] | SaveObjectLinkUncheckedCreateWithoutObjectInput[]
    connectOrCreate?: SaveObjectLinkCreateOrConnectWithoutObjectInput | SaveObjectLinkCreateOrConnectWithoutObjectInput[]
    createMany?: SaveObjectLinkCreateManyObjectInputEnvelope
    connect?: SaveObjectLinkWhereUniqueInput | SaveObjectLinkWhereUniqueInput[]
  }

  export type SaveObjectLinkUpdateManyWithoutObjectNestedInput = {
    create?: XOR<SaveObjectLinkCreateWithoutObjectInput, SaveObjectLinkUncheckedCreateWithoutObjectInput> | SaveObjectLinkCreateWithoutObjectInput[] | SaveObjectLinkUncheckedCreateWithoutObjectInput[]
    connectOrCreate?: SaveObjectLinkCreateOrConnectWithoutObjectInput | SaveObjectLinkCreateOrConnectWithoutObjectInput[]
    upsert?: SaveObjectLinkUpsertWithWhereUniqueWithoutObjectInput | SaveObjectLinkUpsertWithWhereUniqueWithoutObjectInput[]
    createMany?: SaveObjectLinkCreateManyObjectInputEnvelope
    set?: SaveObjectLinkWhereUniqueInput | SaveObjectLinkWhereUniqueInput[]
    disconnect?: SaveObjectLinkWhereUniqueInput | SaveObjectLinkWhereUniqueInput[]
    delete?: SaveObjectLinkWhereUniqueInput | SaveObjectLinkWhereUniqueInput[]
    connect?: SaveObjectLinkWhereUniqueInput | SaveObjectLinkWhereUniqueInput[]
    update?: SaveObjectLinkUpdateWithWhereUniqueWithoutObjectInput | SaveObjectLinkUpdateWithWhereUniqueWithoutObjectInput[]
    updateMany?: SaveObjectLinkUpdateManyWithWhereWithoutObjectInput | SaveObjectLinkUpdateManyWithWhereWithoutObjectInput[]
    deleteMany?: SaveObjectLinkScalarWhereInput | SaveObjectLinkScalarWhereInput[]
  }

  export type SaveObjectLinkUncheckedUpdateManyWithoutObjectNestedInput = {
    create?: XOR<SaveObjectLinkCreateWithoutObjectInput, SaveObjectLinkUncheckedCreateWithoutObjectInput> | SaveObjectLinkCreateWithoutObjectInput[] | SaveObjectLinkUncheckedCreateWithoutObjectInput[]
    connectOrCreate?: SaveObjectLinkCreateOrConnectWithoutObjectInput | SaveObjectLinkCreateOrConnectWithoutObjectInput[]
    upsert?: SaveObjectLinkUpsertWithWhereUniqueWithoutObjectInput | SaveObjectLinkUpsertWithWhereUniqueWithoutObjectInput[]
    createMany?: SaveObjectLinkCreateManyObjectInputEnvelope
    set?: SaveObjectLinkWhereUniqueInput | SaveObjectLinkWhereUniqueInput[]
    disconnect?: SaveObjectLinkWhereUniqueInput | SaveObjectLinkWhereUniqueInput[]
    delete?: SaveObjectLinkWhereUniqueInput | SaveObjectLinkWhereUniqueInput[]
    connect?: SaveObjectLinkWhereUniqueInput | SaveObjectLinkWhereUniqueInput[]
    update?: SaveObjectLinkUpdateWithWhereUniqueWithoutObjectInput | SaveObjectLinkUpdateWithWhereUniqueWithoutObjectInput[]
    updateMany?: SaveObjectLinkUpdateManyWithWhereWithoutObjectInput | SaveObjectLinkUpdateManyWithWhereWithoutObjectInput[]
    deleteMany?: SaveObjectLinkScalarWhereInput | SaveObjectLinkScalarWhereInput[]
  }

  export type SaveCreateNestedOneWithoutPokemonsInput = {
    create?: XOR<SaveCreateWithoutPokemonsInput, SaveUncheckedCreateWithoutPokemonsInput>
    connectOrCreate?: SaveCreateOrConnectWithoutPokemonsInput
    connect?: SaveWhereUniqueInput
  }

  export type PokemonCreateNestedOneWithoutSavesInput = {
    create?: XOR<PokemonCreateWithoutSavesInput, PokemonUncheckedCreateWithoutSavesInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutSavesInput
    connect?: PokemonWhereUniqueInput
  }

  export type SaveUpdateOneRequiredWithoutPokemonsNestedInput = {
    create?: XOR<SaveCreateWithoutPokemonsInput, SaveUncheckedCreateWithoutPokemonsInput>
    connectOrCreate?: SaveCreateOrConnectWithoutPokemonsInput
    upsert?: SaveUpsertWithoutPokemonsInput
    connect?: SaveWhereUniqueInput
    update?: XOR<XOR<SaveUpdateToOneWithWhereWithoutPokemonsInput, SaveUpdateWithoutPokemonsInput>, SaveUncheckedUpdateWithoutPokemonsInput>
  }

  export type PokemonUpdateOneRequiredWithoutSavesNestedInput = {
    create?: XOR<PokemonCreateWithoutSavesInput, PokemonUncheckedCreateWithoutSavesInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutSavesInput
    upsert?: PokemonUpsertWithoutSavesInput
    connect?: PokemonWhereUniqueInput
    update?: XOR<XOR<PokemonUpdateToOneWithWhereWithoutSavesInput, PokemonUpdateWithoutSavesInput>, PokemonUncheckedUpdateWithoutSavesInput>
  }

  export type SaveCreateNestedOneWithoutObjectsInput = {
    create?: XOR<SaveCreateWithoutObjectsInput, SaveUncheckedCreateWithoutObjectsInput>
    connectOrCreate?: SaveCreateOrConnectWithoutObjectsInput
    connect?: SaveWhereUniqueInput
  }

  export type ObjectCreateNestedOneWithoutSavesInput = {
    create?: XOR<ObjectCreateWithoutSavesInput, ObjectUncheckedCreateWithoutSavesInput>
    connectOrCreate?: ObjectCreateOrConnectWithoutSavesInput
    connect?: ObjectWhereUniqueInput
  }

  export type SaveUpdateOneRequiredWithoutObjectsNestedInput = {
    create?: XOR<SaveCreateWithoutObjectsInput, SaveUncheckedCreateWithoutObjectsInput>
    connectOrCreate?: SaveCreateOrConnectWithoutObjectsInput
    upsert?: SaveUpsertWithoutObjectsInput
    connect?: SaveWhereUniqueInput
    update?: XOR<XOR<SaveUpdateToOneWithWhereWithoutObjectsInput, SaveUpdateWithoutObjectsInput>, SaveUncheckedUpdateWithoutObjectsInput>
  }

  export type ObjectUpdateOneRequiredWithoutSavesNestedInput = {
    create?: XOR<ObjectCreateWithoutSavesInput, ObjectUncheckedCreateWithoutSavesInput>
    connectOrCreate?: ObjectCreateOrConnectWithoutSavesInput
    upsert?: ObjectUpsertWithoutSavesInput
    connect?: ObjectWhereUniqueInput
    update?: XOR<XOR<ObjectUpdateToOneWithWhereWithoutSavesInput, ObjectUpdateWithoutSavesInput>, ObjectUncheckedUpdateWithoutSavesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type SavePokemonLinkCreateWithoutSaveInput = {
    pokemon: PokemonCreateNestedOneWithoutSavesInput
  }

  export type SavePokemonLinkUncheckedCreateWithoutSaveInput = {
    pokemonId: number
  }

  export type SavePokemonLinkCreateOrConnectWithoutSaveInput = {
    where: SavePokemonLinkWhereUniqueInput
    create: XOR<SavePokemonLinkCreateWithoutSaveInput, SavePokemonLinkUncheckedCreateWithoutSaveInput>
  }

  export type SavePokemonLinkCreateManySaveInputEnvelope = {
    data: SavePokemonLinkCreateManySaveInput | SavePokemonLinkCreateManySaveInput[]
    skipDuplicates?: boolean
  }

  export type SaveObjectLinkCreateWithoutSaveInput = {
    object: ObjectCreateNestedOneWithoutSavesInput
  }

  export type SaveObjectLinkUncheckedCreateWithoutSaveInput = {
    objectId: number
  }

  export type SaveObjectLinkCreateOrConnectWithoutSaveInput = {
    where: SaveObjectLinkWhereUniqueInput
    create: XOR<SaveObjectLinkCreateWithoutSaveInput, SaveObjectLinkUncheckedCreateWithoutSaveInput>
  }

  export type SaveObjectLinkCreateManySaveInputEnvelope = {
    data: SaveObjectLinkCreateManySaveInput | SaveObjectLinkCreateManySaveInput[]
    skipDuplicates?: boolean
  }

  export type SavePokemonLinkUpsertWithWhereUniqueWithoutSaveInput = {
    where: SavePokemonLinkWhereUniqueInput
    update: XOR<SavePokemonLinkUpdateWithoutSaveInput, SavePokemonLinkUncheckedUpdateWithoutSaveInput>
    create: XOR<SavePokemonLinkCreateWithoutSaveInput, SavePokemonLinkUncheckedCreateWithoutSaveInput>
  }

  export type SavePokemonLinkUpdateWithWhereUniqueWithoutSaveInput = {
    where: SavePokemonLinkWhereUniqueInput
    data: XOR<SavePokemonLinkUpdateWithoutSaveInput, SavePokemonLinkUncheckedUpdateWithoutSaveInput>
  }

  export type SavePokemonLinkUpdateManyWithWhereWithoutSaveInput = {
    where: SavePokemonLinkScalarWhereInput
    data: XOR<SavePokemonLinkUpdateManyMutationInput, SavePokemonLinkUncheckedUpdateManyWithoutSaveInput>
  }

  export type SavePokemonLinkScalarWhereInput = {
    AND?: SavePokemonLinkScalarWhereInput | SavePokemonLinkScalarWhereInput[]
    OR?: SavePokemonLinkScalarWhereInput[]
    NOT?: SavePokemonLinkScalarWhereInput | SavePokemonLinkScalarWhereInput[]
    saveId?: IntFilter<"SavePokemonLink"> | number
    pokemonId?: IntFilter<"SavePokemonLink"> | number
  }

  export type SaveObjectLinkUpsertWithWhereUniqueWithoutSaveInput = {
    where: SaveObjectLinkWhereUniqueInput
    update: XOR<SaveObjectLinkUpdateWithoutSaveInput, SaveObjectLinkUncheckedUpdateWithoutSaveInput>
    create: XOR<SaveObjectLinkCreateWithoutSaveInput, SaveObjectLinkUncheckedCreateWithoutSaveInput>
  }

  export type SaveObjectLinkUpdateWithWhereUniqueWithoutSaveInput = {
    where: SaveObjectLinkWhereUniqueInput
    data: XOR<SaveObjectLinkUpdateWithoutSaveInput, SaveObjectLinkUncheckedUpdateWithoutSaveInput>
  }

  export type SaveObjectLinkUpdateManyWithWhereWithoutSaveInput = {
    where: SaveObjectLinkScalarWhereInput
    data: XOR<SaveObjectLinkUpdateManyMutationInput, SaveObjectLinkUncheckedUpdateManyWithoutSaveInput>
  }

  export type SaveObjectLinkScalarWhereInput = {
    AND?: SaveObjectLinkScalarWhereInput | SaveObjectLinkScalarWhereInput[]
    OR?: SaveObjectLinkScalarWhereInput[]
    NOT?: SaveObjectLinkScalarWhereInput | SaveObjectLinkScalarWhereInput[]
    saveId?: IntFilter<"SaveObjectLink"> | number
    objectId?: IntFilter<"SaveObjectLink"> | number
  }

  export type SavePokemonLinkCreateWithoutPokemonInput = {
    save: SaveCreateNestedOneWithoutPokemonsInput
  }

  export type SavePokemonLinkUncheckedCreateWithoutPokemonInput = {
    saveId: number
  }

  export type SavePokemonLinkCreateOrConnectWithoutPokemonInput = {
    where: SavePokemonLinkWhereUniqueInput
    create: XOR<SavePokemonLinkCreateWithoutPokemonInput, SavePokemonLinkUncheckedCreateWithoutPokemonInput>
  }

  export type SavePokemonLinkCreateManyPokemonInputEnvelope = {
    data: SavePokemonLinkCreateManyPokemonInput | SavePokemonLinkCreateManyPokemonInput[]
    skipDuplicates?: boolean
  }

  export type SavePokemonLinkUpsertWithWhereUniqueWithoutPokemonInput = {
    where: SavePokemonLinkWhereUniqueInput
    update: XOR<SavePokemonLinkUpdateWithoutPokemonInput, SavePokemonLinkUncheckedUpdateWithoutPokemonInput>
    create: XOR<SavePokemonLinkCreateWithoutPokemonInput, SavePokemonLinkUncheckedCreateWithoutPokemonInput>
  }

  export type SavePokemonLinkUpdateWithWhereUniqueWithoutPokemonInput = {
    where: SavePokemonLinkWhereUniqueInput
    data: XOR<SavePokemonLinkUpdateWithoutPokemonInput, SavePokemonLinkUncheckedUpdateWithoutPokemonInput>
  }

  export type SavePokemonLinkUpdateManyWithWhereWithoutPokemonInput = {
    where: SavePokemonLinkScalarWhereInput
    data: XOR<SavePokemonLinkUpdateManyMutationInput, SavePokemonLinkUncheckedUpdateManyWithoutPokemonInput>
  }

  export type SaveObjectLinkCreateWithoutObjectInput = {
    save: SaveCreateNestedOneWithoutObjectsInput
  }

  export type SaveObjectLinkUncheckedCreateWithoutObjectInput = {
    saveId: number
  }

  export type SaveObjectLinkCreateOrConnectWithoutObjectInput = {
    where: SaveObjectLinkWhereUniqueInput
    create: XOR<SaveObjectLinkCreateWithoutObjectInput, SaveObjectLinkUncheckedCreateWithoutObjectInput>
  }

  export type SaveObjectLinkCreateManyObjectInputEnvelope = {
    data: SaveObjectLinkCreateManyObjectInput | SaveObjectLinkCreateManyObjectInput[]
    skipDuplicates?: boolean
  }

  export type SaveObjectLinkUpsertWithWhereUniqueWithoutObjectInput = {
    where: SaveObjectLinkWhereUniqueInput
    update: XOR<SaveObjectLinkUpdateWithoutObjectInput, SaveObjectLinkUncheckedUpdateWithoutObjectInput>
    create: XOR<SaveObjectLinkCreateWithoutObjectInput, SaveObjectLinkUncheckedCreateWithoutObjectInput>
  }

  export type SaveObjectLinkUpdateWithWhereUniqueWithoutObjectInput = {
    where: SaveObjectLinkWhereUniqueInput
    data: XOR<SaveObjectLinkUpdateWithoutObjectInput, SaveObjectLinkUncheckedUpdateWithoutObjectInput>
  }

  export type SaveObjectLinkUpdateManyWithWhereWithoutObjectInput = {
    where: SaveObjectLinkScalarWhereInput
    data: XOR<SaveObjectLinkUpdateManyMutationInput, SaveObjectLinkUncheckedUpdateManyWithoutObjectInput>
  }

  export type SaveCreateWithoutPokemonsInput = {
    userMail: string
    userName: string
    playerLevel: number
    money: number
    objects?: SaveObjectLinkCreateNestedManyWithoutSaveInput
  }

  export type SaveUncheckedCreateWithoutPokemonsInput = {
    id?: number
    userMail: string
    userName: string
    playerLevel: number
    money: number
    objects?: SaveObjectLinkUncheckedCreateNestedManyWithoutSaveInput
  }

  export type SaveCreateOrConnectWithoutPokemonsInput = {
    where: SaveWhereUniqueInput
    create: XOR<SaveCreateWithoutPokemonsInput, SaveUncheckedCreateWithoutPokemonsInput>
  }

  export type PokemonCreateWithoutSavesInput = {
    name: string
  }

  export type PokemonUncheckedCreateWithoutSavesInput = {
    id?: number
    name: string
  }

  export type PokemonCreateOrConnectWithoutSavesInput = {
    where: PokemonWhereUniqueInput
    create: XOR<PokemonCreateWithoutSavesInput, PokemonUncheckedCreateWithoutSavesInput>
  }

  export type SaveUpsertWithoutPokemonsInput = {
    update: XOR<SaveUpdateWithoutPokemonsInput, SaveUncheckedUpdateWithoutPokemonsInput>
    create: XOR<SaveCreateWithoutPokemonsInput, SaveUncheckedCreateWithoutPokemonsInput>
    where?: SaveWhereInput
  }

  export type SaveUpdateToOneWithWhereWithoutPokemonsInput = {
    where?: SaveWhereInput
    data: XOR<SaveUpdateWithoutPokemonsInput, SaveUncheckedUpdateWithoutPokemonsInput>
  }

  export type SaveUpdateWithoutPokemonsInput = {
    userMail?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    playerLevel?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    objects?: SaveObjectLinkUpdateManyWithoutSaveNestedInput
  }

  export type SaveUncheckedUpdateWithoutPokemonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userMail?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    playerLevel?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    objects?: SaveObjectLinkUncheckedUpdateManyWithoutSaveNestedInput
  }

  export type PokemonUpsertWithoutSavesInput = {
    update: XOR<PokemonUpdateWithoutSavesInput, PokemonUncheckedUpdateWithoutSavesInput>
    create: XOR<PokemonCreateWithoutSavesInput, PokemonUncheckedCreateWithoutSavesInput>
    where?: PokemonWhereInput
  }

  export type PokemonUpdateToOneWithWhereWithoutSavesInput = {
    where?: PokemonWhereInput
    data: XOR<PokemonUpdateWithoutSavesInput, PokemonUncheckedUpdateWithoutSavesInput>
  }

  export type PokemonUpdateWithoutSavesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PokemonUncheckedUpdateWithoutSavesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SaveCreateWithoutObjectsInput = {
    userMail: string
    userName: string
    playerLevel: number
    money: number
    pokemons?: SavePokemonLinkCreateNestedManyWithoutSaveInput
  }

  export type SaveUncheckedCreateWithoutObjectsInput = {
    id?: number
    userMail: string
    userName: string
    playerLevel: number
    money: number
    pokemons?: SavePokemonLinkUncheckedCreateNestedManyWithoutSaveInput
  }

  export type SaveCreateOrConnectWithoutObjectsInput = {
    where: SaveWhereUniqueInput
    create: XOR<SaveCreateWithoutObjectsInput, SaveUncheckedCreateWithoutObjectsInput>
  }

  export type ObjectCreateWithoutSavesInput = {
    name: string
    price: number
    stock: number
    level: number
  }

  export type ObjectUncheckedCreateWithoutSavesInput = {
    id?: number
    name: string
    price: number
    stock: number
    level: number
  }

  export type ObjectCreateOrConnectWithoutSavesInput = {
    where: ObjectWhereUniqueInput
    create: XOR<ObjectCreateWithoutSavesInput, ObjectUncheckedCreateWithoutSavesInput>
  }

  export type SaveUpsertWithoutObjectsInput = {
    update: XOR<SaveUpdateWithoutObjectsInput, SaveUncheckedUpdateWithoutObjectsInput>
    create: XOR<SaveCreateWithoutObjectsInput, SaveUncheckedCreateWithoutObjectsInput>
    where?: SaveWhereInput
  }

  export type SaveUpdateToOneWithWhereWithoutObjectsInput = {
    where?: SaveWhereInput
    data: XOR<SaveUpdateWithoutObjectsInput, SaveUncheckedUpdateWithoutObjectsInput>
  }

  export type SaveUpdateWithoutObjectsInput = {
    userMail?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    playerLevel?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    pokemons?: SavePokemonLinkUpdateManyWithoutSaveNestedInput
  }

  export type SaveUncheckedUpdateWithoutObjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userMail?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    playerLevel?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    pokemons?: SavePokemonLinkUncheckedUpdateManyWithoutSaveNestedInput
  }

  export type ObjectUpsertWithoutSavesInput = {
    update: XOR<ObjectUpdateWithoutSavesInput, ObjectUncheckedUpdateWithoutSavesInput>
    create: XOR<ObjectCreateWithoutSavesInput, ObjectUncheckedCreateWithoutSavesInput>
    where?: ObjectWhereInput
  }

  export type ObjectUpdateToOneWithWhereWithoutSavesInput = {
    where?: ObjectWhereInput
    data: XOR<ObjectUpdateWithoutSavesInput, ObjectUncheckedUpdateWithoutSavesInput>
  }

  export type ObjectUpdateWithoutSavesInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
  }

  export type ObjectUncheckedUpdateWithoutSavesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
  }

  export type SavePokemonLinkCreateManySaveInput = {
    pokemonId: number
  }

  export type SaveObjectLinkCreateManySaveInput = {
    objectId: number
  }

  export type SavePokemonLinkUpdateWithoutSaveInput = {
    pokemon?: PokemonUpdateOneRequiredWithoutSavesNestedInput
  }

  export type SavePokemonLinkUncheckedUpdateWithoutSaveInput = {
    pokemonId?: IntFieldUpdateOperationsInput | number
  }

  export type SavePokemonLinkUncheckedUpdateManyWithoutSaveInput = {
    pokemonId?: IntFieldUpdateOperationsInput | number
  }

  export type SaveObjectLinkUpdateWithoutSaveInput = {
    object?: ObjectUpdateOneRequiredWithoutSavesNestedInput
  }

  export type SaveObjectLinkUncheckedUpdateWithoutSaveInput = {
    objectId?: IntFieldUpdateOperationsInput | number
  }

  export type SaveObjectLinkUncheckedUpdateManyWithoutSaveInput = {
    objectId?: IntFieldUpdateOperationsInput | number
  }

  export type SavePokemonLinkCreateManyPokemonInput = {
    saveId: number
  }

  export type SavePokemonLinkUpdateWithoutPokemonInput = {
    save?: SaveUpdateOneRequiredWithoutPokemonsNestedInput
  }

  export type SavePokemonLinkUncheckedUpdateWithoutPokemonInput = {
    saveId?: IntFieldUpdateOperationsInput | number
  }

  export type SavePokemonLinkUncheckedUpdateManyWithoutPokemonInput = {
    saveId?: IntFieldUpdateOperationsInput | number
  }

  export type SaveObjectLinkCreateManyObjectInput = {
    saveId: number
  }

  export type SaveObjectLinkUpdateWithoutObjectInput = {
    save?: SaveUpdateOneRequiredWithoutObjectsNestedInput
  }

  export type SaveObjectLinkUncheckedUpdateWithoutObjectInput = {
    saveId?: IntFieldUpdateOperationsInput | number
  }

  export type SaveObjectLinkUncheckedUpdateManyWithoutObjectInput = {
    saveId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}