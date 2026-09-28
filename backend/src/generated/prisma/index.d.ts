
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Curso
 * 
 */
export type Curso = $Result.DefaultSelection<Prisma.$CursoPayload>
/**
 * Model Modulo
 * 
 */
export type Modulo = $Result.DefaultSelection<Prisma.$ModuloPayload>
/**
 * Model Aula
 * 
 */
export type Aula = $Result.DefaultSelection<Prisma.$AulaPayload>
/**
 * Model Matricula
 * 
 */
export type Matricula = $Result.DefaultSelection<Prisma.$MatriculaPayload>
/**
 * Model ProgressoAula
 * 
 */
export type ProgressoAula = $Result.DefaultSelection<Prisma.$ProgressoAulaPayload>
/**
 * Model Avaliacao
 * 
 */
export type Avaliacao = $Result.DefaultSelection<Prisma.$AvaliacaoPayload>
/**
 * Model Trilha
 * 
 */
export type Trilha = $Result.DefaultSelection<Prisma.$TrilhaPayload>
/**
 * Model TrilhaCurso
 * 
 */
export type TrilhaCurso = $Result.DefaultSelection<Prisma.$TrilhaCursoPayload>
/**
 * Model Certificado
 * 
 */
export type Certificado = $Result.DefaultSelection<Prisma.$CertificadoPayload>
/**
 * Model Plano
 * 
 */
export type Plano = $Result.DefaultSelection<Prisma.$PlanoPayload>
/**
 * Model Assinatura
 * 
 */
export type Assinatura = $Result.DefaultSelection<Prisma.$AssinaturaPayload>
/**
 * Model Pagamento
 * 
 */
export type Pagamento = $Result.DefaultSelection<Prisma.$PagamentoPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs>;

  /**
   * `prisma.curso`: Exposes CRUD operations for the **Curso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cursos
    * const cursos = await prisma.curso.findMany()
    * ```
    */
  get curso(): Prisma.CursoDelegate<ExtArgs>;

  /**
   * `prisma.modulo`: Exposes CRUD operations for the **Modulo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modulos
    * const modulos = await prisma.modulo.findMany()
    * ```
    */
  get modulo(): Prisma.ModuloDelegate<ExtArgs>;

  /**
   * `prisma.aula`: Exposes CRUD operations for the **Aula** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Aulas
    * const aulas = await prisma.aula.findMany()
    * ```
    */
  get aula(): Prisma.AulaDelegate<ExtArgs>;

  /**
   * `prisma.matricula`: Exposes CRUD operations for the **Matricula** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matriculas
    * const matriculas = await prisma.matricula.findMany()
    * ```
    */
  get matricula(): Prisma.MatriculaDelegate<ExtArgs>;

  /**
   * `prisma.progressoAula`: Exposes CRUD operations for the **ProgressoAula** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProgressoAulas
    * const progressoAulas = await prisma.progressoAula.findMany()
    * ```
    */
  get progressoAula(): Prisma.ProgressoAulaDelegate<ExtArgs>;

  /**
   * `prisma.avaliacao`: Exposes CRUD operations for the **Avaliacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avaliacaos
    * const avaliacaos = await prisma.avaliacao.findMany()
    * ```
    */
  get avaliacao(): Prisma.AvaliacaoDelegate<ExtArgs>;

  /**
   * `prisma.trilha`: Exposes CRUD operations for the **Trilha** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trilhas
    * const trilhas = await prisma.trilha.findMany()
    * ```
    */
  get trilha(): Prisma.TrilhaDelegate<ExtArgs>;

  /**
   * `prisma.trilhaCurso`: Exposes CRUD operations for the **TrilhaCurso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrilhaCursos
    * const trilhaCursos = await prisma.trilhaCurso.findMany()
    * ```
    */
  get trilhaCurso(): Prisma.TrilhaCursoDelegate<ExtArgs>;

  /**
   * `prisma.certificado`: Exposes CRUD operations for the **Certificado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Certificados
    * const certificados = await prisma.certificado.findMany()
    * ```
    */
  get certificado(): Prisma.CertificadoDelegate<ExtArgs>;

  /**
   * `prisma.plano`: Exposes CRUD operations for the **Plano** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Planos
    * const planos = await prisma.plano.findMany()
    * ```
    */
  get plano(): Prisma.PlanoDelegate<ExtArgs>;

  /**
   * `prisma.assinatura`: Exposes CRUD operations for the **Assinatura** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assinaturas
    * const assinaturas = await prisma.assinatura.findMany()
    * ```
    */
  get assinatura(): Prisma.AssinaturaDelegate<ExtArgs>;

  /**
   * `prisma.pagamento`: Exposes CRUD operations for the **Pagamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagamentos
    * const pagamentos = await prisma.pagamento.findMany()
    * ```
    */
  get pagamento(): Prisma.PagamentoDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Usuario: 'Usuario',
    Categoria: 'Categoria',
    Curso: 'Curso',
    Modulo: 'Modulo',
    Aula: 'Aula',
    Matricula: 'Matricula',
    ProgressoAula: 'ProgressoAula',
    Avaliacao: 'Avaliacao',
    Trilha: 'Trilha',
    TrilhaCurso: 'TrilhaCurso',
    Certificado: 'Certificado',
    Plano: 'Plano',
    Assinatura: 'Assinatura',
    Pagamento: 'Pagamento'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "usuario" | "categoria" | "curso" | "modulo" | "aula" | "matricula" | "progressoAula" | "avaliacao" | "trilha" | "trilhaCurso" | "certificado" | "plano" | "assinatura" | "pagamento"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Curso: {
        payload: Prisma.$CursoPayload<ExtArgs>
        fields: Prisma.CursoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CursoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CursoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          findFirst: {
            args: Prisma.CursoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CursoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          findMany: {
            args: Prisma.CursoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>[]
          }
          create: {
            args: Prisma.CursoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          createMany: {
            args: Prisma.CursoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CursoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>[]
          }
          delete: {
            args: Prisma.CursoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          update: {
            args: Prisma.CursoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          deleteMany: {
            args: Prisma.CursoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CursoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CursoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          aggregate: {
            args: Prisma.CursoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurso>
          }
          groupBy: {
            args: Prisma.CursoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CursoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CursoCountArgs<ExtArgs>
            result: $Utils.Optional<CursoCountAggregateOutputType> | number
          }
        }
      }
      Modulo: {
        payload: Prisma.$ModuloPayload<ExtArgs>
        fields: Prisma.ModuloFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModuloFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModuloFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>
          }
          findFirst: {
            args: Prisma.ModuloFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModuloFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>
          }
          findMany: {
            args: Prisma.ModuloFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>[]
          }
          create: {
            args: Prisma.ModuloCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>
          }
          createMany: {
            args: Prisma.ModuloCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModuloCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>[]
          }
          delete: {
            args: Prisma.ModuloDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>
          }
          update: {
            args: Prisma.ModuloUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>
          }
          deleteMany: {
            args: Prisma.ModuloDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModuloUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ModuloUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>
          }
          aggregate: {
            args: Prisma.ModuloAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModulo>
          }
          groupBy: {
            args: Prisma.ModuloGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModuloGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModuloCountArgs<ExtArgs>
            result: $Utils.Optional<ModuloCountAggregateOutputType> | number
          }
        }
      }
      Aula: {
        payload: Prisma.$AulaPayload<ExtArgs>
        fields: Prisma.AulaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AulaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AulaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>
          }
          findFirst: {
            args: Prisma.AulaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AulaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>
          }
          findMany: {
            args: Prisma.AulaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>[]
          }
          create: {
            args: Prisma.AulaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>
          }
          createMany: {
            args: Prisma.AulaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AulaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>[]
          }
          delete: {
            args: Prisma.AulaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>
          }
          update: {
            args: Prisma.AulaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>
          }
          deleteMany: {
            args: Prisma.AulaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AulaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AulaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AulaPayload>
          }
          aggregate: {
            args: Prisma.AulaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAula>
          }
          groupBy: {
            args: Prisma.AulaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AulaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AulaCountArgs<ExtArgs>
            result: $Utils.Optional<AulaCountAggregateOutputType> | number
          }
        }
      }
      Matricula: {
        payload: Prisma.$MatriculaPayload<ExtArgs>
        fields: Prisma.MatriculaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatriculaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatriculaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>
          }
          findFirst: {
            args: Prisma.MatriculaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatriculaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>
          }
          findMany: {
            args: Prisma.MatriculaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>[]
          }
          create: {
            args: Prisma.MatriculaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>
          }
          createMany: {
            args: Prisma.MatriculaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatriculaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>[]
          }
          delete: {
            args: Prisma.MatriculaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>
          }
          update: {
            args: Prisma.MatriculaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>
          }
          deleteMany: {
            args: Prisma.MatriculaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatriculaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MatriculaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaPayload>
          }
          aggregate: {
            args: Prisma.MatriculaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatricula>
          }
          groupBy: {
            args: Prisma.MatriculaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatriculaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatriculaCountArgs<ExtArgs>
            result: $Utils.Optional<MatriculaCountAggregateOutputType> | number
          }
        }
      }
      ProgressoAula: {
        payload: Prisma.$ProgressoAulaPayload<ExtArgs>
        fields: Prisma.ProgressoAulaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgressoAulaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoAulaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgressoAulaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoAulaPayload>
          }
          findFirst: {
            args: Prisma.ProgressoAulaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoAulaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgressoAulaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoAulaPayload>
          }
          findMany: {
            args: Prisma.ProgressoAulaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoAulaPayload>[]
          }
          create: {
            args: Prisma.ProgressoAulaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoAulaPayload>
          }
          createMany: {
            args: Prisma.ProgressoAulaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgressoAulaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoAulaPayload>[]
          }
          delete: {
            args: Prisma.ProgressoAulaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoAulaPayload>
          }
          update: {
            args: Prisma.ProgressoAulaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoAulaPayload>
          }
          deleteMany: {
            args: Prisma.ProgressoAulaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgressoAulaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProgressoAulaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoAulaPayload>
          }
          aggregate: {
            args: Prisma.ProgressoAulaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgressoAula>
          }
          groupBy: {
            args: Prisma.ProgressoAulaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgressoAulaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgressoAulaCountArgs<ExtArgs>
            result: $Utils.Optional<ProgressoAulaCountAggregateOutputType> | number
          }
        }
      }
      Avaliacao: {
        payload: Prisma.$AvaliacaoPayload<ExtArgs>
        fields: Prisma.AvaliacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvaliacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvaliacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findFirst: {
            args: Prisma.AvaliacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvaliacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findMany: {
            args: Prisma.AvaliacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          create: {
            args: Prisma.AvaliacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          createMany: {
            args: Prisma.AvaliacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvaliacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          delete: {
            args: Prisma.AvaliacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          update: {
            args: Prisma.AvaliacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          deleteMany: {
            args: Prisma.AvaliacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvaliacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AvaliacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          aggregate: {
            args: Prisma.AvaliacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvaliacao>
          }
          groupBy: {
            args: Prisma.AvaliacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvaliacaoCountArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoCountAggregateOutputType> | number
          }
        }
      }
      Trilha: {
        payload: Prisma.$TrilhaPayload<ExtArgs>
        fields: Prisma.TrilhaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrilhaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrilhaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrilhaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrilhaPayload>
          }
          findFirst: {
            args: Prisma.TrilhaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrilhaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrilhaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrilhaPayload>
          }
          findMany: {
            args: Prisma.TrilhaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrilhaPayload>[]
          }
          create: {
            args: Prisma.TrilhaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrilhaPayload>
          }
          createMany: {
            args: Prisma.TrilhaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrilhaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrilhaPayload>[]
          }
          delete: {
            args: Prisma.TrilhaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrilhaPayload>
          }
          update: {
            args: Prisma.TrilhaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrilhaPayload>
          }
          deleteMany: {
            args: Prisma.TrilhaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrilhaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TrilhaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrilhaPayload>
          }
          aggregate: {
            args: Prisma.TrilhaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrilha>
          }
          groupBy: {
            args: Prisma.TrilhaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrilhaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrilhaCountArgs<ExtArgs>
            result: $Utils.Optional<TrilhaCountAggregateOutputType> | number
          }
        }
      }
      TrilhaCurso: {
        payload: Prisma.$TrilhaCursoPayload<ExtArgs>
        fields: Prisma.TrilhaCursoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrilhaCursoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrilhaCursoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrilhaCursoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrilhaCursoPayload>
          }
          findFirst: {
            args: Prisma.TrilhaCursoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrilhaCursoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrilhaCursoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrilhaCursoPayload>
          }
          findMany: {
            args: Prisma.TrilhaCursoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrilhaCursoPayload>[]
          }
          create: {
            args: Prisma.TrilhaCursoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrilhaCursoPayload>
          }
          createMany: {
            args: Prisma.TrilhaCursoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrilhaCursoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrilhaCursoPayload>[]
          }
          delete: {
            args: Prisma.TrilhaCursoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrilhaCursoPayload>
          }
          update: {
            args: Prisma.TrilhaCursoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrilhaCursoPayload>
          }
          deleteMany: {
            args: Prisma.TrilhaCursoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrilhaCursoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TrilhaCursoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrilhaCursoPayload>
          }
          aggregate: {
            args: Prisma.TrilhaCursoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrilhaCurso>
          }
          groupBy: {
            args: Prisma.TrilhaCursoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrilhaCursoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrilhaCursoCountArgs<ExtArgs>
            result: $Utils.Optional<TrilhaCursoCountAggregateOutputType> | number
          }
        }
      }
      Certificado: {
        payload: Prisma.$CertificadoPayload<ExtArgs>
        fields: Prisma.CertificadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CertificadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CertificadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload>
          }
          findFirst: {
            args: Prisma.CertificadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CertificadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload>
          }
          findMany: {
            args: Prisma.CertificadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload>[]
          }
          create: {
            args: Prisma.CertificadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload>
          }
          createMany: {
            args: Prisma.CertificadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CertificadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload>[]
          }
          delete: {
            args: Prisma.CertificadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload>
          }
          update: {
            args: Prisma.CertificadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload>
          }
          deleteMany: {
            args: Prisma.CertificadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CertificadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CertificadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload>
          }
          aggregate: {
            args: Prisma.CertificadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCertificado>
          }
          groupBy: {
            args: Prisma.CertificadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CertificadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CertificadoCountArgs<ExtArgs>
            result: $Utils.Optional<CertificadoCountAggregateOutputType> | number
          }
        }
      }
      Plano: {
        payload: Prisma.$PlanoPayload<ExtArgs>
        fields: Prisma.PlanoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoPayload>
          }
          findFirst: {
            args: Prisma.PlanoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoPayload>
          }
          findMany: {
            args: Prisma.PlanoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoPayload>[]
          }
          create: {
            args: Prisma.PlanoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoPayload>
          }
          createMany: {
            args: Prisma.PlanoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoPayload>[]
          }
          delete: {
            args: Prisma.PlanoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoPayload>
          }
          update: {
            args: Prisma.PlanoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoPayload>
          }
          deleteMany: {
            args: Prisma.PlanoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlanoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoPayload>
          }
          aggregate: {
            args: Prisma.PlanoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlano>
          }
          groupBy: {
            args: Prisma.PlanoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanoCountArgs<ExtArgs>
            result: $Utils.Optional<PlanoCountAggregateOutputType> | number
          }
        }
      }
      Assinatura: {
        payload: Prisma.$AssinaturaPayload<ExtArgs>
        fields: Prisma.AssinaturaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssinaturaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssinaturaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssinaturaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssinaturaPayload>
          }
          findFirst: {
            args: Prisma.AssinaturaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssinaturaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssinaturaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssinaturaPayload>
          }
          findMany: {
            args: Prisma.AssinaturaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssinaturaPayload>[]
          }
          create: {
            args: Prisma.AssinaturaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssinaturaPayload>
          }
          createMany: {
            args: Prisma.AssinaturaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssinaturaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssinaturaPayload>[]
          }
          delete: {
            args: Prisma.AssinaturaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssinaturaPayload>
          }
          update: {
            args: Prisma.AssinaturaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssinaturaPayload>
          }
          deleteMany: {
            args: Prisma.AssinaturaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssinaturaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssinaturaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssinaturaPayload>
          }
          aggregate: {
            args: Prisma.AssinaturaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssinatura>
          }
          groupBy: {
            args: Prisma.AssinaturaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssinaturaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssinaturaCountArgs<ExtArgs>
            result: $Utils.Optional<AssinaturaCountAggregateOutputType> | number
          }
        }
      }
      Pagamento: {
        payload: Prisma.$PagamentoPayload<ExtArgs>
        fields: Prisma.PagamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PagamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PagamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          findFirst: {
            args: Prisma.PagamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PagamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          findMany: {
            args: Prisma.PagamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>[]
          }
          create: {
            args: Prisma.PagamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          createMany: {
            args: Prisma.PagamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PagamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>[]
          }
          delete: {
            args: Prisma.PagamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          update: {
            args: Prisma.PagamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          deleteMany: {
            args: Prisma.PagamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PagamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PagamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          aggregate: {
            args: Prisma.PagamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePagamento>
          }
          groupBy: {
            args: Prisma.PagamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PagamentoCountArgs<ExtArgs>
            result: $Utils.Optional<PagamentoCountAggregateOutputType> | number
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    cursosInstrutor: number
    matriculas: number
    progressos: number
    avaliacoes: number
    certificados: number
    assinaturas: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cursosInstrutor?: boolean | UsuarioCountOutputTypeCountCursosInstrutorArgs
    matriculas?: boolean | UsuarioCountOutputTypeCountMatriculasArgs
    progressos?: boolean | UsuarioCountOutputTypeCountProgressosArgs
    avaliacoes?: boolean | UsuarioCountOutputTypeCountAvaliacoesArgs
    certificados?: boolean | UsuarioCountOutputTypeCountCertificadosArgs
    assinaturas?: boolean | UsuarioCountOutputTypeCountAssinaturasArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountCursosInstrutorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CursoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountMatriculasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatriculaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountProgressosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressoAulaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountAvaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountCertificadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificadoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountAssinaturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssinaturaWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    cursos: number
    trilhas: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cursos?: boolean | CategoriaCountOutputTypeCountCursosArgs
    trilhas?: boolean | CategoriaCountOutputTypeCountTrilhasArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountCursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CursoWhereInput
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountTrilhasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrilhaWhereInput
  }


  /**
   * Count Type CursoCountOutputType
   */

  export type CursoCountOutputType = {
    modulos: number
    matriculas: number
    avaliacoes: number
    certificados: number
    trilhasCursos: number
  }

  export type CursoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modulos?: boolean | CursoCountOutputTypeCountModulosArgs
    matriculas?: boolean | CursoCountOutputTypeCountMatriculasArgs
    avaliacoes?: boolean | CursoCountOutputTypeCountAvaliacoesArgs
    certificados?: boolean | CursoCountOutputTypeCountCertificadosArgs
    trilhasCursos?: boolean | CursoCountOutputTypeCountTrilhasCursosArgs
  }

  // Custom InputTypes
  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CursoCountOutputType
     */
    select?: CursoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeCountModulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuloWhereInput
  }

  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeCountMatriculasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatriculaWhereInput
  }

  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeCountAvaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
  }

  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeCountCertificadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificadoWhereInput
  }

  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeCountTrilhasCursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrilhaCursoWhereInput
  }


  /**
   * Count Type ModuloCountOutputType
   */

  export type ModuloCountOutputType = {
    aulas: number
  }

  export type ModuloCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aulas?: boolean | ModuloCountOutputTypeCountAulasArgs
  }

  // Custom InputTypes
  /**
   * ModuloCountOutputType without action
   */
  export type ModuloCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuloCountOutputType
     */
    select?: ModuloCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModuloCountOutputType without action
   */
  export type ModuloCountOutputTypeCountAulasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AulaWhereInput
  }


  /**
   * Count Type AulaCountOutputType
   */

  export type AulaCountOutputType = {
    progressos: number
  }

  export type AulaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progressos?: boolean | AulaCountOutputTypeCountProgressosArgs
  }

  // Custom InputTypes
  /**
   * AulaCountOutputType without action
   */
  export type AulaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AulaCountOutputType
     */
    select?: AulaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AulaCountOutputType without action
   */
  export type AulaCountOutputTypeCountProgressosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressoAulaWhereInput
  }


  /**
   * Count Type TrilhaCountOutputType
   */

  export type TrilhaCountOutputType = {
    trilhasCursos: number
    certificados: number
  }

  export type TrilhaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trilhasCursos?: boolean | TrilhaCountOutputTypeCountTrilhasCursosArgs
    certificados?: boolean | TrilhaCountOutputTypeCountCertificadosArgs
  }

  // Custom InputTypes
  /**
   * TrilhaCountOutputType without action
   */
  export type TrilhaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrilhaCountOutputType
     */
    select?: TrilhaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TrilhaCountOutputType without action
   */
  export type TrilhaCountOutputTypeCountTrilhasCursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrilhaCursoWhereInput
  }

  /**
   * TrilhaCountOutputType without action
   */
  export type TrilhaCountOutputTypeCountCertificadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificadoWhereInput
  }


  /**
   * Count Type PlanoCountOutputType
   */

  export type PlanoCountOutputType = {
    assinaturas: number
  }

  export type PlanoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assinaturas?: boolean | PlanoCountOutputTypeCountAssinaturasArgs
  }

  // Custom InputTypes
  /**
   * PlanoCountOutputType without action
   */
  export type PlanoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanoCountOutputType
     */
    select?: PlanoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlanoCountOutputType without action
   */
  export type PlanoCountOutputTypeCountAssinaturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssinaturaWhereInput
  }


  /**
   * Count Type AssinaturaCountOutputType
   */

  export type AssinaturaCountOutputType = {
    pagamentos: number
  }

  export type AssinaturaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagamentos?: boolean | AssinaturaCountOutputTypeCountPagamentosArgs
  }

  // Custom InputTypes
  /**
   * AssinaturaCountOutputType without action
   */
  export type AssinaturaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssinaturaCountOutputType
     */
    select?: AssinaturaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssinaturaCountOutputType without action
   */
  export type AssinaturaCountOutputTypeCountPagamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagamentoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nomeCompleto: string | null
    email: string | null
    senhaHash: string | null
    dataCadastro: Date | null
    updatedAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nomeCompleto: string | null
    email: string | null
    senhaHash: string | null
    dataCadastro: Date | null
    updatedAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nomeCompleto: number
    email: number
    senhaHash: number
    dataCadastro: number
    updatedAt: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nomeCompleto?: true
    email?: true
    senhaHash?: true
    dataCadastro?: true
    updatedAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nomeCompleto?: true
    email?: true
    senhaHash?: true
    dataCadastro?: true
    updatedAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nomeCompleto?: true
    email?: true
    senhaHash?: true
    dataCadastro?: true
    updatedAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nomeCompleto: string
    email: string
    senhaHash: string
    dataCadastro: Date
    updatedAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeCompleto?: boolean
    email?: boolean
    senhaHash?: boolean
    dataCadastro?: boolean
    updatedAt?: boolean
    cursosInstrutor?: boolean | Usuario$cursosInstrutorArgs<ExtArgs>
    matriculas?: boolean | Usuario$matriculasArgs<ExtArgs>
    progressos?: boolean | Usuario$progressosArgs<ExtArgs>
    avaliacoes?: boolean | Usuario$avaliacoesArgs<ExtArgs>
    certificados?: boolean | Usuario$certificadosArgs<ExtArgs>
    assinaturas?: boolean | Usuario$assinaturasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeCompleto?: boolean
    email?: boolean
    senhaHash?: boolean
    dataCadastro?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nomeCompleto?: boolean
    email?: boolean
    senhaHash?: boolean
    dataCadastro?: boolean
    updatedAt?: boolean
  }

  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cursosInstrutor?: boolean | Usuario$cursosInstrutorArgs<ExtArgs>
    matriculas?: boolean | Usuario$matriculasArgs<ExtArgs>
    progressos?: boolean | Usuario$progressosArgs<ExtArgs>
    avaliacoes?: boolean | Usuario$avaliacoesArgs<ExtArgs>
    certificados?: boolean | Usuario$certificadosArgs<ExtArgs>
    assinaturas?: boolean | Usuario$assinaturasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      cursosInstrutor: Prisma.$CursoPayload<ExtArgs>[]
      matriculas: Prisma.$MatriculaPayload<ExtArgs>[]
      progressos: Prisma.$ProgressoAulaPayload<ExtArgs>[]
      avaliacoes: Prisma.$AvaliacaoPayload<ExtArgs>[]
      certificados: Prisma.$CertificadoPayload<ExtArgs>[]
      assinaturas: Prisma.$AssinaturaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nomeCompleto: string
      email: string
      senhaHash: string
      dataCadastro: Date
      updatedAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cursosInstrutor<T extends Usuario$cursosInstrutorArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$cursosInstrutorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findMany"> | Null>
    matriculas<T extends Usuario$matriculasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$matriculasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "findMany"> | Null>
    progressos<T extends Usuario$progressosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$progressosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressoAulaPayload<ExtArgs>, T, "findMany"> | Null>
    avaliacoes<T extends Usuario$avaliacoesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$avaliacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany"> | Null>
    certificados<T extends Usuario$certificadosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$certificadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "findMany"> | Null>
    assinaturas<T extends Usuario$assinaturasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$assinaturasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssinaturaPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Usuario model
   */ 
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nomeCompleto: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senhaHash: FieldRef<"Usuario", 'String'>
    readonly dataCadastro: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario.cursosInstrutor
   */
  export type Usuario$cursosInstrutorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    where?: CursoWhereInput
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    cursor?: CursoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Usuario.matriculas
   */
  export type Usuario$matriculasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    where?: MatriculaWhereInput
    orderBy?: MatriculaOrderByWithRelationInput | MatriculaOrderByWithRelationInput[]
    cursor?: MatriculaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatriculaScalarFieldEnum | MatriculaScalarFieldEnum[]
  }

  /**
   * Usuario.progressos
   */
  export type Usuario$progressosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAula
     */
    select?: ProgressoAulaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAulaInclude<ExtArgs> | null
    where?: ProgressoAulaWhereInput
    orderBy?: ProgressoAulaOrderByWithRelationInput | ProgressoAulaOrderByWithRelationInput[]
    cursor?: ProgressoAulaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressoAulaScalarFieldEnum | ProgressoAulaScalarFieldEnum[]
  }

  /**
   * Usuario.avaliacoes
   */
  export type Usuario$avaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    cursor?: AvaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Usuario.certificados
   */
  export type Usuario$certificadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    where?: CertificadoWhereInput
    orderBy?: CertificadoOrderByWithRelationInput | CertificadoOrderByWithRelationInput[]
    cursor?: CertificadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificadoScalarFieldEnum | CertificadoScalarFieldEnum[]
  }

  /**
   * Usuario.assinaturas
   */
  export type Usuario$assinaturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assinatura
     */
    select?: AssinaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssinaturaInclude<ExtArgs> | null
    where?: AssinaturaWhereInput
    orderBy?: AssinaturaOrderByWithRelationInput | AssinaturaOrderByWithRelationInput[]
    cursor?: AssinaturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssinaturaScalarFieldEnum | AssinaturaScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id?: true
  }

  export type CategoriaSumAggregateInputType = {
    id?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: number
    nome: string
    descricao: string
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    cursos?: boolean | Categoria$cursosArgs<ExtArgs>
    trilhas?: boolean | Categoria$trilhasArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
  }

  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cursos?: boolean | Categoria$cursosArgs<ExtArgs>
    trilhas?: boolean | Categoria$trilhasArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      cursos: Prisma.$CursoPayload<ExtArgs>[]
      trilhas: Prisma.$TrilhaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {CategoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
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
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cursos<T extends Categoria$cursosArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$cursosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findMany"> | Null>
    trilhas<T extends Categoria$trilhasArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$trilhasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrilhaPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Categoria model
   */ 
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'Int'>
    readonly nome: FieldRef<"Categoria", 'String'>
    readonly descricao: FieldRef<"Categoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria createManyAndReturn
   */
  export type CategoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
  }

  /**
   * Categoria.cursos
   */
  export type Categoria$cursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    where?: CursoWhereInput
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    cursor?: CursoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Categoria.trilhas
   */
  export type Categoria$trilhasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trilha
     */
    select?: TrilhaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrilhaInclude<ExtArgs> | null
    where?: TrilhaWhereInput
    orderBy?: TrilhaOrderByWithRelationInput | TrilhaOrderByWithRelationInput[]
    cursor?: TrilhaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrilhaScalarFieldEnum | TrilhaScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Curso
   */

  export type AggregateCurso = {
    _count: CursoCountAggregateOutputType | null
    _avg: CursoAvgAggregateOutputType | null
    _sum: CursoSumAggregateOutputType | null
    _min: CursoMinAggregateOutputType | null
    _max: CursoMaxAggregateOutputType | null
  }

  export type CursoAvgAggregateOutputType = {
    id: number | null
    instrutorId: number | null
    categoriaId: number | null
    totalAulas: number | null
    totalHoras: number | null
  }

  export type CursoSumAggregateOutputType = {
    id: number | null
    instrutorId: number | null
    categoriaId: number | null
    totalAulas: number | null
    totalHoras: number | null
  }

  export type CursoMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    instrutorId: number | null
    categoriaId: number | null
    nivel: string | null
    dataPublicacao: Date | null
    totalAulas: number | null
    totalHoras: number | null
  }

  export type CursoMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    instrutorId: number | null
    categoriaId: number | null
    nivel: string | null
    dataPublicacao: Date | null
    totalAulas: number | null
    totalHoras: number | null
  }

  export type CursoCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    instrutorId: number
    categoriaId: number
    nivel: number
    dataPublicacao: number
    totalAulas: number
    totalHoras: number
    _all: number
  }


  export type CursoAvgAggregateInputType = {
    id?: true
    instrutorId?: true
    categoriaId?: true
    totalAulas?: true
    totalHoras?: true
  }

  export type CursoSumAggregateInputType = {
    id?: true
    instrutorId?: true
    categoriaId?: true
    totalAulas?: true
    totalHoras?: true
  }

  export type CursoMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    instrutorId?: true
    categoriaId?: true
    nivel?: true
    dataPublicacao?: true
    totalAulas?: true
    totalHoras?: true
  }

  export type CursoMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    instrutorId?: true
    categoriaId?: true
    nivel?: true
    dataPublicacao?: true
    totalAulas?: true
    totalHoras?: true
  }

  export type CursoCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    instrutorId?: true
    categoriaId?: true
    nivel?: true
    dataPublicacao?: true
    totalAulas?: true
    totalHoras?: true
    _all?: true
  }

  export type CursoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Curso to aggregate.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cursos
    **/
    _count?: true | CursoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CursoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CursoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CursoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CursoMaxAggregateInputType
  }

  export type GetCursoAggregateType<T extends CursoAggregateArgs> = {
        [P in keyof T & keyof AggregateCurso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurso[P]>
      : GetScalarType<T[P], AggregateCurso[P]>
  }




  export type CursoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CursoWhereInput
    orderBy?: CursoOrderByWithAggregationInput | CursoOrderByWithAggregationInput[]
    by: CursoScalarFieldEnum[] | CursoScalarFieldEnum
    having?: CursoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CursoCountAggregateInputType | true
    _avg?: CursoAvgAggregateInputType
    _sum?: CursoSumAggregateInputType
    _min?: CursoMinAggregateInputType
    _max?: CursoMaxAggregateInputType
  }

  export type CursoGroupByOutputType = {
    id: number
    titulo: string
    descricao: string
    instrutorId: number
    categoriaId: number
    nivel: string
    dataPublicacao: Date
    totalAulas: number
    totalHoras: number
    _count: CursoCountAggregateOutputType | null
    _avg: CursoAvgAggregateOutputType | null
    _sum: CursoSumAggregateOutputType | null
    _min: CursoMinAggregateOutputType | null
    _max: CursoMaxAggregateOutputType | null
  }

  type GetCursoGroupByPayload<T extends CursoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CursoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CursoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CursoGroupByOutputType[P]>
            : GetScalarType<T[P], CursoGroupByOutputType[P]>
        }
      >
    >


  export type CursoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    instrutorId?: boolean
    categoriaId?: boolean
    nivel?: boolean
    dataPublicacao?: boolean
    totalAulas?: boolean
    totalHoras?: boolean
    instrutor?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    modulos?: boolean | Curso$modulosArgs<ExtArgs>
    matriculas?: boolean | Curso$matriculasArgs<ExtArgs>
    avaliacoes?: boolean | Curso$avaliacoesArgs<ExtArgs>
    certificados?: boolean | Curso$certificadosArgs<ExtArgs>
    trilhasCursos?: boolean | Curso$trilhasCursosArgs<ExtArgs>
    _count?: boolean | CursoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curso"]>

  export type CursoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    instrutorId?: boolean
    categoriaId?: boolean
    nivel?: boolean
    dataPublicacao?: boolean
    totalAulas?: boolean
    totalHoras?: boolean
    instrutor?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curso"]>

  export type CursoSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    instrutorId?: boolean
    categoriaId?: boolean
    nivel?: boolean
    dataPublicacao?: boolean
    totalAulas?: boolean
    totalHoras?: boolean
  }

  export type CursoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instrutor?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    modulos?: boolean | Curso$modulosArgs<ExtArgs>
    matriculas?: boolean | Curso$matriculasArgs<ExtArgs>
    avaliacoes?: boolean | Curso$avaliacoesArgs<ExtArgs>
    certificados?: boolean | Curso$certificadosArgs<ExtArgs>
    trilhasCursos?: boolean | Curso$trilhasCursosArgs<ExtArgs>
    _count?: boolean | CursoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CursoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instrutor?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }

  export type $CursoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Curso"
    objects: {
      instrutor: Prisma.$UsuarioPayload<ExtArgs>
      categoria: Prisma.$CategoriaPayload<ExtArgs>
      modulos: Prisma.$ModuloPayload<ExtArgs>[]
      matriculas: Prisma.$MatriculaPayload<ExtArgs>[]
      avaliacoes: Prisma.$AvaliacaoPayload<ExtArgs>[]
      certificados: Prisma.$CertificadoPayload<ExtArgs>[]
      trilhasCursos: Prisma.$TrilhaCursoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      descricao: string
      instrutorId: number
      categoriaId: number
      nivel: string
      dataPublicacao: Date
      totalAulas: number
      totalHoras: number
    }, ExtArgs["result"]["curso"]>
    composites: {}
  }

  type CursoGetPayload<S extends boolean | null | undefined | CursoDefaultArgs> = $Result.GetResult<Prisma.$CursoPayload, S>

  type CursoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CursoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CursoCountAggregateInputType | true
    }

  export interface CursoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Curso'], meta: { name: 'Curso' } }
    /**
     * Find zero or one Curso that matches the filter.
     * @param {CursoFindUniqueArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CursoFindUniqueArgs>(args: SelectSubset<T, CursoFindUniqueArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Curso that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CursoFindUniqueOrThrowArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CursoFindUniqueOrThrowArgs>(args: SelectSubset<T, CursoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Curso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindFirstArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CursoFindFirstArgs>(args?: SelectSubset<T, CursoFindFirstArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Curso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindFirstOrThrowArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CursoFindFirstOrThrowArgs>(args?: SelectSubset<T, CursoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cursos
     * const cursos = await prisma.curso.findMany()
     * 
     * // Get first 10 Cursos
     * const cursos = await prisma.curso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cursoWithIdOnly = await prisma.curso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CursoFindManyArgs>(args?: SelectSubset<T, CursoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Curso.
     * @param {CursoCreateArgs} args - Arguments to create a Curso.
     * @example
     * // Create one Curso
     * const Curso = await prisma.curso.create({
     *   data: {
     *     // ... data to create a Curso
     *   }
     * })
     * 
     */
    create<T extends CursoCreateArgs>(args: SelectSubset<T, CursoCreateArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Cursos.
     * @param {CursoCreateManyArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const curso = await prisma.curso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CursoCreateManyArgs>(args?: SelectSubset<T, CursoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cursos and returns the data saved in the database.
     * @param {CursoCreateManyAndReturnArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const curso = await prisma.curso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cursos and only return the `id`
     * const cursoWithIdOnly = await prisma.curso.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CursoCreateManyAndReturnArgs>(args?: SelectSubset<T, CursoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Curso.
     * @param {CursoDeleteArgs} args - Arguments to delete one Curso.
     * @example
     * // Delete one Curso
     * const Curso = await prisma.curso.delete({
     *   where: {
     *     // ... filter to delete one Curso
     *   }
     * })
     * 
     */
    delete<T extends CursoDeleteArgs>(args: SelectSubset<T, CursoDeleteArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Curso.
     * @param {CursoUpdateArgs} args - Arguments to update one Curso.
     * @example
     * // Update one Curso
     * const curso = await prisma.curso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CursoUpdateArgs>(args: SelectSubset<T, CursoUpdateArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Cursos.
     * @param {CursoDeleteManyArgs} args - Arguments to filter Cursos to delete.
     * @example
     * // Delete a few Cursos
     * const { count } = await prisma.curso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CursoDeleteManyArgs>(args?: SelectSubset<T, CursoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cursos
     * const curso = await prisma.curso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CursoUpdateManyArgs>(args: SelectSubset<T, CursoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Curso.
     * @param {CursoUpsertArgs} args - Arguments to update or create a Curso.
     * @example
     * // Update or create a Curso
     * const curso = await prisma.curso.upsert({
     *   create: {
     *     // ... data to create a Curso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Curso we want to update
     *   }
     * })
     */
    upsert<T extends CursoUpsertArgs>(args: SelectSubset<T, CursoUpsertArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoCountArgs} args - Arguments to filter Cursos to count.
     * @example
     * // Count the number of Cursos
     * const count = await prisma.curso.count({
     *   where: {
     *     // ... the filter for the Cursos we want to count
     *   }
     * })
    **/
    count<T extends CursoCountArgs>(
      args?: Subset<T, CursoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CursoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CursoAggregateArgs>(args: Subset<T, CursoAggregateArgs>): Prisma.PrismaPromise<GetCursoAggregateType<T>>

    /**
     * Group by Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoGroupByArgs} args - Group by arguments.
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
      T extends CursoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CursoGroupByArgs['orderBy'] }
        : { orderBy?: CursoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CursoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCursoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Curso model
   */
  readonly fields: CursoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Curso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CursoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instrutor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    modulos<T extends Curso$modulosArgs<ExtArgs> = {}>(args?: Subset<T, Curso$modulosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findMany"> | Null>
    matriculas<T extends Curso$matriculasArgs<ExtArgs> = {}>(args?: Subset<T, Curso$matriculasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "findMany"> | Null>
    avaliacoes<T extends Curso$avaliacoesArgs<ExtArgs> = {}>(args?: Subset<T, Curso$avaliacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany"> | Null>
    certificados<T extends Curso$certificadosArgs<ExtArgs> = {}>(args?: Subset<T, Curso$certificadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "findMany"> | Null>
    trilhasCursos<T extends Curso$trilhasCursosArgs<ExtArgs> = {}>(args?: Subset<T, Curso$trilhasCursosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrilhaCursoPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Curso model
   */ 
  interface CursoFieldRefs {
    readonly id: FieldRef<"Curso", 'Int'>
    readonly titulo: FieldRef<"Curso", 'String'>
    readonly descricao: FieldRef<"Curso", 'String'>
    readonly instrutorId: FieldRef<"Curso", 'Int'>
    readonly categoriaId: FieldRef<"Curso", 'Int'>
    readonly nivel: FieldRef<"Curso", 'String'>
    readonly dataPublicacao: FieldRef<"Curso", 'DateTime'>
    readonly totalAulas: FieldRef<"Curso", 'Int'>
    readonly totalHoras: FieldRef<"Curso", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Curso findUnique
   */
  export type CursoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso findUniqueOrThrow
   */
  export type CursoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso findFirst
   */
  export type CursoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso findFirstOrThrow
   */
  export type CursoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso findMany
   */
  export type CursoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Cursos to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso create
   */
  export type CursoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The data needed to create a Curso.
     */
    data: XOR<CursoCreateInput, CursoUncheckedCreateInput>
  }

  /**
   * Curso createMany
   */
  export type CursoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cursos.
     */
    data: CursoCreateManyInput | CursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Curso createManyAndReturn
   */
  export type CursoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Cursos.
     */
    data: CursoCreateManyInput | CursoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Curso update
   */
  export type CursoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The data needed to update a Curso.
     */
    data: XOR<CursoUpdateInput, CursoUncheckedUpdateInput>
    /**
     * Choose, which Curso to update.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso updateMany
   */
  export type CursoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cursos.
     */
    data: XOR<CursoUpdateManyMutationInput, CursoUncheckedUpdateManyInput>
    /**
     * Filter which Cursos to update
     */
    where?: CursoWhereInput
  }

  /**
   * Curso upsert
   */
  export type CursoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The filter to search for the Curso to update in case it exists.
     */
    where: CursoWhereUniqueInput
    /**
     * In case the Curso found by the `where` argument doesn't exist, create a new Curso with this data.
     */
    create: XOR<CursoCreateInput, CursoUncheckedCreateInput>
    /**
     * In case the Curso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CursoUpdateInput, CursoUncheckedUpdateInput>
  }

  /**
   * Curso delete
   */
  export type CursoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter which Curso to delete.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso deleteMany
   */
  export type CursoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cursos to delete
     */
    where?: CursoWhereInput
  }

  /**
   * Curso.modulos
   */
  export type Curso$modulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    where?: ModuloWhereInput
    orderBy?: ModuloOrderByWithRelationInput | ModuloOrderByWithRelationInput[]
    cursor?: ModuloWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuloScalarFieldEnum | ModuloScalarFieldEnum[]
  }

  /**
   * Curso.matriculas
   */
  export type Curso$matriculasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    where?: MatriculaWhereInput
    orderBy?: MatriculaOrderByWithRelationInput | MatriculaOrderByWithRelationInput[]
    cursor?: MatriculaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatriculaScalarFieldEnum | MatriculaScalarFieldEnum[]
  }

  /**
   * Curso.avaliacoes
   */
  export type Curso$avaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    cursor?: AvaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Curso.certificados
   */
  export type Curso$certificadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    where?: CertificadoWhereInput
    orderBy?: CertificadoOrderByWithRelationInput | CertificadoOrderByWithRelationInput[]
    cursor?: CertificadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificadoScalarFieldEnum | CertificadoScalarFieldEnum[]
  }

  /**
   * Curso.trilhasCursos
   */
  export type Curso$trilhasCursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrilhaCurso
     */
    select?: TrilhaCursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrilhaCursoInclude<ExtArgs> | null
    where?: TrilhaCursoWhereInput
    orderBy?: TrilhaCursoOrderByWithRelationInput | TrilhaCursoOrderByWithRelationInput[]
    cursor?: TrilhaCursoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrilhaCursoScalarFieldEnum | TrilhaCursoScalarFieldEnum[]
  }

  /**
   * Curso without action
   */
  export type CursoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
  }


  /**
   * Model Modulo
   */

  export type AggregateModulo = {
    _count: ModuloCountAggregateOutputType | null
    _avg: ModuloAvgAggregateOutputType | null
    _sum: ModuloSumAggregateOutputType | null
    _min: ModuloMinAggregateOutputType | null
    _max: ModuloMaxAggregateOutputType | null
  }

  export type ModuloAvgAggregateOutputType = {
    id: number | null
    cursoId: number | null
    ordem: number | null
  }

  export type ModuloSumAggregateOutputType = {
    id: number | null
    cursoId: number | null
    ordem: number | null
  }

  export type ModuloMinAggregateOutputType = {
    id: number | null
    cursoId: number | null
    titulo: string | null
    ordem: number | null
  }

  export type ModuloMaxAggregateOutputType = {
    id: number | null
    cursoId: number | null
    titulo: string | null
    ordem: number | null
  }

  export type ModuloCountAggregateOutputType = {
    id: number
    cursoId: number
    titulo: number
    ordem: number
    _all: number
  }


  export type ModuloAvgAggregateInputType = {
    id?: true
    cursoId?: true
    ordem?: true
  }

  export type ModuloSumAggregateInputType = {
    id?: true
    cursoId?: true
    ordem?: true
  }

  export type ModuloMinAggregateInputType = {
    id?: true
    cursoId?: true
    titulo?: true
    ordem?: true
  }

  export type ModuloMaxAggregateInputType = {
    id?: true
    cursoId?: true
    titulo?: true
    ordem?: true
  }

  export type ModuloCountAggregateInputType = {
    id?: true
    cursoId?: true
    titulo?: true
    ordem?: true
    _all?: true
  }

  export type ModuloAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modulo to aggregate.
     */
    where?: ModuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modulos to fetch.
     */
    orderBy?: ModuloOrderByWithRelationInput | ModuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Modulos
    **/
    _count?: true | ModuloCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModuloAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModuloSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuloMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuloMaxAggregateInputType
  }

  export type GetModuloAggregateType<T extends ModuloAggregateArgs> = {
        [P in keyof T & keyof AggregateModulo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModulo[P]>
      : GetScalarType<T[P], AggregateModulo[P]>
  }




  export type ModuloGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuloWhereInput
    orderBy?: ModuloOrderByWithAggregationInput | ModuloOrderByWithAggregationInput[]
    by: ModuloScalarFieldEnum[] | ModuloScalarFieldEnum
    having?: ModuloScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuloCountAggregateInputType | true
    _avg?: ModuloAvgAggregateInputType
    _sum?: ModuloSumAggregateInputType
    _min?: ModuloMinAggregateInputType
    _max?: ModuloMaxAggregateInputType
  }

  export type ModuloGroupByOutputType = {
    id: number
    cursoId: number
    titulo: string
    ordem: number
    _count: ModuloCountAggregateOutputType | null
    _avg: ModuloAvgAggregateOutputType | null
    _sum: ModuloSumAggregateOutputType | null
    _min: ModuloMinAggregateOutputType | null
    _max: ModuloMaxAggregateOutputType | null
  }

  type GetModuloGroupByPayload<T extends ModuloGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuloGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuloGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuloGroupByOutputType[P]>
            : GetScalarType<T[P], ModuloGroupByOutputType[P]>
        }
      >
    >


  export type ModuloSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cursoId?: boolean
    titulo?: boolean
    ordem?: boolean
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    aulas?: boolean | Modulo$aulasArgs<ExtArgs>
    _count?: boolean | ModuloCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modulo"]>

  export type ModuloSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cursoId?: boolean
    titulo?: boolean
    ordem?: boolean
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modulo"]>

  export type ModuloSelectScalar = {
    id?: boolean
    cursoId?: boolean
    titulo?: boolean
    ordem?: boolean
  }

  export type ModuloInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    aulas?: boolean | Modulo$aulasArgs<ExtArgs>
    _count?: boolean | ModuloCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModuloIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }

  export type $ModuloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Modulo"
    objects: {
      curso: Prisma.$CursoPayload<ExtArgs>
      aulas: Prisma.$AulaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cursoId: number
      titulo: string
      ordem: number
    }, ExtArgs["result"]["modulo"]>
    composites: {}
  }

  type ModuloGetPayload<S extends boolean | null | undefined | ModuloDefaultArgs> = $Result.GetResult<Prisma.$ModuloPayload, S>

  type ModuloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ModuloFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ModuloCountAggregateInputType | true
    }

  export interface ModuloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Modulo'], meta: { name: 'Modulo' } }
    /**
     * Find zero or one Modulo that matches the filter.
     * @param {ModuloFindUniqueArgs} args - Arguments to find a Modulo
     * @example
     * // Get one Modulo
     * const modulo = await prisma.modulo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModuloFindUniqueArgs>(args: SelectSubset<T, ModuloFindUniqueArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Modulo that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ModuloFindUniqueOrThrowArgs} args - Arguments to find a Modulo
     * @example
     * // Get one Modulo
     * const modulo = await prisma.modulo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModuloFindUniqueOrThrowArgs>(args: SelectSubset<T, ModuloFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Modulo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloFindFirstArgs} args - Arguments to find a Modulo
     * @example
     * // Get one Modulo
     * const modulo = await prisma.modulo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModuloFindFirstArgs>(args?: SelectSubset<T, ModuloFindFirstArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Modulo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloFindFirstOrThrowArgs} args - Arguments to find a Modulo
     * @example
     * // Get one Modulo
     * const modulo = await prisma.modulo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModuloFindFirstOrThrowArgs>(args?: SelectSubset<T, ModuloFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Modulos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modulos
     * const modulos = await prisma.modulo.findMany()
     * 
     * // Get first 10 Modulos
     * const modulos = await prisma.modulo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moduloWithIdOnly = await prisma.modulo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModuloFindManyArgs>(args?: SelectSubset<T, ModuloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Modulo.
     * @param {ModuloCreateArgs} args - Arguments to create a Modulo.
     * @example
     * // Create one Modulo
     * const Modulo = await prisma.modulo.create({
     *   data: {
     *     // ... data to create a Modulo
     *   }
     * })
     * 
     */
    create<T extends ModuloCreateArgs>(args: SelectSubset<T, ModuloCreateArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Modulos.
     * @param {ModuloCreateManyArgs} args - Arguments to create many Modulos.
     * @example
     * // Create many Modulos
     * const modulo = await prisma.modulo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModuloCreateManyArgs>(args?: SelectSubset<T, ModuloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Modulos and returns the data saved in the database.
     * @param {ModuloCreateManyAndReturnArgs} args - Arguments to create many Modulos.
     * @example
     * // Create many Modulos
     * const modulo = await prisma.modulo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Modulos and only return the `id`
     * const moduloWithIdOnly = await prisma.modulo.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModuloCreateManyAndReturnArgs>(args?: SelectSubset<T, ModuloCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Modulo.
     * @param {ModuloDeleteArgs} args - Arguments to delete one Modulo.
     * @example
     * // Delete one Modulo
     * const Modulo = await prisma.modulo.delete({
     *   where: {
     *     // ... filter to delete one Modulo
     *   }
     * })
     * 
     */
    delete<T extends ModuloDeleteArgs>(args: SelectSubset<T, ModuloDeleteArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Modulo.
     * @param {ModuloUpdateArgs} args - Arguments to update one Modulo.
     * @example
     * // Update one Modulo
     * const modulo = await prisma.modulo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModuloUpdateArgs>(args: SelectSubset<T, ModuloUpdateArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Modulos.
     * @param {ModuloDeleteManyArgs} args - Arguments to filter Modulos to delete.
     * @example
     * // Delete a few Modulos
     * const { count } = await prisma.modulo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModuloDeleteManyArgs>(args?: SelectSubset<T, ModuloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modulos
     * const modulo = await prisma.modulo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModuloUpdateManyArgs>(args: SelectSubset<T, ModuloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Modulo.
     * @param {ModuloUpsertArgs} args - Arguments to update or create a Modulo.
     * @example
     * // Update or create a Modulo
     * const modulo = await prisma.modulo.upsert({
     *   create: {
     *     // ... data to create a Modulo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Modulo we want to update
     *   }
     * })
     */
    upsert<T extends ModuloUpsertArgs>(args: SelectSubset<T, ModuloUpsertArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Modulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloCountArgs} args - Arguments to filter Modulos to count.
     * @example
     * // Count the number of Modulos
     * const count = await prisma.modulo.count({
     *   where: {
     *     // ... the filter for the Modulos we want to count
     *   }
     * })
    **/
    count<T extends ModuloCountArgs>(
      args?: Subset<T, ModuloCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuloCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Modulo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModuloAggregateArgs>(args: Subset<T, ModuloAggregateArgs>): Prisma.PrismaPromise<GetModuloAggregateType<T>>

    /**
     * Group by Modulo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloGroupByArgs} args - Group by arguments.
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
      T extends ModuloGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModuloGroupByArgs['orderBy'] }
        : { orderBy?: ModuloGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModuloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Modulo model
   */
  readonly fields: ModuloFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Modulo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModuloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curso<T extends CursoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CursoDefaultArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    aulas<T extends Modulo$aulasArgs<ExtArgs> = {}>(args?: Subset<T, Modulo$aulasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Modulo model
   */ 
  interface ModuloFieldRefs {
    readonly id: FieldRef<"Modulo", 'Int'>
    readonly cursoId: FieldRef<"Modulo", 'Int'>
    readonly titulo: FieldRef<"Modulo", 'String'>
    readonly ordem: FieldRef<"Modulo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Modulo findUnique
   */
  export type ModuloFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * Filter, which Modulo to fetch.
     */
    where: ModuloWhereUniqueInput
  }

  /**
   * Modulo findUniqueOrThrow
   */
  export type ModuloFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * Filter, which Modulo to fetch.
     */
    where: ModuloWhereUniqueInput
  }

  /**
   * Modulo findFirst
   */
  export type ModuloFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * Filter, which Modulo to fetch.
     */
    where?: ModuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modulos to fetch.
     */
    orderBy?: ModuloOrderByWithRelationInput | ModuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modulos.
     */
    cursor?: ModuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modulos.
     */
    distinct?: ModuloScalarFieldEnum | ModuloScalarFieldEnum[]
  }

  /**
   * Modulo findFirstOrThrow
   */
  export type ModuloFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * Filter, which Modulo to fetch.
     */
    where?: ModuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modulos to fetch.
     */
    orderBy?: ModuloOrderByWithRelationInput | ModuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modulos.
     */
    cursor?: ModuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modulos.
     */
    distinct?: ModuloScalarFieldEnum | ModuloScalarFieldEnum[]
  }

  /**
   * Modulo findMany
   */
  export type ModuloFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * Filter, which Modulos to fetch.
     */
    where?: ModuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modulos to fetch.
     */
    orderBy?: ModuloOrderByWithRelationInput | ModuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Modulos.
     */
    cursor?: ModuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modulos.
     */
    skip?: number
    distinct?: ModuloScalarFieldEnum | ModuloScalarFieldEnum[]
  }

  /**
   * Modulo create
   */
  export type ModuloCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * The data needed to create a Modulo.
     */
    data: XOR<ModuloCreateInput, ModuloUncheckedCreateInput>
  }

  /**
   * Modulo createMany
   */
  export type ModuloCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Modulos.
     */
    data: ModuloCreateManyInput | ModuloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Modulo createManyAndReturn
   */
  export type ModuloCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Modulos.
     */
    data: ModuloCreateManyInput | ModuloCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Modulo update
   */
  export type ModuloUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * The data needed to update a Modulo.
     */
    data: XOR<ModuloUpdateInput, ModuloUncheckedUpdateInput>
    /**
     * Choose, which Modulo to update.
     */
    where: ModuloWhereUniqueInput
  }

  /**
   * Modulo updateMany
   */
  export type ModuloUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Modulos.
     */
    data: XOR<ModuloUpdateManyMutationInput, ModuloUncheckedUpdateManyInput>
    /**
     * Filter which Modulos to update
     */
    where?: ModuloWhereInput
  }

  /**
   * Modulo upsert
   */
  export type ModuloUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * The filter to search for the Modulo to update in case it exists.
     */
    where: ModuloWhereUniqueInput
    /**
     * In case the Modulo found by the `where` argument doesn't exist, create a new Modulo with this data.
     */
    create: XOR<ModuloCreateInput, ModuloUncheckedCreateInput>
    /**
     * In case the Modulo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModuloUpdateInput, ModuloUncheckedUpdateInput>
  }

  /**
   * Modulo delete
   */
  export type ModuloDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * Filter which Modulo to delete.
     */
    where: ModuloWhereUniqueInput
  }

  /**
   * Modulo deleteMany
   */
  export type ModuloDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modulos to delete
     */
    where?: ModuloWhereInput
  }

  /**
   * Modulo.aulas
   */
  export type Modulo$aulasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    where?: AulaWhereInput
    orderBy?: AulaOrderByWithRelationInput | AulaOrderByWithRelationInput[]
    cursor?: AulaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AulaScalarFieldEnum | AulaScalarFieldEnum[]
  }

  /**
   * Modulo without action
   */
  export type ModuloDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
  }


  /**
   * Model Aula
   */

  export type AggregateAula = {
    _count: AulaCountAggregateOutputType | null
    _avg: AulaAvgAggregateOutputType | null
    _sum: AulaSumAggregateOutputType | null
    _min: AulaMinAggregateOutputType | null
    _max: AulaMaxAggregateOutputType | null
  }

  export type AulaAvgAggregateOutputType = {
    id: number | null
    moduloId: number | null
    duracaoMinutos: number | null
    ordem: number | null
  }

  export type AulaSumAggregateOutputType = {
    id: number | null
    moduloId: number | null
    duracaoMinutos: number | null
    ordem: number | null
  }

  export type AulaMinAggregateOutputType = {
    id: number | null
    moduloId: number | null
    titulo: string | null
    tipoConteudo: string | null
    urlConteudo: string | null
    duracaoMinutos: number | null
    ordem: number | null
  }

  export type AulaMaxAggregateOutputType = {
    id: number | null
    moduloId: number | null
    titulo: string | null
    tipoConteudo: string | null
    urlConteudo: string | null
    duracaoMinutos: number | null
    ordem: number | null
  }

  export type AulaCountAggregateOutputType = {
    id: number
    moduloId: number
    titulo: number
    tipoConteudo: number
    urlConteudo: number
    duracaoMinutos: number
    ordem: number
    _all: number
  }


  export type AulaAvgAggregateInputType = {
    id?: true
    moduloId?: true
    duracaoMinutos?: true
    ordem?: true
  }

  export type AulaSumAggregateInputType = {
    id?: true
    moduloId?: true
    duracaoMinutos?: true
    ordem?: true
  }

  export type AulaMinAggregateInputType = {
    id?: true
    moduloId?: true
    titulo?: true
    tipoConteudo?: true
    urlConteudo?: true
    duracaoMinutos?: true
    ordem?: true
  }

  export type AulaMaxAggregateInputType = {
    id?: true
    moduloId?: true
    titulo?: true
    tipoConteudo?: true
    urlConteudo?: true
    duracaoMinutos?: true
    ordem?: true
  }

  export type AulaCountAggregateInputType = {
    id?: true
    moduloId?: true
    titulo?: true
    tipoConteudo?: true
    urlConteudo?: true
    duracaoMinutos?: true
    ordem?: true
    _all?: true
  }

  export type AulaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aula to aggregate.
     */
    where?: AulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aulas to fetch.
     */
    orderBy?: AulaOrderByWithRelationInput | AulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Aulas
    **/
    _count?: true | AulaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AulaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AulaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AulaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AulaMaxAggregateInputType
  }

  export type GetAulaAggregateType<T extends AulaAggregateArgs> = {
        [P in keyof T & keyof AggregateAula]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAula[P]>
      : GetScalarType<T[P], AggregateAula[P]>
  }




  export type AulaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AulaWhereInput
    orderBy?: AulaOrderByWithAggregationInput | AulaOrderByWithAggregationInput[]
    by: AulaScalarFieldEnum[] | AulaScalarFieldEnum
    having?: AulaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AulaCountAggregateInputType | true
    _avg?: AulaAvgAggregateInputType
    _sum?: AulaSumAggregateInputType
    _min?: AulaMinAggregateInputType
    _max?: AulaMaxAggregateInputType
  }

  export type AulaGroupByOutputType = {
    id: number
    moduloId: number
    titulo: string
    tipoConteudo: string
    urlConteudo: string
    duracaoMinutos: number
    ordem: number
    _count: AulaCountAggregateOutputType | null
    _avg: AulaAvgAggregateOutputType | null
    _sum: AulaSumAggregateOutputType | null
    _min: AulaMinAggregateOutputType | null
    _max: AulaMaxAggregateOutputType | null
  }

  type GetAulaGroupByPayload<T extends AulaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AulaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AulaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AulaGroupByOutputType[P]>
            : GetScalarType<T[P], AulaGroupByOutputType[P]>
        }
      >
    >


  export type AulaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    moduloId?: boolean
    titulo?: boolean
    tipoConteudo?: boolean
    urlConteudo?: boolean
    duracaoMinutos?: boolean
    ordem?: boolean
    modulo?: boolean | ModuloDefaultArgs<ExtArgs>
    progressos?: boolean | Aula$progressosArgs<ExtArgs>
    _count?: boolean | AulaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aula"]>

  export type AulaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    moduloId?: boolean
    titulo?: boolean
    tipoConteudo?: boolean
    urlConteudo?: boolean
    duracaoMinutos?: boolean
    ordem?: boolean
    modulo?: boolean | ModuloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aula"]>

  export type AulaSelectScalar = {
    id?: boolean
    moduloId?: boolean
    titulo?: boolean
    tipoConteudo?: boolean
    urlConteudo?: boolean
    duracaoMinutos?: boolean
    ordem?: boolean
  }

  export type AulaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modulo?: boolean | ModuloDefaultArgs<ExtArgs>
    progressos?: boolean | Aula$progressosArgs<ExtArgs>
    _count?: boolean | AulaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AulaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modulo?: boolean | ModuloDefaultArgs<ExtArgs>
  }

  export type $AulaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Aula"
    objects: {
      modulo: Prisma.$ModuloPayload<ExtArgs>
      progressos: Prisma.$ProgressoAulaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      moduloId: number
      titulo: string
      tipoConteudo: string
      urlConteudo: string
      duracaoMinutos: number
      ordem: number
    }, ExtArgs["result"]["aula"]>
    composites: {}
  }

  type AulaGetPayload<S extends boolean | null | undefined | AulaDefaultArgs> = $Result.GetResult<Prisma.$AulaPayload, S>

  type AulaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AulaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AulaCountAggregateInputType | true
    }

  export interface AulaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Aula'], meta: { name: 'Aula' } }
    /**
     * Find zero or one Aula that matches the filter.
     * @param {AulaFindUniqueArgs} args - Arguments to find a Aula
     * @example
     * // Get one Aula
     * const aula = await prisma.aula.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AulaFindUniqueArgs>(args: SelectSubset<T, AulaFindUniqueArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Aula that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AulaFindUniqueOrThrowArgs} args - Arguments to find a Aula
     * @example
     * // Get one Aula
     * const aula = await prisma.aula.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AulaFindUniqueOrThrowArgs>(args: SelectSubset<T, AulaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Aula that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaFindFirstArgs} args - Arguments to find a Aula
     * @example
     * // Get one Aula
     * const aula = await prisma.aula.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AulaFindFirstArgs>(args?: SelectSubset<T, AulaFindFirstArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Aula that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaFindFirstOrThrowArgs} args - Arguments to find a Aula
     * @example
     * // Get one Aula
     * const aula = await prisma.aula.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AulaFindFirstOrThrowArgs>(args?: SelectSubset<T, AulaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Aulas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Aulas
     * const aulas = await prisma.aula.findMany()
     * 
     * // Get first 10 Aulas
     * const aulas = await prisma.aula.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aulaWithIdOnly = await prisma.aula.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AulaFindManyArgs>(args?: SelectSubset<T, AulaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Aula.
     * @param {AulaCreateArgs} args - Arguments to create a Aula.
     * @example
     * // Create one Aula
     * const Aula = await prisma.aula.create({
     *   data: {
     *     // ... data to create a Aula
     *   }
     * })
     * 
     */
    create<T extends AulaCreateArgs>(args: SelectSubset<T, AulaCreateArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Aulas.
     * @param {AulaCreateManyArgs} args - Arguments to create many Aulas.
     * @example
     * // Create many Aulas
     * const aula = await prisma.aula.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AulaCreateManyArgs>(args?: SelectSubset<T, AulaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Aulas and returns the data saved in the database.
     * @param {AulaCreateManyAndReturnArgs} args - Arguments to create many Aulas.
     * @example
     * // Create many Aulas
     * const aula = await prisma.aula.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Aulas and only return the `id`
     * const aulaWithIdOnly = await prisma.aula.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AulaCreateManyAndReturnArgs>(args?: SelectSubset<T, AulaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Aula.
     * @param {AulaDeleteArgs} args - Arguments to delete one Aula.
     * @example
     * // Delete one Aula
     * const Aula = await prisma.aula.delete({
     *   where: {
     *     // ... filter to delete one Aula
     *   }
     * })
     * 
     */
    delete<T extends AulaDeleteArgs>(args: SelectSubset<T, AulaDeleteArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Aula.
     * @param {AulaUpdateArgs} args - Arguments to update one Aula.
     * @example
     * // Update one Aula
     * const aula = await prisma.aula.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AulaUpdateArgs>(args: SelectSubset<T, AulaUpdateArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Aulas.
     * @param {AulaDeleteManyArgs} args - Arguments to filter Aulas to delete.
     * @example
     * // Delete a few Aulas
     * const { count } = await prisma.aula.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AulaDeleteManyArgs>(args?: SelectSubset<T, AulaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Aulas
     * const aula = await prisma.aula.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AulaUpdateManyArgs>(args: SelectSubset<T, AulaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Aula.
     * @param {AulaUpsertArgs} args - Arguments to update or create a Aula.
     * @example
     * // Update or create a Aula
     * const aula = await prisma.aula.upsert({
     *   create: {
     *     // ... data to create a Aula
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aula we want to update
     *   }
     * })
     */
    upsert<T extends AulaUpsertArgs>(args: SelectSubset<T, AulaUpsertArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Aulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaCountArgs} args - Arguments to filter Aulas to count.
     * @example
     * // Count the number of Aulas
     * const count = await prisma.aula.count({
     *   where: {
     *     // ... the filter for the Aulas we want to count
     *   }
     * })
    **/
    count<T extends AulaCountArgs>(
      args?: Subset<T, AulaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AulaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AulaAggregateArgs>(args: Subset<T, AulaAggregateArgs>): Prisma.PrismaPromise<GetAulaAggregateType<T>>

    /**
     * Group by Aula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaGroupByArgs} args - Group by arguments.
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
      T extends AulaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AulaGroupByArgs['orderBy'] }
        : { orderBy?: AulaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AulaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAulaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Aula model
   */
  readonly fields: AulaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Aula.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AulaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modulo<T extends ModuloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuloDefaultArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    progressos<T extends Aula$progressosArgs<ExtArgs> = {}>(args?: Subset<T, Aula$progressosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressoAulaPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Aula model
   */ 
  interface AulaFieldRefs {
    readonly id: FieldRef<"Aula", 'Int'>
    readonly moduloId: FieldRef<"Aula", 'Int'>
    readonly titulo: FieldRef<"Aula", 'String'>
    readonly tipoConteudo: FieldRef<"Aula", 'String'>
    readonly urlConteudo: FieldRef<"Aula", 'String'>
    readonly duracaoMinutos: FieldRef<"Aula", 'Int'>
    readonly ordem: FieldRef<"Aula", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Aula findUnique
   */
  export type AulaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * Filter, which Aula to fetch.
     */
    where: AulaWhereUniqueInput
  }

  /**
   * Aula findUniqueOrThrow
   */
  export type AulaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * Filter, which Aula to fetch.
     */
    where: AulaWhereUniqueInput
  }

  /**
   * Aula findFirst
   */
  export type AulaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * Filter, which Aula to fetch.
     */
    where?: AulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aulas to fetch.
     */
    orderBy?: AulaOrderByWithRelationInput | AulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Aulas.
     */
    cursor?: AulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aulas.
     */
    distinct?: AulaScalarFieldEnum | AulaScalarFieldEnum[]
  }

  /**
   * Aula findFirstOrThrow
   */
  export type AulaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * Filter, which Aula to fetch.
     */
    where?: AulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aulas to fetch.
     */
    orderBy?: AulaOrderByWithRelationInput | AulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Aulas.
     */
    cursor?: AulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aulas.
     */
    distinct?: AulaScalarFieldEnum | AulaScalarFieldEnum[]
  }

  /**
   * Aula findMany
   */
  export type AulaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * Filter, which Aulas to fetch.
     */
    where?: AulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aulas to fetch.
     */
    orderBy?: AulaOrderByWithRelationInput | AulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Aulas.
     */
    cursor?: AulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aulas.
     */
    skip?: number
    distinct?: AulaScalarFieldEnum | AulaScalarFieldEnum[]
  }

  /**
   * Aula create
   */
  export type AulaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * The data needed to create a Aula.
     */
    data: XOR<AulaCreateInput, AulaUncheckedCreateInput>
  }

  /**
   * Aula createMany
   */
  export type AulaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Aulas.
     */
    data: AulaCreateManyInput | AulaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Aula createManyAndReturn
   */
  export type AulaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Aulas.
     */
    data: AulaCreateManyInput | AulaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Aula update
   */
  export type AulaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * The data needed to update a Aula.
     */
    data: XOR<AulaUpdateInput, AulaUncheckedUpdateInput>
    /**
     * Choose, which Aula to update.
     */
    where: AulaWhereUniqueInput
  }

  /**
   * Aula updateMany
   */
  export type AulaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Aulas.
     */
    data: XOR<AulaUpdateManyMutationInput, AulaUncheckedUpdateManyInput>
    /**
     * Filter which Aulas to update
     */
    where?: AulaWhereInput
  }

  /**
   * Aula upsert
   */
  export type AulaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * The filter to search for the Aula to update in case it exists.
     */
    where: AulaWhereUniqueInput
    /**
     * In case the Aula found by the `where` argument doesn't exist, create a new Aula with this data.
     */
    create: XOR<AulaCreateInput, AulaUncheckedCreateInput>
    /**
     * In case the Aula was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AulaUpdateInput, AulaUncheckedUpdateInput>
  }

  /**
   * Aula delete
   */
  export type AulaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
    /**
     * Filter which Aula to delete.
     */
    where: AulaWhereUniqueInput
  }

  /**
   * Aula deleteMany
   */
  export type AulaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aulas to delete
     */
    where?: AulaWhereInput
  }

  /**
   * Aula.progressos
   */
  export type Aula$progressosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAula
     */
    select?: ProgressoAulaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAulaInclude<ExtArgs> | null
    where?: ProgressoAulaWhereInput
    orderBy?: ProgressoAulaOrderByWithRelationInput | ProgressoAulaOrderByWithRelationInput[]
    cursor?: ProgressoAulaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressoAulaScalarFieldEnum | ProgressoAulaScalarFieldEnum[]
  }

  /**
   * Aula without action
   */
  export type AulaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aula
     */
    select?: AulaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AulaInclude<ExtArgs> | null
  }


  /**
   * Model Matricula
   */

  export type AggregateMatricula = {
    _count: MatriculaCountAggregateOutputType | null
    _avg: MatriculaAvgAggregateOutputType | null
    _sum: MatriculaSumAggregateOutputType | null
    _min: MatriculaMinAggregateOutputType | null
    _max: MatriculaMaxAggregateOutputType | null
  }

  export type MatriculaAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    cursoId: number | null
  }

  export type MatriculaSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    cursoId: number | null
  }

  export type MatriculaMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    cursoId: number | null
    dataMatricula: Date | null
    dataConclusao: Date | null
  }

  export type MatriculaMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    cursoId: number | null
    dataMatricula: Date | null
    dataConclusao: Date | null
  }

  export type MatriculaCountAggregateOutputType = {
    id: number
    usuarioId: number
    cursoId: number
    dataMatricula: number
    dataConclusao: number
    _all: number
  }


  export type MatriculaAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    cursoId?: true
  }

  export type MatriculaSumAggregateInputType = {
    id?: true
    usuarioId?: true
    cursoId?: true
  }

  export type MatriculaMinAggregateInputType = {
    id?: true
    usuarioId?: true
    cursoId?: true
    dataMatricula?: true
    dataConclusao?: true
  }

  export type MatriculaMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    cursoId?: true
    dataMatricula?: true
    dataConclusao?: true
  }

  export type MatriculaCountAggregateInputType = {
    id?: true
    usuarioId?: true
    cursoId?: true
    dataMatricula?: true
    dataConclusao?: true
    _all?: true
  }

  export type MatriculaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matricula to aggregate.
     */
    where?: MatriculaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matriculas to fetch.
     */
    orderBy?: MatriculaOrderByWithRelationInput | MatriculaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatriculaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matriculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matriculas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matriculas
    **/
    _count?: true | MatriculaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatriculaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatriculaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatriculaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatriculaMaxAggregateInputType
  }

  export type GetMatriculaAggregateType<T extends MatriculaAggregateArgs> = {
        [P in keyof T & keyof AggregateMatricula]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatricula[P]>
      : GetScalarType<T[P], AggregateMatricula[P]>
  }




  export type MatriculaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatriculaWhereInput
    orderBy?: MatriculaOrderByWithAggregationInput | MatriculaOrderByWithAggregationInput[]
    by: MatriculaScalarFieldEnum[] | MatriculaScalarFieldEnum
    having?: MatriculaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatriculaCountAggregateInputType | true
    _avg?: MatriculaAvgAggregateInputType
    _sum?: MatriculaSumAggregateInputType
    _min?: MatriculaMinAggregateInputType
    _max?: MatriculaMaxAggregateInputType
  }

  export type MatriculaGroupByOutputType = {
    id: number
    usuarioId: number
    cursoId: number
    dataMatricula: Date
    dataConclusao: Date | null
    _count: MatriculaCountAggregateOutputType | null
    _avg: MatriculaAvgAggregateOutputType | null
    _sum: MatriculaSumAggregateOutputType | null
    _min: MatriculaMinAggregateOutputType | null
    _max: MatriculaMaxAggregateOutputType | null
  }

  type GetMatriculaGroupByPayload<T extends MatriculaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatriculaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatriculaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatriculaGroupByOutputType[P]>
            : GetScalarType<T[P], MatriculaGroupByOutputType[P]>
        }
      >
    >


  export type MatriculaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    cursoId?: boolean
    dataMatricula?: boolean
    dataConclusao?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matricula"]>

  export type MatriculaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    cursoId?: boolean
    dataMatricula?: boolean
    dataConclusao?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matricula"]>

  export type MatriculaSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    cursoId?: boolean
    dataMatricula?: boolean
    dataConclusao?: boolean
  }

  export type MatriculaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }
  export type MatriculaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }

  export type $MatriculaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Matricula"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      curso: Prisma.$CursoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      cursoId: number
      dataMatricula: Date
      dataConclusao: Date | null
    }, ExtArgs["result"]["matricula"]>
    composites: {}
  }

  type MatriculaGetPayload<S extends boolean | null | undefined | MatriculaDefaultArgs> = $Result.GetResult<Prisma.$MatriculaPayload, S>

  type MatriculaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MatriculaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MatriculaCountAggregateInputType | true
    }

  export interface MatriculaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Matricula'], meta: { name: 'Matricula' } }
    /**
     * Find zero or one Matricula that matches the filter.
     * @param {MatriculaFindUniqueArgs} args - Arguments to find a Matricula
     * @example
     * // Get one Matricula
     * const matricula = await prisma.matricula.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatriculaFindUniqueArgs>(args: SelectSubset<T, MatriculaFindUniqueArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Matricula that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MatriculaFindUniqueOrThrowArgs} args - Arguments to find a Matricula
     * @example
     * // Get one Matricula
     * const matricula = await prisma.matricula.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatriculaFindUniqueOrThrowArgs>(args: SelectSubset<T, MatriculaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Matricula that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaFindFirstArgs} args - Arguments to find a Matricula
     * @example
     * // Get one Matricula
     * const matricula = await prisma.matricula.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatriculaFindFirstArgs>(args?: SelectSubset<T, MatriculaFindFirstArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Matricula that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaFindFirstOrThrowArgs} args - Arguments to find a Matricula
     * @example
     * // Get one Matricula
     * const matricula = await prisma.matricula.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatriculaFindFirstOrThrowArgs>(args?: SelectSubset<T, MatriculaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Matriculas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matriculas
     * const matriculas = await prisma.matricula.findMany()
     * 
     * // Get first 10 Matriculas
     * const matriculas = await prisma.matricula.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matriculaWithIdOnly = await prisma.matricula.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatriculaFindManyArgs>(args?: SelectSubset<T, MatriculaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Matricula.
     * @param {MatriculaCreateArgs} args - Arguments to create a Matricula.
     * @example
     * // Create one Matricula
     * const Matricula = await prisma.matricula.create({
     *   data: {
     *     // ... data to create a Matricula
     *   }
     * })
     * 
     */
    create<T extends MatriculaCreateArgs>(args: SelectSubset<T, MatriculaCreateArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Matriculas.
     * @param {MatriculaCreateManyArgs} args - Arguments to create many Matriculas.
     * @example
     * // Create many Matriculas
     * const matricula = await prisma.matricula.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatriculaCreateManyArgs>(args?: SelectSubset<T, MatriculaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matriculas and returns the data saved in the database.
     * @param {MatriculaCreateManyAndReturnArgs} args - Arguments to create many Matriculas.
     * @example
     * // Create many Matriculas
     * const matricula = await prisma.matricula.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matriculas and only return the `id`
     * const matriculaWithIdOnly = await prisma.matricula.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatriculaCreateManyAndReturnArgs>(args?: SelectSubset<T, MatriculaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Matricula.
     * @param {MatriculaDeleteArgs} args - Arguments to delete one Matricula.
     * @example
     * // Delete one Matricula
     * const Matricula = await prisma.matricula.delete({
     *   where: {
     *     // ... filter to delete one Matricula
     *   }
     * })
     * 
     */
    delete<T extends MatriculaDeleteArgs>(args: SelectSubset<T, MatriculaDeleteArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Matricula.
     * @param {MatriculaUpdateArgs} args - Arguments to update one Matricula.
     * @example
     * // Update one Matricula
     * const matricula = await prisma.matricula.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatriculaUpdateArgs>(args: SelectSubset<T, MatriculaUpdateArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Matriculas.
     * @param {MatriculaDeleteManyArgs} args - Arguments to filter Matriculas to delete.
     * @example
     * // Delete a few Matriculas
     * const { count } = await prisma.matricula.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatriculaDeleteManyArgs>(args?: SelectSubset<T, MatriculaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matriculas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matriculas
     * const matricula = await prisma.matricula.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatriculaUpdateManyArgs>(args: SelectSubset<T, MatriculaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Matricula.
     * @param {MatriculaUpsertArgs} args - Arguments to update or create a Matricula.
     * @example
     * // Update or create a Matricula
     * const matricula = await prisma.matricula.upsert({
     *   create: {
     *     // ... data to create a Matricula
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Matricula we want to update
     *   }
     * })
     */
    upsert<T extends MatriculaUpsertArgs>(args: SelectSubset<T, MatriculaUpsertArgs<ExtArgs>>): Prisma__MatriculaClient<$Result.GetResult<Prisma.$MatriculaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Matriculas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaCountArgs} args - Arguments to filter Matriculas to count.
     * @example
     * // Count the number of Matriculas
     * const count = await prisma.matricula.count({
     *   where: {
     *     // ... the filter for the Matriculas we want to count
     *   }
     * })
    **/
    count<T extends MatriculaCountArgs>(
      args?: Subset<T, MatriculaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatriculaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Matricula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatriculaAggregateArgs>(args: Subset<T, MatriculaAggregateArgs>): Prisma.PrismaPromise<GetMatriculaAggregateType<T>>

    /**
     * Group by Matricula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaGroupByArgs} args - Group by arguments.
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
      T extends MatriculaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatriculaGroupByArgs['orderBy'] }
        : { orderBy?: MatriculaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatriculaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatriculaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Matricula model
   */
  readonly fields: MatriculaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Matricula.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatriculaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    curso<T extends CursoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CursoDefaultArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Matricula model
   */ 
  interface MatriculaFieldRefs {
    readonly id: FieldRef<"Matricula", 'Int'>
    readonly usuarioId: FieldRef<"Matricula", 'Int'>
    readonly cursoId: FieldRef<"Matricula", 'Int'>
    readonly dataMatricula: FieldRef<"Matricula", 'DateTime'>
    readonly dataConclusao: FieldRef<"Matricula", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Matricula findUnique
   */
  export type MatriculaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * Filter, which Matricula to fetch.
     */
    where: MatriculaWhereUniqueInput
  }

  /**
   * Matricula findUniqueOrThrow
   */
  export type MatriculaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * Filter, which Matricula to fetch.
     */
    where: MatriculaWhereUniqueInput
  }

  /**
   * Matricula findFirst
   */
  export type MatriculaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * Filter, which Matricula to fetch.
     */
    where?: MatriculaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matriculas to fetch.
     */
    orderBy?: MatriculaOrderByWithRelationInput | MatriculaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matriculas.
     */
    cursor?: MatriculaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matriculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matriculas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matriculas.
     */
    distinct?: MatriculaScalarFieldEnum | MatriculaScalarFieldEnum[]
  }

  /**
   * Matricula findFirstOrThrow
   */
  export type MatriculaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * Filter, which Matricula to fetch.
     */
    where?: MatriculaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matriculas to fetch.
     */
    orderBy?: MatriculaOrderByWithRelationInput | MatriculaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matriculas.
     */
    cursor?: MatriculaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matriculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matriculas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matriculas.
     */
    distinct?: MatriculaScalarFieldEnum | MatriculaScalarFieldEnum[]
  }

  /**
   * Matricula findMany
   */
  export type MatriculaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * Filter, which Matriculas to fetch.
     */
    where?: MatriculaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matriculas to fetch.
     */
    orderBy?: MatriculaOrderByWithRelationInput | MatriculaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matriculas.
     */
    cursor?: MatriculaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matriculas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matriculas.
     */
    skip?: number
    distinct?: MatriculaScalarFieldEnum | MatriculaScalarFieldEnum[]
  }

  /**
   * Matricula create
   */
  export type MatriculaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * The data needed to create a Matricula.
     */
    data: XOR<MatriculaCreateInput, MatriculaUncheckedCreateInput>
  }

  /**
   * Matricula createMany
   */
  export type MatriculaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matriculas.
     */
    data: MatriculaCreateManyInput | MatriculaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Matricula createManyAndReturn
   */
  export type MatriculaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Matriculas.
     */
    data: MatriculaCreateManyInput | MatriculaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Matricula update
   */
  export type MatriculaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * The data needed to update a Matricula.
     */
    data: XOR<MatriculaUpdateInput, MatriculaUncheckedUpdateInput>
    /**
     * Choose, which Matricula to update.
     */
    where: MatriculaWhereUniqueInput
  }

  /**
   * Matricula updateMany
   */
  export type MatriculaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matriculas.
     */
    data: XOR<MatriculaUpdateManyMutationInput, MatriculaUncheckedUpdateManyInput>
    /**
     * Filter which Matriculas to update
     */
    where?: MatriculaWhereInput
  }

  /**
   * Matricula upsert
   */
  export type MatriculaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * The filter to search for the Matricula to update in case it exists.
     */
    where: MatriculaWhereUniqueInput
    /**
     * In case the Matricula found by the `where` argument doesn't exist, create a new Matricula with this data.
     */
    create: XOR<MatriculaCreateInput, MatriculaUncheckedCreateInput>
    /**
     * In case the Matricula was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatriculaUpdateInput, MatriculaUncheckedUpdateInput>
  }

  /**
   * Matricula delete
   */
  export type MatriculaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
    /**
     * Filter which Matricula to delete.
     */
    where: MatriculaWhereUniqueInput
  }

  /**
   * Matricula deleteMany
   */
  export type MatriculaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matriculas to delete
     */
    where?: MatriculaWhereInput
  }

  /**
   * Matricula without action
   */
  export type MatriculaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matricula
     */
    select?: MatriculaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaInclude<ExtArgs> | null
  }


  /**
   * Model ProgressoAula
   */

  export type AggregateProgressoAula = {
    _count: ProgressoAulaCountAggregateOutputType | null
    _avg: ProgressoAulaAvgAggregateOutputType | null
    _sum: ProgressoAulaSumAggregateOutputType | null
    _min: ProgressoAulaMinAggregateOutputType | null
    _max: ProgressoAulaMaxAggregateOutputType | null
  }

  export type ProgressoAulaAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    aulaId: number | null
  }

  export type ProgressoAulaSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    aulaId: number | null
  }

  export type ProgressoAulaMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    aulaId: number | null
    dataConclusao: Date | null
    status: string | null
  }

  export type ProgressoAulaMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    aulaId: number | null
    dataConclusao: Date | null
    status: string | null
  }

  export type ProgressoAulaCountAggregateOutputType = {
    id: number
    usuarioId: number
    aulaId: number
    dataConclusao: number
    status: number
    _all: number
  }


  export type ProgressoAulaAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    aulaId?: true
  }

  export type ProgressoAulaSumAggregateInputType = {
    id?: true
    usuarioId?: true
    aulaId?: true
  }

  export type ProgressoAulaMinAggregateInputType = {
    id?: true
    usuarioId?: true
    aulaId?: true
    dataConclusao?: true
    status?: true
  }

  export type ProgressoAulaMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    aulaId?: true
    dataConclusao?: true
    status?: true
  }

  export type ProgressoAulaCountAggregateInputType = {
    id?: true
    usuarioId?: true
    aulaId?: true
    dataConclusao?: true
    status?: true
    _all?: true
  }

  export type ProgressoAulaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressoAula to aggregate.
     */
    where?: ProgressoAulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressoAulas to fetch.
     */
    orderBy?: ProgressoAulaOrderByWithRelationInput | ProgressoAulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgressoAulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressoAulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressoAulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProgressoAulas
    **/
    _count?: true | ProgressoAulaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgressoAulaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgressoAulaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgressoAulaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgressoAulaMaxAggregateInputType
  }

  export type GetProgressoAulaAggregateType<T extends ProgressoAulaAggregateArgs> = {
        [P in keyof T & keyof AggregateProgressoAula]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgressoAula[P]>
      : GetScalarType<T[P], AggregateProgressoAula[P]>
  }




  export type ProgressoAulaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressoAulaWhereInput
    orderBy?: ProgressoAulaOrderByWithAggregationInput | ProgressoAulaOrderByWithAggregationInput[]
    by: ProgressoAulaScalarFieldEnum[] | ProgressoAulaScalarFieldEnum
    having?: ProgressoAulaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgressoAulaCountAggregateInputType | true
    _avg?: ProgressoAulaAvgAggregateInputType
    _sum?: ProgressoAulaSumAggregateInputType
    _min?: ProgressoAulaMinAggregateInputType
    _max?: ProgressoAulaMaxAggregateInputType
  }

  export type ProgressoAulaGroupByOutputType = {
    id: number
    usuarioId: number
    aulaId: number
    dataConclusao: Date
    status: string
    _count: ProgressoAulaCountAggregateOutputType | null
    _avg: ProgressoAulaAvgAggregateOutputType | null
    _sum: ProgressoAulaSumAggregateOutputType | null
    _min: ProgressoAulaMinAggregateOutputType | null
    _max: ProgressoAulaMaxAggregateOutputType | null
  }

  type GetProgressoAulaGroupByPayload<T extends ProgressoAulaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgressoAulaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgressoAulaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgressoAulaGroupByOutputType[P]>
            : GetScalarType<T[P], ProgressoAulaGroupByOutputType[P]>
        }
      >
    >


  export type ProgressoAulaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    aulaId?: boolean
    dataConclusao?: boolean
    status?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    aula?: boolean | AulaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progressoAula"]>

  export type ProgressoAulaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    aulaId?: boolean
    dataConclusao?: boolean
    status?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    aula?: boolean | AulaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progressoAula"]>

  export type ProgressoAulaSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    aulaId?: boolean
    dataConclusao?: boolean
    status?: boolean
  }

  export type ProgressoAulaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    aula?: boolean | AulaDefaultArgs<ExtArgs>
  }
  export type ProgressoAulaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    aula?: boolean | AulaDefaultArgs<ExtArgs>
  }

  export type $ProgressoAulaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProgressoAula"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      aula: Prisma.$AulaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      aulaId: number
      dataConclusao: Date
      status: string
    }, ExtArgs["result"]["progressoAula"]>
    composites: {}
  }

  type ProgressoAulaGetPayload<S extends boolean | null | undefined | ProgressoAulaDefaultArgs> = $Result.GetResult<Prisma.$ProgressoAulaPayload, S>

  type ProgressoAulaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProgressoAulaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProgressoAulaCountAggregateInputType | true
    }

  export interface ProgressoAulaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProgressoAula'], meta: { name: 'ProgressoAula' } }
    /**
     * Find zero or one ProgressoAula that matches the filter.
     * @param {ProgressoAulaFindUniqueArgs} args - Arguments to find a ProgressoAula
     * @example
     * // Get one ProgressoAula
     * const progressoAula = await prisma.progressoAula.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgressoAulaFindUniqueArgs>(args: SelectSubset<T, ProgressoAulaFindUniqueArgs<ExtArgs>>): Prisma__ProgressoAulaClient<$Result.GetResult<Prisma.$ProgressoAulaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProgressoAula that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProgressoAulaFindUniqueOrThrowArgs} args - Arguments to find a ProgressoAula
     * @example
     * // Get one ProgressoAula
     * const progressoAula = await prisma.progressoAula.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgressoAulaFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgressoAulaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgressoAulaClient<$Result.GetResult<Prisma.$ProgressoAulaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProgressoAula that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoAulaFindFirstArgs} args - Arguments to find a ProgressoAula
     * @example
     * // Get one ProgressoAula
     * const progressoAula = await prisma.progressoAula.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgressoAulaFindFirstArgs>(args?: SelectSubset<T, ProgressoAulaFindFirstArgs<ExtArgs>>): Prisma__ProgressoAulaClient<$Result.GetResult<Prisma.$ProgressoAulaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProgressoAula that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoAulaFindFirstOrThrowArgs} args - Arguments to find a ProgressoAula
     * @example
     * // Get one ProgressoAula
     * const progressoAula = await prisma.progressoAula.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgressoAulaFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgressoAulaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgressoAulaClient<$Result.GetResult<Prisma.$ProgressoAulaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProgressoAulas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoAulaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgressoAulas
     * const progressoAulas = await prisma.progressoAula.findMany()
     * 
     * // Get first 10 ProgressoAulas
     * const progressoAulas = await prisma.progressoAula.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const progressoAulaWithIdOnly = await prisma.progressoAula.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgressoAulaFindManyArgs>(args?: SelectSubset<T, ProgressoAulaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressoAulaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProgressoAula.
     * @param {ProgressoAulaCreateArgs} args - Arguments to create a ProgressoAula.
     * @example
     * // Create one ProgressoAula
     * const ProgressoAula = await prisma.progressoAula.create({
     *   data: {
     *     // ... data to create a ProgressoAula
     *   }
     * })
     * 
     */
    create<T extends ProgressoAulaCreateArgs>(args: SelectSubset<T, ProgressoAulaCreateArgs<ExtArgs>>): Prisma__ProgressoAulaClient<$Result.GetResult<Prisma.$ProgressoAulaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProgressoAulas.
     * @param {ProgressoAulaCreateManyArgs} args - Arguments to create many ProgressoAulas.
     * @example
     * // Create many ProgressoAulas
     * const progressoAula = await prisma.progressoAula.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgressoAulaCreateManyArgs>(args?: SelectSubset<T, ProgressoAulaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProgressoAulas and returns the data saved in the database.
     * @param {ProgressoAulaCreateManyAndReturnArgs} args - Arguments to create many ProgressoAulas.
     * @example
     * // Create many ProgressoAulas
     * const progressoAula = await prisma.progressoAula.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProgressoAulas and only return the `id`
     * const progressoAulaWithIdOnly = await prisma.progressoAula.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgressoAulaCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgressoAulaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressoAulaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProgressoAula.
     * @param {ProgressoAulaDeleteArgs} args - Arguments to delete one ProgressoAula.
     * @example
     * // Delete one ProgressoAula
     * const ProgressoAula = await prisma.progressoAula.delete({
     *   where: {
     *     // ... filter to delete one ProgressoAula
     *   }
     * })
     * 
     */
    delete<T extends ProgressoAulaDeleteArgs>(args: SelectSubset<T, ProgressoAulaDeleteArgs<ExtArgs>>): Prisma__ProgressoAulaClient<$Result.GetResult<Prisma.$ProgressoAulaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProgressoAula.
     * @param {ProgressoAulaUpdateArgs} args - Arguments to update one ProgressoAula.
     * @example
     * // Update one ProgressoAula
     * const progressoAula = await prisma.progressoAula.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgressoAulaUpdateArgs>(args: SelectSubset<T, ProgressoAulaUpdateArgs<ExtArgs>>): Prisma__ProgressoAulaClient<$Result.GetResult<Prisma.$ProgressoAulaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProgressoAulas.
     * @param {ProgressoAulaDeleteManyArgs} args - Arguments to filter ProgressoAulas to delete.
     * @example
     * // Delete a few ProgressoAulas
     * const { count } = await prisma.progressoAula.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgressoAulaDeleteManyArgs>(args?: SelectSubset<T, ProgressoAulaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgressoAulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoAulaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgressoAulas
     * const progressoAula = await prisma.progressoAula.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgressoAulaUpdateManyArgs>(args: SelectSubset<T, ProgressoAulaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProgressoAula.
     * @param {ProgressoAulaUpsertArgs} args - Arguments to update or create a ProgressoAula.
     * @example
     * // Update or create a ProgressoAula
     * const progressoAula = await prisma.progressoAula.upsert({
     *   create: {
     *     // ... data to create a ProgressoAula
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgressoAula we want to update
     *   }
     * })
     */
    upsert<T extends ProgressoAulaUpsertArgs>(args: SelectSubset<T, ProgressoAulaUpsertArgs<ExtArgs>>): Prisma__ProgressoAulaClient<$Result.GetResult<Prisma.$ProgressoAulaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProgressoAulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoAulaCountArgs} args - Arguments to filter ProgressoAulas to count.
     * @example
     * // Count the number of ProgressoAulas
     * const count = await prisma.progressoAula.count({
     *   where: {
     *     // ... the filter for the ProgressoAulas we want to count
     *   }
     * })
    **/
    count<T extends ProgressoAulaCountArgs>(
      args?: Subset<T, ProgressoAulaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgressoAulaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProgressoAula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoAulaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgressoAulaAggregateArgs>(args: Subset<T, ProgressoAulaAggregateArgs>): Prisma.PrismaPromise<GetProgressoAulaAggregateType<T>>

    /**
     * Group by ProgressoAula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoAulaGroupByArgs} args - Group by arguments.
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
      T extends ProgressoAulaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgressoAulaGroupByArgs['orderBy'] }
        : { orderBy?: ProgressoAulaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgressoAulaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgressoAulaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProgressoAula model
   */
  readonly fields: ProgressoAulaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProgressoAula.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgressoAulaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    aula<T extends AulaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AulaDefaultArgs<ExtArgs>>): Prisma__AulaClient<$Result.GetResult<Prisma.$AulaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ProgressoAula model
   */ 
  interface ProgressoAulaFieldRefs {
    readonly id: FieldRef<"ProgressoAula", 'Int'>
    readonly usuarioId: FieldRef<"ProgressoAula", 'Int'>
    readonly aulaId: FieldRef<"ProgressoAula", 'Int'>
    readonly dataConclusao: FieldRef<"ProgressoAula", 'DateTime'>
    readonly status: FieldRef<"ProgressoAula", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProgressoAula findUnique
   */
  export type ProgressoAulaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAula
     */
    select?: ProgressoAulaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAulaInclude<ExtArgs> | null
    /**
     * Filter, which ProgressoAula to fetch.
     */
    where: ProgressoAulaWhereUniqueInput
  }

  /**
   * ProgressoAula findUniqueOrThrow
   */
  export type ProgressoAulaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAula
     */
    select?: ProgressoAulaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAulaInclude<ExtArgs> | null
    /**
     * Filter, which ProgressoAula to fetch.
     */
    where: ProgressoAulaWhereUniqueInput
  }

  /**
   * ProgressoAula findFirst
   */
  export type ProgressoAulaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAula
     */
    select?: ProgressoAulaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAulaInclude<ExtArgs> | null
    /**
     * Filter, which ProgressoAula to fetch.
     */
    where?: ProgressoAulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressoAulas to fetch.
     */
    orderBy?: ProgressoAulaOrderByWithRelationInput | ProgressoAulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgressoAulas.
     */
    cursor?: ProgressoAulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressoAulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressoAulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressoAulas.
     */
    distinct?: ProgressoAulaScalarFieldEnum | ProgressoAulaScalarFieldEnum[]
  }

  /**
   * ProgressoAula findFirstOrThrow
   */
  export type ProgressoAulaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAula
     */
    select?: ProgressoAulaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAulaInclude<ExtArgs> | null
    /**
     * Filter, which ProgressoAula to fetch.
     */
    where?: ProgressoAulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressoAulas to fetch.
     */
    orderBy?: ProgressoAulaOrderByWithRelationInput | ProgressoAulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgressoAulas.
     */
    cursor?: ProgressoAulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressoAulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressoAulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressoAulas.
     */
    distinct?: ProgressoAulaScalarFieldEnum | ProgressoAulaScalarFieldEnum[]
  }

  /**
   * ProgressoAula findMany
   */
  export type ProgressoAulaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAula
     */
    select?: ProgressoAulaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAulaInclude<ExtArgs> | null
    /**
     * Filter, which ProgressoAulas to fetch.
     */
    where?: ProgressoAulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressoAulas to fetch.
     */
    orderBy?: ProgressoAulaOrderByWithRelationInput | ProgressoAulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProgressoAulas.
     */
    cursor?: ProgressoAulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressoAulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressoAulas.
     */
    skip?: number
    distinct?: ProgressoAulaScalarFieldEnum | ProgressoAulaScalarFieldEnum[]
  }

  /**
   * ProgressoAula create
   */
  export type ProgressoAulaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAula
     */
    select?: ProgressoAulaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAulaInclude<ExtArgs> | null
    /**
     * The data needed to create a ProgressoAula.
     */
    data: XOR<ProgressoAulaCreateInput, ProgressoAulaUncheckedCreateInput>
  }

  /**
   * ProgressoAula createMany
   */
  export type ProgressoAulaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgressoAulas.
     */
    data: ProgressoAulaCreateManyInput | ProgressoAulaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProgressoAula createManyAndReturn
   */
  export type ProgressoAulaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAula
     */
    select?: ProgressoAulaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProgressoAulas.
     */
    data: ProgressoAulaCreateManyInput | ProgressoAulaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAulaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgressoAula update
   */
  export type ProgressoAulaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAula
     */
    select?: ProgressoAulaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAulaInclude<ExtArgs> | null
    /**
     * The data needed to update a ProgressoAula.
     */
    data: XOR<ProgressoAulaUpdateInput, ProgressoAulaUncheckedUpdateInput>
    /**
     * Choose, which ProgressoAula to update.
     */
    where: ProgressoAulaWhereUniqueInput
  }

  /**
   * ProgressoAula updateMany
   */
  export type ProgressoAulaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgressoAulas.
     */
    data: XOR<ProgressoAulaUpdateManyMutationInput, ProgressoAulaUncheckedUpdateManyInput>
    /**
     * Filter which ProgressoAulas to update
     */
    where?: ProgressoAulaWhereInput
  }

  /**
   * ProgressoAula upsert
   */
  export type ProgressoAulaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAula
     */
    select?: ProgressoAulaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAulaInclude<ExtArgs> | null
    /**
     * The filter to search for the ProgressoAula to update in case it exists.
     */
    where: ProgressoAulaWhereUniqueInput
    /**
     * In case the ProgressoAula found by the `where` argument doesn't exist, create a new ProgressoAula with this data.
     */
    create: XOR<ProgressoAulaCreateInput, ProgressoAulaUncheckedCreateInput>
    /**
     * In case the ProgressoAula was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgressoAulaUpdateInput, ProgressoAulaUncheckedUpdateInput>
  }

  /**
   * ProgressoAula delete
   */
  export type ProgressoAulaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAula
     */
    select?: ProgressoAulaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAulaInclude<ExtArgs> | null
    /**
     * Filter which ProgressoAula to delete.
     */
    where: ProgressoAulaWhereUniqueInput
  }

  /**
   * ProgressoAula deleteMany
   */
  export type ProgressoAulaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressoAulas to delete
     */
    where?: ProgressoAulaWhereInput
  }

  /**
   * ProgressoAula without action
   */
  export type ProgressoAulaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressoAula
     */
    select?: ProgressoAulaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoAulaInclude<ExtArgs> | null
  }


  /**
   * Model Avaliacao
   */

  export type AggregateAvaliacao = {
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  export type AvaliacaoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    cursoId: number | null
    nota: number | null
  }

  export type AvaliacaoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    cursoId: number | null
    nota: number | null
  }

  export type AvaliacaoMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    cursoId: number | null
    nota: number | null
    comentario: string | null
    dataAvaliacao: Date | null
  }

  export type AvaliacaoMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    cursoId: number | null
    nota: number | null
    comentario: string | null
    dataAvaliacao: Date | null
  }

  export type AvaliacaoCountAggregateOutputType = {
    id: number
    usuarioId: number
    cursoId: number
    nota: number
    comentario: number
    dataAvaliacao: number
    _all: number
  }


  export type AvaliacaoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    cursoId?: true
    nota?: true
  }

  export type AvaliacaoSumAggregateInputType = {
    id?: true
    usuarioId?: true
    cursoId?: true
    nota?: true
  }

  export type AvaliacaoMinAggregateInputType = {
    id?: true
    usuarioId?: true
    cursoId?: true
    nota?: true
    comentario?: true
    dataAvaliacao?: true
  }

  export type AvaliacaoMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    cursoId?: true
    nota?: true
    comentario?: true
    dataAvaliacao?: true
  }

  export type AvaliacaoCountAggregateInputType = {
    id?: true
    usuarioId?: true
    cursoId?: true
    nota?: true
    comentario?: true
    dataAvaliacao?: true
    _all?: true
  }

  export type AvaliacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacao to aggregate.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avaliacaos
    **/
    _count?: true | AvaliacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvaliacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvaliacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvaliacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type GetAvaliacaoAggregateType<T extends AvaliacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateAvaliacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvaliacao[P]>
      : GetScalarType<T[P], AggregateAvaliacao[P]>
  }




  export type AvaliacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithAggregationInput | AvaliacaoOrderByWithAggregationInput[]
    by: AvaliacaoScalarFieldEnum[] | AvaliacaoScalarFieldEnum
    having?: AvaliacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvaliacaoCountAggregateInputType | true
    _avg?: AvaliacaoAvgAggregateInputType
    _sum?: AvaliacaoSumAggregateInputType
    _min?: AvaliacaoMinAggregateInputType
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type AvaliacaoGroupByOutputType = {
    id: number
    usuarioId: number
    cursoId: number
    nota: number
    comentario: string | null
    dataAvaliacao: Date
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  type GetAvaliacaoGroupByPayload<T extends AvaliacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvaliacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvaliacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
            : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
        }
      >
    >


  export type AvaliacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    cursoId?: boolean
    nota?: boolean
    comentario?: boolean
    dataAvaliacao?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>

  export type AvaliacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    cursoId?: boolean
    nota?: boolean
    comentario?: boolean
    dataAvaliacao?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>

  export type AvaliacaoSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    cursoId?: boolean
    nota?: boolean
    comentario?: boolean
    dataAvaliacao?: boolean
  }

  export type AvaliacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }
  export type AvaliacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }

  export type $AvaliacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avaliacao"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      curso: Prisma.$CursoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      cursoId: number
      nota: number
      comentario: string | null
      dataAvaliacao: Date
    }, ExtArgs["result"]["avaliacao"]>
    composites: {}
  }

  type AvaliacaoGetPayload<S extends boolean | null | undefined | AvaliacaoDefaultArgs> = $Result.GetResult<Prisma.$AvaliacaoPayload, S>

  type AvaliacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AvaliacaoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AvaliacaoCountAggregateInputType | true
    }

  export interface AvaliacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avaliacao'], meta: { name: 'Avaliacao' } }
    /**
     * Find zero or one Avaliacao that matches the filter.
     * @param {AvaliacaoFindUniqueArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvaliacaoFindUniqueArgs>(args: SelectSubset<T, AvaliacaoFindUniqueArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Avaliacao that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AvaliacaoFindUniqueOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvaliacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, AvaliacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Avaliacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvaliacaoFindFirstArgs>(args?: SelectSubset<T, AvaliacaoFindFirstArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Avaliacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvaliacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, AvaliacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Avaliacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany()
     * 
     * // Get first 10 Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avaliacaoWithIdOnly = await prisma.avaliacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvaliacaoFindManyArgs>(args?: SelectSubset<T, AvaliacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Avaliacao.
     * @param {AvaliacaoCreateArgs} args - Arguments to create a Avaliacao.
     * @example
     * // Create one Avaliacao
     * const Avaliacao = await prisma.avaliacao.create({
     *   data: {
     *     // ... data to create a Avaliacao
     *   }
     * })
     * 
     */
    create<T extends AvaliacaoCreateArgs>(args: SelectSubset<T, AvaliacaoCreateArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Avaliacaos.
     * @param {AvaliacaoCreateManyArgs} args - Arguments to create many Avaliacaos.
     * @example
     * // Create many Avaliacaos
     * const avaliacao = await prisma.avaliacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvaliacaoCreateManyArgs>(args?: SelectSubset<T, AvaliacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Avaliacaos and returns the data saved in the database.
     * @param {AvaliacaoCreateManyAndReturnArgs} args - Arguments to create many Avaliacaos.
     * @example
     * // Create many Avaliacaos
     * const avaliacao = await prisma.avaliacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Avaliacaos and only return the `id`
     * const avaliacaoWithIdOnly = await prisma.avaliacao.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvaliacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, AvaliacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Avaliacao.
     * @param {AvaliacaoDeleteArgs} args - Arguments to delete one Avaliacao.
     * @example
     * // Delete one Avaliacao
     * const Avaliacao = await prisma.avaliacao.delete({
     *   where: {
     *     // ... filter to delete one Avaliacao
     *   }
     * })
     * 
     */
    delete<T extends AvaliacaoDeleteArgs>(args: SelectSubset<T, AvaliacaoDeleteArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Avaliacao.
     * @param {AvaliacaoUpdateArgs} args - Arguments to update one Avaliacao.
     * @example
     * // Update one Avaliacao
     * const avaliacao = await prisma.avaliacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvaliacaoUpdateArgs>(args: SelectSubset<T, AvaliacaoUpdateArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Avaliacaos.
     * @param {AvaliacaoDeleteManyArgs} args - Arguments to filter Avaliacaos to delete.
     * @example
     * // Delete a few Avaliacaos
     * const { count } = await prisma.avaliacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvaliacaoDeleteManyArgs>(args?: SelectSubset<T, AvaliacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avaliacaos
     * const avaliacao = await prisma.avaliacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvaliacaoUpdateManyArgs>(args: SelectSubset<T, AvaliacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Avaliacao.
     * @param {AvaliacaoUpsertArgs} args - Arguments to update or create a Avaliacao.
     * @example
     * // Update or create a Avaliacao
     * const avaliacao = await prisma.avaliacao.upsert({
     *   create: {
     *     // ... data to create a Avaliacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avaliacao we want to update
     *   }
     * })
     */
    upsert<T extends AvaliacaoUpsertArgs>(args: SelectSubset<T, AvaliacaoUpsertArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoCountArgs} args - Arguments to filter Avaliacaos to count.
     * @example
     * // Count the number of Avaliacaos
     * const count = await prisma.avaliacao.count({
     *   where: {
     *     // ... the filter for the Avaliacaos we want to count
     *   }
     * })
    **/
    count<T extends AvaliacaoCountArgs>(
      args?: Subset<T, AvaliacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvaliacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvaliacaoAggregateArgs>(args: Subset<T, AvaliacaoAggregateArgs>): Prisma.PrismaPromise<GetAvaliacaoAggregateType<T>>

    /**
     * Group by Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoGroupByArgs} args - Group by arguments.
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
      T extends AvaliacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvaliacaoGroupByArgs['orderBy'] }
        : { orderBy?: AvaliacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvaliacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvaliacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avaliacao model
   */
  readonly fields: AvaliacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avaliacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvaliacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    curso<T extends CursoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CursoDefaultArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Avaliacao model
   */ 
  interface AvaliacaoFieldRefs {
    readonly id: FieldRef<"Avaliacao", 'Int'>
    readonly usuarioId: FieldRef<"Avaliacao", 'Int'>
    readonly cursoId: FieldRef<"Avaliacao", 'Int'>
    readonly nota: FieldRef<"Avaliacao", 'Int'>
    readonly comentario: FieldRef<"Avaliacao", 'String'>
    readonly dataAvaliacao: FieldRef<"Avaliacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Avaliacao findUnique
   */
  export type AvaliacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao findUniqueOrThrow
   */
  export type AvaliacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao findFirst
   */
  export type AvaliacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao findFirstOrThrow
   */
  export type AvaliacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao findMany
   */
  export type AvaliacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacaos to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao create
   */
  export type AvaliacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Avaliacao.
     */
    data: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
  }

  /**
   * Avaliacao createMany
   */
  export type AvaliacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avaliacaos.
     */
    data: AvaliacaoCreateManyInput | AvaliacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Avaliacao createManyAndReturn
   */
  export type AvaliacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Avaliacaos.
     */
    data: AvaliacaoCreateManyInput | AvaliacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avaliacao update
   */
  export type AvaliacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Avaliacao.
     */
    data: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
    /**
     * Choose, which Avaliacao to update.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao updateMany
   */
  export type AvaliacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avaliacaos.
     */
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which Avaliacaos to update
     */
    where?: AvaliacaoWhereInput
  }

  /**
   * Avaliacao upsert
   */
  export type AvaliacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Avaliacao to update in case it exists.
     */
    where: AvaliacaoWhereUniqueInput
    /**
     * In case the Avaliacao found by the `where` argument doesn't exist, create a new Avaliacao with this data.
     */
    create: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
    /**
     * In case the Avaliacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
  }

  /**
   * Avaliacao delete
   */
  export type AvaliacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter which Avaliacao to delete.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao deleteMany
   */
  export type AvaliacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacaos to delete
     */
    where?: AvaliacaoWhereInput
  }

  /**
   * Avaliacao without action
   */
  export type AvaliacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
  }


  /**
   * Model Trilha
   */

  export type AggregateTrilha = {
    _count: TrilhaCountAggregateOutputType | null
    _avg: TrilhaAvgAggregateOutputType | null
    _sum: TrilhaSumAggregateOutputType | null
    _min: TrilhaMinAggregateOutputType | null
    _max: TrilhaMaxAggregateOutputType | null
  }

  export type TrilhaAvgAggregateOutputType = {
    id: number | null
    categoriaId: number | null
  }

  export type TrilhaSumAggregateOutputType = {
    id: number | null
    categoriaId: number | null
  }

  export type TrilhaMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    categoriaId: number | null
  }

  export type TrilhaMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    categoriaId: number | null
  }

  export type TrilhaCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    categoriaId: number
    _all: number
  }


  export type TrilhaAvgAggregateInputType = {
    id?: true
    categoriaId?: true
  }

  export type TrilhaSumAggregateInputType = {
    id?: true
    categoriaId?: true
  }

  export type TrilhaMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    categoriaId?: true
  }

  export type TrilhaMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    categoriaId?: true
  }

  export type TrilhaCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    categoriaId?: true
    _all?: true
  }

  export type TrilhaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trilha to aggregate.
     */
    where?: TrilhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trilhas to fetch.
     */
    orderBy?: TrilhaOrderByWithRelationInput | TrilhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrilhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trilhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trilhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trilhas
    **/
    _count?: true | TrilhaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrilhaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrilhaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrilhaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrilhaMaxAggregateInputType
  }

  export type GetTrilhaAggregateType<T extends TrilhaAggregateArgs> = {
        [P in keyof T & keyof AggregateTrilha]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrilha[P]>
      : GetScalarType<T[P], AggregateTrilha[P]>
  }




  export type TrilhaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrilhaWhereInput
    orderBy?: TrilhaOrderByWithAggregationInput | TrilhaOrderByWithAggregationInput[]
    by: TrilhaScalarFieldEnum[] | TrilhaScalarFieldEnum
    having?: TrilhaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrilhaCountAggregateInputType | true
    _avg?: TrilhaAvgAggregateInputType
    _sum?: TrilhaSumAggregateInputType
    _min?: TrilhaMinAggregateInputType
    _max?: TrilhaMaxAggregateInputType
  }

  export type TrilhaGroupByOutputType = {
    id: number
    titulo: string
    descricao: string
    categoriaId: number
    _count: TrilhaCountAggregateOutputType | null
    _avg: TrilhaAvgAggregateOutputType | null
    _sum: TrilhaSumAggregateOutputType | null
    _min: TrilhaMinAggregateOutputType | null
    _max: TrilhaMaxAggregateOutputType | null
  }

  type GetTrilhaGroupByPayload<T extends TrilhaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrilhaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrilhaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrilhaGroupByOutputType[P]>
            : GetScalarType<T[P], TrilhaGroupByOutputType[P]>
        }
      >
    >


  export type TrilhaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    categoriaId?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    trilhasCursos?: boolean | Trilha$trilhasCursosArgs<ExtArgs>
    certificados?: boolean | Trilha$certificadosArgs<ExtArgs>
    _count?: boolean | TrilhaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trilha"]>

  export type TrilhaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    categoriaId?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trilha"]>

  export type TrilhaSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    categoriaId?: boolean
  }

  export type TrilhaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    trilhasCursos?: boolean | Trilha$trilhasCursosArgs<ExtArgs>
    certificados?: boolean | Trilha$certificadosArgs<ExtArgs>
    _count?: boolean | TrilhaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TrilhaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }

  export type $TrilhaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trilha"
    objects: {
      categoria: Prisma.$CategoriaPayload<ExtArgs>
      trilhasCursos: Prisma.$TrilhaCursoPayload<ExtArgs>[]
      certificados: Prisma.$CertificadoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      descricao: string
      categoriaId: number
    }, ExtArgs["result"]["trilha"]>
    composites: {}
  }

  type TrilhaGetPayload<S extends boolean | null | undefined | TrilhaDefaultArgs> = $Result.GetResult<Prisma.$TrilhaPayload, S>

  type TrilhaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TrilhaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TrilhaCountAggregateInputType | true
    }

  export interface TrilhaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trilha'], meta: { name: 'Trilha' } }
    /**
     * Find zero or one Trilha that matches the filter.
     * @param {TrilhaFindUniqueArgs} args - Arguments to find a Trilha
     * @example
     * // Get one Trilha
     * const trilha = await prisma.trilha.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrilhaFindUniqueArgs>(args: SelectSubset<T, TrilhaFindUniqueArgs<ExtArgs>>): Prisma__TrilhaClient<$Result.GetResult<Prisma.$TrilhaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Trilha that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TrilhaFindUniqueOrThrowArgs} args - Arguments to find a Trilha
     * @example
     * // Get one Trilha
     * const trilha = await prisma.trilha.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrilhaFindUniqueOrThrowArgs>(args: SelectSubset<T, TrilhaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrilhaClient<$Result.GetResult<Prisma.$TrilhaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Trilha that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrilhaFindFirstArgs} args - Arguments to find a Trilha
     * @example
     * // Get one Trilha
     * const trilha = await prisma.trilha.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrilhaFindFirstArgs>(args?: SelectSubset<T, TrilhaFindFirstArgs<ExtArgs>>): Prisma__TrilhaClient<$Result.GetResult<Prisma.$TrilhaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Trilha that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrilhaFindFirstOrThrowArgs} args - Arguments to find a Trilha
     * @example
     * // Get one Trilha
     * const trilha = await prisma.trilha.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrilhaFindFirstOrThrowArgs>(args?: SelectSubset<T, TrilhaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrilhaClient<$Result.GetResult<Prisma.$TrilhaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Trilhas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrilhaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trilhas
     * const trilhas = await prisma.trilha.findMany()
     * 
     * // Get first 10 Trilhas
     * const trilhas = await prisma.trilha.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trilhaWithIdOnly = await prisma.trilha.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrilhaFindManyArgs>(args?: SelectSubset<T, TrilhaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrilhaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Trilha.
     * @param {TrilhaCreateArgs} args - Arguments to create a Trilha.
     * @example
     * // Create one Trilha
     * const Trilha = await prisma.trilha.create({
     *   data: {
     *     // ... data to create a Trilha
     *   }
     * })
     * 
     */
    create<T extends TrilhaCreateArgs>(args: SelectSubset<T, TrilhaCreateArgs<ExtArgs>>): Prisma__TrilhaClient<$Result.GetResult<Prisma.$TrilhaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Trilhas.
     * @param {TrilhaCreateManyArgs} args - Arguments to create many Trilhas.
     * @example
     * // Create many Trilhas
     * const trilha = await prisma.trilha.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrilhaCreateManyArgs>(args?: SelectSubset<T, TrilhaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trilhas and returns the data saved in the database.
     * @param {TrilhaCreateManyAndReturnArgs} args - Arguments to create many Trilhas.
     * @example
     * // Create many Trilhas
     * const trilha = await prisma.trilha.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trilhas and only return the `id`
     * const trilhaWithIdOnly = await prisma.trilha.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrilhaCreateManyAndReturnArgs>(args?: SelectSubset<T, TrilhaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrilhaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Trilha.
     * @param {TrilhaDeleteArgs} args - Arguments to delete one Trilha.
     * @example
     * // Delete one Trilha
     * const Trilha = await prisma.trilha.delete({
     *   where: {
     *     // ... filter to delete one Trilha
     *   }
     * })
     * 
     */
    delete<T extends TrilhaDeleteArgs>(args: SelectSubset<T, TrilhaDeleteArgs<ExtArgs>>): Prisma__TrilhaClient<$Result.GetResult<Prisma.$TrilhaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Trilha.
     * @param {TrilhaUpdateArgs} args - Arguments to update one Trilha.
     * @example
     * // Update one Trilha
     * const trilha = await prisma.trilha.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrilhaUpdateArgs>(args: SelectSubset<T, TrilhaUpdateArgs<ExtArgs>>): Prisma__TrilhaClient<$Result.GetResult<Prisma.$TrilhaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Trilhas.
     * @param {TrilhaDeleteManyArgs} args - Arguments to filter Trilhas to delete.
     * @example
     * // Delete a few Trilhas
     * const { count } = await prisma.trilha.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrilhaDeleteManyArgs>(args?: SelectSubset<T, TrilhaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trilhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrilhaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trilhas
     * const trilha = await prisma.trilha.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrilhaUpdateManyArgs>(args: SelectSubset<T, TrilhaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trilha.
     * @param {TrilhaUpsertArgs} args - Arguments to update or create a Trilha.
     * @example
     * // Update or create a Trilha
     * const trilha = await prisma.trilha.upsert({
     *   create: {
     *     // ... data to create a Trilha
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trilha we want to update
     *   }
     * })
     */
    upsert<T extends TrilhaUpsertArgs>(args: SelectSubset<T, TrilhaUpsertArgs<ExtArgs>>): Prisma__TrilhaClient<$Result.GetResult<Prisma.$TrilhaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Trilhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrilhaCountArgs} args - Arguments to filter Trilhas to count.
     * @example
     * // Count the number of Trilhas
     * const count = await prisma.trilha.count({
     *   where: {
     *     // ... the filter for the Trilhas we want to count
     *   }
     * })
    **/
    count<T extends TrilhaCountArgs>(
      args?: Subset<T, TrilhaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrilhaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trilha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrilhaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrilhaAggregateArgs>(args: Subset<T, TrilhaAggregateArgs>): Prisma.PrismaPromise<GetTrilhaAggregateType<T>>

    /**
     * Group by Trilha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrilhaGroupByArgs} args - Group by arguments.
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
      T extends TrilhaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrilhaGroupByArgs['orderBy'] }
        : { orderBy?: TrilhaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrilhaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrilhaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trilha model
   */
  readonly fields: TrilhaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trilha.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrilhaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    trilhasCursos<T extends Trilha$trilhasCursosArgs<ExtArgs> = {}>(args?: Subset<T, Trilha$trilhasCursosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrilhaCursoPayload<ExtArgs>, T, "findMany"> | Null>
    certificados<T extends Trilha$certificadosArgs<ExtArgs> = {}>(args?: Subset<T, Trilha$certificadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Trilha model
   */ 
  interface TrilhaFieldRefs {
    readonly id: FieldRef<"Trilha", 'Int'>
    readonly titulo: FieldRef<"Trilha", 'String'>
    readonly descricao: FieldRef<"Trilha", 'String'>
    readonly categoriaId: FieldRef<"Trilha", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Trilha findUnique
   */
  export type TrilhaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trilha
     */
    select?: TrilhaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrilhaInclude<ExtArgs> | null
    /**
     * Filter, which Trilha to fetch.
     */
    where: TrilhaWhereUniqueInput
  }

  /**
   * Trilha findUniqueOrThrow
   */
  export type TrilhaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trilha
     */
    select?: TrilhaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrilhaInclude<ExtArgs> | null
    /**
     * Filter, which Trilha to fetch.
     */
    where: TrilhaWhereUniqueInput
  }

  /**
   * Trilha findFirst
   */
  export type TrilhaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trilha
     */
    select?: TrilhaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrilhaInclude<ExtArgs> | null
    /**
     * Filter, which Trilha to fetch.
     */
    where?: TrilhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trilhas to fetch.
     */
    orderBy?: TrilhaOrderByWithRelationInput | TrilhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trilhas.
     */
    cursor?: TrilhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trilhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trilhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trilhas.
     */
    distinct?: TrilhaScalarFieldEnum | TrilhaScalarFieldEnum[]
  }

  /**
   * Trilha findFirstOrThrow
   */
  export type TrilhaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trilha
     */
    select?: TrilhaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrilhaInclude<ExtArgs> | null
    /**
     * Filter, which Trilha to fetch.
     */
    where?: TrilhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trilhas to fetch.
     */
    orderBy?: TrilhaOrderByWithRelationInput | TrilhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trilhas.
     */
    cursor?: TrilhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trilhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trilhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trilhas.
     */
    distinct?: TrilhaScalarFieldEnum | TrilhaScalarFieldEnum[]
  }

  /**
   * Trilha findMany
   */
  export type TrilhaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trilha
     */
    select?: TrilhaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrilhaInclude<ExtArgs> | null
    /**
     * Filter, which Trilhas to fetch.
     */
    where?: TrilhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trilhas to fetch.
     */
    orderBy?: TrilhaOrderByWithRelationInput | TrilhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trilhas.
     */
    cursor?: TrilhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trilhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trilhas.
     */
    skip?: number
    distinct?: TrilhaScalarFieldEnum | TrilhaScalarFieldEnum[]
  }

  /**
   * Trilha create
   */
  export type TrilhaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trilha
     */
    select?: TrilhaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrilhaInclude<ExtArgs> | null
    /**
     * The data needed to create a Trilha.
     */
    data: XOR<TrilhaCreateInput, TrilhaUncheckedCreateInput>
  }

  /**
   * Trilha createMany
   */
  export type TrilhaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trilhas.
     */
    data: TrilhaCreateManyInput | TrilhaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trilha createManyAndReturn
   */
  export type TrilhaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trilha
     */
    select?: TrilhaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Trilhas.
     */
    data: TrilhaCreateManyInput | TrilhaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrilhaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trilha update
   */
  export type TrilhaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trilha
     */
    select?: TrilhaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrilhaInclude<ExtArgs> | null
    /**
     * The data needed to update a Trilha.
     */
    data: XOR<TrilhaUpdateInput, TrilhaUncheckedUpdateInput>
    /**
     * Choose, which Trilha to update.
     */
    where: TrilhaWhereUniqueInput
  }

  /**
   * Trilha updateMany
   */
  export type TrilhaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trilhas.
     */
    data: XOR<TrilhaUpdateManyMutationInput, TrilhaUncheckedUpdateManyInput>
    /**
     * Filter which Trilhas to update
     */
    where?: TrilhaWhereInput
  }

  /**
   * Trilha upsert
   */
  export type TrilhaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trilha
     */
    select?: TrilhaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrilhaInclude<ExtArgs> | null
    /**
     * The filter to search for the Trilha to update in case it exists.
     */
    where: TrilhaWhereUniqueInput
    /**
     * In case the Trilha found by the `where` argument doesn't exist, create a new Trilha with this data.
     */
    create: XOR<TrilhaCreateInput, TrilhaUncheckedCreateInput>
    /**
     * In case the Trilha was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrilhaUpdateInput, TrilhaUncheckedUpdateInput>
  }

  /**
   * Trilha delete
   */
  export type TrilhaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trilha
     */
    select?: TrilhaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrilhaInclude<ExtArgs> | null
    /**
     * Filter which Trilha to delete.
     */
    where: TrilhaWhereUniqueInput
  }

  /**
   * Trilha deleteMany
   */
  export type TrilhaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trilhas to delete
     */
    where?: TrilhaWhereInput
  }

  /**
   * Trilha.trilhasCursos
   */
  export type Trilha$trilhasCursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrilhaCurso
     */
    select?: TrilhaCursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrilhaCursoInclude<ExtArgs> | null
    where?: TrilhaCursoWhereInput
    orderBy?: TrilhaCursoOrderByWithRelationInput | TrilhaCursoOrderByWithRelationInput[]
    cursor?: TrilhaCursoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrilhaCursoScalarFieldEnum | TrilhaCursoScalarFieldEnum[]
  }

  /**
   * Trilha.certificados
   */
  export type Trilha$certificadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    where?: CertificadoWhereInput
    orderBy?: CertificadoOrderByWithRelationInput | CertificadoOrderByWithRelationInput[]
    cursor?: CertificadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificadoScalarFieldEnum | CertificadoScalarFieldEnum[]
  }

  /**
   * Trilha without action
   */
  export type TrilhaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trilha
     */
    select?: TrilhaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrilhaInclude<ExtArgs> | null
  }


  /**
   * Model TrilhaCurso
   */

  export type AggregateTrilhaCurso = {
    _count: TrilhaCursoCountAggregateOutputType | null
    _avg: TrilhaCursoAvgAggregateOutputType | null
    _sum: TrilhaCursoSumAggregateOutputType | null
    _min: TrilhaCursoMinAggregateOutputType | null
    _max: TrilhaCursoMaxAggregateOutputType | null
  }

  export type TrilhaCursoAvgAggregateOutputType = {
    id: number | null
    trilhaId: number | null
    cursoId: number | null
    ordem: number | null
  }

  export type TrilhaCursoSumAggregateOutputType = {
    id: number | null
    trilhaId: number | null
    cursoId: number | null
    ordem: number | null
  }

  export type TrilhaCursoMinAggregateOutputType = {
    id: number | null
    trilhaId: number | null
    cursoId: number | null
    ordem: number | null
  }

  export type TrilhaCursoMaxAggregateOutputType = {
    id: number | null
    trilhaId: number | null
    cursoId: number | null
    ordem: number | null
  }

  export type TrilhaCursoCountAggregateOutputType = {
    id: number
    trilhaId: number
    cursoId: number
    ordem: number
    _all: number
  }


  export type TrilhaCursoAvgAggregateInputType = {
    id?: true
    trilhaId?: true
    cursoId?: true
    ordem?: true
  }

  export type TrilhaCursoSumAggregateInputType = {
    id?: true
    trilhaId?: true
    cursoId?: true
    ordem?: true
  }

  export type TrilhaCursoMinAggregateInputType = {
    id?: true
    trilhaId?: true
    cursoId?: true
    ordem?: true
  }

  export type TrilhaCursoMaxAggregateInputType = {
    id?: true
    trilhaId?: true
    cursoId?: true
    ordem?: true
  }

  export type TrilhaCursoCountAggregateInputType = {
    id?: true
    trilhaId?: true
    cursoId?: true
    ordem?: true
    _all?: true
  }

  export type TrilhaCursoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrilhaCurso to aggregate.
     */
    where?: TrilhaCursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrilhaCursos to fetch.
     */
    orderBy?: TrilhaCursoOrderByWithRelationInput | TrilhaCursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrilhaCursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrilhaCursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrilhaCursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrilhaCursos
    **/
    _count?: true | TrilhaCursoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrilhaCursoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrilhaCursoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrilhaCursoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrilhaCursoMaxAggregateInputType
  }

  export type GetTrilhaCursoAggregateType<T extends TrilhaCursoAggregateArgs> = {
        [P in keyof T & keyof AggregateTrilhaCurso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrilhaCurso[P]>
      : GetScalarType<T[P], AggregateTrilhaCurso[P]>
  }




  export type TrilhaCursoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrilhaCursoWhereInput
    orderBy?: TrilhaCursoOrderByWithAggregationInput | TrilhaCursoOrderByWithAggregationInput[]
    by: TrilhaCursoScalarFieldEnum[] | TrilhaCursoScalarFieldEnum
    having?: TrilhaCursoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrilhaCursoCountAggregateInputType | true
    _avg?: TrilhaCursoAvgAggregateInputType
    _sum?: TrilhaCursoSumAggregateInputType
    _min?: TrilhaCursoMinAggregateInputType
    _max?: TrilhaCursoMaxAggregateInputType
  }

  export type TrilhaCursoGroupByOutputType = {
    id: number
    trilhaId: number
    cursoId: number
    ordem: number
    _count: TrilhaCursoCountAggregateOutputType | null
    _avg: TrilhaCursoAvgAggregateOutputType | null
    _sum: TrilhaCursoSumAggregateOutputType | null
    _min: TrilhaCursoMinAggregateOutputType | null
    _max: TrilhaCursoMaxAggregateOutputType | null
  }

  type GetTrilhaCursoGroupByPayload<T extends TrilhaCursoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrilhaCursoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrilhaCursoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrilhaCursoGroupByOutputType[P]>
            : GetScalarType<T[P], TrilhaCursoGroupByOutputType[P]>
        }
      >
    >


  export type TrilhaCursoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trilhaId?: boolean
    cursoId?: boolean
    ordem?: boolean
    trilha?: boolean | TrilhaDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trilhaCurso"]>

  export type TrilhaCursoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trilhaId?: boolean
    cursoId?: boolean
    ordem?: boolean
    trilha?: boolean | TrilhaDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trilhaCurso"]>

  export type TrilhaCursoSelectScalar = {
    id?: boolean
    trilhaId?: boolean
    cursoId?: boolean
    ordem?: boolean
  }

  export type TrilhaCursoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trilha?: boolean | TrilhaDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }
  export type TrilhaCursoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trilha?: boolean | TrilhaDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }

  export type $TrilhaCursoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrilhaCurso"
    objects: {
      trilha: Prisma.$TrilhaPayload<ExtArgs>
      curso: Prisma.$CursoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      trilhaId: number
      cursoId: number
      ordem: number
    }, ExtArgs["result"]["trilhaCurso"]>
    composites: {}
  }

  type TrilhaCursoGetPayload<S extends boolean | null | undefined | TrilhaCursoDefaultArgs> = $Result.GetResult<Prisma.$TrilhaCursoPayload, S>

  type TrilhaCursoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TrilhaCursoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TrilhaCursoCountAggregateInputType | true
    }

  export interface TrilhaCursoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrilhaCurso'], meta: { name: 'TrilhaCurso' } }
    /**
     * Find zero or one TrilhaCurso that matches the filter.
     * @param {TrilhaCursoFindUniqueArgs} args - Arguments to find a TrilhaCurso
     * @example
     * // Get one TrilhaCurso
     * const trilhaCurso = await prisma.trilhaCurso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrilhaCursoFindUniqueArgs>(args: SelectSubset<T, TrilhaCursoFindUniqueArgs<ExtArgs>>): Prisma__TrilhaCursoClient<$Result.GetResult<Prisma.$TrilhaCursoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TrilhaCurso that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TrilhaCursoFindUniqueOrThrowArgs} args - Arguments to find a TrilhaCurso
     * @example
     * // Get one TrilhaCurso
     * const trilhaCurso = await prisma.trilhaCurso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrilhaCursoFindUniqueOrThrowArgs>(args: SelectSubset<T, TrilhaCursoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrilhaCursoClient<$Result.GetResult<Prisma.$TrilhaCursoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TrilhaCurso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrilhaCursoFindFirstArgs} args - Arguments to find a TrilhaCurso
     * @example
     * // Get one TrilhaCurso
     * const trilhaCurso = await prisma.trilhaCurso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrilhaCursoFindFirstArgs>(args?: SelectSubset<T, TrilhaCursoFindFirstArgs<ExtArgs>>): Prisma__TrilhaCursoClient<$Result.GetResult<Prisma.$TrilhaCursoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TrilhaCurso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrilhaCursoFindFirstOrThrowArgs} args - Arguments to find a TrilhaCurso
     * @example
     * // Get one TrilhaCurso
     * const trilhaCurso = await prisma.trilhaCurso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrilhaCursoFindFirstOrThrowArgs>(args?: SelectSubset<T, TrilhaCursoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrilhaCursoClient<$Result.GetResult<Prisma.$TrilhaCursoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TrilhaCursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrilhaCursoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrilhaCursos
     * const trilhaCursos = await prisma.trilhaCurso.findMany()
     * 
     * // Get first 10 TrilhaCursos
     * const trilhaCursos = await prisma.trilhaCurso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trilhaCursoWithIdOnly = await prisma.trilhaCurso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrilhaCursoFindManyArgs>(args?: SelectSubset<T, TrilhaCursoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrilhaCursoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TrilhaCurso.
     * @param {TrilhaCursoCreateArgs} args - Arguments to create a TrilhaCurso.
     * @example
     * // Create one TrilhaCurso
     * const TrilhaCurso = await prisma.trilhaCurso.create({
     *   data: {
     *     // ... data to create a TrilhaCurso
     *   }
     * })
     * 
     */
    create<T extends TrilhaCursoCreateArgs>(args: SelectSubset<T, TrilhaCursoCreateArgs<ExtArgs>>): Prisma__TrilhaCursoClient<$Result.GetResult<Prisma.$TrilhaCursoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TrilhaCursos.
     * @param {TrilhaCursoCreateManyArgs} args - Arguments to create many TrilhaCursos.
     * @example
     * // Create many TrilhaCursos
     * const trilhaCurso = await prisma.trilhaCurso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrilhaCursoCreateManyArgs>(args?: SelectSubset<T, TrilhaCursoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrilhaCursos and returns the data saved in the database.
     * @param {TrilhaCursoCreateManyAndReturnArgs} args - Arguments to create many TrilhaCursos.
     * @example
     * // Create many TrilhaCursos
     * const trilhaCurso = await prisma.trilhaCurso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrilhaCursos and only return the `id`
     * const trilhaCursoWithIdOnly = await prisma.trilhaCurso.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrilhaCursoCreateManyAndReturnArgs>(args?: SelectSubset<T, TrilhaCursoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrilhaCursoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TrilhaCurso.
     * @param {TrilhaCursoDeleteArgs} args - Arguments to delete one TrilhaCurso.
     * @example
     * // Delete one TrilhaCurso
     * const TrilhaCurso = await prisma.trilhaCurso.delete({
     *   where: {
     *     // ... filter to delete one TrilhaCurso
     *   }
     * })
     * 
     */
    delete<T extends TrilhaCursoDeleteArgs>(args: SelectSubset<T, TrilhaCursoDeleteArgs<ExtArgs>>): Prisma__TrilhaCursoClient<$Result.GetResult<Prisma.$TrilhaCursoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TrilhaCurso.
     * @param {TrilhaCursoUpdateArgs} args - Arguments to update one TrilhaCurso.
     * @example
     * // Update one TrilhaCurso
     * const trilhaCurso = await prisma.trilhaCurso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrilhaCursoUpdateArgs>(args: SelectSubset<T, TrilhaCursoUpdateArgs<ExtArgs>>): Prisma__TrilhaCursoClient<$Result.GetResult<Prisma.$TrilhaCursoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TrilhaCursos.
     * @param {TrilhaCursoDeleteManyArgs} args - Arguments to filter TrilhaCursos to delete.
     * @example
     * // Delete a few TrilhaCursos
     * const { count } = await prisma.trilhaCurso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrilhaCursoDeleteManyArgs>(args?: SelectSubset<T, TrilhaCursoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrilhaCursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrilhaCursoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrilhaCursos
     * const trilhaCurso = await prisma.trilhaCurso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrilhaCursoUpdateManyArgs>(args: SelectSubset<T, TrilhaCursoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TrilhaCurso.
     * @param {TrilhaCursoUpsertArgs} args - Arguments to update or create a TrilhaCurso.
     * @example
     * // Update or create a TrilhaCurso
     * const trilhaCurso = await prisma.trilhaCurso.upsert({
     *   create: {
     *     // ... data to create a TrilhaCurso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrilhaCurso we want to update
     *   }
     * })
     */
    upsert<T extends TrilhaCursoUpsertArgs>(args: SelectSubset<T, TrilhaCursoUpsertArgs<ExtArgs>>): Prisma__TrilhaCursoClient<$Result.GetResult<Prisma.$TrilhaCursoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TrilhaCursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrilhaCursoCountArgs} args - Arguments to filter TrilhaCursos to count.
     * @example
     * // Count the number of TrilhaCursos
     * const count = await prisma.trilhaCurso.count({
     *   where: {
     *     // ... the filter for the TrilhaCursos we want to count
     *   }
     * })
    **/
    count<T extends TrilhaCursoCountArgs>(
      args?: Subset<T, TrilhaCursoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrilhaCursoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrilhaCurso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrilhaCursoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrilhaCursoAggregateArgs>(args: Subset<T, TrilhaCursoAggregateArgs>): Prisma.PrismaPromise<GetTrilhaCursoAggregateType<T>>

    /**
     * Group by TrilhaCurso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrilhaCursoGroupByArgs} args - Group by arguments.
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
      T extends TrilhaCursoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrilhaCursoGroupByArgs['orderBy'] }
        : { orderBy?: TrilhaCursoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrilhaCursoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrilhaCursoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrilhaCurso model
   */
  readonly fields: TrilhaCursoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrilhaCurso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrilhaCursoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trilha<T extends TrilhaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrilhaDefaultArgs<ExtArgs>>): Prisma__TrilhaClient<$Result.GetResult<Prisma.$TrilhaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    curso<T extends CursoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CursoDefaultArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the TrilhaCurso model
   */ 
  interface TrilhaCursoFieldRefs {
    readonly id: FieldRef<"TrilhaCurso", 'Int'>
    readonly trilhaId: FieldRef<"TrilhaCurso", 'Int'>
    readonly cursoId: FieldRef<"TrilhaCurso", 'Int'>
    readonly ordem: FieldRef<"TrilhaCurso", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TrilhaCurso findUnique
   */
  export type TrilhaCursoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrilhaCurso
     */
    select?: TrilhaCursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrilhaCursoInclude<ExtArgs> | null
    /**
     * Filter, which TrilhaCurso to fetch.
     */
    where: TrilhaCursoWhereUniqueInput
  }

  /**
   * TrilhaCurso findUniqueOrThrow
   */
  export type TrilhaCursoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrilhaCurso
     */
    select?: TrilhaCursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrilhaCursoInclude<ExtArgs> | null
    /**
     * Filter, which TrilhaCurso to fetch.
     */
    where: TrilhaCursoWhereUniqueInput
  }

  /**
   * TrilhaCurso findFirst
   */
  export type TrilhaCursoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrilhaCurso
     */
    select?: TrilhaCursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrilhaCursoInclude<ExtArgs> | null
    /**
     * Filter, which TrilhaCurso to fetch.
     */
    where?: TrilhaCursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrilhaCursos to fetch.
     */
    orderBy?: TrilhaCursoOrderByWithRelationInput | TrilhaCursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrilhaCursos.
     */
    cursor?: TrilhaCursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrilhaCursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrilhaCursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrilhaCursos.
     */
    distinct?: TrilhaCursoScalarFieldEnum | TrilhaCursoScalarFieldEnum[]
  }

  /**
   * TrilhaCurso findFirstOrThrow
   */
  export type TrilhaCursoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrilhaCurso
     */
    select?: TrilhaCursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrilhaCursoInclude<ExtArgs> | null
    /**
     * Filter, which TrilhaCurso to fetch.
     */
    where?: TrilhaCursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrilhaCursos to fetch.
     */
    orderBy?: TrilhaCursoOrderByWithRelationInput | TrilhaCursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrilhaCursos.
     */
    cursor?: TrilhaCursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrilhaCursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrilhaCursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrilhaCursos.
     */
    distinct?: TrilhaCursoScalarFieldEnum | TrilhaCursoScalarFieldEnum[]
  }

  /**
   * TrilhaCurso findMany
   */
  export type TrilhaCursoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrilhaCurso
     */
    select?: TrilhaCursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrilhaCursoInclude<ExtArgs> | null
    /**
     * Filter, which TrilhaCursos to fetch.
     */
    where?: TrilhaCursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrilhaCursos to fetch.
     */
    orderBy?: TrilhaCursoOrderByWithRelationInput | TrilhaCursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrilhaCursos.
     */
    cursor?: TrilhaCursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrilhaCursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrilhaCursos.
     */
    skip?: number
    distinct?: TrilhaCursoScalarFieldEnum | TrilhaCursoScalarFieldEnum[]
  }

  /**
   * TrilhaCurso create
   */
  export type TrilhaCursoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrilhaCurso
     */
    select?: TrilhaCursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrilhaCursoInclude<ExtArgs> | null
    /**
     * The data needed to create a TrilhaCurso.
     */
    data: XOR<TrilhaCursoCreateInput, TrilhaCursoUncheckedCreateInput>
  }

  /**
   * TrilhaCurso createMany
   */
  export type TrilhaCursoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrilhaCursos.
     */
    data: TrilhaCursoCreateManyInput | TrilhaCursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrilhaCurso createManyAndReturn
   */
  export type TrilhaCursoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrilhaCurso
     */
    select?: TrilhaCursoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TrilhaCursos.
     */
    data: TrilhaCursoCreateManyInput | TrilhaCursoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrilhaCursoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrilhaCurso update
   */
  export type TrilhaCursoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrilhaCurso
     */
    select?: TrilhaCursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrilhaCursoInclude<ExtArgs> | null
    /**
     * The data needed to update a TrilhaCurso.
     */
    data: XOR<TrilhaCursoUpdateInput, TrilhaCursoUncheckedUpdateInput>
    /**
     * Choose, which TrilhaCurso to update.
     */
    where: TrilhaCursoWhereUniqueInput
  }

  /**
   * TrilhaCurso updateMany
   */
  export type TrilhaCursoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrilhaCursos.
     */
    data: XOR<TrilhaCursoUpdateManyMutationInput, TrilhaCursoUncheckedUpdateManyInput>
    /**
     * Filter which TrilhaCursos to update
     */
    where?: TrilhaCursoWhereInput
  }

  /**
   * TrilhaCurso upsert
   */
  export type TrilhaCursoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrilhaCurso
     */
    select?: TrilhaCursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrilhaCursoInclude<ExtArgs> | null
    /**
     * The filter to search for the TrilhaCurso to update in case it exists.
     */
    where: TrilhaCursoWhereUniqueInput
    /**
     * In case the TrilhaCurso found by the `where` argument doesn't exist, create a new TrilhaCurso with this data.
     */
    create: XOR<TrilhaCursoCreateInput, TrilhaCursoUncheckedCreateInput>
    /**
     * In case the TrilhaCurso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrilhaCursoUpdateInput, TrilhaCursoUncheckedUpdateInput>
  }

  /**
   * TrilhaCurso delete
   */
  export type TrilhaCursoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrilhaCurso
     */
    select?: TrilhaCursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrilhaCursoInclude<ExtArgs> | null
    /**
     * Filter which TrilhaCurso to delete.
     */
    where: TrilhaCursoWhereUniqueInput
  }

  /**
   * TrilhaCurso deleteMany
   */
  export type TrilhaCursoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrilhaCursos to delete
     */
    where?: TrilhaCursoWhereInput
  }

  /**
   * TrilhaCurso without action
   */
  export type TrilhaCursoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrilhaCurso
     */
    select?: TrilhaCursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrilhaCursoInclude<ExtArgs> | null
  }


  /**
   * Model Certificado
   */

  export type AggregateCertificado = {
    _count: CertificadoCountAggregateOutputType | null
    _avg: CertificadoAvgAggregateOutputType | null
    _sum: CertificadoSumAggregateOutputType | null
    _min: CertificadoMinAggregateOutputType | null
    _max: CertificadoMaxAggregateOutputType | null
  }

  export type CertificadoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    cursoId: number | null
    trilhaId: number | null
  }

  export type CertificadoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    cursoId: number | null
    trilhaId: number | null
  }

  export type CertificadoMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    cursoId: number | null
    trilhaId: number | null
    codigoVerificacao: string | null
    dataEmissao: Date | null
  }

  export type CertificadoMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    cursoId: number | null
    trilhaId: number | null
    codigoVerificacao: string | null
    dataEmissao: Date | null
  }

  export type CertificadoCountAggregateOutputType = {
    id: number
    usuarioId: number
    cursoId: number
    trilhaId: number
    codigoVerificacao: number
    dataEmissao: number
    _all: number
  }


  export type CertificadoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    cursoId?: true
    trilhaId?: true
  }

  export type CertificadoSumAggregateInputType = {
    id?: true
    usuarioId?: true
    cursoId?: true
    trilhaId?: true
  }

  export type CertificadoMinAggregateInputType = {
    id?: true
    usuarioId?: true
    cursoId?: true
    trilhaId?: true
    codigoVerificacao?: true
    dataEmissao?: true
  }

  export type CertificadoMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    cursoId?: true
    trilhaId?: true
    codigoVerificacao?: true
    dataEmissao?: true
  }

  export type CertificadoCountAggregateInputType = {
    id?: true
    usuarioId?: true
    cursoId?: true
    trilhaId?: true
    codigoVerificacao?: true
    dataEmissao?: true
    _all?: true
  }

  export type CertificadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificado to aggregate.
     */
    where?: CertificadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificados to fetch.
     */
    orderBy?: CertificadoOrderByWithRelationInput | CertificadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CertificadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Certificados
    **/
    _count?: true | CertificadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CertificadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CertificadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CertificadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CertificadoMaxAggregateInputType
  }

  export type GetCertificadoAggregateType<T extends CertificadoAggregateArgs> = {
        [P in keyof T & keyof AggregateCertificado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCertificado[P]>
      : GetScalarType<T[P], AggregateCertificado[P]>
  }




  export type CertificadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificadoWhereInput
    orderBy?: CertificadoOrderByWithAggregationInput | CertificadoOrderByWithAggregationInput[]
    by: CertificadoScalarFieldEnum[] | CertificadoScalarFieldEnum
    having?: CertificadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CertificadoCountAggregateInputType | true
    _avg?: CertificadoAvgAggregateInputType
    _sum?: CertificadoSumAggregateInputType
    _min?: CertificadoMinAggregateInputType
    _max?: CertificadoMaxAggregateInputType
  }

  export type CertificadoGroupByOutputType = {
    id: number
    usuarioId: number
    cursoId: number
    trilhaId: number | null
    codigoVerificacao: string
    dataEmissao: Date
    _count: CertificadoCountAggregateOutputType | null
    _avg: CertificadoAvgAggregateOutputType | null
    _sum: CertificadoSumAggregateOutputType | null
    _min: CertificadoMinAggregateOutputType | null
    _max: CertificadoMaxAggregateOutputType | null
  }

  type GetCertificadoGroupByPayload<T extends CertificadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CertificadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CertificadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CertificadoGroupByOutputType[P]>
            : GetScalarType<T[P], CertificadoGroupByOutputType[P]>
        }
      >
    >


  export type CertificadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    cursoId?: boolean
    trilhaId?: boolean
    codigoVerificacao?: boolean
    dataEmissao?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    trilha?: boolean | Certificado$trilhaArgs<ExtArgs>
  }, ExtArgs["result"]["certificado"]>

  export type CertificadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    cursoId?: boolean
    trilhaId?: boolean
    codigoVerificacao?: boolean
    dataEmissao?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    trilha?: boolean | Certificado$trilhaArgs<ExtArgs>
  }, ExtArgs["result"]["certificado"]>

  export type CertificadoSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    cursoId?: boolean
    trilhaId?: boolean
    codigoVerificacao?: boolean
    dataEmissao?: boolean
  }

  export type CertificadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    trilha?: boolean | Certificado$trilhaArgs<ExtArgs>
  }
  export type CertificadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    trilha?: boolean | Certificado$trilhaArgs<ExtArgs>
  }

  export type $CertificadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Certificado"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      curso: Prisma.$CursoPayload<ExtArgs>
      trilha: Prisma.$TrilhaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      cursoId: number
      trilhaId: number | null
      codigoVerificacao: string
      dataEmissao: Date
    }, ExtArgs["result"]["certificado"]>
    composites: {}
  }

  type CertificadoGetPayload<S extends boolean | null | undefined | CertificadoDefaultArgs> = $Result.GetResult<Prisma.$CertificadoPayload, S>

  type CertificadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CertificadoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CertificadoCountAggregateInputType | true
    }

  export interface CertificadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Certificado'], meta: { name: 'Certificado' } }
    /**
     * Find zero or one Certificado that matches the filter.
     * @param {CertificadoFindUniqueArgs} args - Arguments to find a Certificado
     * @example
     * // Get one Certificado
     * const certificado = await prisma.certificado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CertificadoFindUniqueArgs>(args: SelectSubset<T, CertificadoFindUniqueArgs<ExtArgs>>): Prisma__CertificadoClient<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Certificado that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CertificadoFindUniqueOrThrowArgs} args - Arguments to find a Certificado
     * @example
     * // Get one Certificado
     * const certificado = await prisma.certificado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CertificadoFindUniqueOrThrowArgs>(args: SelectSubset<T, CertificadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CertificadoClient<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Certificado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificadoFindFirstArgs} args - Arguments to find a Certificado
     * @example
     * // Get one Certificado
     * const certificado = await prisma.certificado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CertificadoFindFirstArgs>(args?: SelectSubset<T, CertificadoFindFirstArgs<ExtArgs>>): Prisma__CertificadoClient<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Certificado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificadoFindFirstOrThrowArgs} args - Arguments to find a Certificado
     * @example
     * // Get one Certificado
     * const certificado = await prisma.certificado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CertificadoFindFirstOrThrowArgs>(args?: SelectSubset<T, CertificadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CertificadoClient<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Certificados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Certificados
     * const certificados = await prisma.certificado.findMany()
     * 
     * // Get first 10 Certificados
     * const certificados = await prisma.certificado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const certificadoWithIdOnly = await prisma.certificado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CertificadoFindManyArgs>(args?: SelectSubset<T, CertificadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Certificado.
     * @param {CertificadoCreateArgs} args - Arguments to create a Certificado.
     * @example
     * // Create one Certificado
     * const Certificado = await prisma.certificado.create({
     *   data: {
     *     // ... data to create a Certificado
     *   }
     * })
     * 
     */
    create<T extends CertificadoCreateArgs>(args: SelectSubset<T, CertificadoCreateArgs<ExtArgs>>): Prisma__CertificadoClient<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Certificados.
     * @param {CertificadoCreateManyArgs} args - Arguments to create many Certificados.
     * @example
     * // Create many Certificados
     * const certificado = await prisma.certificado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CertificadoCreateManyArgs>(args?: SelectSubset<T, CertificadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Certificados and returns the data saved in the database.
     * @param {CertificadoCreateManyAndReturnArgs} args - Arguments to create many Certificados.
     * @example
     * // Create many Certificados
     * const certificado = await prisma.certificado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Certificados and only return the `id`
     * const certificadoWithIdOnly = await prisma.certificado.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CertificadoCreateManyAndReturnArgs>(args?: SelectSubset<T, CertificadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Certificado.
     * @param {CertificadoDeleteArgs} args - Arguments to delete one Certificado.
     * @example
     * // Delete one Certificado
     * const Certificado = await prisma.certificado.delete({
     *   where: {
     *     // ... filter to delete one Certificado
     *   }
     * })
     * 
     */
    delete<T extends CertificadoDeleteArgs>(args: SelectSubset<T, CertificadoDeleteArgs<ExtArgs>>): Prisma__CertificadoClient<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Certificado.
     * @param {CertificadoUpdateArgs} args - Arguments to update one Certificado.
     * @example
     * // Update one Certificado
     * const certificado = await prisma.certificado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CertificadoUpdateArgs>(args: SelectSubset<T, CertificadoUpdateArgs<ExtArgs>>): Prisma__CertificadoClient<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Certificados.
     * @param {CertificadoDeleteManyArgs} args - Arguments to filter Certificados to delete.
     * @example
     * // Delete a few Certificados
     * const { count } = await prisma.certificado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CertificadoDeleteManyArgs>(args?: SelectSubset<T, CertificadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Certificados
     * const certificado = await prisma.certificado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CertificadoUpdateManyArgs>(args: SelectSubset<T, CertificadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Certificado.
     * @param {CertificadoUpsertArgs} args - Arguments to update or create a Certificado.
     * @example
     * // Update or create a Certificado
     * const certificado = await prisma.certificado.upsert({
     *   create: {
     *     // ... data to create a Certificado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Certificado we want to update
     *   }
     * })
     */
    upsert<T extends CertificadoUpsertArgs>(args: SelectSubset<T, CertificadoUpsertArgs<ExtArgs>>): Prisma__CertificadoClient<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Certificados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificadoCountArgs} args - Arguments to filter Certificados to count.
     * @example
     * // Count the number of Certificados
     * const count = await prisma.certificado.count({
     *   where: {
     *     // ... the filter for the Certificados we want to count
     *   }
     * })
    **/
    count<T extends CertificadoCountArgs>(
      args?: Subset<T, CertificadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CertificadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Certificado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CertificadoAggregateArgs>(args: Subset<T, CertificadoAggregateArgs>): Prisma.PrismaPromise<GetCertificadoAggregateType<T>>

    /**
     * Group by Certificado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificadoGroupByArgs} args - Group by arguments.
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
      T extends CertificadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CertificadoGroupByArgs['orderBy'] }
        : { orderBy?: CertificadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CertificadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCertificadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Certificado model
   */
  readonly fields: CertificadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Certificado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CertificadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    curso<T extends CursoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CursoDefaultArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    trilha<T extends Certificado$trilhaArgs<ExtArgs> = {}>(args?: Subset<T, Certificado$trilhaArgs<ExtArgs>>): Prisma__TrilhaClient<$Result.GetResult<Prisma.$TrilhaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Certificado model
   */ 
  interface CertificadoFieldRefs {
    readonly id: FieldRef<"Certificado", 'Int'>
    readonly usuarioId: FieldRef<"Certificado", 'Int'>
    readonly cursoId: FieldRef<"Certificado", 'Int'>
    readonly trilhaId: FieldRef<"Certificado", 'Int'>
    readonly codigoVerificacao: FieldRef<"Certificado", 'String'>
    readonly dataEmissao: FieldRef<"Certificado", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Certificado findUnique
   */
  export type CertificadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * Filter, which Certificado to fetch.
     */
    where: CertificadoWhereUniqueInput
  }

  /**
   * Certificado findUniqueOrThrow
   */
  export type CertificadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * Filter, which Certificado to fetch.
     */
    where: CertificadoWhereUniqueInput
  }

  /**
   * Certificado findFirst
   */
  export type CertificadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * Filter, which Certificado to fetch.
     */
    where?: CertificadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificados to fetch.
     */
    orderBy?: CertificadoOrderByWithRelationInput | CertificadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificados.
     */
    cursor?: CertificadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificados.
     */
    distinct?: CertificadoScalarFieldEnum | CertificadoScalarFieldEnum[]
  }

  /**
   * Certificado findFirstOrThrow
   */
  export type CertificadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * Filter, which Certificado to fetch.
     */
    where?: CertificadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificados to fetch.
     */
    orderBy?: CertificadoOrderByWithRelationInput | CertificadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificados.
     */
    cursor?: CertificadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificados.
     */
    distinct?: CertificadoScalarFieldEnum | CertificadoScalarFieldEnum[]
  }

  /**
   * Certificado findMany
   */
  export type CertificadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * Filter, which Certificados to fetch.
     */
    where?: CertificadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificados to fetch.
     */
    orderBy?: CertificadoOrderByWithRelationInput | CertificadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Certificados.
     */
    cursor?: CertificadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificados.
     */
    skip?: number
    distinct?: CertificadoScalarFieldEnum | CertificadoScalarFieldEnum[]
  }

  /**
   * Certificado create
   */
  export type CertificadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * The data needed to create a Certificado.
     */
    data: XOR<CertificadoCreateInput, CertificadoUncheckedCreateInput>
  }

  /**
   * Certificado createMany
   */
  export type CertificadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Certificados.
     */
    data: CertificadoCreateManyInput | CertificadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Certificado createManyAndReturn
   */
  export type CertificadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Certificados.
     */
    data: CertificadoCreateManyInput | CertificadoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Certificado update
   */
  export type CertificadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * The data needed to update a Certificado.
     */
    data: XOR<CertificadoUpdateInput, CertificadoUncheckedUpdateInput>
    /**
     * Choose, which Certificado to update.
     */
    where: CertificadoWhereUniqueInput
  }

  /**
   * Certificado updateMany
   */
  export type CertificadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Certificados.
     */
    data: XOR<CertificadoUpdateManyMutationInput, CertificadoUncheckedUpdateManyInput>
    /**
     * Filter which Certificados to update
     */
    where?: CertificadoWhereInput
  }

  /**
   * Certificado upsert
   */
  export type CertificadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * The filter to search for the Certificado to update in case it exists.
     */
    where: CertificadoWhereUniqueInput
    /**
     * In case the Certificado found by the `where` argument doesn't exist, create a new Certificado with this data.
     */
    create: XOR<CertificadoCreateInput, CertificadoUncheckedCreateInput>
    /**
     * In case the Certificado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CertificadoUpdateInput, CertificadoUncheckedUpdateInput>
  }

  /**
   * Certificado delete
   */
  export type CertificadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * Filter which Certificado to delete.
     */
    where: CertificadoWhereUniqueInput
  }

  /**
   * Certificado deleteMany
   */
  export type CertificadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificados to delete
     */
    where?: CertificadoWhereInput
  }

  /**
   * Certificado.trilha
   */
  export type Certificado$trilhaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trilha
     */
    select?: TrilhaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrilhaInclude<ExtArgs> | null
    where?: TrilhaWhereInput
  }

  /**
   * Certificado without action
   */
  export type CertificadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
  }


  /**
   * Model Plano
   */

  export type AggregatePlano = {
    _count: PlanoCountAggregateOutputType | null
    _avg: PlanoAvgAggregateOutputType | null
    _sum: PlanoSumAggregateOutputType | null
    _min: PlanoMinAggregateOutputType | null
    _max: PlanoMaxAggregateOutputType | null
  }

  export type PlanoAvgAggregateOutputType = {
    id: number | null
    preco: number | null
    duracaoMeses: number | null
  }

  export type PlanoSumAggregateOutputType = {
    id: number | null
    preco: number | null
    duracaoMeses: number | null
  }

  export type PlanoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    preco: number | null
    duracaoMeses: number | null
  }

  export type PlanoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    preco: number | null
    duracaoMeses: number | null
  }

  export type PlanoCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    preco: number
    duracaoMeses: number
    _all: number
  }


  export type PlanoAvgAggregateInputType = {
    id?: true
    preco?: true
    duracaoMeses?: true
  }

  export type PlanoSumAggregateInputType = {
    id?: true
    preco?: true
    duracaoMeses?: true
  }

  export type PlanoMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    preco?: true
    duracaoMeses?: true
  }

  export type PlanoMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    preco?: true
    duracaoMeses?: true
  }

  export type PlanoCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    preco?: true
    duracaoMeses?: true
    _all?: true
  }

  export type PlanoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plano to aggregate.
     */
    where?: PlanoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planos to fetch.
     */
    orderBy?: PlanoOrderByWithRelationInput | PlanoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Planos
    **/
    _count?: true | PlanoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanoMaxAggregateInputType
  }

  export type GetPlanoAggregateType<T extends PlanoAggregateArgs> = {
        [P in keyof T & keyof AggregatePlano]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlano[P]>
      : GetScalarType<T[P], AggregatePlano[P]>
  }




  export type PlanoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanoWhereInput
    orderBy?: PlanoOrderByWithAggregationInput | PlanoOrderByWithAggregationInput[]
    by: PlanoScalarFieldEnum[] | PlanoScalarFieldEnum
    having?: PlanoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanoCountAggregateInputType | true
    _avg?: PlanoAvgAggregateInputType
    _sum?: PlanoSumAggregateInputType
    _min?: PlanoMinAggregateInputType
    _max?: PlanoMaxAggregateInputType
  }

  export type PlanoGroupByOutputType = {
    id: number
    nome: string
    descricao: string
    preco: number
    duracaoMeses: number
    _count: PlanoCountAggregateOutputType | null
    _avg: PlanoAvgAggregateOutputType | null
    _sum: PlanoSumAggregateOutputType | null
    _min: PlanoMinAggregateOutputType | null
    _max: PlanoMaxAggregateOutputType | null
  }

  type GetPlanoGroupByPayload<T extends PlanoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanoGroupByOutputType[P]>
            : GetScalarType<T[P], PlanoGroupByOutputType[P]>
        }
      >
    >


  export type PlanoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    preco?: boolean
    duracaoMeses?: boolean
    assinaturas?: boolean | Plano$assinaturasArgs<ExtArgs>
    _count?: boolean | PlanoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plano"]>

  export type PlanoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    preco?: boolean
    duracaoMeses?: boolean
  }, ExtArgs["result"]["plano"]>

  export type PlanoSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    preco?: boolean
    duracaoMeses?: boolean
  }

  export type PlanoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assinaturas?: boolean | Plano$assinaturasArgs<ExtArgs>
    _count?: boolean | PlanoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlanoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlanoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plano"
    objects: {
      assinaturas: Prisma.$AssinaturaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string
      preco: number
      duracaoMeses: number
    }, ExtArgs["result"]["plano"]>
    composites: {}
  }

  type PlanoGetPayload<S extends boolean | null | undefined | PlanoDefaultArgs> = $Result.GetResult<Prisma.$PlanoPayload, S>

  type PlanoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlanoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlanoCountAggregateInputType | true
    }

  export interface PlanoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plano'], meta: { name: 'Plano' } }
    /**
     * Find zero or one Plano that matches the filter.
     * @param {PlanoFindUniqueArgs} args - Arguments to find a Plano
     * @example
     * // Get one Plano
     * const plano = await prisma.plano.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanoFindUniqueArgs>(args: SelectSubset<T, PlanoFindUniqueArgs<ExtArgs>>): Prisma__PlanoClient<$Result.GetResult<Prisma.$PlanoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Plano that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PlanoFindUniqueOrThrowArgs} args - Arguments to find a Plano
     * @example
     * // Get one Plano
     * const plano = await prisma.plano.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanoFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanoClient<$Result.GetResult<Prisma.$PlanoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Plano that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanoFindFirstArgs} args - Arguments to find a Plano
     * @example
     * // Get one Plano
     * const plano = await prisma.plano.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanoFindFirstArgs>(args?: SelectSubset<T, PlanoFindFirstArgs<ExtArgs>>): Prisma__PlanoClient<$Result.GetResult<Prisma.$PlanoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Plano that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanoFindFirstOrThrowArgs} args - Arguments to find a Plano
     * @example
     * // Get one Plano
     * const plano = await prisma.plano.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanoFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanoClient<$Result.GetResult<Prisma.$PlanoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Planos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Planos
     * const planos = await prisma.plano.findMany()
     * 
     * // Get first 10 Planos
     * const planos = await prisma.plano.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planoWithIdOnly = await prisma.plano.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanoFindManyArgs>(args?: SelectSubset<T, PlanoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Plano.
     * @param {PlanoCreateArgs} args - Arguments to create a Plano.
     * @example
     * // Create one Plano
     * const Plano = await prisma.plano.create({
     *   data: {
     *     // ... data to create a Plano
     *   }
     * })
     * 
     */
    create<T extends PlanoCreateArgs>(args: SelectSubset<T, PlanoCreateArgs<ExtArgs>>): Prisma__PlanoClient<$Result.GetResult<Prisma.$PlanoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Planos.
     * @param {PlanoCreateManyArgs} args - Arguments to create many Planos.
     * @example
     * // Create many Planos
     * const plano = await prisma.plano.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanoCreateManyArgs>(args?: SelectSubset<T, PlanoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Planos and returns the data saved in the database.
     * @param {PlanoCreateManyAndReturnArgs} args - Arguments to create many Planos.
     * @example
     * // Create many Planos
     * const plano = await prisma.plano.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Planos and only return the `id`
     * const planoWithIdOnly = await prisma.plano.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanoCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Plano.
     * @param {PlanoDeleteArgs} args - Arguments to delete one Plano.
     * @example
     * // Delete one Plano
     * const Plano = await prisma.plano.delete({
     *   where: {
     *     // ... filter to delete one Plano
     *   }
     * })
     * 
     */
    delete<T extends PlanoDeleteArgs>(args: SelectSubset<T, PlanoDeleteArgs<ExtArgs>>): Prisma__PlanoClient<$Result.GetResult<Prisma.$PlanoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Plano.
     * @param {PlanoUpdateArgs} args - Arguments to update one Plano.
     * @example
     * // Update one Plano
     * const plano = await prisma.plano.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanoUpdateArgs>(args: SelectSubset<T, PlanoUpdateArgs<ExtArgs>>): Prisma__PlanoClient<$Result.GetResult<Prisma.$PlanoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Planos.
     * @param {PlanoDeleteManyArgs} args - Arguments to filter Planos to delete.
     * @example
     * // Delete a few Planos
     * const { count } = await prisma.plano.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanoDeleteManyArgs>(args?: SelectSubset<T, PlanoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Planos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Planos
     * const plano = await prisma.plano.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanoUpdateManyArgs>(args: SelectSubset<T, PlanoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Plano.
     * @param {PlanoUpsertArgs} args - Arguments to update or create a Plano.
     * @example
     * // Update or create a Plano
     * const plano = await prisma.plano.upsert({
     *   create: {
     *     // ... data to create a Plano
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plano we want to update
     *   }
     * })
     */
    upsert<T extends PlanoUpsertArgs>(args: SelectSubset<T, PlanoUpsertArgs<ExtArgs>>): Prisma__PlanoClient<$Result.GetResult<Prisma.$PlanoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Planos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanoCountArgs} args - Arguments to filter Planos to count.
     * @example
     * // Count the number of Planos
     * const count = await prisma.plano.count({
     *   where: {
     *     // ... the filter for the Planos we want to count
     *   }
     * })
    **/
    count<T extends PlanoCountArgs>(
      args?: Subset<T, PlanoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plano.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanoAggregateArgs>(args: Subset<T, PlanoAggregateArgs>): Prisma.PrismaPromise<GetPlanoAggregateType<T>>

    /**
     * Group by Plano.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanoGroupByArgs} args - Group by arguments.
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
      T extends PlanoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanoGroupByArgs['orderBy'] }
        : { orderBy?: PlanoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlanoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plano model
   */
  readonly fields: PlanoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plano.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assinaturas<T extends Plano$assinaturasArgs<ExtArgs> = {}>(args?: Subset<T, Plano$assinaturasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssinaturaPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Plano model
   */ 
  interface PlanoFieldRefs {
    readonly id: FieldRef<"Plano", 'Int'>
    readonly nome: FieldRef<"Plano", 'String'>
    readonly descricao: FieldRef<"Plano", 'String'>
    readonly preco: FieldRef<"Plano", 'Float'>
    readonly duracaoMeses: FieldRef<"Plano", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Plano findUnique
   */
  export type PlanoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plano
     */
    select?: PlanoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoInclude<ExtArgs> | null
    /**
     * Filter, which Plano to fetch.
     */
    where: PlanoWhereUniqueInput
  }

  /**
   * Plano findUniqueOrThrow
   */
  export type PlanoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plano
     */
    select?: PlanoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoInclude<ExtArgs> | null
    /**
     * Filter, which Plano to fetch.
     */
    where: PlanoWhereUniqueInput
  }

  /**
   * Plano findFirst
   */
  export type PlanoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plano
     */
    select?: PlanoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoInclude<ExtArgs> | null
    /**
     * Filter, which Plano to fetch.
     */
    where?: PlanoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planos to fetch.
     */
    orderBy?: PlanoOrderByWithRelationInput | PlanoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Planos.
     */
    cursor?: PlanoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Planos.
     */
    distinct?: PlanoScalarFieldEnum | PlanoScalarFieldEnum[]
  }

  /**
   * Plano findFirstOrThrow
   */
  export type PlanoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plano
     */
    select?: PlanoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoInclude<ExtArgs> | null
    /**
     * Filter, which Plano to fetch.
     */
    where?: PlanoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planos to fetch.
     */
    orderBy?: PlanoOrderByWithRelationInput | PlanoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Planos.
     */
    cursor?: PlanoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Planos.
     */
    distinct?: PlanoScalarFieldEnum | PlanoScalarFieldEnum[]
  }

  /**
   * Plano findMany
   */
  export type PlanoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plano
     */
    select?: PlanoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoInclude<ExtArgs> | null
    /**
     * Filter, which Planos to fetch.
     */
    where?: PlanoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planos to fetch.
     */
    orderBy?: PlanoOrderByWithRelationInput | PlanoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Planos.
     */
    cursor?: PlanoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planos.
     */
    skip?: number
    distinct?: PlanoScalarFieldEnum | PlanoScalarFieldEnum[]
  }

  /**
   * Plano create
   */
  export type PlanoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plano
     */
    select?: PlanoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoInclude<ExtArgs> | null
    /**
     * The data needed to create a Plano.
     */
    data: XOR<PlanoCreateInput, PlanoUncheckedCreateInput>
  }

  /**
   * Plano createMany
   */
  export type PlanoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Planos.
     */
    data: PlanoCreateManyInput | PlanoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plano createManyAndReturn
   */
  export type PlanoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plano
     */
    select?: PlanoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Planos.
     */
    data: PlanoCreateManyInput | PlanoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plano update
   */
  export type PlanoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plano
     */
    select?: PlanoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoInclude<ExtArgs> | null
    /**
     * The data needed to update a Plano.
     */
    data: XOR<PlanoUpdateInput, PlanoUncheckedUpdateInput>
    /**
     * Choose, which Plano to update.
     */
    where: PlanoWhereUniqueInput
  }

  /**
   * Plano updateMany
   */
  export type PlanoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Planos.
     */
    data: XOR<PlanoUpdateManyMutationInput, PlanoUncheckedUpdateManyInput>
    /**
     * Filter which Planos to update
     */
    where?: PlanoWhereInput
  }

  /**
   * Plano upsert
   */
  export type PlanoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plano
     */
    select?: PlanoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoInclude<ExtArgs> | null
    /**
     * The filter to search for the Plano to update in case it exists.
     */
    where: PlanoWhereUniqueInput
    /**
     * In case the Plano found by the `where` argument doesn't exist, create a new Plano with this data.
     */
    create: XOR<PlanoCreateInput, PlanoUncheckedCreateInput>
    /**
     * In case the Plano was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanoUpdateInput, PlanoUncheckedUpdateInput>
  }

  /**
   * Plano delete
   */
  export type PlanoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plano
     */
    select?: PlanoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoInclude<ExtArgs> | null
    /**
     * Filter which Plano to delete.
     */
    where: PlanoWhereUniqueInput
  }

  /**
   * Plano deleteMany
   */
  export type PlanoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Planos to delete
     */
    where?: PlanoWhereInput
  }

  /**
   * Plano.assinaturas
   */
  export type Plano$assinaturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assinatura
     */
    select?: AssinaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssinaturaInclude<ExtArgs> | null
    where?: AssinaturaWhereInput
    orderBy?: AssinaturaOrderByWithRelationInput | AssinaturaOrderByWithRelationInput[]
    cursor?: AssinaturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssinaturaScalarFieldEnum | AssinaturaScalarFieldEnum[]
  }

  /**
   * Plano without action
   */
  export type PlanoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plano
     */
    select?: PlanoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoInclude<ExtArgs> | null
  }


  /**
   * Model Assinatura
   */

  export type AggregateAssinatura = {
    _count: AssinaturaCountAggregateOutputType | null
    _avg: AssinaturaAvgAggregateOutputType | null
    _sum: AssinaturaSumAggregateOutputType | null
    _min: AssinaturaMinAggregateOutputType | null
    _max: AssinaturaMaxAggregateOutputType | null
  }

  export type AssinaturaAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    planoId: number | null
  }

  export type AssinaturaSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    planoId: number | null
  }

  export type AssinaturaMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    planoId: number | null
    dataInicio: Date | null
    dataFim: Date | null
  }

  export type AssinaturaMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    planoId: number | null
    dataInicio: Date | null
    dataFim: Date | null
  }

  export type AssinaturaCountAggregateOutputType = {
    id: number
    usuarioId: number
    planoId: number
    dataInicio: number
    dataFim: number
    _all: number
  }


  export type AssinaturaAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    planoId?: true
  }

  export type AssinaturaSumAggregateInputType = {
    id?: true
    usuarioId?: true
    planoId?: true
  }

  export type AssinaturaMinAggregateInputType = {
    id?: true
    usuarioId?: true
    planoId?: true
    dataInicio?: true
    dataFim?: true
  }

  export type AssinaturaMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    planoId?: true
    dataInicio?: true
    dataFim?: true
  }

  export type AssinaturaCountAggregateInputType = {
    id?: true
    usuarioId?: true
    planoId?: true
    dataInicio?: true
    dataFim?: true
    _all?: true
  }

  export type AssinaturaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assinatura to aggregate.
     */
    where?: AssinaturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assinaturas to fetch.
     */
    orderBy?: AssinaturaOrderByWithRelationInput | AssinaturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssinaturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assinaturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assinaturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assinaturas
    **/
    _count?: true | AssinaturaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssinaturaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssinaturaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssinaturaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssinaturaMaxAggregateInputType
  }

  export type GetAssinaturaAggregateType<T extends AssinaturaAggregateArgs> = {
        [P in keyof T & keyof AggregateAssinatura]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssinatura[P]>
      : GetScalarType<T[P], AggregateAssinatura[P]>
  }




  export type AssinaturaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssinaturaWhereInput
    orderBy?: AssinaturaOrderByWithAggregationInput | AssinaturaOrderByWithAggregationInput[]
    by: AssinaturaScalarFieldEnum[] | AssinaturaScalarFieldEnum
    having?: AssinaturaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssinaturaCountAggregateInputType | true
    _avg?: AssinaturaAvgAggregateInputType
    _sum?: AssinaturaSumAggregateInputType
    _min?: AssinaturaMinAggregateInputType
    _max?: AssinaturaMaxAggregateInputType
  }

  export type AssinaturaGroupByOutputType = {
    id: number
    usuarioId: number
    planoId: number
    dataInicio: Date
    dataFim: Date
    _count: AssinaturaCountAggregateOutputType | null
    _avg: AssinaturaAvgAggregateOutputType | null
    _sum: AssinaturaSumAggregateOutputType | null
    _min: AssinaturaMinAggregateOutputType | null
    _max: AssinaturaMaxAggregateOutputType | null
  }

  type GetAssinaturaGroupByPayload<T extends AssinaturaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssinaturaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssinaturaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssinaturaGroupByOutputType[P]>
            : GetScalarType<T[P], AssinaturaGroupByOutputType[P]>
        }
      >
    >


  export type AssinaturaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    planoId?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    plano?: boolean | PlanoDefaultArgs<ExtArgs>
    pagamentos?: boolean | Assinatura$pagamentosArgs<ExtArgs>
    _count?: boolean | AssinaturaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assinatura"]>

  export type AssinaturaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    planoId?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    plano?: boolean | PlanoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assinatura"]>

  export type AssinaturaSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    planoId?: boolean
    dataInicio?: boolean
    dataFim?: boolean
  }

  export type AssinaturaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    plano?: boolean | PlanoDefaultArgs<ExtArgs>
    pagamentos?: boolean | Assinatura$pagamentosArgs<ExtArgs>
    _count?: boolean | AssinaturaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssinaturaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    plano?: boolean | PlanoDefaultArgs<ExtArgs>
  }

  export type $AssinaturaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assinatura"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      plano: Prisma.$PlanoPayload<ExtArgs>
      pagamentos: Prisma.$PagamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      planoId: number
      dataInicio: Date
      dataFim: Date
    }, ExtArgs["result"]["assinatura"]>
    composites: {}
  }

  type AssinaturaGetPayload<S extends boolean | null | undefined | AssinaturaDefaultArgs> = $Result.GetResult<Prisma.$AssinaturaPayload, S>

  type AssinaturaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AssinaturaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AssinaturaCountAggregateInputType | true
    }

  export interface AssinaturaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assinatura'], meta: { name: 'Assinatura' } }
    /**
     * Find zero or one Assinatura that matches the filter.
     * @param {AssinaturaFindUniqueArgs} args - Arguments to find a Assinatura
     * @example
     * // Get one Assinatura
     * const assinatura = await prisma.assinatura.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssinaturaFindUniqueArgs>(args: SelectSubset<T, AssinaturaFindUniqueArgs<ExtArgs>>): Prisma__AssinaturaClient<$Result.GetResult<Prisma.$AssinaturaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Assinatura that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AssinaturaFindUniqueOrThrowArgs} args - Arguments to find a Assinatura
     * @example
     * // Get one Assinatura
     * const assinatura = await prisma.assinatura.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssinaturaFindUniqueOrThrowArgs>(args: SelectSubset<T, AssinaturaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssinaturaClient<$Result.GetResult<Prisma.$AssinaturaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Assinatura that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssinaturaFindFirstArgs} args - Arguments to find a Assinatura
     * @example
     * // Get one Assinatura
     * const assinatura = await prisma.assinatura.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssinaturaFindFirstArgs>(args?: SelectSubset<T, AssinaturaFindFirstArgs<ExtArgs>>): Prisma__AssinaturaClient<$Result.GetResult<Prisma.$AssinaturaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Assinatura that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssinaturaFindFirstOrThrowArgs} args - Arguments to find a Assinatura
     * @example
     * // Get one Assinatura
     * const assinatura = await prisma.assinatura.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssinaturaFindFirstOrThrowArgs>(args?: SelectSubset<T, AssinaturaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssinaturaClient<$Result.GetResult<Prisma.$AssinaturaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Assinaturas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssinaturaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assinaturas
     * const assinaturas = await prisma.assinatura.findMany()
     * 
     * // Get first 10 Assinaturas
     * const assinaturas = await prisma.assinatura.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assinaturaWithIdOnly = await prisma.assinatura.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssinaturaFindManyArgs>(args?: SelectSubset<T, AssinaturaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssinaturaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Assinatura.
     * @param {AssinaturaCreateArgs} args - Arguments to create a Assinatura.
     * @example
     * // Create one Assinatura
     * const Assinatura = await prisma.assinatura.create({
     *   data: {
     *     // ... data to create a Assinatura
     *   }
     * })
     * 
     */
    create<T extends AssinaturaCreateArgs>(args: SelectSubset<T, AssinaturaCreateArgs<ExtArgs>>): Prisma__AssinaturaClient<$Result.GetResult<Prisma.$AssinaturaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Assinaturas.
     * @param {AssinaturaCreateManyArgs} args - Arguments to create many Assinaturas.
     * @example
     * // Create many Assinaturas
     * const assinatura = await prisma.assinatura.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssinaturaCreateManyArgs>(args?: SelectSubset<T, AssinaturaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assinaturas and returns the data saved in the database.
     * @param {AssinaturaCreateManyAndReturnArgs} args - Arguments to create many Assinaturas.
     * @example
     * // Create many Assinaturas
     * const assinatura = await prisma.assinatura.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assinaturas and only return the `id`
     * const assinaturaWithIdOnly = await prisma.assinatura.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssinaturaCreateManyAndReturnArgs>(args?: SelectSubset<T, AssinaturaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssinaturaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Assinatura.
     * @param {AssinaturaDeleteArgs} args - Arguments to delete one Assinatura.
     * @example
     * // Delete one Assinatura
     * const Assinatura = await prisma.assinatura.delete({
     *   where: {
     *     // ... filter to delete one Assinatura
     *   }
     * })
     * 
     */
    delete<T extends AssinaturaDeleteArgs>(args: SelectSubset<T, AssinaturaDeleteArgs<ExtArgs>>): Prisma__AssinaturaClient<$Result.GetResult<Prisma.$AssinaturaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Assinatura.
     * @param {AssinaturaUpdateArgs} args - Arguments to update one Assinatura.
     * @example
     * // Update one Assinatura
     * const assinatura = await prisma.assinatura.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssinaturaUpdateArgs>(args: SelectSubset<T, AssinaturaUpdateArgs<ExtArgs>>): Prisma__AssinaturaClient<$Result.GetResult<Prisma.$AssinaturaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Assinaturas.
     * @param {AssinaturaDeleteManyArgs} args - Arguments to filter Assinaturas to delete.
     * @example
     * // Delete a few Assinaturas
     * const { count } = await prisma.assinatura.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssinaturaDeleteManyArgs>(args?: SelectSubset<T, AssinaturaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assinaturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssinaturaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assinaturas
     * const assinatura = await prisma.assinatura.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssinaturaUpdateManyArgs>(args: SelectSubset<T, AssinaturaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Assinatura.
     * @param {AssinaturaUpsertArgs} args - Arguments to update or create a Assinatura.
     * @example
     * // Update or create a Assinatura
     * const assinatura = await prisma.assinatura.upsert({
     *   create: {
     *     // ... data to create a Assinatura
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assinatura we want to update
     *   }
     * })
     */
    upsert<T extends AssinaturaUpsertArgs>(args: SelectSubset<T, AssinaturaUpsertArgs<ExtArgs>>): Prisma__AssinaturaClient<$Result.GetResult<Prisma.$AssinaturaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Assinaturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssinaturaCountArgs} args - Arguments to filter Assinaturas to count.
     * @example
     * // Count the number of Assinaturas
     * const count = await prisma.assinatura.count({
     *   where: {
     *     // ... the filter for the Assinaturas we want to count
     *   }
     * })
    **/
    count<T extends AssinaturaCountArgs>(
      args?: Subset<T, AssinaturaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssinaturaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assinatura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssinaturaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssinaturaAggregateArgs>(args: Subset<T, AssinaturaAggregateArgs>): Prisma.PrismaPromise<GetAssinaturaAggregateType<T>>

    /**
     * Group by Assinatura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssinaturaGroupByArgs} args - Group by arguments.
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
      T extends AssinaturaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssinaturaGroupByArgs['orderBy'] }
        : { orderBy?: AssinaturaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssinaturaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssinaturaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assinatura model
   */
  readonly fields: AssinaturaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assinatura.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssinaturaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    plano<T extends PlanoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanoDefaultArgs<ExtArgs>>): Prisma__PlanoClient<$Result.GetResult<Prisma.$PlanoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    pagamentos<T extends Assinatura$pagamentosArgs<ExtArgs> = {}>(args?: Subset<T, Assinatura$pagamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Assinatura model
   */ 
  interface AssinaturaFieldRefs {
    readonly id: FieldRef<"Assinatura", 'Int'>
    readonly usuarioId: FieldRef<"Assinatura", 'Int'>
    readonly planoId: FieldRef<"Assinatura", 'Int'>
    readonly dataInicio: FieldRef<"Assinatura", 'DateTime'>
    readonly dataFim: FieldRef<"Assinatura", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Assinatura findUnique
   */
  export type AssinaturaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assinatura
     */
    select?: AssinaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssinaturaInclude<ExtArgs> | null
    /**
     * Filter, which Assinatura to fetch.
     */
    where: AssinaturaWhereUniqueInput
  }

  /**
   * Assinatura findUniqueOrThrow
   */
  export type AssinaturaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assinatura
     */
    select?: AssinaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssinaturaInclude<ExtArgs> | null
    /**
     * Filter, which Assinatura to fetch.
     */
    where: AssinaturaWhereUniqueInput
  }

  /**
   * Assinatura findFirst
   */
  export type AssinaturaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assinatura
     */
    select?: AssinaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssinaturaInclude<ExtArgs> | null
    /**
     * Filter, which Assinatura to fetch.
     */
    where?: AssinaturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assinaturas to fetch.
     */
    orderBy?: AssinaturaOrderByWithRelationInput | AssinaturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assinaturas.
     */
    cursor?: AssinaturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assinaturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assinaturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assinaturas.
     */
    distinct?: AssinaturaScalarFieldEnum | AssinaturaScalarFieldEnum[]
  }

  /**
   * Assinatura findFirstOrThrow
   */
  export type AssinaturaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assinatura
     */
    select?: AssinaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssinaturaInclude<ExtArgs> | null
    /**
     * Filter, which Assinatura to fetch.
     */
    where?: AssinaturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assinaturas to fetch.
     */
    orderBy?: AssinaturaOrderByWithRelationInput | AssinaturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assinaturas.
     */
    cursor?: AssinaturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assinaturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assinaturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assinaturas.
     */
    distinct?: AssinaturaScalarFieldEnum | AssinaturaScalarFieldEnum[]
  }

  /**
   * Assinatura findMany
   */
  export type AssinaturaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assinatura
     */
    select?: AssinaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssinaturaInclude<ExtArgs> | null
    /**
     * Filter, which Assinaturas to fetch.
     */
    where?: AssinaturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assinaturas to fetch.
     */
    orderBy?: AssinaturaOrderByWithRelationInput | AssinaturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assinaturas.
     */
    cursor?: AssinaturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assinaturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assinaturas.
     */
    skip?: number
    distinct?: AssinaturaScalarFieldEnum | AssinaturaScalarFieldEnum[]
  }

  /**
   * Assinatura create
   */
  export type AssinaturaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assinatura
     */
    select?: AssinaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssinaturaInclude<ExtArgs> | null
    /**
     * The data needed to create a Assinatura.
     */
    data: XOR<AssinaturaCreateInput, AssinaturaUncheckedCreateInput>
  }

  /**
   * Assinatura createMany
   */
  export type AssinaturaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assinaturas.
     */
    data: AssinaturaCreateManyInput | AssinaturaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assinatura createManyAndReturn
   */
  export type AssinaturaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assinatura
     */
    select?: AssinaturaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Assinaturas.
     */
    data: AssinaturaCreateManyInput | AssinaturaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssinaturaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assinatura update
   */
  export type AssinaturaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assinatura
     */
    select?: AssinaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssinaturaInclude<ExtArgs> | null
    /**
     * The data needed to update a Assinatura.
     */
    data: XOR<AssinaturaUpdateInput, AssinaturaUncheckedUpdateInput>
    /**
     * Choose, which Assinatura to update.
     */
    where: AssinaturaWhereUniqueInput
  }

  /**
   * Assinatura updateMany
   */
  export type AssinaturaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assinaturas.
     */
    data: XOR<AssinaturaUpdateManyMutationInput, AssinaturaUncheckedUpdateManyInput>
    /**
     * Filter which Assinaturas to update
     */
    where?: AssinaturaWhereInput
  }

  /**
   * Assinatura upsert
   */
  export type AssinaturaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assinatura
     */
    select?: AssinaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssinaturaInclude<ExtArgs> | null
    /**
     * The filter to search for the Assinatura to update in case it exists.
     */
    where: AssinaturaWhereUniqueInput
    /**
     * In case the Assinatura found by the `where` argument doesn't exist, create a new Assinatura with this data.
     */
    create: XOR<AssinaturaCreateInput, AssinaturaUncheckedCreateInput>
    /**
     * In case the Assinatura was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssinaturaUpdateInput, AssinaturaUncheckedUpdateInput>
  }

  /**
   * Assinatura delete
   */
  export type AssinaturaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assinatura
     */
    select?: AssinaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssinaturaInclude<ExtArgs> | null
    /**
     * Filter which Assinatura to delete.
     */
    where: AssinaturaWhereUniqueInput
  }

  /**
   * Assinatura deleteMany
   */
  export type AssinaturaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assinaturas to delete
     */
    where?: AssinaturaWhereInput
  }

  /**
   * Assinatura.pagamentos
   */
  export type Assinatura$pagamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    where?: PagamentoWhereInput
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    cursor?: PagamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * Assinatura without action
   */
  export type AssinaturaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assinatura
     */
    select?: AssinaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssinaturaInclude<ExtArgs> | null
  }


  /**
   * Model Pagamento
   */

  export type AggregatePagamento = {
    _count: PagamentoCountAggregateOutputType | null
    _avg: PagamentoAvgAggregateOutputType | null
    _sum: PagamentoSumAggregateOutputType | null
    _min: PagamentoMinAggregateOutputType | null
    _max: PagamentoMaxAggregateOutputType | null
  }

  export type PagamentoAvgAggregateOutputType = {
    id: number | null
    assinaturaId: number | null
    valorPago: number | null
  }

  export type PagamentoSumAggregateOutputType = {
    id: number | null
    assinaturaId: number | null
    valorPago: number | null
  }

  export type PagamentoMinAggregateOutputType = {
    id: number | null
    assinaturaId: number | null
    valorPago: number | null
    dataPagamento: Date | null
    metodoPagamento: string | null
    idTransacaoGateway: string | null
  }

  export type PagamentoMaxAggregateOutputType = {
    id: number | null
    assinaturaId: number | null
    valorPago: number | null
    dataPagamento: Date | null
    metodoPagamento: string | null
    idTransacaoGateway: string | null
  }

  export type PagamentoCountAggregateOutputType = {
    id: number
    assinaturaId: number
    valorPago: number
    dataPagamento: number
    metodoPagamento: number
    idTransacaoGateway: number
    _all: number
  }


  export type PagamentoAvgAggregateInputType = {
    id?: true
    assinaturaId?: true
    valorPago?: true
  }

  export type PagamentoSumAggregateInputType = {
    id?: true
    assinaturaId?: true
    valorPago?: true
  }

  export type PagamentoMinAggregateInputType = {
    id?: true
    assinaturaId?: true
    valorPago?: true
    dataPagamento?: true
    metodoPagamento?: true
    idTransacaoGateway?: true
  }

  export type PagamentoMaxAggregateInputType = {
    id?: true
    assinaturaId?: true
    valorPago?: true
    dataPagamento?: true
    metodoPagamento?: true
    idTransacaoGateway?: true
  }

  export type PagamentoCountAggregateInputType = {
    id?: true
    assinaturaId?: true
    valorPago?: true
    dataPagamento?: true
    metodoPagamento?: true
    idTransacaoGateway?: true
    _all?: true
  }

  export type PagamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagamento to aggregate.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pagamentos
    **/
    _count?: true | PagamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagamentoMaxAggregateInputType
  }

  export type GetPagamentoAggregateType<T extends PagamentoAggregateArgs> = {
        [P in keyof T & keyof AggregatePagamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagamento[P]>
      : GetScalarType<T[P], AggregatePagamento[P]>
  }




  export type PagamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagamentoWhereInput
    orderBy?: PagamentoOrderByWithAggregationInput | PagamentoOrderByWithAggregationInput[]
    by: PagamentoScalarFieldEnum[] | PagamentoScalarFieldEnum
    having?: PagamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagamentoCountAggregateInputType | true
    _avg?: PagamentoAvgAggregateInputType
    _sum?: PagamentoSumAggregateInputType
    _min?: PagamentoMinAggregateInputType
    _max?: PagamentoMaxAggregateInputType
  }

  export type PagamentoGroupByOutputType = {
    id: number
    assinaturaId: number
    valorPago: number
    dataPagamento: Date
    metodoPagamento: string
    idTransacaoGateway: string
    _count: PagamentoCountAggregateOutputType | null
    _avg: PagamentoAvgAggregateOutputType | null
    _sum: PagamentoSumAggregateOutputType | null
    _min: PagamentoMinAggregateOutputType | null
    _max: PagamentoMaxAggregateOutputType | null
  }

  type GetPagamentoGroupByPayload<T extends PagamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagamentoGroupByOutputType[P]>
            : GetScalarType<T[P], PagamentoGroupByOutputType[P]>
        }
      >
    >


  export type PagamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assinaturaId?: boolean
    valorPago?: boolean
    dataPagamento?: boolean
    metodoPagamento?: boolean
    idTransacaoGateway?: boolean
    assinatura?: boolean | AssinaturaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento"]>

  export type PagamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assinaturaId?: boolean
    valorPago?: boolean
    dataPagamento?: boolean
    metodoPagamento?: boolean
    idTransacaoGateway?: boolean
    assinatura?: boolean | AssinaturaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento"]>

  export type PagamentoSelectScalar = {
    id?: boolean
    assinaturaId?: boolean
    valorPago?: boolean
    dataPagamento?: boolean
    metodoPagamento?: boolean
    idTransacaoGateway?: boolean
  }

  export type PagamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assinatura?: boolean | AssinaturaDefaultArgs<ExtArgs>
  }
  export type PagamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assinatura?: boolean | AssinaturaDefaultArgs<ExtArgs>
  }

  export type $PagamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pagamento"
    objects: {
      assinatura: Prisma.$AssinaturaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      assinaturaId: number
      valorPago: number
      dataPagamento: Date
      metodoPagamento: string
      idTransacaoGateway: string
    }, ExtArgs["result"]["pagamento"]>
    composites: {}
  }

  type PagamentoGetPayload<S extends boolean | null | undefined | PagamentoDefaultArgs> = $Result.GetResult<Prisma.$PagamentoPayload, S>

  type PagamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PagamentoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PagamentoCountAggregateInputType | true
    }

  export interface PagamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pagamento'], meta: { name: 'Pagamento' } }
    /**
     * Find zero or one Pagamento that matches the filter.
     * @param {PagamentoFindUniqueArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PagamentoFindUniqueArgs>(args: SelectSubset<T, PagamentoFindUniqueArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Pagamento that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PagamentoFindUniqueOrThrowArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PagamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, PagamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Pagamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoFindFirstArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PagamentoFindFirstArgs>(args?: SelectSubset<T, PagamentoFindFirstArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Pagamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoFindFirstOrThrowArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PagamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, PagamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Pagamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagamentos
     * const pagamentos = await prisma.pagamento.findMany()
     * 
     * // Get first 10 Pagamentos
     * const pagamentos = await prisma.pagamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pagamentoWithIdOnly = await prisma.pagamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PagamentoFindManyArgs>(args?: SelectSubset<T, PagamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Pagamento.
     * @param {PagamentoCreateArgs} args - Arguments to create a Pagamento.
     * @example
     * // Create one Pagamento
     * const Pagamento = await prisma.pagamento.create({
     *   data: {
     *     // ... data to create a Pagamento
     *   }
     * })
     * 
     */
    create<T extends PagamentoCreateArgs>(args: SelectSubset<T, PagamentoCreateArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Pagamentos.
     * @param {PagamentoCreateManyArgs} args - Arguments to create many Pagamentos.
     * @example
     * // Create many Pagamentos
     * const pagamento = await prisma.pagamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PagamentoCreateManyArgs>(args?: SelectSubset<T, PagamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pagamentos and returns the data saved in the database.
     * @param {PagamentoCreateManyAndReturnArgs} args - Arguments to create many Pagamentos.
     * @example
     * // Create many Pagamentos
     * const pagamento = await prisma.pagamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pagamentos and only return the `id`
     * const pagamentoWithIdOnly = await prisma.pagamento.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PagamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, PagamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Pagamento.
     * @param {PagamentoDeleteArgs} args - Arguments to delete one Pagamento.
     * @example
     * // Delete one Pagamento
     * const Pagamento = await prisma.pagamento.delete({
     *   where: {
     *     // ... filter to delete one Pagamento
     *   }
     * })
     * 
     */
    delete<T extends PagamentoDeleteArgs>(args: SelectSubset<T, PagamentoDeleteArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Pagamento.
     * @param {PagamentoUpdateArgs} args - Arguments to update one Pagamento.
     * @example
     * // Update one Pagamento
     * const pagamento = await prisma.pagamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PagamentoUpdateArgs>(args: SelectSubset<T, PagamentoUpdateArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Pagamentos.
     * @param {PagamentoDeleteManyArgs} args - Arguments to filter Pagamentos to delete.
     * @example
     * // Delete a few Pagamentos
     * const { count } = await prisma.pagamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PagamentoDeleteManyArgs>(args?: SelectSubset<T, PagamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagamentos
     * const pagamento = await prisma.pagamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PagamentoUpdateManyArgs>(args: SelectSubset<T, PagamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pagamento.
     * @param {PagamentoUpsertArgs} args - Arguments to update or create a Pagamento.
     * @example
     * // Update or create a Pagamento
     * const pagamento = await prisma.pagamento.upsert({
     *   create: {
     *     // ... data to create a Pagamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pagamento we want to update
     *   }
     * })
     */
    upsert<T extends PagamentoUpsertArgs>(args: SelectSubset<T, PagamentoUpsertArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoCountArgs} args - Arguments to filter Pagamentos to count.
     * @example
     * // Count the number of Pagamentos
     * const count = await prisma.pagamento.count({
     *   where: {
     *     // ... the filter for the Pagamentos we want to count
     *   }
     * })
    **/
    count<T extends PagamentoCountArgs>(
      args?: Subset<T, PagamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PagamentoAggregateArgs>(args: Subset<T, PagamentoAggregateArgs>): Prisma.PrismaPromise<GetPagamentoAggregateType<T>>

    /**
     * Group by Pagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoGroupByArgs} args - Group by arguments.
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
      T extends PagamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PagamentoGroupByArgs['orderBy'] }
        : { orderBy?: PagamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PagamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pagamento model
   */
  readonly fields: PagamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pagamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PagamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assinatura<T extends AssinaturaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssinaturaDefaultArgs<ExtArgs>>): Prisma__AssinaturaClient<$Result.GetResult<Prisma.$AssinaturaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Pagamento model
   */ 
  interface PagamentoFieldRefs {
    readonly id: FieldRef<"Pagamento", 'Int'>
    readonly assinaturaId: FieldRef<"Pagamento", 'Int'>
    readonly valorPago: FieldRef<"Pagamento", 'Float'>
    readonly dataPagamento: FieldRef<"Pagamento", 'DateTime'>
    readonly metodoPagamento: FieldRef<"Pagamento", 'String'>
    readonly idTransacaoGateway: FieldRef<"Pagamento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pagamento findUnique
   */
  export type PagamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento findUniqueOrThrow
   */
  export type PagamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento findFirst
   */
  export type PagamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagamentos.
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagamentos.
     */
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * Pagamento findFirstOrThrow
   */
  export type PagamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagamentos.
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagamentos.
     */
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * Pagamento findMany
   */
  export type PagamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamentos to fetch.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pagamentos.
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * Pagamento create
   */
  export type PagamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pagamento.
     */
    data: XOR<PagamentoCreateInput, PagamentoUncheckedCreateInput>
  }

  /**
   * Pagamento createMany
   */
  export type PagamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pagamentos.
     */
    data: PagamentoCreateManyInput | PagamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pagamento createManyAndReturn
   */
  export type PagamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Pagamentos.
     */
    data: PagamentoCreateManyInput | PagamentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pagamento update
   */
  export type PagamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pagamento.
     */
    data: XOR<PagamentoUpdateInput, PagamentoUncheckedUpdateInput>
    /**
     * Choose, which Pagamento to update.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento updateMany
   */
  export type PagamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pagamentos.
     */
    data: XOR<PagamentoUpdateManyMutationInput, PagamentoUncheckedUpdateManyInput>
    /**
     * Filter which Pagamentos to update
     */
    where?: PagamentoWhereInput
  }

  /**
   * Pagamento upsert
   */
  export type PagamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pagamento to update in case it exists.
     */
    where: PagamentoWhereUniqueInput
    /**
     * In case the Pagamento found by the `where` argument doesn't exist, create a new Pagamento with this data.
     */
    create: XOR<PagamentoCreateInput, PagamentoUncheckedCreateInput>
    /**
     * In case the Pagamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PagamentoUpdateInput, PagamentoUncheckedUpdateInput>
  }

  /**
   * Pagamento delete
   */
  export type PagamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter which Pagamento to delete.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento deleteMany
   */
  export type PagamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagamentos to delete
     */
    where?: PagamentoWhereInput
  }

  /**
   * Pagamento without action
   */
  export type PagamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nomeCompleto: 'nomeCompleto',
    email: 'email',
    senhaHash: 'senhaHash',
    dataCadastro: 'dataCadastro',
    updatedAt: 'updatedAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const CursoScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    instrutorId: 'instrutorId',
    categoriaId: 'categoriaId',
    nivel: 'nivel',
    dataPublicacao: 'dataPublicacao',
    totalAulas: 'totalAulas',
    totalHoras: 'totalHoras'
  };

  export type CursoScalarFieldEnum = (typeof CursoScalarFieldEnum)[keyof typeof CursoScalarFieldEnum]


  export const ModuloScalarFieldEnum: {
    id: 'id',
    cursoId: 'cursoId',
    titulo: 'titulo',
    ordem: 'ordem'
  };

  export type ModuloScalarFieldEnum = (typeof ModuloScalarFieldEnum)[keyof typeof ModuloScalarFieldEnum]


  export const AulaScalarFieldEnum: {
    id: 'id',
    moduloId: 'moduloId',
    titulo: 'titulo',
    tipoConteudo: 'tipoConteudo',
    urlConteudo: 'urlConteudo',
    duracaoMinutos: 'duracaoMinutos',
    ordem: 'ordem'
  };

  export type AulaScalarFieldEnum = (typeof AulaScalarFieldEnum)[keyof typeof AulaScalarFieldEnum]


  export const MatriculaScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    cursoId: 'cursoId',
    dataMatricula: 'dataMatricula',
    dataConclusao: 'dataConclusao'
  };

  export type MatriculaScalarFieldEnum = (typeof MatriculaScalarFieldEnum)[keyof typeof MatriculaScalarFieldEnum]


  export const ProgressoAulaScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    aulaId: 'aulaId',
    dataConclusao: 'dataConclusao',
    status: 'status'
  };

  export type ProgressoAulaScalarFieldEnum = (typeof ProgressoAulaScalarFieldEnum)[keyof typeof ProgressoAulaScalarFieldEnum]


  export const AvaliacaoScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    cursoId: 'cursoId',
    nota: 'nota',
    comentario: 'comentario',
    dataAvaliacao: 'dataAvaliacao'
  };

  export type AvaliacaoScalarFieldEnum = (typeof AvaliacaoScalarFieldEnum)[keyof typeof AvaliacaoScalarFieldEnum]


  export const TrilhaScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    categoriaId: 'categoriaId'
  };

  export type TrilhaScalarFieldEnum = (typeof TrilhaScalarFieldEnum)[keyof typeof TrilhaScalarFieldEnum]


  export const TrilhaCursoScalarFieldEnum: {
    id: 'id',
    trilhaId: 'trilhaId',
    cursoId: 'cursoId',
    ordem: 'ordem'
  };

  export type TrilhaCursoScalarFieldEnum = (typeof TrilhaCursoScalarFieldEnum)[keyof typeof TrilhaCursoScalarFieldEnum]


  export const CertificadoScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    cursoId: 'cursoId',
    trilhaId: 'trilhaId',
    codigoVerificacao: 'codigoVerificacao',
    dataEmissao: 'dataEmissao'
  };

  export type CertificadoScalarFieldEnum = (typeof CertificadoScalarFieldEnum)[keyof typeof CertificadoScalarFieldEnum]


  export const PlanoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    preco: 'preco',
    duracaoMeses: 'duracaoMeses'
  };

  export type PlanoScalarFieldEnum = (typeof PlanoScalarFieldEnum)[keyof typeof PlanoScalarFieldEnum]


  export const AssinaturaScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    planoId: 'planoId',
    dataInicio: 'dataInicio',
    dataFim: 'dataFim'
  };

  export type AssinaturaScalarFieldEnum = (typeof AssinaturaScalarFieldEnum)[keyof typeof AssinaturaScalarFieldEnum]


  export const PagamentoScalarFieldEnum: {
    id: 'id',
    assinaturaId: 'assinaturaId',
    valorPago: 'valorPago',
    dataPagamento: 'dataPagamento',
    metodoPagamento: 'metodoPagamento',
    idTransacaoGateway: 'idTransacaoGateway'
  };

  export type PagamentoScalarFieldEnum = (typeof PagamentoScalarFieldEnum)[keyof typeof PagamentoScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nomeCompleto?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senhaHash?: StringFilter<"Usuario"> | string
    dataCadastro?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    cursosInstrutor?: CursoListRelationFilter
    matriculas?: MatriculaListRelationFilter
    progressos?: ProgressoAulaListRelationFilter
    avaliacoes?: AvaliacaoListRelationFilter
    certificados?: CertificadoListRelationFilter
    assinaturas?: AssinaturaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    dataCadastro?: SortOrder
    updatedAt?: SortOrder
    cursosInstrutor?: CursoOrderByRelationAggregateInput
    matriculas?: MatriculaOrderByRelationAggregateInput
    progressos?: ProgressoAulaOrderByRelationAggregateInput
    avaliacoes?: AvaliacaoOrderByRelationAggregateInput
    certificados?: CertificadoOrderByRelationAggregateInput
    assinaturas?: AssinaturaOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nomeCompleto?: StringFilter<"Usuario"> | string
    senhaHash?: StringFilter<"Usuario"> | string
    dataCadastro?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    cursosInstrutor?: CursoListRelationFilter
    matriculas?: MatriculaListRelationFilter
    progressos?: ProgressoAulaListRelationFilter
    avaliacoes?: AvaliacaoListRelationFilter
    certificados?: CertificadoListRelationFilter
    assinaturas?: AssinaturaListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    dataCadastro?: SortOrder
    updatedAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nomeCompleto?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senhaHash?: StringWithAggregatesFilter<"Usuario"> | string
    dataCadastro?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: IntFilter<"Categoria"> | number
    nome?: StringFilter<"Categoria"> | string
    descricao?: StringFilter<"Categoria"> | string
    cursos?: CursoListRelationFilter
    trilhas?: TrilhaListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    cursos?: CursoOrderByRelationAggregateInput
    trilhas?: TrilhaOrderByRelationAggregateInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    descricao?: StringFilter<"Categoria"> | string
    cursos?: CursoListRelationFilter
    trilhas?: TrilhaListRelationFilter
  }, "id" | "nome">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categoria"> | number
    nome?: StringWithAggregatesFilter<"Categoria"> | string
    descricao?: StringWithAggregatesFilter<"Categoria"> | string
  }

  export type CursoWhereInput = {
    AND?: CursoWhereInput | CursoWhereInput[]
    OR?: CursoWhereInput[]
    NOT?: CursoWhereInput | CursoWhereInput[]
    id?: IntFilter<"Curso"> | number
    titulo?: StringFilter<"Curso"> | string
    descricao?: StringFilter<"Curso"> | string
    instrutorId?: IntFilter<"Curso"> | number
    categoriaId?: IntFilter<"Curso"> | number
    nivel?: StringFilter<"Curso"> | string
    dataPublicacao?: DateTimeFilter<"Curso"> | Date | string
    totalAulas?: IntFilter<"Curso"> | number
    totalHoras?: FloatFilter<"Curso"> | number
    instrutor?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    categoria?: XOR<CategoriaRelationFilter, CategoriaWhereInput>
    modulos?: ModuloListRelationFilter
    matriculas?: MatriculaListRelationFilter
    avaliacoes?: AvaliacaoListRelationFilter
    certificados?: CertificadoListRelationFilter
    trilhasCursos?: TrilhaCursoListRelationFilter
  }

  export type CursoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    instrutorId?: SortOrder
    categoriaId?: SortOrder
    nivel?: SortOrder
    dataPublicacao?: SortOrder
    totalAulas?: SortOrder
    totalHoras?: SortOrder
    instrutor?: UsuarioOrderByWithRelationInput
    categoria?: CategoriaOrderByWithRelationInput
    modulos?: ModuloOrderByRelationAggregateInput
    matriculas?: MatriculaOrderByRelationAggregateInput
    avaliacoes?: AvaliacaoOrderByRelationAggregateInput
    certificados?: CertificadoOrderByRelationAggregateInput
    trilhasCursos?: TrilhaCursoOrderByRelationAggregateInput
  }

  export type CursoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CursoWhereInput | CursoWhereInput[]
    OR?: CursoWhereInput[]
    NOT?: CursoWhereInput | CursoWhereInput[]
    titulo?: StringFilter<"Curso"> | string
    descricao?: StringFilter<"Curso"> | string
    instrutorId?: IntFilter<"Curso"> | number
    categoriaId?: IntFilter<"Curso"> | number
    nivel?: StringFilter<"Curso"> | string
    dataPublicacao?: DateTimeFilter<"Curso"> | Date | string
    totalAulas?: IntFilter<"Curso"> | number
    totalHoras?: FloatFilter<"Curso"> | number
    instrutor?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    categoria?: XOR<CategoriaRelationFilter, CategoriaWhereInput>
    modulos?: ModuloListRelationFilter
    matriculas?: MatriculaListRelationFilter
    avaliacoes?: AvaliacaoListRelationFilter
    certificados?: CertificadoListRelationFilter
    trilhasCursos?: TrilhaCursoListRelationFilter
  }, "id">

  export type CursoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    instrutorId?: SortOrder
    categoriaId?: SortOrder
    nivel?: SortOrder
    dataPublicacao?: SortOrder
    totalAulas?: SortOrder
    totalHoras?: SortOrder
    _count?: CursoCountOrderByAggregateInput
    _avg?: CursoAvgOrderByAggregateInput
    _max?: CursoMaxOrderByAggregateInput
    _min?: CursoMinOrderByAggregateInput
    _sum?: CursoSumOrderByAggregateInput
  }

  export type CursoScalarWhereWithAggregatesInput = {
    AND?: CursoScalarWhereWithAggregatesInput | CursoScalarWhereWithAggregatesInput[]
    OR?: CursoScalarWhereWithAggregatesInput[]
    NOT?: CursoScalarWhereWithAggregatesInput | CursoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Curso"> | number
    titulo?: StringWithAggregatesFilter<"Curso"> | string
    descricao?: StringWithAggregatesFilter<"Curso"> | string
    instrutorId?: IntWithAggregatesFilter<"Curso"> | number
    categoriaId?: IntWithAggregatesFilter<"Curso"> | number
    nivel?: StringWithAggregatesFilter<"Curso"> | string
    dataPublicacao?: DateTimeWithAggregatesFilter<"Curso"> | Date | string
    totalAulas?: IntWithAggregatesFilter<"Curso"> | number
    totalHoras?: FloatWithAggregatesFilter<"Curso"> | number
  }

  export type ModuloWhereInput = {
    AND?: ModuloWhereInput | ModuloWhereInput[]
    OR?: ModuloWhereInput[]
    NOT?: ModuloWhereInput | ModuloWhereInput[]
    id?: IntFilter<"Modulo"> | number
    cursoId?: IntFilter<"Modulo"> | number
    titulo?: StringFilter<"Modulo"> | string
    ordem?: IntFilter<"Modulo"> | number
    curso?: XOR<CursoRelationFilter, CursoWhereInput>
    aulas?: AulaListRelationFilter
  }

  export type ModuloOrderByWithRelationInput = {
    id?: SortOrder
    cursoId?: SortOrder
    titulo?: SortOrder
    ordem?: SortOrder
    curso?: CursoOrderByWithRelationInput
    aulas?: AulaOrderByRelationAggregateInput
  }

  export type ModuloWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ModuloWhereInput | ModuloWhereInput[]
    OR?: ModuloWhereInput[]
    NOT?: ModuloWhereInput | ModuloWhereInput[]
    cursoId?: IntFilter<"Modulo"> | number
    titulo?: StringFilter<"Modulo"> | string
    ordem?: IntFilter<"Modulo"> | number
    curso?: XOR<CursoRelationFilter, CursoWhereInput>
    aulas?: AulaListRelationFilter
  }, "id">

  export type ModuloOrderByWithAggregationInput = {
    id?: SortOrder
    cursoId?: SortOrder
    titulo?: SortOrder
    ordem?: SortOrder
    _count?: ModuloCountOrderByAggregateInput
    _avg?: ModuloAvgOrderByAggregateInput
    _max?: ModuloMaxOrderByAggregateInput
    _min?: ModuloMinOrderByAggregateInput
    _sum?: ModuloSumOrderByAggregateInput
  }

  export type ModuloScalarWhereWithAggregatesInput = {
    AND?: ModuloScalarWhereWithAggregatesInput | ModuloScalarWhereWithAggregatesInput[]
    OR?: ModuloScalarWhereWithAggregatesInput[]
    NOT?: ModuloScalarWhereWithAggregatesInput | ModuloScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Modulo"> | number
    cursoId?: IntWithAggregatesFilter<"Modulo"> | number
    titulo?: StringWithAggregatesFilter<"Modulo"> | string
    ordem?: IntWithAggregatesFilter<"Modulo"> | number
  }

  export type AulaWhereInput = {
    AND?: AulaWhereInput | AulaWhereInput[]
    OR?: AulaWhereInput[]
    NOT?: AulaWhereInput | AulaWhereInput[]
    id?: IntFilter<"Aula"> | number
    moduloId?: IntFilter<"Aula"> | number
    titulo?: StringFilter<"Aula"> | string
    tipoConteudo?: StringFilter<"Aula"> | string
    urlConteudo?: StringFilter<"Aula"> | string
    duracaoMinutos?: IntFilter<"Aula"> | number
    ordem?: IntFilter<"Aula"> | number
    modulo?: XOR<ModuloRelationFilter, ModuloWhereInput>
    progressos?: ProgressoAulaListRelationFilter
  }

  export type AulaOrderByWithRelationInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    tipoConteudo?: SortOrder
    urlConteudo?: SortOrder
    duracaoMinutos?: SortOrder
    ordem?: SortOrder
    modulo?: ModuloOrderByWithRelationInput
    progressos?: ProgressoAulaOrderByRelationAggregateInput
  }

  export type AulaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AulaWhereInput | AulaWhereInput[]
    OR?: AulaWhereInput[]
    NOT?: AulaWhereInput | AulaWhereInput[]
    moduloId?: IntFilter<"Aula"> | number
    titulo?: StringFilter<"Aula"> | string
    tipoConteudo?: StringFilter<"Aula"> | string
    urlConteudo?: StringFilter<"Aula"> | string
    duracaoMinutos?: IntFilter<"Aula"> | number
    ordem?: IntFilter<"Aula"> | number
    modulo?: XOR<ModuloRelationFilter, ModuloWhereInput>
    progressos?: ProgressoAulaListRelationFilter
  }, "id">

  export type AulaOrderByWithAggregationInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    tipoConteudo?: SortOrder
    urlConteudo?: SortOrder
    duracaoMinutos?: SortOrder
    ordem?: SortOrder
    _count?: AulaCountOrderByAggregateInput
    _avg?: AulaAvgOrderByAggregateInput
    _max?: AulaMaxOrderByAggregateInput
    _min?: AulaMinOrderByAggregateInput
    _sum?: AulaSumOrderByAggregateInput
  }

  export type AulaScalarWhereWithAggregatesInput = {
    AND?: AulaScalarWhereWithAggregatesInput | AulaScalarWhereWithAggregatesInput[]
    OR?: AulaScalarWhereWithAggregatesInput[]
    NOT?: AulaScalarWhereWithAggregatesInput | AulaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Aula"> | number
    moduloId?: IntWithAggregatesFilter<"Aula"> | number
    titulo?: StringWithAggregatesFilter<"Aula"> | string
    tipoConteudo?: StringWithAggregatesFilter<"Aula"> | string
    urlConteudo?: StringWithAggregatesFilter<"Aula"> | string
    duracaoMinutos?: IntWithAggregatesFilter<"Aula"> | number
    ordem?: IntWithAggregatesFilter<"Aula"> | number
  }

  export type MatriculaWhereInput = {
    AND?: MatriculaWhereInput | MatriculaWhereInput[]
    OR?: MatriculaWhereInput[]
    NOT?: MatriculaWhereInput | MatriculaWhereInput[]
    id?: IntFilter<"Matricula"> | number
    usuarioId?: IntFilter<"Matricula"> | number
    cursoId?: IntFilter<"Matricula"> | number
    dataMatricula?: DateTimeFilter<"Matricula"> | Date | string
    dataConclusao?: DateTimeNullableFilter<"Matricula"> | Date | string | null
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    curso?: XOR<CursoRelationFilter, CursoWhereInput>
  }

  export type MatriculaOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cursoId?: SortOrder
    dataMatricula?: SortOrder
    dataConclusao?: SortOrderInput | SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    curso?: CursoOrderByWithRelationInput
  }

  export type MatriculaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MatriculaWhereInput | MatriculaWhereInput[]
    OR?: MatriculaWhereInput[]
    NOT?: MatriculaWhereInput | MatriculaWhereInput[]
    usuarioId?: IntFilter<"Matricula"> | number
    cursoId?: IntFilter<"Matricula"> | number
    dataMatricula?: DateTimeFilter<"Matricula"> | Date | string
    dataConclusao?: DateTimeNullableFilter<"Matricula"> | Date | string | null
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    curso?: XOR<CursoRelationFilter, CursoWhereInput>
  }, "id">

  export type MatriculaOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cursoId?: SortOrder
    dataMatricula?: SortOrder
    dataConclusao?: SortOrderInput | SortOrder
    _count?: MatriculaCountOrderByAggregateInput
    _avg?: MatriculaAvgOrderByAggregateInput
    _max?: MatriculaMaxOrderByAggregateInput
    _min?: MatriculaMinOrderByAggregateInput
    _sum?: MatriculaSumOrderByAggregateInput
  }

  export type MatriculaScalarWhereWithAggregatesInput = {
    AND?: MatriculaScalarWhereWithAggregatesInput | MatriculaScalarWhereWithAggregatesInput[]
    OR?: MatriculaScalarWhereWithAggregatesInput[]
    NOT?: MatriculaScalarWhereWithAggregatesInput | MatriculaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Matricula"> | number
    usuarioId?: IntWithAggregatesFilter<"Matricula"> | number
    cursoId?: IntWithAggregatesFilter<"Matricula"> | number
    dataMatricula?: DateTimeWithAggregatesFilter<"Matricula"> | Date | string
    dataConclusao?: DateTimeNullableWithAggregatesFilter<"Matricula"> | Date | string | null
  }

  export type ProgressoAulaWhereInput = {
    AND?: ProgressoAulaWhereInput | ProgressoAulaWhereInput[]
    OR?: ProgressoAulaWhereInput[]
    NOT?: ProgressoAulaWhereInput | ProgressoAulaWhereInput[]
    id?: IntFilter<"ProgressoAula"> | number
    usuarioId?: IntFilter<"ProgressoAula"> | number
    aulaId?: IntFilter<"ProgressoAula"> | number
    dataConclusao?: DateTimeFilter<"ProgressoAula"> | Date | string
    status?: StringFilter<"ProgressoAula"> | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    aula?: XOR<AulaRelationFilter, AulaWhereInput>
  }

  export type ProgressoAulaOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    aulaId?: SortOrder
    dataConclusao?: SortOrder
    status?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    aula?: AulaOrderByWithRelationInput
  }

  export type ProgressoAulaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuarioId_aulaId?: ProgressoAulaUsuarioIdAulaIdCompoundUniqueInput
    AND?: ProgressoAulaWhereInput | ProgressoAulaWhereInput[]
    OR?: ProgressoAulaWhereInput[]
    NOT?: ProgressoAulaWhereInput | ProgressoAulaWhereInput[]
    usuarioId?: IntFilter<"ProgressoAula"> | number
    aulaId?: IntFilter<"ProgressoAula"> | number
    dataConclusao?: DateTimeFilter<"ProgressoAula"> | Date | string
    status?: StringFilter<"ProgressoAula"> | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    aula?: XOR<AulaRelationFilter, AulaWhereInput>
  }, "id" | "usuarioId_aulaId">

  export type ProgressoAulaOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    aulaId?: SortOrder
    dataConclusao?: SortOrder
    status?: SortOrder
    _count?: ProgressoAulaCountOrderByAggregateInput
    _avg?: ProgressoAulaAvgOrderByAggregateInput
    _max?: ProgressoAulaMaxOrderByAggregateInput
    _min?: ProgressoAulaMinOrderByAggregateInput
    _sum?: ProgressoAulaSumOrderByAggregateInput
  }

  export type ProgressoAulaScalarWhereWithAggregatesInput = {
    AND?: ProgressoAulaScalarWhereWithAggregatesInput | ProgressoAulaScalarWhereWithAggregatesInput[]
    OR?: ProgressoAulaScalarWhereWithAggregatesInput[]
    NOT?: ProgressoAulaScalarWhereWithAggregatesInput | ProgressoAulaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProgressoAula"> | number
    usuarioId?: IntWithAggregatesFilter<"ProgressoAula"> | number
    aulaId?: IntWithAggregatesFilter<"ProgressoAula"> | number
    dataConclusao?: DateTimeWithAggregatesFilter<"ProgressoAula"> | Date | string
    status?: StringWithAggregatesFilter<"ProgressoAula"> | string
  }

  export type AvaliacaoWhereInput = {
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    id?: IntFilter<"Avaliacao"> | number
    usuarioId?: IntFilter<"Avaliacao"> | number
    cursoId?: IntFilter<"Avaliacao"> | number
    nota?: IntFilter<"Avaliacao"> | number
    comentario?: StringNullableFilter<"Avaliacao"> | string | null
    dataAvaliacao?: DateTimeFilter<"Avaliacao"> | Date | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    curso?: XOR<CursoRelationFilter, CursoWhereInput>
  }

  export type AvaliacaoOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cursoId?: SortOrder
    nota?: SortOrder
    comentario?: SortOrderInput | SortOrder
    dataAvaliacao?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    curso?: CursoOrderByWithRelationInput
  }

  export type AvaliacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    usuarioId?: IntFilter<"Avaliacao"> | number
    cursoId?: IntFilter<"Avaliacao"> | number
    nota?: IntFilter<"Avaliacao"> | number
    comentario?: StringNullableFilter<"Avaliacao"> | string | null
    dataAvaliacao?: DateTimeFilter<"Avaliacao"> | Date | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    curso?: XOR<CursoRelationFilter, CursoWhereInput>
  }, "id">

  export type AvaliacaoOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cursoId?: SortOrder
    nota?: SortOrder
    comentario?: SortOrderInput | SortOrder
    dataAvaliacao?: SortOrder
    _count?: AvaliacaoCountOrderByAggregateInput
    _avg?: AvaliacaoAvgOrderByAggregateInput
    _max?: AvaliacaoMaxOrderByAggregateInput
    _min?: AvaliacaoMinOrderByAggregateInput
    _sum?: AvaliacaoSumOrderByAggregateInput
  }

  export type AvaliacaoScalarWhereWithAggregatesInput = {
    AND?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    OR?: AvaliacaoScalarWhereWithAggregatesInput[]
    NOT?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Avaliacao"> | number
    usuarioId?: IntWithAggregatesFilter<"Avaliacao"> | number
    cursoId?: IntWithAggregatesFilter<"Avaliacao"> | number
    nota?: IntWithAggregatesFilter<"Avaliacao"> | number
    comentario?: StringNullableWithAggregatesFilter<"Avaliacao"> | string | null
    dataAvaliacao?: DateTimeWithAggregatesFilter<"Avaliacao"> | Date | string
  }

  export type TrilhaWhereInput = {
    AND?: TrilhaWhereInput | TrilhaWhereInput[]
    OR?: TrilhaWhereInput[]
    NOT?: TrilhaWhereInput | TrilhaWhereInput[]
    id?: IntFilter<"Trilha"> | number
    titulo?: StringFilter<"Trilha"> | string
    descricao?: StringFilter<"Trilha"> | string
    categoriaId?: IntFilter<"Trilha"> | number
    categoria?: XOR<CategoriaRelationFilter, CategoriaWhereInput>
    trilhasCursos?: TrilhaCursoListRelationFilter
    certificados?: CertificadoListRelationFilter
  }

  export type TrilhaOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    categoriaId?: SortOrder
    categoria?: CategoriaOrderByWithRelationInput
    trilhasCursos?: TrilhaCursoOrderByRelationAggregateInput
    certificados?: CertificadoOrderByRelationAggregateInput
  }

  export type TrilhaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TrilhaWhereInput | TrilhaWhereInput[]
    OR?: TrilhaWhereInput[]
    NOT?: TrilhaWhereInput | TrilhaWhereInput[]
    titulo?: StringFilter<"Trilha"> | string
    descricao?: StringFilter<"Trilha"> | string
    categoriaId?: IntFilter<"Trilha"> | number
    categoria?: XOR<CategoriaRelationFilter, CategoriaWhereInput>
    trilhasCursos?: TrilhaCursoListRelationFilter
    certificados?: CertificadoListRelationFilter
  }, "id">

  export type TrilhaOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    categoriaId?: SortOrder
    _count?: TrilhaCountOrderByAggregateInput
    _avg?: TrilhaAvgOrderByAggregateInput
    _max?: TrilhaMaxOrderByAggregateInput
    _min?: TrilhaMinOrderByAggregateInput
    _sum?: TrilhaSumOrderByAggregateInput
  }

  export type TrilhaScalarWhereWithAggregatesInput = {
    AND?: TrilhaScalarWhereWithAggregatesInput | TrilhaScalarWhereWithAggregatesInput[]
    OR?: TrilhaScalarWhereWithAggregatesInput[]
    NOT?: TrilhaScalarWhereWithAggregatesInput | TrilhaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Trilha"> | number
    titulo?: StringWithAggregatesFilter<"Trilha"> | string
    descricao?: StringWithAggregatesFilter<"Trilha"> | string
    categoriaId?: IntWithAggregatesFilter<"Trilha"> | number
  }

  export type TrilhaCursoWhereInput = {
    AND?: TrilhaCursoWhereInput | TrilhaCursoWhereInput[]
    OR?: TrilhaCursoWhereInput[]
    NOT?: TrilhaCursoWhereInput | TrilhaCursoWhereInput[]
    id?: IntFilter<"TrilhaCurso"> | number
    trilhaId?: IntFilter<"TrilhaCurso"> | number
    cursoId?: IntFilter<"TrilhaCurso"> | number
    ordem?: IntFilter<"TrilhaCurso"> | number
    trilha?: XOR<TrilhaRelationFilter, TrilhaWhereInput>
    curso?: XOR<CursoRelationFilter, CursoWhereInput>
  }

  export type TrilhaCursoOrderByWithRelationInput = {
    id?: SortOrder
    trilhaId?: SortOrder
    cursoId?: SortOrder
    ordem?: SortOrder
    trilha?: TrilhaOrderByWithRelationInput
    curso?: CursoOrderByWithRelationInput
  }

  export type TrilhaCursoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    trilhaId_cursoId?: TrilhaCursoTrilhaIdCursoIdCompoundUniqueInput
    AND?: TrilhaCursoWhereInput | TrilhaCursoWhereInput[]
    OR?: TrilhaCursoWhereInput[]
    NOT?: TrilhaCursoWhereInput | TrilhaCursoWhereInput[]
    trilhaId?: IntFilter<"TrilhaCurso"> | number
    cursoId?: IntFilter<"TrilhaCurso"> | number
    ordem?: IntFilter<"TrilhaCurso"> | number
    trilha?: XOR<TrilhaRelationFilter, TrilhaWhereInput>
    curso?: XOR<CursoRelationFilter, CursoWhereInput>
  }, "id" | "trilhaId_cursoId">

  export type TrilhaCursoOrderByWithAggregationInput = {
    id?: SortOrder
    trilhaId?: SortOrder
    cursoId?: SortOrder
    ordem?: SortOrder
    _count?: TrilhaCursoCountOrderByAggregateInput
    _avg?: TrilhaCursoAvgOrderByAggregateInput
    _max?: TrilhaCursoMaxOrderByAggregateInput
    _min?: TrilhaCursoMinOrderByAggregateInput
    _sum?: TrilhaCursoSumOrderByAggregateInput
  }

  export type TrilhaCursoScalarWhereWithAggregatesInput = {
    AND?: TrilhaCursoScalarWhereWithAggregatesInput | TrilhaCursoScalarWhereWithAggregatesInput[]
    OR?: TrilhaCursoScalarWhereWithAggregatesInput[]
    NOT?: TrilhaCursoScalarWhereWithAggregatesInput | TrilhaCursoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TrilhaCurso"> | number
    trilhaId?: IntWithAggregatesFilter<"TrilhaCurso"> | number
    cursoId?: IntWithAggregatesFilter<"TrilhaCurso"> | number
    ordem?: IntWithAggregatesFilter<"TrilhaCurso"> | number
  }

  export type CertificadoWhereInput = {
    AND?: CertificadoWhereInput | CertificadoWhereInput[]
    OR?: CertificadoWhereInput[]
    NOT?: CertificadoWhereInput | CertificadoWhereInput[]
    id?: IntFilter<"Certificado"> | number
    usuarioId?: IntFilter<"Certificado"> | number
    cursoId?: IntFilter<"Certificado"> | number
    trilhaId?: IntNullableFilter<"Certificado"> | number | null
    codigoVerificacao?: StringFilter<"Certificado"> | string
    dataEmissao?: DateTimeFilter<"Certificado"> | Date | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    curso?: XOR<CursoRelationFilter, CursoWhereInput>
    trilha?: XOR<TrilhaNullableRelationFilter, TrilhaWhereInput> | null
  }

  export type CertificadoOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cursoId?: SortOrder
    trilhaId?: SortOrderInput | SortOrder
    codigoVerificacao?: SortOrder
    dataEmissao?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    curso?: CursoOrderByWithRelationInput
    trilha?: TrilhaOrderByWithRelationInput
  }

  export type CertificadoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    codigoVerificacao?: string
    AND?: CertificadoWhereInput | CertificadoWhereInput[]
    OR?: CertificadoWhereInput[]
    NOT?: CertificadoWhereInput | CertificadoWhereInput[]
    usuarioId?: IntFilter<"Certificado"> | number
    cursoId?: IntFilter<"Certificado"> | number
    trilhaId?: IntNullableFilter<"Certificado"> | number | null
    dataEmissao?: DateTimeFilter<"Certificado"> | Date | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    curso?: XOR<CursoRelationFilter, CursoWhereInput>
    trilha?: XOR<TrilhaNullableRelationFilter, TrilhaWhereInput> | null
  }, "id" | "codigoVerificacao">

  export type CertificadoOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cursoId?: SortOrder
    trilhaId?: SortOrderInput | SortOrder
    codigoVerificacao?: SortOrder
    dataEmissao?: SortOrder
    _count?: CertificadoCountOrderByAggregateInput
    _avg?: CertificadoAvgOrderByAggregateInput
    _max?: CertificadoMaxOrderByAggregateInput
    _min?: CertificadoMinOrderByAggregateInput
    _sum?: CertificadoSumOrderByAggregateInput
  }

  export type CertificadoScalarWhereWithAggregatesInput = {
    AND?: CertificadoScalarWhereWithAggregatesInput | CertificadoScalarWhereWithAggregatesInput[]
    OR?: CertificadoScalarWhereWithAggregatesInput[]
    NOT?: CertificadoScalarWhereWithAggregatesInput | CertificadoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Certificado"> | number
    usuarioId?: IntWithAggregatesFilter<"Certificado"> | number
    cursoId?: IntWithAggregatesFilter<"Certificado"> | number
    trilhaId?: IntNullableWithAggregatesFilter<"Certificado"> | number | null
    codigoVerificacao?: StringWithAggregatesFilter<"Certificado"> | string
    dataEmissao?: DateTimeWithAggregatesFilter<"Certificado"> | Date | string
  }

  export type PlanoWhereInput = {
    AND?: PlanoWhereInput | PlanoWhereInput[]
    OR?: PlanoWhereInput[]
    NOT?: PlanoWhereInput | PlanoWhereInput[]
    id?: IntFilter<"Plano"> | number
    nome?: StringFilter<"Plano"> | string
    descricao?: StringFilter<"Plano"> | string
    preco?: FloatFilter<"Plano"> | number
    duracaoMeses?: IntFilter<"Plano"> | number
    assinaturas?: AssinaturaListRelationFilter
  }

  export type PlanoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    duracaoMeses?: SortOrder
    assinaturas?: AssinaturaOrderByRelationAggregateInput
  }

  export type PlanoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlanoWhereInput | PlanoWhereInput[]
    OR?: PlanoWhereInput[]
    NOT?: PlanoWhereInput | PlanoWhereInput[]
    nome?: StringFilter<"Plano"> | string
    descricao?: StringFilter<"Plano"> | string
    preco?: FloatFilter<"Plano"> | number
    duracaoMeses?: IntFilter<"Plano"> | number
    assinaturas?: AssinaturaListRelationFilter
  }, "id">

  export type PlanoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    duracaoMeses?: SortOrder
    _count?: PlanoCountOrderByAggregateInput
    _avg?: PlanoAvgOrderByAggregateInput
    _max?: PlanoMaxOrderByAggregateInput
    _min?: PlanoMinOrderByAggregateInput
    _sum?: PlanoSumOrderByAggregateInput
  }

  export type PlanoScalarWhereWithAggregatesInput = {
    AND?: PlanoScalarWhereWithAggregatesInput | PlanoScalarWhereWithAggregatesInput[]
    OR?: PlanoScalarWhereWithAggregatesInput[]
    NOT?: PlanoScalarWhereWithAggregatesInput | PlanoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Plano"> | number
    nome?: StringWithAggregatesFilter<"Plano"> | string
    descricao?: StringWithAggregatesFilter<"Plano"> | string
    preco?: FloatWithAggregatesFilter<"Plano"> | number
    duracaoMeses?: IntWithAggregatesFilter<"Plano"> | number
  }

  export type AssinaturaWhereInput = {
    AND?: AssinaturaWhereInput | AssinaturaWhereInput[]
    OR?: AssinaturaWhereInput[]
    NOT?: AssinaturaWhereInput | AssinaturaWhereInput[]
    id?: IntFilter<"Assinatura"> | number
    usuarioId?: IntFilter<"Assinatura"> | number
    planoId?: IntFilter<"Assinatura"> | number
    dataInicio?: DateTimeFilter<"Assinatura"> | Date | string
    dataFim?: DateTimeFilter<"Assinatura"> | Date | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    plano?: XOR<PlanoRelationFilter, PlanoWhereInput>
    pagamentos?: PagamentoListRelationFilter
  }

  export type AssinaturaOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    planoId?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    plano?: PlanoOrderByWithRelationInput
    pagamentos?: PagamentoOrderByRelationAggregateInput
  }

  export type AssinaturaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AssinaturaWhereInput | AssinaturaWhereInput[]
    OR?: AssinaturaWhereInput[]
    NOT?: AssinaturaWhereInput | AssinaturaWhereInput[]
    usuarioId?: IntFilter<"Assinatura"> | number
    planoId?: IntFilter<"Assinatura"> | number
    dataInicio?: DateTimeFilter<"Assinatura"> | Date | string
    dataFim?: DateTimeFilter<"Assinatura"> | Date | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    plano?: XOR<PlanoRelationFilter, PlanoWhereInput>
    pagamentos?: PagamentoListRelationFilter
  }, "id">

  export type AssinaturaOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    planoId?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    _count?: AssinaturaCountOrderByAggregateInput
    _avg?: AssinaturaAvgOrderByAggregateInput
    _max?: AssinaturaMaxOrderByAggregateInput
    _min?: AssinaturaMinOrderByAggregateInput
    _sum?: AssinaturaSumOrderByAggregateInput
  }

  export type AssinaturaScalarWhereWithAggregatesInput = {
    AND?: AssinaturaScalarWhereWithAggregatesInput | AssinaturaScalarWhereWithAggregatesInput[]
    OR?: AssinaturaScalarWhereWithAggregatesInput[]
    NOT?: AssinaturaScalarWhereWithAggregatesInput | AssinaturaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Assinatura"> | number
    usuarioId?: IntWithAggregatesFilter<"Assinatura"> | number
    planoId?: IntWithAggregatesFilter<"Assinatura"> | number
    dataInicio?: DateTimeWithAggregatesFilter<"Assinatura"> | Date | string
    dataFim?: DateTimeWithAggregatesFilter<"Assinatura"> | Date | string
  }

  export type PagamentoWhereInput = {
    AND?: PagamentoWhereInput | PagamentoWhereInput[]
    OR?: PagamentoWhereInput[]
    NOT?: PagamentoWhereInput | PagamentoWhereInput[]
    id?: IntFilter<"Pagamento"> | number
    assinaturaId?: IntFilter<"Pagamento"> | number
    valorPago?: FloatFilter<"Pagamento"> | number
    dataPagamento?: DateTimeFilter<"Pagamento"> | Date | string
    metodoPagamento?: StringFilter<"Pagamento"> | string
    idTransacaoGateway?: StringFilter<"Pagamento"> | string
    assinatura?: XOR<AssinaturaRelationFilter, AssinaturaWhereInput>
  }

  export type PagamentoOrderByWithRelationInput = {
    id?: SortOrder
    assinaturaId?: SortOrder
    valorPago?: SortOrder
    dataPagamento?: SortOrder
    metodoPagamento?: SortOrder
    idTransacaoGateway?: SortOrder
    assinatura?: AssinaturaOrderByWithRelationInput
  }

  export type PagamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PagamentoWhereInput | PagamentoWhereInput[]
    OR?: PagamentoWhereInput[]
    NOT?: PagamentoWhereInput | PagamentoWhereInput[]
    assinaturaId?: IntFilter<"Pagamento"> | number
    valorPago?: FloatFilter<"Pagamento"> | number
    dataPagamento?: DateTimeFilter<"Pagamento"> | Date | string
    metodoPagamento?: StringFilter<"Pagamento"> | string
    idTransacaoGateway?: StringFilter<"Pagamento"> | string
    assinatura?: XOR<AssinaturaRelationFilter, AssinaturaWhereInput>
  }, "id">

  export type PagamentoOrderByWithAggregationInput = {
    id?: SortOrder
    assinaturaId?: SortOrder
    valorPago?: SortOrder
    dataPagamento?: SortOrder
    metodoPagamento?: SortOrder
    idTransacaoGateway?: SortOrder
    _count?: PagamentoCountOrderByAggregateInput
    _avg?: PagamentoAvgOrderByAggregateInput
    _max?: PagamentoMaxOrderByAggregateInput
    _min?: PagamentoMinOrderByAggregateInput
    _sum?: PagamentoSumOrderByAggregateInput
  }

  export type PagamentoScalarWhereWithAggregatesInput = {
    AND?: PagamentoScalarWhereWithAggregatesInput | PagamentoScalarWhereWithAggregatesInput[]
    OR?: PagamentoScalarWhereWithAggregatesInput[]
    NOT?: PagamentoScalarWhereWithAggregatesInput | PagamentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pagamento"> | number
    assinaturaId?: IntWithAggregatesFilter<"Pagamento"> | number
    valorPago?: FloatWithAggregatesFilter<"Pagamento"> | number
    dataPagamento?: DateTimeWithAggregatesFilter<"Pagamento"> | Date | string
    metodoPagamento?: StringWithAggregatesFilter<"Pagamento"> | string
    idTransacaoGateway?: StringWithAggregatesFilter<"Pagamento"> | string
  }

  export type UsuarioCreateInput = {
    nomeCompleto: string
    email: string
    senhaHash: string
    dataCadastro?: Date | string
    updatedAt?: Date | string
    cursosInstrutor?: CursoCreateNestedManyWithoutInstrutorInput
    matriculas?: MatriculaCreateNestedManyWithoutUsuarioInput
    progressos?: ProgressoAulaCreateNestedManyWithoutUsuarioInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutUsuarioInput
    certificados?: CertificadoCreateNestedManyWithoutUsuarioInput
    assinaturas?: AssinaturaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nomeCompleto: string
    email: string
    senhaHash: string
    dataCadastro?: Date | string
    updatedAt?: Date | string
    cursosInstrutor?: CursoUncheckedCreateNestedManyWithoutInstrutorInput
    matriculas?: MatriculaUncheckedCreateNestedManyWithoutUsuarioInput
    progressos?: ProgressoAulaUncheckedCreateNestedManyWithoutUsuarioInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    certificados?: CertificadoUncheckedCreateNestedManyWithoutUsuarioInput
    assinaturas?: AssinaturaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cursosInstrutor?: CursoUpdateManyWithoutInstrutorNestedInput
    matriculas?: MatriculaUpdateManyWithoutUsuarioNestedInput
    progressos?: ProgressoAulaUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutUsuarioNestedInput
    certificados?: CertificadoUpdateManyWithoutUsuarioNestedInput
    assinaturas?: AssinaturaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cursosInstrutor?: CursoUncheckedUpdateManyWithoutInstrutorNestedInput
    matriculas?: MatriculaUncheckedUpdateManyWithoutUsuarioNestedInput
    progressos?: ProgressoAulaUncheckedUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    certificados?: CertificadoUncheckedUpdateManyWithoutUsuarioNestedInput
    assinaturas?: AssinaturaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nomeCompleto: string
    email: string
    senhaHash: string
    dataCadastro?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaCreateInput = {
    nome: string
    descricao: string
    cursos?: CursoCreateNestedManyWithoutCategoriaInput
    trilhas?: TrilhaCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: number
    nome: string
    descricao: string
    cursos?: CursoUncheckedCreateNestedManyWithoutCategoriaInput
    trilhas?: TrilhaUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    cursos?: CursoUpdateManyWithoutCategoriaNestedInput
    trilhas?: TrilhaUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    cursos?: CursoUncheckedUpdateManyWithoutCategoriaNestedInput
    trilhas?: TrilhaUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: number
    nome: string
    descricao: string
  }

  export type CategoriaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type CursoCreateInput = {
    titulo: string
    descricao: string
    nivel: string
    dataPublicacao?: Date | string
    totalAulas?: number
    totalHoras?: number
    instrutor: UsuarioCreateNestedOneWithoutCursosInstrutorInput
    categoria: CategoriaCreateNestedOneWithoutCursosInput
    modulos?: ModuloCreateNestedManyWithoutCursoInput
    matriculas?: MatriculaCreateNestedManyWithoutCursoInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutCursoInput
    certificados?: CertificadoCreateNestedManyWithoutCursoInput
    trilhasCursos?: TrilhaCursoCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateInput = {
    id?: number
    titulo: string
    descricao: string
    instrutorId: number
    categoriaId: number
    nivel: string
    dataPublicacao?: Date | string
    totalAulas?: number
    totalHoras?: number
    modulos?: ModuloUncheckedCreateNestedManyWithoutCursoInput
    matriculas?: MatriculaUncheckedCreateNestedManyWithoutCursoInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutCursoInput
    certificados?: CertificadoUncheckedCreateNestedManyWithoutCursoInput
    trilhasCursos?: TrilhaCursoUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAulas?: IntFieldUpdateOperationsInput | number
    totalHoras?: FloatFieldUpdateOperationsInput | number
    instrutor?: UsuarioUpdateOneRequiredWithoutCursosInstrutorNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutCursosNestedInput
    modulos?: ModuloUpdateManyWithoutCursoNestedInput
    matriculas?: MatriculaUpdateManyWithoutCursoNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutCursoNestedInput
    certificados?: CertificadoUpdateManyWithoutCursoNestedInput
    trilhasCursos?: TrilhaCursoUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    instrutorId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    nivel?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAulas?: IntFieldUpdateOperationsInput | number
    totalHoras?: FloatFieldUpdateOperationsInput | number
    modulos?: ModuloUncheckedUpdateManyWithoutCursoNestedInput
    matriculas?: MatriculaUncheckedUpdateManyWithoutCursoNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutCursoNestedInput
    certificados?: CertificadoUncheckedUpdateManyWithoutCursoNestedInput
    trilhasCursos?: TrilhaCursoUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type CursoCreateManyInput = {
    id?: number
    titulo: string
    descricao: string
    instrutorId: number
    categoriaId: number
    nivel: string
    dataPublicacao?: Date | string
    totalAulas?: number
    totalHoras?: number
  }

  export type CursoUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAulas?: IntFieldUpdateOperationsInput | number
    totalHoras?: FloatFieldUpdateOperationsInput | number
  }

  export type CursoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    instrutorId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    nivel?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAulas?: IntFieldUpdateOperationsInput | number
    totalHoras?: FloatFieldUpdateOperationsInput | number
  }

  export type ModuloCreateInput = {
    titulo: string
    ordem: number
    curso: CursoCreateNestedOneWithoutModulosInput
    aulas?: AulaCreateNestedManyWithoutModuloInput
  }

  export type ModuloUncheckedCreateInput = {
    id?: number
    cursoId: number
    titulo: string
    ordem: number
    aulas?: AulaUncheckedCreateNestedManyWithoutModuloInput
  }

  export type ModuloUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    curso?: CursoUpdateOneRequiredWithoutModulosNestedInput
    aulas?: AulaUpdateManyWithoutModuloNestedInput
  }

  export type ModuloUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    aulas?: AulaUncheckedUpdateManyWithoutModuloNestedInput
  }

  export type ModuloCreateManyInput = {
    id?: number
    cursoId: number
    titulo: string
    ordem: number
  }

  export type ModuloUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type ModuloUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type AulaCreateInput = {
    titulo: string
    tipoConteudo: string
    urlConteudo: string
    duracaoMinutos: number
    ordem: number
    modulo: ModuloCreateNestedOneWithoutAulasInput
    progressos?: ProgressoAulaCreateNestedManyWithoutAulaInput
  }

  export type AulaUncheckedCreateInput = {
    id?: number
    moduloId: number
    titulo: string
    tipoConteudo: string
    urlConteudo: string
    duracaoMinutos: number
    ordem: number
    progressos?: ProgressoAulaUncheckedCreateNestedManyWithoutAulaInput
  }

  export type AulaUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    tipoConteudo?: StringFieldUpdateOperationsInput | string
    urlConteudo?: StringFieldUpdateOperationsInput | string
    duracaoMinutos?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
    modulo?: ModuloUpdateOneRequiredWithoutAulasNestedInput
    progressos?: ProgressoAulaUpdateManyWithoutAulaNestedInput
  }

  export type AulaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    moduloId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    tipoConteudo?: StringFieldUpdateOperationsInput | string
    urlConteudo?: StringFieldUpdateOperationsInput | string
    duracaoMinutos?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
    progressos?: ProgressoAulaUncheckedUpdateManyWithoutAulaNestedInput
  }

  export type AulaCreateManyInput = {
    id?: number
    moduloId: number
    titulo: string
    tipoConteudo: string
    urlConteudo: string
    duracaoMinutos: number
    ordem: number
  }

  export type AulaUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    tipoConteudo?: StringFieldUpdateOperationsInput | string
    urlConteudo?: StringFieldUpdateOperationsInput | string
    duracaoMinutos?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type AulaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    moduloId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    tipoConteudo?: StringFieldUpdateOperationsInput | string
    urlConteudo?: StringFieldUpdateOperationsInput | string
    duracaoMinutos?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type MatriculaCreateInput = {
    dataMatricula?: Date | string
    dataConclusao?: Date | string | null
    usuario: UsuarioCreateNestedOneWithoutMatriculasInput
    curso: CursoCreateNestedOneWithoutMatriculasInput
  }

  export type MatriculaUncheckedCreateInput = {
    id?: number
    usuarioId: number
    cursoId: number
    dataMatricula?: Date | string
    dataConclusao?: Date | string | null
  }

  export type MatriculaUpdateInput = {
    dataMatricula?: DateTimeFieldUpdateOperationsInput | Date | string
    dataConclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutMatriculasNestedInput
    curso?: CursoUpdateOneRequiredWithoutMatriculasNestedInput
  }

  export type MatriculaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    dataMatricula?: DateTimeFieldUpdateOperationsInput | Date | string
    dataConclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MatriculaCreateManyInput = {
    id?: number
    usuarioId: number
    cursoId: number
    dataMatricula?: Date | string
    dataConclusao?: Date | string | null
  }

  export type MatriculaUpdateManyMutationInput = {
    dataMatricula?: DateTimeFieldUpdateOperationsInput | Date | string
    dataConclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MatriculaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    dataMatricula?: DateTimeFieldUpdateOperationsInput | Date | string
    dataConclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProgressoAulaCreateInput = {
    dataConclusao?: Date | string
    status: string
    usuario: UsuarioCreateNestedOneWithoutProgressosInput
    aula: AulaCreateNestedOneWithoutProgressosInput
  }

  export type ProgressoAulaUncheckedCreateInput = {
    id?: number
    usuarioId: number
    aulaId: number
    dataConclusao?: Date | string
    status: string
  }

  export type ProgressoAulaUpdateInput = {
    dataConclusao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutProgressosNestedInput
    aula?: AulaUpdateOneRequiredWithoutProgressosNestedInput
  }

  export type ProgressoAulaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    aulaId?: IntFieldUpdateOperationsInput | number
    dataConclusao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ProgressoAulaCreateManyInput = {
    id?: number
    usuarioId: number
    aulaId: number
    dataConclusao?: Date | string
    status: string
  }

  export type ProgressoAulaUpdateManyMutationInput = {
    dataConclusao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ProgressoAulaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    aulaId?: IntFieldUpdateOperationsInput | number
    dataConclusao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AvaliacaoCreateInput = {
    nota: number
    comentario?: string | null
    dataAvaliacao?: Date | string
    usuario: UsuarioCreateNestedOneWithoutAvaliacoesInput
    curso: CursoCreateNestedOneWithoutAvaliacoesInput
  }

  export type AvaliacaoUncheckedCreateInput = {
    id?: number
    usuarioId: number
    cursoId: number
    nota: number
    comentario?: string | null
    dataAvaliacao?: Date | string
  }

  export type AvaliacaoUpdateInput = {
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    dataAvaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutAvaliacoesNestedInput
    curso?: CursoUpdateOneRequiredWithoutAvaliacoesNestedInput
  }

  export type AvaliacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    dataAvaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoCreateManyInput = {
    id?: number
    usuarioId: number
    cursoId: number
    nota: number
    comentario?: string | null
    dataAvaliacao?: Date | string
  }

  export type AvaliacaoUpdateManyMutationInput = {
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    dataAvaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    dataAvaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrilhaCreateInput = {
    titulo: string
    descricao: string
    categoria: CategoriaCreateNestedOneWithoutTrilhasInput
    trilhasCursos?: TrilhaCursoCreateNestedManyWithoutTrilhaInput
    certificados?: CertificadoCreateNestedManyWithoutTrilhaInput
  }

  export type TrilhaUncheckedCreateInput = {
    id?: number
    titulo: string
    descricao: string
    categoriaId: number
    trilhasCursos?: TrilhaCursoUncheckedCreateNestedManyWithoutTrilhaInput
    certificados?: CertificadoUncheckedCreateNestedManyWithoutTrilhaInput
  }

  export type TrilhaUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: CategoriaUpdateOneRequiredWithoutTrilhasNestedInput
    trilhasCursos?: TrilhaCursoUpdateManyWithoutTrilhaNestedInput
    certificados?: CertificadoUpdateManyWithoutTrilhaNestedInput
  }

  export type TrilhaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoriaId?: IntFieldUpdateOperationsInput | number
    trilhasCursos?: TrilhaCursoUncheckedUpdateManyWithoutTrilhaNestedInput
    certificados?: CertificadoUncheckedUpdateManyWithoutTrilhaNestedInput
  }

  export type TrilhaCreateManyInput = {
    id?: number
    titulo: string
    descricao: string
    categoriaId: number
  }

  export type TrilhaUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type TrilhaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoriaId?: IntFieldUpdateOperationsInput | number
  }

  export type TrilhaCursoCreateInput = {
    ordem: number
    trilha: TrilhaCreateNestedOneWithoutTrilhasCursosInput
    curso: CursoCreateNestedOneWithoutTrilhasCursosInput
  }

  export type TrilhaCursoUncheckedCreateInput = {
    id?: number
    trilhaId: number
    cursoId: number
    ordem: number
  }

  export type TrilhaCursoUpdateInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    trilha?: TrilhaUpdateOneRequiredWithoutTrilhasCursosNestedInput
    curso?: CursoUpdateOneRequiredWithoutTrilhasCursosNestedInput
  }

  export type TrilhaCursoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    trilhaId?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type TrilhaCursoCreateManyInput = {
    id?: number
    trilhaId: number
    cursoId: number
    ordem: number
  }

  export type TrilhaCursoUpdateManyMutationInput = {
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type TrilhaCursoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    trilhaId?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type CertificadoCreateInput = {
    codigoVerificacao: string
    dataEmissao?: Date | string
    usuario: UsuarioCreateNestedOneWithoutCertificadosInput
    curso: CursoCreateNestedOneWithoutCertificadosInput
    trilha?: TrilhaCreateNestedOneWithoutCertificadosInput
  }

  export type CertificadoUncheckedCreateInput = {
    id?: number
    usuarioId: number
    cursoId: number
    trilhaId?: number | null
    codigoVerificacao: string
    dataEmissao?: Date | string
  }

  export type CertificadoUpdateInput = {
    codigoVerificacao?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutCertificadosNestedInput
    curso?: CursoUpdateOneRequiredWithoutCertificadosNestedInput
    trilha?: TrilhaUpdateOneWithoutCertificadosNestedInput
  }

  export type CertificadoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    trilhaId?: NullableIntFieldUpdateOperationsInput | number | null
    codigoVerificacao?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificadoCreateManyInput = {
    id?: number
    usuarioId: number
    cursoId: number
    trilhaId?: number | null
    codigoVerificacao: string
    dataEmissao?: Date | string
  }

  export type CertificadoUpdateManyMutationInput = {
    codigoVerificacao?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificadoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    trilhaId?: NullableIntFieldUpdateOperationsInput | number | null
    codigoVerificacao?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanoCreateInput = {
    nome: string
    descricao: string
    preco: number
    duracaoMeses: number
    assinaturas?: AssinaturaCreateNestedManyWithoutPlanoInput
  }

  export type PlanoUncheckedCreateInput = {
    id?: number
    nome: string
    descricao: string
    preco: number
    duracaoMeses: number
    assinaturas?: AssinaturaUncheckedCreateNestedManyWithoutPlanoInput
  }

  export type PlanoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    duracaoMeses?: IntFieldUpdateOperationsInput | number
    assinaturas?: AssinaturaUpdateManyWithoutPlanoNestedInput
  }

  export type PlanoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    duracaoMeses?: IntFieldUpdateOperationsInput | number
    assinaturas?: AssinaturaUncheckedUpdateManyWithoutPlanoNestedInput
  }

  export type PlanoCreateManyInput = {
    id?: number
    nome: string
    descricao: string
    preco: number
    duracaoMeses: number
  }

  export type PlanoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    duracaoMeses?: IntFieldUpdateOperationsInput | number
  }

  export type PlanoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    duracaoMeses?: IntFieldUpdateOperationsInput | number
  }

  export type AssinaturaCreateInput = {
    dataInicio?: Date | string
    dataFim: Date | string
    usuario: UsuarioCreateNestedOneWithoutAssinaturasInput
    plano: PlanoCreateNestedOneWithoutAssinaturasInput
    pagamentos?: PagamentoCreateNestedManyWithoutAssinaturaInput
  }

  export type AssinaturaUncheckedCreateInput = {
    id?: number
    usuarioId: number
    planoId: number
    dataInicio?: Date | string
    dataFim: Date | string
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutAssinaturaInput
  }

  export type AssinaturaUpdateInput = {
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutAssinaturasNestedInput
    plano?: PlanoUpdateOneRequiredWithoutAssinaturasNestedInput
    pagamentos?: PagamentoUpdateManyWithoutAssinaturaNestedInput
  }

  export type AssinaturaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    planoId?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamentos?: PagamentoUncheckedUpdateManyWithoutAssinaturaNestedInput
  }

  export type AssinaturaCreateManyInput = {
    id?: number
    usuarioId: number
    planoId: number
    dataInicio?: Date | string
    dataFim: Date | string
  }

  export type AssinaturaUpdateManyMutationInput = {
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssinaturaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    planoId?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PagamentoCreateInput = {
    valorPago: number
    dataPagamento?: Date | string
    metodoPagamento: string
    idTransacaoGateway: string
    assinatura: AssinaturaCreateNestedOneWithoutPagamentosInput
  }

  export type PagamentoUncheckedCreateInput = {
    id?: number
    assinaturaId: number
    valorPago: number
    dataPagamento?: Date | string
    metodoPagamento: string
    idTransacaoGateway: string
  }

  export type PagamentoUpdateInput = {
    valorPago?: FloatFieldUpdateOperationsInput | number
    dataPagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    metodoPagamento?: StringFieldUpdateOperationsInput | string
    idTransacaoGateway?: StringFieldUpdateOperationsInput | string
    assinatura?: AssinaturaUpdateOneRequiredWithoutPagamentosNestedInput
  }

  export type PagamentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    assinaturaId?: IntFieldUpdateOperationsInput | number
    valorPago?: FloatFieldUpdateOperationsInput | number
    dataPagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    metodoPagamento?: StringFieldUpdateOperationsInput | string
    idTransacaoGateway?: StringFieldUpdateOperationsInput | string
  }

  export type PagamentoCreateManyInput = {
    id?: number
    assinaturaId: number
    valorPago: number
    dataPagamento?: Date | string
    metodoPagamento: string
    idTransacaoGateway: string
  }

  export type PagamentoUpdateManyMutationInput = {
    valorPago?: FloatFieldUpdateOperationsInput | number
    dataPagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    metodoPagamento?: StringFieldUpdateOperationsInput | string
    idTransacaoGateway?: StringFieldUpdateOperationsInput | string
  }

  export type PagamentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    assinaturaId?: IntFieldUpdateOperationsInput | number
    valorPago?: FloatFieldUpdateOperationsInput | number
    dataPagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    metodoPagamento?: StringFieldUpdateOperationsInput | string
    idTransacaoGateway?: StringFieldUpdateOperationsInput | string
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CursoListRelationFilter = {
    every?: CursoWhereInput
    some?: CursoWhereInput
    none?: CursoWhereInput
  }

  export type MatriculaListRelationFilter = {
    every?: MatriculaWhereInput
    some?: MatriculaWhereInput
    none?: MatriculaWhereInput
  }

  export type ProgressoAulaListRelationFilter = {
    every?: ProgressoAulaWhereInput
    some?: ProgressoAulaWhereInput
    none?: ProgressoAulaWhereInput
  }

  export type AvaliacaoListRelationFilter = {
    every?: AvaliacaoWhereInput
    some?: AvaliacaoWhereInput
    none?: AvaliacaoWhereInput
  }

  export type CertificadoListRelationFilter = {
    every?: CertificadoWhereInput
    some?: CertificadoWhereInput
    none?: CertificadoWhereInput
  }

  export type AssinaturaListRelationFilter = {
    every?: AssinaturaWhereInput
    some?: AssinaturaWhereInput
    none?: AssinaturaWhereInput
  }

  export type CursoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatriculaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgressoAulaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvaliacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CertificadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssinaturaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    dataCadastro?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    dataCadastro?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    dataCadastro?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TrilhaListRelationFilter = {
    every?: TrilhaWhereInput
    some?: TrilhaWhereInput
    none?: TrilhaWhereInput
  }

  export type TrilhaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UsuarioRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type CategoriaRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type ModuloListRelationFilter = {
    every?: ModuloWhereInput
    some?: ModuloWhereInput
    none?: ModuloWhereInput
  }

  export type TrilhaCursoListRelationFilter = {
    every?: TrilhaCursoWhereInput
    some?: TrilhaCursoWhereInput
    none?: TrilhaCursoWhereInput
  }

  export type ModuloOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrilhaCursoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CursoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    instrutorId?: SortOrder
    categoriaId?: SortOrder
    nivel?: SortOrder
    dataPublicacao?: SortOrder
    totalAulas?: SortOrder
    totalHoras?: SortOrder
  }

  export type CursoAvgOrderByAggregateInput = {
    id?: SortOrder
    instrutorId?: SortOrder
    categoriaId?: SortOrder
    totalAulas?: SortOrder
    totalHoras?: SortOrder
  }

  export type CursoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    instrutorId?: SortOrder
    categoriaId?: SortOrder
    nivel?: SortOrder
    dataPublicacao?: SortOrder
    totalAulas?: SortOrder
    totalHoras?: SortOrder
  }

  export type CursoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    instrutorId?: SortOrder
    categoriaId?: SortOrder
    nivel?: SortOrder
    dataPublicacao?: SortOrder
    totalAulas?: SortOrder
    totalHoras?: SortOrder
  }

  export type CursoSumOrderByAggregateInput = {
    id?: SortOrder
    instrutorId?: SortOrder
    categoriaId?: SortOrder
    totalAulas?: SortOrder
    totalHoras?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CursoRelationFilter = {
    is?: CursoWhereInput
    isNot?: CursoWhereInput
  }

  export type AulaListRelationFilter = {
    every?: AulaWhereInput
    some?: AulaWhereInput
    none?: AulaWhereInput
  }

  export type AulaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModuloCountOrderByAggregateInput = {
    id?: SortOrder
    cursoId?: SortOrder
    titulo?: SortOrder
    ordem?: SortOrder
  }

  export type ModuloAvgOrderByAggregateInput = {
    id?: SortOrder
    cursoId?: SortOrder
    ordem?: SortOrder
  }

  export type ModuloMaxOrderByAggregateInput = {
    id?: SortOrder
    cursoId?: SortOrder
    titulo?: SortOrder
    ordem?: SortOrder
  }

  export type ModuloMinOrderByAggregateInput = {
    id?: SortOrder
    cursoId?: SortOrder
    titulo?: SortOrder
    ordem?: SortOrder
  }

  export type ModuloSumOrderByAggregateInput = {
    id?: SortOrder
    cursoId?: SortOrder
    ordem?: SortOrder
  }

  export type ModuloRelationFilter = {
    is?: ModuloWhereInput
    isNot?: ModuloWhereInput
  }

  export type AulaCountOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    tipoConteudo?: SortOrder
    urlConteudo?: SortOrder
    duracaoMinutos?: SortOrder
    ordem?: SortOrder
  }

  export type AulaAvgOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    duracaoMinutos?: SortOrder
    ordem?: SortOrder
  }

  export type AulaMaxOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    tipoConteudo?: SortOrder
    urlConteudo?: SortOrder
    duracaoMinutos?: SortOrder
    ordem?: SortOrder
  }

  export type AulaMinOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    titulo?: SortOrder
    tipoConteudo?: SortOrder
    urlConteudo?: SortOrder
    duracaoMinutos?: SortOrder
    ordem?: SortOrder
  }

  export type AulaSumOrderByAggregateInput = {
    id?: SortOrder
    moduloId?: SortOrder
    duracaoMinutos?: SortOrder
    ordem?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MatriculaCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cursoId?: SortOrder
    dataMatricula?: SortOrder
    dataConclusao?: SortOrder
  }

  export type MatriculaAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cursoId?: SortOrder
  }

  export type MatriculaMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cursoId?: SortOrder
    dataMatricula?: SortOrder
    dataConclusao?: SortOrder
  }

  export type MatriculaMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cursoId?: SortOrder
    dataMatricula?: SortOrder
    dataConclusao?: SortOrder
  }

  export type MatriculaSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cursoId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AulaRelationFilter = {
    is?: AulaWhereInput
    isNot?: AulaWhereInput
  }

  export type ProgressoAulaUsuarioIdAulaIdCompoundUniqueInput = {
    usuarioId: number
    aulaId: number
  }

  export type ProgressoAulaCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    aulaId?: SortOrder
    dataConclusao?: SortOrder
    status?: SortOrder
  }

  export type ProgressoAulaAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    aulaId?: SortOrder
  }

  export type ProgressoAulaMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    aulaId?: SortOrder
    dataConclusao?: SortOrder
    status?: SortOrder
  }

  export type ProgressoAulaMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    aulaId?: SortOrder
    dataConclusao?: SortOrder
    status?: SortOrder
  }

  export type ProgressoAulaSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    aulaId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AvaliacaoCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cursoId?: SortOrder
    nota?: SortOrder
    comentario?: SortOrder
    dataAvaliacao?: SortOrder
  }

  export type AvaliacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cursoId?: SortOrder
    nota?: SortOrder
  }

  export type AvaliacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cursoId?: SortOrder
    nota?: SortOrder
    comentario?: SortOrder
    dataAvaliacao?: SortOrder
  }

  export type AvaliacaoMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cursoId?: SortOrder
    nota?: SortOrder
    comentario?: SortOrder
    dataAvaliacao?: SortOrder
  }

  export type AvaliacaoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cursoId?: SortOrder
    nota?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type TrilhaCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    categoriaId?: SortOrder
  }

  export type TrilhaAvgOrderByAggregateInput = {
    id?: SortOrder
    categoriaId?: SortOrder
  }

  export type TrilhaMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    categoriaId?: SortOrder
  }

  export type TrilhaMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    categoriaId?: SortOrder
  }

  export type TrilhaSumOrderByAggregateInput = {
    id?: SortOrder
    categoriaId?: SortOrder
  }

  export type TrilhaRelationFilter = {
    is?: TrilhaWhereInput
    isNot?: TrilhaWhereInput
  }

  export type TrilhaCursoTrilhaIdCursoIdCompoundUniqueInput = {
    trilhaId: number
    cursoId: number
  }

  export type TrilhaCursoCountOrderByAggregateInput = {
    id?: SortOrder
    trilhaId?: SortOrder
    cursoId?: SortOrder
    ordem?: SortOrder
  }

  export type TrilhaCursoAvgOrderByAggregateInput = {
    id?: SortOrder
    trilhaId?: SortOrder
    cursoId?: SortOrder
    ordem?: SortOrder
  }

  export type TrilhaCursoMaxOrderByAggregateInput = {
    id?: SortOrder
    trilhaId?: SortOrder
    cursoId?: SortOrder
    ordem?: SortOrder
  }

  export type TrilhaCursoMinOrderByAggregateInput = {
    id?: SortOrder
    trilhaId?: SortOrder
    cursoId?: SortOrder
    ordem?: SortOrder
  }

  export type TrilhaCursoSumOrderByAggregateInput = {
    id?: SortOrder
    trilhaId?: SortOrder
    cursoId?: SortOrder
    ordem?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TrilhaNullableRelationFilter = {
    is?: TrilhaWhereInput | null
    isNot?: TrilhaWhereInput | null
  }

  export type CertificadoCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cursoId?: SortOrder
    trilhaId?: SortOrder
    codigoVerificacao?: SortOrder
    dataEmissao?: SortOrder
  }

  export type CertificadoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cursoId?: SortOrder
    trilhaId?: SortOrder
  }

  export type CertificadoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cursoId?: SortOrder
    trilhaId?: SortOrder
    codigoVerificacao?: SortOrder
    dataEmissao?: SortOrder
  }

  export type CertificadoMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cursoId?: SortOrder
    trilhaId?: SortOrder
    codigoVerificacao?: SortOrder
    dataEmissao?: SortOrder
  }

  export type CertificadoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cursoId?: SortOrder
    trilhaId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PlanoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    duracaoMeses?: SortOrder
  }

  export type PlanoAvgOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
    duracaoMeses?: SortOrder
  }

  export type PlanoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    duracaoMeses?: SortOrder
  }

  export type PlanoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    duracaoMeses?: SortOrder
  }

  export type PlanoSumOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
    duracaoMeses?: SortOrder
  }

  export type PlanoRelationFilter = {
    is?: PlanoWhereInput
    isNot?: PlanoWhereInput
  }

  export type PagamentoListRelationFilter = {
    every?: PagamentoWhereInput
    some?: PagamentoWhereInput
    none?: PagamentoWhereInput
  }

  export type PagamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssinaturaCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    planoId?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
  }

  export type AssinaturaAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    planoId?: SortOrder
  }

  export type AssinaturaMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    planoId?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
  }

  export type AssinaturaMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    planoId?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
  }

  export type AssinaturaSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    planoId?: SortOrder
  }

  export type AssinaturaRelationFilter = {
    is?: AssinaturaWhereInput
    isNot?: AssinaturaWhereInput
  }

  export type PagamentoCountOrderByAggregateInput = {
    id?: SortOrder
    assinaturaId?: SortOrder
    valorPago?: SortOrder
    dataPagamento?: SortOrder
    metodoPagamento?: SortOrder
    idTransacaoGateway?: SortOrder
  }

  export type PagamentoAvgOrderByAggregateInput = {
    id?: SortOrder
    assinaturaId?: SortOrder
    valorPago?: SortOrder
  }

  export type PagamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    assinaturaId?: SortOrder
    valorPago?: SortOrder
    dataPagamento?: SortOrder
    metodoPagamento?: SortOrder
    idTransacaoGateway?: SortOrder
  }

  export type PagamentoMinOrderByAggregateInput = {
    id?: SortOrder
    assinaturaId?: SortOrder
    valorPago?: SortOrder
    dataPagamento?: SortOrder
    metodoPagamento?: SortOrder
    idTransacaoGateway?: SortOrder
  }

  export type PagamentoSumOrderByAggregateInput = {
    id?: SortOrder
    assinaturaId?: SortOrder
    valorPago?: SortOrder
  }

  export type CursoCreateNestedManyWithoutInstrutorInput = {
    create?: XOR<CursoCreateWithoutInstrutorInput, CursoUncheckedCreateWithoutInstrutorInput> | CursoCreateWithoutInstrutorInput[] | CursoUncheckedCreateWithoutInstrutorInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutInstrutorInput | CursoCreateOrConnectWithoutInstrutorInput[]
    createMany?: CursoCreateManyInstrutorInputEnvelope
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
  }

  export type MatriculaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<MatriculaCreateWithoutUsuarioInput, MatriculaUncheckedCreateWithoutUsuarioInput> | MatriculaCreateWithoutUsuarioInput[] | MatriculaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MatriculaCreateOrConnectWithoutUsuarioInput | MatriculaCreateOrConnectWithoutUsuarioInput[]
    createMany?: MatriculaCreateManyUsuarioInputEnvelope
    connect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
  }

  export type ProgressoAulaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ProgressoAulaCreateWithoutUsuarioInput, ProgressoAulaUncheckedCreateWithoutUsuarioInput> | ProgressoAulaCreateWithoutUsuarioInput[] | ProgressoAulaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProgressoAulaCreateOrConnectWithoutUsuarioInput | ProgressoAulaCreateOrConnectWithoutUsuarioInput[]
    createMany?: ProgressoAulaCreateManyUsuarioInputEnvelope
    connect?: ProgressoAulaWhereUniqueInput | ProgressoAulaWhereUniqueInput[]
  }

  export type AvaliacaoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AvaliacaoCreateWithoutUsuarioInput, AvaliacaoUncheckedCreateWithoutUsuarioInput> | AvaliacaoCreateWithoutUsuarioInput[] | AvaliacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutUsuarioInput | AvaliacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: AvaliacaoCreateManyUsuarioInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type CertificadoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CertificadoCreateWithoutUsuarioInput, CertificadoUncheckedCreateWithoutUsuarioInput> | CertificadoCreateWithoutUsuarioInput[] | CertificadoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CertificadoCreateOrConnectWithoutUsuarioInput | CertificadoCreateOrConnectWithoutUsuarioInput[]
    createMany?: CertificadoCreateManyUsuarioInputEnvelope
    connect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
  }

  export type AssinaturaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AssinaturaCreateWithoutUsuarioInput, AssinaturaUncheckedCreateWithoutUsuarioInput> | AssinaturaCreateWithoutUsuarioInput[] | AssinaturaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AssinaturaCreateOrConnectWithoutUsuarioInput | AssinaturaCreateOrConnectWithoutUsuarioInput[]
    createMany?: AssinaturaCreateManyUsuarioInputEnvelope
    connect?: AssinaturaWhereUniqueInput | AssinaturaWhereUniqueInput[]
  }

  export type CursoUncheckedCreateNestedManyWithoutInstrutorInput = {
    create?: XOR<CursoCreateWithoutInstrutorInput, CursoUncheckedCreateWithoutInstrutorInput> | CursoCreateWithoutInstrutorInput[] | CursoUncheckedCreateWithoutInstrutorInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutInstrutorInput | CursoCreateOrConnectWithoutInstrutorInput[]
    createMany?: CursoCreateManyInstrutorInputEnvelope
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
  }

  export type MatriculaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<MatriculaCreateWithoutUsuarioInput, MatriculaUncheckedCreateWithoutUsuarioInput> | MatriculaCreateWithoutUsuarioInput[] | MatriculaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MatriculaCreateOrConnectWithoutUsuarioInput | MatriculaCreateOrConnectWithoutUsuarioInput[]
    createMany?: MatriculaCreateManyUsuarioInputEnvelope
    connect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
  }

  export type ProgressoAulaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ProgressoAulaCreateWithoutUsuarioInput, ProgressoAulaUncheckedCreateWithoutUsuarioInput> | ProgressoAulaCreateWithoutUsuarioInput[] | ProgressoAulaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProgressoAulaCreateOrConnectWithoutUsuarioInput | ProgressoAulaCreateOrConnectWithoutUsuarioInput[]
    createMany?: ProgressoAulaCreateManyUsuarioInputEnvelope
    connect?: ProgressoAulaWhereUniqueInput | ProgressoAulaWhereUniqueInput[]
  }

  export type AvaliacaoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AvaliacaoCreateWithoutUsuarioInput, AvaliacaoUncheckedCreateWithoutUsuarioInput> | AvaliacaoCreateWithoutUsuarioInput[] | AvaliacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutUsuarioInput | AvaliacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: AvaliacaoCreateManyUsuarioInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type CertificadoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CertificadoCreateWithoutUsuarioInput, CertificadoUncheckedCreateWithoutUsuarioInput> | CertificadoCreateWithoutUsuarioInput[] | CertificadoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CertificadoCreateOrConnectWithoutUsuarioInput | CertificadoCreateOrConnectWithoutUsuarioInput[]
    createMany?: CertificadoCreateManyUsuarioInputEnvelope
    connect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
  }

  export type AssinaturaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AssinaturaCreateWithoutUsuarioInput, AssinaturaUncheckedCreateWithoutUsuarioInput> | AssinaturaCreateWithoutUsuarioInput[] | AssinaturaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AssinaturaCreateOrConnectWithoutUsuarioInput | AssinaturaCreateOrConnectWithoutUsuarioInput[]
    createMany?: AssinaturaCreateManyUsuarioInputEnvelope
    connect?: AssinaturaWhereUniqueInput | AssinaturaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CursoUpdateManyWithoutInstrutorNestedInput = {
    create?: XOR<CursoCreateWithoutInstrutorInput, CursoUncheckedCreateWithoutInstrutorInput> | CursoCreateWithoutInstrutorInput[] | CursoUncheckedCreateWithoutInstrutorInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutInstrutorInput | CursoCreateOrConnectWithoutInstrutorInput[]
    upsert?: CursoUpsertWithWhereUniqueWithoutInstrutorInput | CursoUpsertWithWhereUniqueWithoutInstrutorInput[]
    createMany?: CursoCreateManyInstrutorInputEnvelope
    set?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    disconnect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    delete?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    update?: CursoUpdateWithWhereUniqueWithoutInstrutorInput | CursoUpdateWithWhereUniqueWithoutInstrutorInput[]
    updateMany?: CursoUpdateManyWithWhereWithoutInstrutorInput | CursoUpdateManyWithWhereWithoutInstrutorInput[]
    deleteMany?: CursoScalarWhereInput | CursoScalarWhereInput[]
  }

  export type MatriculaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<MatriculaCreateWithoutUsuarioInput, MatriculaUncheckedCreateWithoutUsuarioInput> | MatriculaCreateWithoutUsuarioInput[] | MatriculaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MatriculaCreateOrConnectWithoutUsuarioInput | MatriculaCreateOrConnectWithoutUsuarioInput[]
    upsert?: MatriculaUpsertWithWhereUniqueWithoutUsuarioInput | MatriculaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: MatriculaCreateManyUsuarioInputEnvelope
    set?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    disconnect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    delete?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    connect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    update?: MatriculaUpdateWithWhereUniqueWithoutUsuarioInput | MatriculaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: MatriculaUpdateManyWithWhereWithoutUsuarioInput | MatriculaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: MatriculaScalarWhereInput | MatriculaScalarWhereInput[]
  }

  export type ProgressoAulaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ProgressoAulaCreateWithoutUsuarioInput, ProgressoAulaUncheckedCreateWithoutUsuarioInput> | ProgressoAulaCreateWithoutUsuarioInput[] | ProgressoAulaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProgressoAulaCreateOrConnectWithoutUsuarioInput | ProgressoAulaCreateOrConnectWithoutUsuarioInput[]
    upsert?: ProgressoAulaUpsertWithWhereUniqueWithoutUsuarioInput | ProgressoAulaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ProgressoAulaCreateManyUsuarioInputEnvelope
    set?: ProgressoAulaWhereUniqueInput | ProgressoAulaWhereUniqueInput[]
    disconnect?: ProgressoAulaWhereUniqueInput | ProgressoAulaWhereUniqueInput[]
    delete?: ProgressoAulaWhereUniqueInput | ProgressoAulaWhereUniqueInput[]
    connect?: ProgressoAulaWhereUniqueInput | ProgressoAulaWhereUniqueInput[]
    update?: ProgressoAulaUpdateWithWhereUniqueWithoutUsuarioInput | ProgressoAulaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ProgressoAulaUpdateManyWithWhereWithoutUsuarioInput | ProgressoAulaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ProgressoAulaScalarWhereInput | ProgressoAulaScalarWhereInput[]
  }

  export type AvaliacaoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutUsuarioInput, AvaliacaoUncheckedCreateWithoutUsuarioInput> | AvaliacaoCreateWithoutUsuarioInput[] | AvaliacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutUsuarioInput | AvaliacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutUsuarioInput | AvaliacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: AvaliacaoCreateManyUsuarioInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutUsuarioInput | AvaliacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutUsuarioInput | AvaliacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type CertificadoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CertificadoCreateWithoutUsuarioInput, CertificadoUncheckedCreateWithoutUsuarioInput> | CertificadoCreateWithoutUsuarioInput[] | CertificadoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CertificadoCreateOrConnectWithoutUsuarioInput | CertificadoCreateOrConnectWithoutUsuarioInput[]
    upsert?: CertificadoUpsertWithWhereUniqueWithoutUsuarioInput | CertificadoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CertificadoCreateManyUsuarioInputEnvelope
    set?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    disconnect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    delete?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    connect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    update?: CertificadoUpdateWithWhereUniqueWithoutUsuarioInput | CertificadoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CertificadoUpdateManyWithWhereWithoutUsuarioInput | CertificadoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CertificadoScalarWhereInput | CertificadoScalarWhereInput[]
  }

  export type AssinaturaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AssinaturaCreateWithoutUsuarioInput, AssinaturaUncheckedCreateWithoutUsuarioInput> | AssinaturaCreateWithoutUsuarioInput[] | AssinaturaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AssinaturaCreateOrConnectWithoutUsuarioInput | AssinaturaCreateOrConnectWithoutUsuarioInput[]
    upsert?: AssinaturaUpsertWithWhereUniqueWithoutUsuarioInput | AssinaturaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: AssinaturaCreateManyUsuarioInputEnvelope
    set?: AssinaturaWhereUniqueInput | AssinaturaWhereUniqueInput[]
    disconnect?: AssinaturaWhereUniqueInput | AssinaturaWhereUniqueInput[]
    delete?: AssinaturaWhereUniqueInput | AssinaturaWhereUniqueInput[]
    connect?: AssinaturaWhereUniqueInput | AssinaturaWhereUniqueInput[]
    update?: AssinaturaUpdateWithWhereUniqueWithoutUsuarioInput | AssinaturaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AssinaturaUpdateManyWithWhereWithoutUsuarioInput | AssinaturaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AssinaturaScalarWhereInput | AssinaturaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CursoUncheckedUpdateManyWithoutInstrutorNestedInput = {
    create?: XOR<CursoCreateWithoutInstrutorInput, CursoUncheckedCreateWithoutInstrutorInput> | CursoCreateWithoutInstrutorInput[] | CursoUncheckedCreateWithoutInstrutorInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutInstrutorInput | CursoCreateOrConnectWithoutInstrutorInput[]
    upsert?: CursoUpsertWithWhereUniqueWithoutInstrutorInput | CursoUpsertWithWhereUniqueWithoutInstrutorInput[]
    createMany?: CursoCreateManyInstrutorInputEnvelope
    set?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    disconnect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    delete?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    update?: CursoUpdateWithWhereUniqueWithoutInstrutorInput | CursoUpdateWithWhereUniqueWithoutInstrutorInput[]
    updateMany?: CursoUpdateManyWithWhereWithoutInstrutorInput | CursoUpdateManyWithWhereWithoutInstrutorInput[]
    deleteMany?: CursoScalarWhereInput | CursoScalarWhereInput[]
  }

  export type MatriculaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<MatriculaCreateWithoutUsuarioInput, MatriculaUncheckedCreateWithoutUsuarioInput> | MatriculaCreateWithoutUsuarioInput[] | MatriculaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MatriculaCreateOrConnectWithoutUsuarioInput | MatriculaCreateOrConnectWithoutUsuarioInput[]
    upsert?: MatriculaUpsertWithWhereUniqueWithoutUsuarioInput | MatriculaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: MatriculaCreateManyUsuarioInputEnvelope
    set?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    disconnect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    delete?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    connect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    update?: MatriculaUpdateWithWhereUniqueWithoutUsuarioInput | MatriculaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: MatriculaUpdateManyWithWhereWithoutUsuarioInput | MatriculaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: MatriculaScalarWhereInput | MatriculaScalarWhereInput[]
  }

  export type ProgressoAulaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ProgressoAulaCreateWithoutUsuarioInput, ProgressoAulaUncheckedCreateWithoutUsuarioInput> | ProgressoAulaCreateWithoutUsuarioInput[] | ProgressoAulaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProgressoAulaCreateOrConnectWithoutUsuarioInput | ProgressoAulaCreateOrConnectWithoutUsuarioInput[]
    upsert?: ProgressoAulaUpsertWithWhereUniqueWithoutUsuarioInput | ProgressoAulaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ProgressoAulaCreateManyUsuarioInputEnvelope
    set?: ProgressoAulaWhereUniqueInput | ProgressoAulaWhereUniqueInput[]
    disconnect?: ProgressoAulaWhereUniqueInput | ProgressoAulaWhereUniqueInput[]
    delete?: ProgressoAulaWhereUniqueInput | ProgressoAulaWhereUniqueInput[]
    connect?: ProgressoAulaWhereUniqueInput | ProgressoAulaWhereUniqueInput[]
    update?: ProgressoAulaUpdateWithWhereUniqueWithoutUsuarioInput | ProgressoAulaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ProgressoAulaUpdateManyWithWhereWithoutUsuarioInput | ProgressoAulaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ProgressoAulaScalarWhereInput | ProgressoAulaScalarWhereInput[]
  }

  export type AvaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutUsuarioInput, AvaliacaoUncheckedCreateWithoutUsuarioInput> | AvaliacaoCreateWithoutUsuarioInput[] | AvaliacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutUsuarioInput | AvaliacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutUsuarioInput | AvaliacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: AvaliacaoCreateManyUsuarioInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutUsuarioInput | AvaliacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutUsuarioInput | AvaliacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type CertificadoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CertificadoCreateWithoutUsuarioInput, CertificadoUncheckedCreateWithoutUsuarioInput> | CertificadoCreateWithoutUsuarioInput[] | CertificadoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CertificadoCreateOrConnectWithoutUsuarioInput | CertificadoCreateOrConnectWithoutUsuarioInput[]
    upsert?: CertificadoUpsertWithWhereUniqueWithoutUsuarioInput | CertificadoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CertificadoCreateManyUsuarioInputEnvelope
    set?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    disconnect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    delete?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    connect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    update?: CertificadoUpdateWithWhereUniqueWithoutUsuarioInput | CertificadoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CertificadoUpdateManyWithWhereWithoutUsuarioInput | CertificadoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CertificadoScalarWhereInput | CertificadoScalarWhereInput[]
  }

  export type AssinaturaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AssinaturaCreateWithoutUsuarioInput, AssinaturaUncheckedCreateWithoutUsuarioInput> | AssinaturaCreateWithoutUsuarioInput[] | AssinaturaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AssinaturaCreateOrConnectWithoutUsuarioInput | AssinaturaCreateOrConnectWithoutUsuarioInput[]
    upsert?: AssinaturaUpsertWithWhereUniqueWithoutUsuarioInput | AssinaturaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: AssinaturaCreateManyUsuarioInputEnvelope
    set?: AssinaturaWhereUniqueInput | AssinaturaWhereUniqueInput[]
    disconnect?: AssinaturaWhereUniqueInput | AssinaturaWhereUniqueInput[]
    delete?: AssinaturaWhereUniqueInput | AssinaturaWhereUniqueInput[]
    connect?: AssinaturaWhereUniqueInput | AssinaturaWhereUniqueInput[]
    update?: AssinaturaUpdateWithWhereUniqueWithoutUsuarioInput | AssinaturaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AssinaturaUpdateManyWithWhereWithoutUsuarioInput | AssinaturaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AssinaturaScalarWhereInput | AssinaturaScalarWhereInput[]
  }

  export type CursoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<CursoCreateWithoutCategoriaInput, CursoUncheckedCreateWithoutCategoriaInput> | CursoCreateWithoutCategoriaInput[] | CursoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutCategoriaInput | CursoCreateOrConnectWithoutCategoriaInput[]
    createMany?: CursoCreateManyCategoriaInputEnvelope
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
  }

  export type TrilhaCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<TrilhaCreateWithoutCategoriaInput, TrilhaUncheckedCreateWithoutCategoriaInput> | TrilhaCreateWithoutCategoriaInput[] | TrilhaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: TrilhaCreateOrConnectWithoutCategoriaInput | TrilhaCreateOrConnectWithoutCategoriaInput[]
    createMany?: TrilhaCreateManyCategoriaInputEnvelope
    connect?: TrilhaWhereUniqueInput | TrilhaWhereUniqueInput[]
  }

  export type CursoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<CursoCreateWithoutCategoriaInput, CursoUncheckedCreateWithoutCategoriaInput> | CursoCreateWithoutCategoriaInput[] | CursoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutCategoriaInput | CursoCreateOrConnectWithoutCategoriaInput[]
    createMany?: CursoCreateManyCategoriaInputEnvelope
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
  }

  export type TrilhaUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<TrilhaCreateWithoutCategoriaInput, TrilhaUncheckedCreateWithoutCategoriaInput> | TrilhaCreateWithoutCategoriaInput[] | TrilhaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: TrilhaCreateOrConnectWithoutCategoriaInput | TrilhaCreateOrConnectWithoutCategoriaInput[]
    createMany?: TrilhaCreateManyCategoriaInputEnvelope
    connect?: TrilhaWhereUniqueInput | TrilhaWhereUniqueInput[]
  }

  export type CursoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<CursoCreateWithoutCategoriaInput, CursoUncheckedCreateWithoutCategoriaInput> | CursoCreateWithoutCategoriaInput[] | CursoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutCategoriaInput | CursoCreateOrConnectWithoutCategoriaInput[]
    upsert?: CursoUpsertWithWhereUniqueWithoutCategoriaInput | CursoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: CursoCreateManyCategoriaInputEnvelope
    set?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    disconnect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    delete?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    update?: CursoUpdateWithWhereUniqueWithoutCategoriaInput | CursoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: CursoUpdateManyWithWhereWithoutCategoriaInput | CursoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: CursoScalarWhereInput | CursoScalarWhereInput[]
  }

  export type TrilhaUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<TrilhaCreateWithoutCategoriaInput, TrilhaUncheckedCreateWithoutCategoriaInput> | TrilhaCreateWithoutCategoriaInput[] | TrilhaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: TrilhaCreateOrConnectWithoutCategoriaInput | TrilhaCreateOrConnectWithoutCategoriaInput[]
    upsert?: TrilhaUpsertWithWhereUniqueWithoutCategoriaInput | TrilhaUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: TrilhaCreateManyCategoriaInputEnvelope
    set?: TrilhaWhereUniqueInput | TrilhaWhereUniqueInput[]
    disconnect?: TrilhaWhereUniqueInput | TrilhaWhereUniqueInput[]
    delete?: TrilhaWhereUniqueInput | TrilhaWhereUniqueInput[]
    connect?: TrilhaWhereUniqueInput | TrilhaWhereUniqueInput[]
    update?: TrilhaUpdateWithWhereUniqueWithoutCategoriaInput | TrilhaUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: TrilhaUpdateManyWithWhereWithoutCategoriaInput | TrilhaUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: TrilhaScalarWhereInput | TrilhaScalarWhereInput[]
  }

  export type CursoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<CursoCreateWithoutCategoriaInput, CursoUncheckedCreateWithoutCategoriaInput> | CursoCreateWithoutCategoriaInput[] | CursoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutCategoriaInput | CursoCreateOrConnectWithoutCategoriaInput[]
    upsert?: CursoUpsertWithWhereUniqueWithoutCategoriaInput | CursoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: CursoCreateManyCategoriaInputEnvelope
    set?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    disconnect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    delete?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    update?: CursoUpdateWithWhereUniqueWithoutCategoriaInput | CursoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: CursoUpdateManyWithWhereWithoutCategoriaInput | CursoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: CursoScalarWhereInput | CursoScalarWhereInput[]
  }

  export type TrilhaUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<TrilhaCreateWithoutCategoriaInput, TrilhaUncheckedCreateWithoutCategoriaInput> | TrilhaCreateWithoutCategoriaInput[] | TrilhaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: TrilhaCreateOrConnectWithoutCategoriaInput | TrilhaCreateOrConnectWithoutCategoriaInput[]
    upsert?: TrilhaUpsertWithWhereUniqueWithoutCategoriaInput | TrilhaUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: TrilhaCreateManyCategoriaInputEnvelope
    set?: TrilhaWhereUniqueInput | TrilhaWhereUniqueInput[]
    disconnect?: TrilhaWhereUniqueInput | TrilhaWhereUniqueInput[]
    delete?: TrilhaWhereUniqueInput | TrilhaWhereUniqueInput[]
    connect?: TrilhaWhereUniqueInput | TrilhaWhereUniqueInput[]
    update?: TrilhaUpdateWithWhereUniqueWithoutCategoriaInput | TrilhaUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: TrilhaUpdateManyWithWhereWithoutCategoriaInput | TrilhaUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: TrilhaScalarWhereInput | TrilhaScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutCursosInstrutorInput = {
    create?: XOR<UsuarioCreateWithoutCursosInstrutorInput, UsuarioUncheckedCreateWithoutCursosInstrutorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCursosInstrutorInput
    connect?: UsuarioWhereUniqueInput
  }

  export type CategoriaCreateNestedOneWithoutCursosInput = {
    create?: XOR<CategoriaCreateWithoutCursosInput, CategoriaUncheckedCreateWithoutCursosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutCursosInput
    connect?: CategoriaWhereUniqueInput
  }

  export type ModuloCreateNestedManyWithoutCursoInput = {
    create?: XOR<ModuloCreateWithoutCursoInput, ModuloUncheckedCreateWithoutCursoInput> | ModuloCreateWithoutCursoInput[] | ModuloUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: ModuloCreateOrConnectWithoutCursoInput | ModuloCreateOrConnectWithoutCursoInput[]
    createMany?: ModuloCreateManyCursoInputEnvelope
    connect?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
  }

  export type MatriculaCreateNestedManyWithoutCursoInput = {
    create?: XOR<MatriculaCreateWithoutCursoInput, MatriculaUncheckedCreateWithoutCursoInput> | MatriculaCreateWithoutCursoInput[] | MatriculaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: MatriculaCreateOrConnectWithoutCursoInput | MatriculaCreateOrConnectWithoutCursoInput[]
    createMany?: MatriculaCreateManyCursoInputEnvelope
    connect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
  }

  export type AvaliacaoCreateNestedManyWithoutCursoInput = {
    create?: XOR<AvaliacaoCreateWithoutCursoInput, AvaliacaoUncheckedCreateWithoutCursoInput> | AvaliacaoCreateWithoutCursoInput[] | AvaliacaoUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutCursoInput | AvaliacaoCreateOrConnectWithoutCursoInput[]
    createMany?: AvaliacaoCreateManyCursoInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type CertificadoCreateNestedManyWithoutCursoInput = {
    create?: XOR<CertificadoCreateWithoutCursoInput, CertificadoUncheckedCreateWithoutCursoInput> | CertificadoCreateWithoutCursoInput[] | CertificadoUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: CertificadoCreateOrConnectWithoutCursoInput | CertificadoCreateOrConnectWithoutCursoInput[]
    createMany?: CertificadoCreateManyCursoInputEnvelope
    connect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
  }

  export type TrilhaCursoCreateNestedManyWithoutCursoInput = {
    create?: XOR<TrilhaCursoCreateWithoutCursoInput, TrilhaCursoUncheckedCreateWithoutCursoInput> | TrilhaCursoCreateWithoutCursoInput[] | TrilhaCursoUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: TrilhaCursoCreateOrConnectWithoutCursoInput | TrilhaCursoCreateOrConnectWithoutCursoInput[]
    createMany?: TrilhaCursoCreateManyCursoInputEnvelope
    connect?: TrilhaCursoWhereUniqueInput | TrilhaCursoWhereUniqueInput[]
  }

  export type ModuloUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<ModuloCreateWithoutCursoInput, ModuloUncheckedCreateWithoutCursoInput> | ModuloCreateWithoutCursoInput[] | ModuloUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: ModuloCreateOrConnectWithoutCursoInput | ModuloCreateOrConnectWithoutCursoInput[]
    createMany?: ModuloCreateManyCursoInputEnvelope
    connect?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
  }

  export type MatriculaUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<MatriculaCreateWithoutCursoInput, MatriculaUncheckedCreateWithoutCursoInput> | MatriculaCreateWithoutCursoInput[] | MatriculaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: MatriculaCreateOrConnectWithoutCursoInput | MatriculaCreateOrConnectWithoutCursoInput[]
    createMany?: MatriculaCreateManyCursoInputEnvelope
    connect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
  }

  export type AvaliacaoUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<AvaliacaoCreateWithoutCursoInput, AvaliacaoUncheckedCreateWithoutCursoInput> | AvaliacaoCreateWithoutCursoInput[] | AvaliacaoUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutCursoInput | AvaliacaoCreateOrConnectWithoutCursoInput[]
    createMany?: AvaliacaoCreateManyCursoInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type CertificadoUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<CertificadoCreateWithoutCursoInput, CertificadoUncheckedCreateWithoutCursoInput> | CertificadoCreateWithoutCursoInput[] | CertificadoUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: CertificadoCreateOrConnectWithoutCursoInput | CertificadoCreateOrConnectWithoutCursoInput[]
    createMany?: CertificadoCreateManyCursoInputEnvelope
    connect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
  }

  export type TrilhaCursoUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<TrilhaCursoCreateWithoutCursoInput, TrilhaCursoUncheckedCreateWithoutCursoInput> | TrilhaCursoCreateWithoutCursoInput[] | TrilhaCursoUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: TrilhaCursoCreateOrConnectWithoutCursoInput | TrilhaCursoCreateOrConnectWithoutCursoInput[]
    createMany?: TrilhaCursoCreateManyCursoInputEnvelope
    connect?: TrilhaCursoWhereUniqueInput | TrilhaCursoWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUpdateOneRequiredWithoutCursosInstrutorNestedInput = {
    create?: XOR<UsuarioCreateWithoutCursosInstrutorInput, UsuarioUncheckedCreateWithoutCursosInstrutorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCursosInstrutorInput
    upsert?: UsuarioUpsertWithoutCursosInstrutorInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCursosInstrutorInput, UsuarioUpdateWithoutCursosInstrutorInput>, UsuarioUncheckedUpdateWithoutCursosInstrutorInput>
  }

  export type CategoriaUpdateOneRequiredWithoutCursosNestedInput = {
    create?: XOR<CategoriaCreateWithoutCursosInput, CategoriaUncheckedCreateWithoutCursosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutCursosInput
    upsert?: CategoriaUpsertWithoutCursosInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutCursosInput, CategoriaUpdateWithoutCursosInput>, CategoriaUncheckedUpdateWithoutCursosInput>
  }

  export type ModuloUpdateManyWithoutCursoNestedInput = {
    create?: XOR<ModuloCreateWithoutCursoInput, ModuloUncheckedCreateWithoutCursoInput> | ModuloCreateWithoutCursoInput[] | ModuloUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: ModuloCreateOrConnectWithoutCursoInput | ModuloCreateOrConnectWithoutCursoInput[]
    upsert?: ModuloUpsertWithWhereUniqueWithoutCursoInput | ModuloUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: ModuloCreateManyCursoInputEnvelope
    set?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    disconnect?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    delete?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    connect?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    update?: ModuloUpdateWithWhereUniqueWithoutCursoInput | ModuloUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: ModuloUpdateManyWithWhereWithoutCursoInput | ModuloUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: ModuloScalarWhereInput | ModuloScalarWhereInput[]
  }

  export type MatriculaUpdateManyWithoutCursoNestedInput = {
    create?: XOR<MatriculaCreateWithoutCursoInput, MatriculaUncheckedCreateWithoutCursoInput> | MatriculaCreateWithoutCursoInput[] | MatriculaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: MatriculaCreateOrConnectWithoutCursoInput | MatriculaCreateOrConnectWithoutCursoInput[]
    upsert?: MatriculaUpsertWithWhereUniqueWithoutCursoInput | MatriculaUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: MatriculaCreateManyCursoInputEnvelope
    set?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    disconnect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    delete?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    connect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    update?: MatriculaUpdateWithWhereUniqueWithoutCursoInput | MatriculaUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: MatriculaUpdateManyWithWhereWithoutCursoInput | MatriculaUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: MatriculaScalarWhereInput | MatriculaScalarWhereInput[]
  }

  export type AvaliacaoUpdateManyWithoutCursoNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutCursoInput, AvaliacaoUncheckedCreateWithoutCursoInput> | AvaliacaoCreateWithoutCursoInput[] | AvaliacaoUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutCursoInput | AvaliacaoCreateOrConnectWithoutCursoInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutCursoInput | AvaliacaoUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: AvaliacaoCreateManyCursoInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutCursoInput | AvaliacaoUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutCursoInput | AvaliacaoUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type CertificadoUpdateManyWithoutCursoNestedInput = {
    create?: XOR<CertificadoCreateWithoutCursoInput, CertificadoUncheckedCreateWithoutCursoInput> | CertificadoCreateWithoutCursoInput[] | CertificadoUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: CertificadoCreateOrConnectWithoutCursoInput | CertificadoCreateOrConnectWithoutCursoInput[]
    upsert?: CertificadoUpsertWithWhereUniqueWithoutCursoInput | CertificadoUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: CertificadoCreateManyCursoInputEnvelope
    set?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    disconnect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    delete?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    connect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    update?: CertificadoUpdateWithWhereUniqueWithoutCursoInput | CertificadoUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: CertificadoUpdateManyWithWhereWithoutCursoInput | CertificadoUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: CertificadoScalarWhereInput | CertificadoScalarWhereInput[]
  }

  export type TrilhaCursoUpdateManyWithoutCursoNestedInput = {
    create?: XOR<TrilhaCursoCreateWithoutCursoInput, TrilhaCursoUncheckedCreateWithoutCursoInput> | TrilhaCursoCreateWithoutCursoInput[] | TrilhaCursoUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: TrilhaCursoCreateOrConnectWithoutCursoInput | TrilhaCursoCreateOrConnectWithoutCursoInput[]
    upsert?: TrilhaCursoUpsertWithWhereUniqueWithoutCursoInput | TrilhaCursoUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: TrilhaCursoCreateManyCursoInputEnvelope
    set?: TrilhaCursoWhereUniqueInput | TrilhaCursoWhereUniqueInput[]
    disconnect?: TrilhaCursoWhereUniqueInput | TrilhaCursoWhereUniqueInput[]
    delete?: TrilhaCursoWhereUniqueInput | TrilhaCursoWhereUniqueInput[]
    connect?: TrilhaCursoWhereUniqueInput | TrilhaCursoWhereUniqueInput[]
    update?: TrilhaCursoUpdateWithWhereUniqueWithoutCursoInput | TrilhaCursoUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: TrilhaCursoUpdateManyWithWhereWithoutCursoInput | TrilhaCursoUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: TrilhaCursoScalarWhereInput | TrilhaCursoScalarWhereInput[]
  }

  export type ModuloUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<ModuloCreateWithoutCursoInput, ModuloUncheckedCreateWithoutCursoInput> | ModuloCreateWithoutCursoInput[] | ModuloUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: ModuloCreateOrConnectWithoutCursoInput | ModuloCreateOrConnectWithoutCursoInput[]
    upsert?: ModuloUpsertWithWhereUniqueWithoutCursoInput | ModuloUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: ModuloCreateManyCursoInputEnvelope
    set?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    disconnect?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    delete?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    connect?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    update?: ModuloUpdateWithWhereUniqueWithoutCursoInput | ModuloUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: ModuloUpdateManyWithWhereWithoutCursoInput | ModuloUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: ModuloScalarWhereInput | ModuloScalarWhereInput[]
  }

  export type MatriculaUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<MatriculaCreateWithoutCursoInput, MatriculaUncheckedCreateWithoutCursoInput> | MatriculaCreateWithoutCursoInput[] | MatriculaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: MatriculaCreateOrConnectWithoutCursoInput | MatriculaCreateOrConnectWithoutCursoInput[]
    upsert?: MatriculaUpsertWithWhereUniqueWithoutCursoInput | MatriculaUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: MatriculaCreateManyCursoInputEnvelope
    set?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    disconnect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    delete?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    connect?: MatriculaWhereUniqueInput | MatriculaWhereUniqueInput[]
    update?: MatriculaUpdateWithWhereUniqueWithoutCursoInput | MatriculaUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: MatriculaUpdateManyWithWhereWithoutCursoInput | MatriculaUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: MatriculaScalarWhereInput | MatriculaScalarWhereInput[]
  }

  export type AvaliacaoUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutCursoInput, AvaliacaoUncheckedCreateWithoutCursoInput> | AvaliacaoCreateWithoutCursoInput[] | AvaliacaoUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutCursoInput | AvaliacaoCreateOrConnectWithoutCursoInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutCursoInput | AvaliacaoUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: AvaliacaoCreateManyCursoInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutCursoInput | AvaliacaoUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutCursoInput | AvaliacaoUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type CertificadoUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<CertificadoCreateWithoutCursoInput, CertificadoUncheckedCreateWithoutCursoInput> | CertificadoCreateWithoutCursoInput[] | CertificadoUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: CertificadoCreateOrConnectWithoutCursoInput | CertificadoCreateOrConnectWithoutCursoInput[]
    upsert?: CertificadoUpsertWithWhereUniqueWithoutCursoInput | CertificadoUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: CertificadoCreateManyCursoInputEnvelope
    set?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    disconnect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    delete?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    connect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    update?: CertificadoUpdateWithWhereUniqueWithoutCursoInput | CertificadoUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: CertificadoUpdateManyWithWhereWithoutCursoInput | CertificadoUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: CertificadoScalarWhereInput | CertificadoScalarWhereInput[]
  }

  export type TrilhaCursoUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<TrilhaCursoCreateWithoutCursoInput, TrilhaCursoUncheckedCreateWithoutCursoInput> | TrilhaCursoCreateWithoutCursoInput[] | TrilhaCursoUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: TrilhaCursoCreateOrConnectWithoutCursoInput | TrilhaCursoCreateOrConnectWithoutCursoInput[]
    upsert?: TrilhaCursoUpsertWithWhereUniqueWithoutCursoInput | TrilhaCursoUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: TrilhaCursoCreateManyCursoInputEnvelope
    set?: TrilhaCursoWhereUniqueInput | TrilhaCursoWhereUniqueInput[]
    disconnect?: TrilhaCursoWhereUniqueInput | TrilhaCursoWhereUniqueInput[]
    delete?: TrilhaCursoWhereUniqueInput | TrilhaCursoWhereUniqueInput[]
    connect?: TrilhaCursoWhereUniqueInput | TrilhaCursoWhereUniqueInput[]
    update?: TrilhaCursoUpdateWithWhereUniqueWithoutCursoInput | TrilhaCursoUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: TrilhaCursoUpdateManyWithWhereWithoutCursoInput | TrilhaCursoUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: TrilhaCursoScalarWhereInput | TrilhaCursoScalarWhereInput[]
  }

  export type CursoCreateNestedOneWithoutModulosInput = {
    create?: XOR<CursoCreateWithoutModulosInput, CursoUncheckedCreateWithoutModulosInput>
    connectOrCreate?: CursoCreateOrConnectWithoutModulosInput
    connect?: CursoWhereUniqueInput
  }

  export type AulaCreateNestedManyWithoutModuloInput = {
    create?: XOR<AulaCreateWithoutModuloInput, AulaUncheckedCreateWithoutModuloInput> | AulaCreateWithoutModuloInput[] | AulaUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: AulaCreateOrConnectWithoutModuloInput | AulaCreateOrConnectWithoutModuloInput[]
    createMany?: AulaCreateManyModuloInputEnvelope
    connect?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
  }

  export type AulaUncheckedCreateNestedManyWithoutModuloInput = {
    create?: XOR<AulaCreateWithoutModuloInput, AulaUncheckedCreateWithoutModuloInput> | AulaCreateWithoutModuloInput[] | AulaUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: AulaCreateOrConnectWithoutModuloInput | AulaCreateOrConnectWithoutModuloInput[]
    createMany?: AulaCreateManyModuloInputEnvelope
    connect?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
  }

  export type CursoUpdateOneRequiredWithoutModulosNestedInput = {
    create?: XOR<CursoCreateWithoutModulosInput, CursoUncheckedCreateWithoutModulosInput>
    connectOrCreate?: CursoCreateOrConnectWithoutModulosInput
    upsert?: CursoUpsertWithoutModulosInput
    connect?: CursoWhereUniqueInput
    update?: XOR<XOR<CursoUpdateToOneWithWhereWithoutModulosInput, CursoUpdateWithoutModulosInput>, CursoUncheckedUpdateWithoutModulosInput>
  }

  export type AulaUpdateManyWithoutModuloNestedInput = {
    create?: XOR<AulaCreateWithoutModuloInput, AulaUncheckedCreateWithoutModuloInput> | AulaCreateWithoutModuloInput[] | AulaUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: AulaCreateOrConnectWithoutModuloInput | AulaCreateOrConnectWithoutModuloInput[]
    upsert?: AulaUpsertWithWhereUniqueWithoutModuloInput | AulaUpsertWithWhereUniqueWithoutModuloInput[]
    createMany?: AulaCreateManyModuloInputEnvelope
    set?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
    disconnect?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
    delete?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
    connect?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
    update?: AulaUpdateWithWhereUniqueWithoutModuloInput | AulaUpdateWithWhereUniqueWithoutModuloInput[]
    updateMany?: AulaUpdateManyWithWhereWithoutModuloInput | AulaUpdateManyWithWhereWithoutModuloInput[]
    deleteMany?: AulaScalarWhereInput | AulaScalarWhereInput[]
  }

  export type AulaUncheckedUpdateManyWithoutModuloNestedInput = {
    create?: XOR<AulaCreateWithoutModuloInput, AulaUncheckedCreateWithoutModuloInput> | AulaCreateWithoutModuloInput[] | AulaUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: AulaCreateOrConnectWithoutModuloInput | AulaCreateOrConnectWithoutModuloInput[]
    upsert?: AulaUpsertWithWhereUniqueWithoutModuloInput | AulaUpsertWithWhereUniqueWithoutModuloInput[]
    createMany?: AulaCreateManyModuloInputEnvelope
    set?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
    disconnect?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
    delete?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
    connect?: AulaWhereUniqueInput | AulaWhereUniqueInput[]
    update?: AulaUpdateWithWhereUniqueWithoutModuloInput | AulaUpdateWithWhereUniqueWithoutModuloInput[]
    updateMany?: AulaUpdateManyWithWhereWithoutModuloInput | AulaUpdateManyWithWhereWithoutModuloInput[]
    deleteMany?: AulaScalarWhereInput | AulaScalarWhereInput[]
  }

  export type ModuloCreateNestedOneWithoutAulasInput = {
    create?: XOR<ModuloCreateWithoutAulasInput, ModuloUncheckedCreateWithoutAulasInput>
    connectOrCreate?: ModuloCreateOrConnectWithoutAulasInput
    connect?: ModuloWhereUniqueInput
  }

  export type ProgressoAulaCreateNestedManyWithoutAulaInput = {
    create?: XOR<ProgressoAulaCreateWithoutAulaInput, ProgressoAulaUncheckedCreateWithoutAulaInput> | ProgressoAulaCreateWithoutAulaInput[] | ProgressoAulaUncheckedCreateWithoutAulaInput[]
    connectOrCreate?: ProgressoAulaCreateOrConnectWithoutAulaInput | ProgressoAulaCreateOrConnectWithoutAulaInput[]
    createMany?: ProgressoAulaCreateManyAulaInputEnvelope
    connect?: ProgressoAulaWhereUniqueInput | ProgressoAulaWhereUniqueInput[]
  }

  export type ProgressoAulaUncheckedCreateNestedManyWithoutAulaInput = {
    create?: XOR<ProgressoAulaCreateWithoutAulaInput, ProgressoAulaUncheckedCreateWithoutAulaInput> | ProgressoAulaCreateWithoutAulaInput[] | ProgressoAulaUncheckedCreateWithoutAulaInput[]
    connectOrCreate?: ProgressoAulaCreateOrConnectWithoutAulaInput | ProgressoAulaCreateOrConnectWithoutAulaInput[]
    createMany?: ProgressoAulaCreateManyAulaInputEnvelope
    connect?: ProgressoAulaWhereUniqueInput | ProgressoAulaWhereUniqueInput[]
  }

  export type ModuloUpdateOneRequiredWithoutAulasNestedInput = {
    create?: XOR<ModuloCreateWithoutAulasInput, ModuloUncheckedCreateWithoutAulasInput>
    connectOrCreate?: ModuloCreateOrConnectWithoutAulasInput
    upsert?: ModuloUpsertWithoutAulasInput
    connect?: ModuloWhereUniqueInput
    update?: XOR<XOR<ModuloUpdateToOneWithWhereWithoutAulasInput, ModuloUpdateWithoutAulasInput>, ModuloUncheckedUpdateWithoutAulasInput>
  }

  export type ProgressoAulaUpdateManyWithoutAulaNestedInput = {
    create?: XOR<ProgressoAulaCreateWithoutAulaInput, ProgressoAulaUncheckedCreateWithoutAulaInput> | ProgressoAulaCreateWithoutAulaInput[] | ProgressoAulaUncheckedCreateWithoutAulaInput[]
    connectOrCreate?: ProgressoAulaCreateOrConnectWithoutAulaInput | ProgressoAulaCreateOrConnectWithoutAulaInput[]
    upsert?: ProgressoAulaUpsertWithWhereUniqueWithoutAulaInput | ProgressoAulaUpsertWithWhereUniqueWithoutAulaInput[]
    createMany?: ProgressoAulaCreateManyAulaInputEnvelope
    set?: ProgressoAulaWhereUniqueInput | ProgressoAulaWhereUniqueInput[]
    disconnect?: ProgressoAulaWhereUniqueInput | ProgressoAulaWhereUniqueInput[]
    delete?: ProgressoAulaWhereUniqueInput | ProgressoAulaWhereUniqueInput[]
    connect?: ProgressoAulaWhereUniqueInput | ProgressoAulaWhereUniqueInput[]
    update?: ProgressoAulaUpdateWithWhereUniqueWithoutAulaInput | ProgressoAulaUpdateWithWhereUniqueWithoutAulaInput[]
    updateMany?: ProgressoAulaUpdateManyWithWhereWithoutAulaInput | ProgressoAulaUpdateManyWithWhereWithoutAulaInput[]
    deleteMany?: ProgressoAulaScalarWhereInput | ProgressoAulaScalarWhereInput[]
  }

  export type ProgressoAulaUncheckedUpdateManyWithoutAulaNestedInput = {
    create?: XOR<ProgressoAulaCreateWithoutAulaInput, ProgressoAulaUncheckedCreateWithoutAulaInput> | ProgressoAulaCreateWithoutAulaInput[] | ProgressoAulaUncheckedCreateWithoutAulaInput[]
    connectOrCreate?: ProgressoAulaCreateOrConnectWithoutAulaInput | ProgressoAulaCreateOrConnectWithoutAulaInput[]
    upsert?: ProgressoAulaUpsertWithWhereUniqueWithoutAulaInput | ProgressoAulaUpsertWithWhereUniqueWithoutAulaInput[]
    createMany?: ProgressoAulaCreateManyAulaInputEnvelope
    set?: ProgressoAulaWhereUniqueInput | ProgressoAulaWhereUniqueInput[]
    disconnect?: ProgressoAulaWhereUniqueInput | ProgressoAulaWhereUniqueInput[]
    delete?: ProgressoAulaWhereUniqueInput | ProgressoAulaWhereUniqueInput[]
    connect?: ProgressoAulaWhereUniqueInput | ProgressoAulaWhereUniqueInput[]
    update?: ProgressoAulaUpdateWithWhereUniqueWithoutAulaInput | ProgressoAulaUpdateWithWhereUniqueWithoutAulaInput[]
    updateMany?: ProgressoAulaUpdateManyWithWhereWithoutAulaInput | ProgressoAulaUpdateManyWithWhereWithoutAulaInput[]
    deleteMany?: ProgressoAulaScalarWhereInput | ProgressoAulaScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutMatriculasInput = {
    create?: XOR<UsuarioCreateWithoutMatriculasInput, UsuarioUncheckedCreateWithoutMatriculasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMatriculasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type CursoCreateNestedOneWithoutMatriculasInput = {
    create?: XOR<CursoCreateWithoutMatriculasInput, CursoUncheckedCreateWithoutMatriculasInput>
    connectOrCreate?: CursoCreateOrConnectWithoutMatriculasInput
    connect?: CursoWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UsuarioUpdateOneRequiredWithoutMatriculasNestedInput = {
    create?: XOR<UsuarioCreateWithoutMatriculasInput, UsuarioUncheckedCreateWithoutMatriculasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMatriculasInput
    upsert?: UsuarioUpsertWithoutMatriculasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutMatriculasInput, UsuarioUpdateWithoutMatriculasInput>, UsuarioUncheckedUpdateWithoutMatriculasInput>
  }

  export type CursoUpdateOneRequiredWithoutMatriculasNestedInput = {
    create?: XOR<CursoCreateWithoutMatriculasInput, CursoUncheckedCreateWithoutMatriculasInput>
    connectOrCreate?: CursoCreateOrConnectWithoutMatriculasInput
    upsert?: CursoUpsertWithoutMatriculasInput
    connect?: CursoWhereUniqueInput
    update?: XOR<XOR<CursoUpdateToOneWithWhereWithoutMatriculasInput, CursoUpdateWithoutMatriculasInput>, CursoUncheckedUpdateWithoutMatriculasInput>
  }

  export type UsuarioCreateNestedOneWithoutProgressosInput = {
    create?: XOR<UsuarioCreateWithoutProgressosInput, UsuarioUncheckedCreateWithoutProgressosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProgressosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type AulaCreateNestedOneWithoutProgressosInput = {
    create?: XOR<AulaCreateWithoutProgressosInput, AulaUncheckedCreateWithoutProgressosInput>
    connectOrCreate?: AulaCreateOrConnectWithoutProgressosInput
    connect?: AulaWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutProgressosNestedInput = {
    create?: XOR<UsuarioCreateWithoutProgressosInput, UsuarioUncheckedCreateWithoutProgressosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProgressosInput
    upsert?: UsuarioUpsertWithoutProgressosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutProgressosInput, UsuarioUpdateWithoutProgressosInput>, UsuarioUncheckedUpdateWithoutProgressosInput>
  }

  export type AulaUpdateOneRequiredWithoutProgressosNestedInput = {
    create?: XOR<AulaCreateWithoutProgressosInput, AulaUncheckedCreateWithoutProgressosInput>
    connectOrCreate?: AulaCreateOrConnectWithoutProgressosInput
    upsert?: AulaUpsertWithoutProgressosInput
    connect?: AulaWhereUniqueInput
    update?: XOR<XOR<AulaUpdateToOneWithWhereWithoutProgressosInput, AulaUpdateWithoutProgressosInput>, AulaUncheckedUpdateWithoutProgressosInput>
  }

  export type UsuarioCreateNestedOneWithoutAvaliacoesInput = {
    create?: XOR<UsuarioCreateWithoutAvaliacoesInput, UsuarioUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAvaliacoesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type CursoCreateNestedOneWithoutAvaliacoesInput = {
    create?: XOR<CursoCreateWithoutAvaliacoesInput, CursoUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: CursoCreateOrConnectWithoutAvaliacoesInput
    connect?: CursoWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UsuarioUpdateOneRequiredWithoutAvaliacoesNestedInput = {
    create?: XOR<UsuarioCreateWithoutAvaliacoesInput, UsuarioUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAvaliacoesInput
    upsert?: UsuarioUpsertWithoutAvaliacoesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAvaliacoesInput, UsuarioUpdateWithoutAvaliacoesInput>, UsuarioUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type CursoUpdateOneRequiredWithoutAvaliacoesNestedInput = {
    create?: XOR<CursoCreateWithoutAvaliacoesInput, CursoUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: CursoCreateOrConnectWithoutAvaliacoesInput
    upsert?: CursoUpsertWithoutAvaliacoesInput
    connect?: CursoWhereUniqueInput
    update?: XOR<XOR<CursoUpdateToOneWithWhereWithoutAvaliacoesInput, CursoUpdateWithoutAvaliacoesInput>, CursoUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type CategoriaCreateNestedOneWithoutTrilhasInput = {
    create?: XOR<CategoriaCreateWithoutTrilhasInput, CategoriaUncheckedCreateWithoutTrilhasInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutTrilhasInput
    connect?: CategoriaWhereUniqueInput
  }

  export type TrilhaCursoCreateNestedManyWithoutTrilhaInput = {
    create?: XOR<TrilhaCursoCreateWithoutTrilhaInput, TrilhaCursoUncheckedCreateWithoutTrilhaInput> | TrilhaCursoCreateWithoutTrilhaInput[] | TrilhaCursoUncheckedCreateWithoutTrilhaInput[]
    connectOrCreate?: TrilhaCursoCreateOrConnectWithoutTrilhaInput | TrilhaCursoCreateOrConnectWithoutTrilhaInput[]
    createMany?: TrilhaCursoCreateManyTrilhaInputEnvelope
    connect?: TrilhaCursoWhereUniqueInput | TrilhaCursoWhereUniqueInput[]
  }

  export type CertificadoCreateNestedManyWithoutTrilhaInput = {
    create?: XOR<CertificadoCreateWithoutTrilhaInput, CertificadoUncheckedCreateWithoutTrilhaInput> | CertificadoCreateWithoutTrilhaInput[] | CertificadoUncheckedCreateWithoutTrilhaInput[]
    connectOrCreate?: CertificadoCreateOrConnectWithoutTrilhaInput | CertificadoCreateOrConnectWithoutTrilhaInput[]
    createMany?: CertificadoCreateManyTrilhaInputEnvelope
    connect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
  }

  export type TrilhaCursoUncheckedCreateNestedManyWithoutTrilhaInput = {
    create?: XOR<TrilhaCursoCreateWithoutTrilhaInput, TrilhaCursoUncheckedCreateWithoutTrilhaInput> | TrilhaCursoCreateWithoutTrilhaInput[] | TrilhaCursoUncheckedCreateWithoutTrilhaInput[]
    connectOrCreate?: TrilhaCursoCreateOrConnectWithoutTrilhaInput | TrilhaCursoCreateOrConnectWithoutTrilhaInput[]
    createMany?: TrilhaCursoCreateManyTrilhaInputEnvelope
    connect?: TrilhaCursoWhereUniqueInput | TrilhaCursoWhereUniqueInput[]
  }

  export type CertificadoUncheckedCreateNestedManyWithoutTrilhaInput = {
    create?: XOR<CertificadoCreateWithoutTrilhaInput, CertificadoUncheckedCreateWithoutTrilhaInput> | CertificadoCreateWithoutTrilhaInput[] | CertificadoUncheckedCreateWithoutTrilhaInput[]
    connectOrCreate?: CertificadoCreateOrConnectWithoutTrilhaInput | CertificadoCreateOrConnectWithoutTrilhaInput[]
    createMany?: CertificadoCreateManyTrilhaInputEnvelope
    connect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
  }

  export type CategoriaUpdateOneRequiredWithoutTrilhasNestedInput = {
    create?: XOR<CategoriaCreateWithoutTrilhasInput, CategoriaUncheckedCreateWithoutTrilhasInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutTrilhasInput
    upsert?: CategoriaUpsertWithoutTrilhasInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutTrilhasInput, CategoriaUpdateWithoutTrilhasInput>, CategoriaUncheckedUpdateWithoutTrilhasInput>
  }

  export type TrilhaCursoUpdateManyWithoutTrilhaNestedInput = {
    create?: XOR<TrilhaCursoCreateWithoutTrilhaInput, TrilhaCursoUncheckedCreateWithoutTrilhaInput> | TrilhaCursoCreateWithoutTrilhaInput[] | TrilhaCursoUncheckedCreateWithoutTrilhaInput[]
    connectOrCreate?: TrilhaCursoCreateOrConnectWithoutTrilhaInput | TrilhaCursoCreateOrConnectWithoutTrilhaInput[]
    upsert?: TrilhaCursoUpsertWithWhereUniqueWithoutTrilhaInput | TrilhaCursoUpsertWithWhereUniqueWithoutTrilhaInput[]
    createMany?: TrilhaCursoCreateManyTrilhaInputEnvelope
    set?: TrilhaCursoWhereUniqueInput | TrilhaCursoWhereUniqueInput[]
    disconnect?: TrilhaCursoWhereUniqueInput | TrilhaCursoWhereUniqueInput[]
    delete?: TrilhaCursoWhereUniqueInput | TrilhaCursoWhereUniqueInput[]
    connect?: TrilhaCursoWhereUniqueInput | TrilhaCursoWhereUniqueInput[]
    update?: TrilhaCursoUpdateWithWhereUniqueWithoutTrilhaInput | TrilhaCursoUpdateWithWhereUniqueWithoutTrilhaInput[]
    updateMany?: TrilhaCursoUpdateManyWithWhereWithoutTrilhaInput | TrilhaCursoUpdateManyWithWhereWithoutTrilhaInput[]
    deleteMany?: TrilhaCursoScalarWhereInput | TrilhaCursoScalarWhereInput[]
  }

  export type CertificadoUpdateManyWithoutTrilhaNestedInput = {
    create?: XOR<CertificadoCreateWithoutTrilhaInput, CertificadoUncheckedCreateWithoutTrilhaInput> | CertificadoCreateWithoutTrilhaInput[] | CertificadoUncheckedCreateWithoutTrilhaInput[]
    connectOrCreate?: CertificadoCreateOrConnectWithoutTrilhaInput | CertificadoCreateOrConnectWithoutTrilhaInput[]
    upsert?: CertificadoUpsertWithWhereUniqueWithoutTrilhaInput | CertificadoUpsertWithWhereUniqueWithoutTrilhaInput[]
    createMany?: CertificadoCreateManyTrilhaInputEnvelope
    set?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    disconnect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    delete?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    connect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    update?: CertificadoUpdateWithWhereUniqueWithoutTrilhaInput | CertificadoUpdateWithWhereUniqueWithoutTrilhaInput[]
    updateMany?: CertificadoUpdateManyWithWhereWithoutTrilhaInput | CertificadoUpdateManyWithWhereWithoutTrilhaInput[]
    deleteMany?: CertificadoScalarWhereInput | CertificadoScalarWhereInput[]
  }

  export type TrilhaCursoUncheckedUpdateManyWithoutTrilhaNestedInput = {
    create?: XOR<TrilhaCursoCreateWithoutTrilhaInput, TrilhaCursoUncheckedCreateWithoutTrilhaInput> | TrilhaCursoCreateWithoutTrilhaInput[] | TrilhaCursoUncheckedCreateWithoutTrilhaInput[]
    connectOrCreate?: TrilhaCursoCreateOrConnectWithoutTrilhaInput | TrilhaCursoCreateOrConnectWithoutTrilhaInput[]
    upsert?: TrilhaCursoUpsertWithWhereUniqueWithoutTrilhaInput | TrilhaCursoUpsertWithWhereUniqueWithoutTrilhaInput[]
    createMany?: TrilhaCursoCreateManyTrilhaInputEnvelope
    set?: TrilhaCursoWhereUniqueInput | TrilhaCursoWhereUniqueInput[]
    disconnect?: TrilhaCursoWhereUniqueInput | TrilhaCursoWhereUniqueInput[]
    delete?: TrilhaCursoWhereUniqueInput | TrilhaCursoWhereUniqueInput[]
    connect?: TrilhaCursoWhereUniqueInput | TrilhaCursoWhereUniqueInput[]
    update?: TrilhaCursoUpdateWithWhereUniqueWithoutTrilhaInput | TrilhaCursoUpdateWithWhereUniqueWithoutTrilhaInput[]
    updateMany?: TrilhaCursoUpdateManyWithWhereWithoutTrilhaInput | TrilhaCursoUpdateManyWithWhereWithoutTrilhaInput[]
    deleteMany?: TrilhaCursoScalarWhereInput | TrilhaCursoScalarWhereInput[]
  }

  export type CertificadoUncheckedUpdateManyWithoutTrilhaNestedInput = {
    create?: XOR<CertificadoCreateWithoutTrilhaInput, CertificadoUncheckedCreateWithoutTrilhaInput> | CertificadoCreateWithoutTrilhaInput[] | CertificadoUncheckedCreateWithoutTrilhaInput[]
    connectOrCreate?: CertificadoCreateOrConnectWithoutTrilhaInput | CertificadoCreateOrConnectWithoutTrilhaInput[]
    upsert?: CertificadoUpsertWithWhereUniqueWithoutTrilhaInput | CertificadoUpsertWithWhereUniqueWithoutTrilhaInput[]
    createMany?: CertificadoCreateManyTrilhaInputEnvelope
    set?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    disconnect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    delete?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    connect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    update?: CertificadoUpdateWithWhereUniqueWithoutTrilhaInput | CertificadoUpdateWithWhereUniqueWithoutTrilhaInput[]
    updateMany?: CertificadoUpdateManyWithWhereWithoutTrilhaInput | CertificadoUpdateManyWithWhereWithoutTrilhaInput[]
    deleteMany?: CertificadoScalarWhereInput | CertificadoScalarWhereInput[]
  }

  export type TrilhaCreateNestedOneWithoutTrilhasCursosInput = {
    create?: XOR<TrilhaCreateWithoutTrilhasCursosInput, TrilhaUncheckedCreateWithoutTrilhasCursosInput>
    connectOrCreate?: TrilhaCreateOrConnectWithoutTrilhasCursosInput
    connect?: TrilhaWhereUniqueInput
  }

  export type CursoCreateNestedOneWithoutTrilhasCursosInput = {
    create?: XOR<CursoCreateWithoutTrilhasCursosInput, CursoUncheckedCreateWithoutTrilhasCursosInput>
    connectOrCreate?: CursoCreateOrConnectWithoutTrilhasCursosInput
    connect?: CursoWhereUniqueInput
  }

  export type TrilhaUpdateOneRequiredWithoutTrilhasCursosNestedInput = {
    create?: XOR<TrilhaCreateWithoutTrilhasCursosInput, TrilhaUncheckedCreateWithoutTrilhasCursosInput>
    connectOrCreate?: TrilhaCreateOrConnectWithoutTrilhasCursosInput
    upsert?: TrilhaUpsertWithoutTrilhasCursosInput
    connect?: TrilhaWhereUniqueInput
    update?: XOR<XOR<TrilhaUpdateToOneWithWhereWithoutTrilhasCursosInput, TrilhaUpdateWithoutTrilhasCursosInput>, TrilhaUncheckedUpdateWithoutTrilhasCursosInput>
  }

  export type CursoUpdateOneRequiredWithoutTrilhasCursosNestedInput = {
    create?: XOR<CursoCreateWithoutTrilhasCursosInput, CursoUncheckedCreateWithoutTrilhasCursosInput>
    connectOrCreate?: CursoCreateOrConnectWithoutTrilhasCursosInput
    upsert?: CursoUpsertWithoutTrilhasCursosInput
    connect?: CursoWhereUniqueInput
    update?: XOR<XOR<CursoUpdateToOneWithWhereWithoutTrilhasCursosInput, CursoUpdateWithoutTrilhasCursosInput>, CursoUncheckedUpdateWithoutTrilhasCursosInput>
  }

  export type UsuarioCreateNestedOneWithoutCertificadosInput = {
    create?: XOR<UsuarioCreateWithoutCertificadosInput, UsuarioUncheckedCreateWithoutCertificadosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCertificadosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type CursoCreateNestedOneWithoutCertificadosInput = {
    create?: XOR<CursoCreateWithoutCertificadosInput, CursoUncheckedCreateWithoutCertificadosInput>
    connectOrCreate?: CursoCreateOrConnectWithoutCertificadosInput
    connect?: CursoWhereUniqueInput
  }

  export type TrilhaCreateNestedOneWithoutCertificadosInput = {
    create?: XOR<TrilhaCreateWithoutCertificadosInput, TrilhaUncheckedCreateWithoutCertificadosInput>
    connectOrCreate?: TrilhaCreateOrConnectWithoutCertificadosInput
    connect?: TrilhaWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutCertificadosNestedInput = {
    create?: XOR<UsuarioCreateWithoutCertificadosInput, UsuarioUncheckedCreateWithoutCertificadosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCertificadosInput
    upsert?: UsuarioUpsertWithoutCertificadosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCertificadosInput, UsuarioUpdateWithoutCertificadosInput>, UsuarioUncheckedUpdateWithoutCertificadosInput>
  }

  export type CursoUpdateOneRequiredWithoutCertificadosNestedInput = {
    create?: XOR<CursoCreateWithoutCertificadosInput, CursoUncheckedCreateWithoutCertificadosInput>
    connectOrCreate?: CursoCreateOrConnectWithoutCertificadosInput
    upsert?: CursoUpsertWithoutCertificadosInput
    connect?: CursoWhereUniqueInput
    update?: XOR<XOR<CursoUpdateToOneWithWhereWithoutCertificadosInput, CursoUpdateWithoutCertificadosInput>, CursoUncheckedUpdateWithoutCertificadosInput>
  }

  export type TrilhaUpdateOneWithoutCertificadosNestedInput = {
    create?: XOR<TrilhaCreateWithoutCertificadosInput, TrilhaUncheckedCreateWithoutCertificadosInput>
    connectOrCreate?: TrilhaCreateOrConnectWithoutCertificadosInput
    upsert?: TrilhaUpsertWithoutCertificadosInput
    disconnect?: TrilhaWhereInput | boolean
    delete?: TrilhaWhereInput | boolean
    connect?: TrilhaWhereUniqueInput
    update?: XOR<XOR<TrilhaUpdateToOneWithWhereWithoutCertificadosInput, TrilhaUpdateWithoutCertificadosInput>, TrilhaUncheckedUpdateWithoutCertificadosInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AssinaturaCreateNestedManyWithoutPlanoInput = {
    create?: XOR<AssinaturaCreateWithoutPlanoInput, AssinaturaUncheckedCreateWithoutPlanoInput> | AssinaturaCreateWithoutPlanoInput[] | AssinaturaUncheckedCreateWithoutPlanoInput[]
    connectOrCreate?: AssinaturaCreateOrConnectWithoutPlanoInput | AssinaturaCreateOrConnectWithoutPlanoInput[]
    createMany?: AssinaturaCreateManyPlanoInputEnvelope
    connect?: AssinaturaWhereUniqueInput | AssinaturaWhereUniqueInput[]
  }

  export type AssinaturaUncheckedCreateNestedManyWithoutPlanoInput = {
    create?: XOR<AssinaturaCreateWithoutPlanoInput, AssinaturaUncheckedCreateWithoutPlanoInput> | AssinaturaCreateWithoutPlanoInput[] | AssinaturaUncheckedCreateWithoutPlanoInput[]
    connectOrCreate?: AssinaturaCreateOrConnectWithoutPlanoInput | AssinaturaCreateOrConnectWithoutPlanoInput[]
    createMany?: AssinaturaCreateManyPlanoInputEnvelope
    connect?: AssinaturaWhereUniqueInput | AssinaturaWhereUniqueInput[]
  }

  export type AssinaturaUpdateManyWithoutPlanoNestedInput = {
    create?: XOR<AssinaturaCreateWithoutPlanoInput, AssinaturaUncheckedCreateWithoutPlanoInput> | AssinaturaCreateWithoutPlanoInput[] | AssinaturaUncheckedCreateWithoutPlanoInput[]
    connectOrCreate?: AssinaturaCreateOrConnectWithoutPlanoInput | AssinaturaCreateOrConnectWithoutPlanoInput[]
    upsert?: AssinaturaUpsertWithWhereUniqueWithoutPlanoInput | AssinaturaUpsertWithWhereUniqueWithoutPlanoInput[]
    createMany?: AssinaturaCreateManyPlanoInputEnvelope
    set?: AssinaturaWhereUniqueInput | AssinaturaWhereUniqueInput[]
    disconnect?: AssinaturaWhereUniqueInput | AssinaturaWhereUniqueInput[]
    delete?: AssinaturaWhereUniqueInput | AssinaturaWhereUniqueInput[]
    connect?: AssinaturaWhereUniqueInput | AssinaturaWhereUniqueInput[]
    update?: AssinaturaUpdateWithWhereUniqueWithoutPlanoInput | AssinaturaUpdateWithWhereUniqueWithoutPlanoInput[]
    updateMany?: AssinaturaUpdateManyWithWhereWithoutPlanoInput | AssinaturaUpdateManyWithWhereWithoutPlanoInput[]
    deleteMany?: AssinaturaScalarWhereInput | AssinaturaScalarWhereInput[]
  }

  export type AssinaturaUncheckedUpdateManyWithoutPlanoNestedInput = {
    create?: XOR<AssinaturaCreateWithoutPlanoInput, AssinaturaUncheckedCreateWithoutPlanoInput> | AssinaturaCreateWithoutPlanoInput[] | AssinaturaUncheckedCreateWithoutPlanoInput[]
    connectOrCreate?: AssinaturaCreateOrConnectWithoutPlanoInput | AssinaturaCreateOrConnectWithoutPlanoInput[]
    upsert?: AssinaturaUpsertWithWhereUniqueWithoutPlanoInput | AssinaturaUpsertWithWhereUniqueWithoutPlanoInput[]
    createMany?: AssinaturaCreateManyPlanoInputEnvelope
    set?: AssinaturaWhereUniqueInput | AssinaturaWhereUniqueInput[]
    disconnect?: AssinaturaWhereUniqueInput | AssinaturaWhereUniqueInput[]
    delete?: AssinaturaWhereUniqueInput | AssinaturaWhereUniqueInput[]
    connect?: AssinaturaWhereUniqueInput | AssinaturaWhereUniqueInput[]
    update?: AssinaturaUpdateWithWhereUniqueWithoutPlanoInput | AssinaturaUpdateWithWhereUniqueWithoutPlanoInput[]
    updateMany?: AssinaturaUpdateManyWithWhereWithoutPlanoInput | AssinaturaUpdateManyWithWhereWithoutPlanoInput[]
    deleteMany?: AssinaturaScalarWhereInput | AssinaturaScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutAssinaturasInput = {
    create?: XOR<UsuarioCreateWithoutAssinaturasInput, UsuarioUncheckedCreateWithoutAssinaturasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAssinaturasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type PlanoCreateNestedOneWithoutAssinaturasInput = {
    create?: XOR<PlanoCreateWithoutAssinaturasInput, PlanoUncheckedCreateWithoutAssinaturasInput>
    connectOrCreate?: PlanoCreateOrConnectWithoutAssinaturasInput
    connect?: PlanoWhereUniqueInput
  }

  export type PagamentoCreateNestedManyWithoutAssinaturaInput = {
    create?: XOR<PagamentoCreateWithoutAssinaturaInput, PagamentoUncheckedCreateWithoutAssinaturaInput> | PagamentoCreateWithoutAssinaturaInput[] | PagamentoUncheckedCreateWithoutAssinaturaInput[]
    connectOrCreate?: PagamentoCreateOrConnectWithoutAssinaturaInput | PagamentoCreateOrConnectWithoutAssinaturaInput[]
    createMany?: PagamentoCreateManyAssinaturaInputEnvelope
    connect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
  }

  export type PagamentoUncheckedCreateNestedManyWithoutAssinaturaInput = {
    create?: XOR<PagamentoCreateWithoutAssinaturaInput, PagamentoUncheckedCreateWithoutAssinaturaInput> | PagamentoCreateWithoutAssinaturaInput[] | PagamentoUncheckedCreateWithoutAssinaturaInput[]
    connectOrCreate?: PagamentoCreateOrConnectWithoutAssinaturaInput | PagamentoCreateOrConnectWithoutAssinaturaInput[]
    createMany?: PagamentoCreateManyAssinaturaInputEnvelope
    connect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutAssinaturasNestedInput = {
    create?: XOR<UsuarioCreateWithoutAssinaturasInput, UsuarioUncheckedCreateWithoutAssinaturasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAssinaturasInput
    upsert?: UsuarioUpsertWithoutAssinaturasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAssinaturasInput, UsuarioUpdateWithoutAssinaturasInput>, UsuarioUncheckedUpdateWithoutAssinaturasInput>
  }

  export type PlanoUpdateOneRequiredWithoutAssinaturasNestedInput = {
    create?: XOR<PlanoCreateWithoutAssinaturasInput, PlanoUncheckedCreateWithoutAssinaturasInput>
    connectOrCreate?: PlanoCreateOrConnectWithoutAssinaturasInput
    upsert?: PlanoUpsertWithoutAssinaturasInput
    connect?: PlanoWhereUniqueInput
    update?: XOR<XOR<PlanoUpdateToOneWithWhereWithoutAssinaturasInput, PlanoUpdateWithoutAssinaturasInput>, PlanoUncheckedUpdateWithoutAssinaturasInput>
  }

  export type PagamentoUpdateManyWithoutAssinaturaNestedInput = {
    create?: XOR<PagamentoCreateWithoutAssinaturaInput, PagamentoUncheckedCreateWithoutAssinaturaInput> | PagamentoCreateWithoutAssinaturaInput[] | PagamentoUncheckedCreateWithoutAssinaturaInput[]
    connectOrCreate?: PagamentoCreateOrConnectWithoutAssinaturaInput | PagamentoCreateOrConnectWithoutAssinaturaInput[]
    upsert?: PagamentoUpsertWithWhereUniqueWithoutAssinaturaInput | PagamentoUpsertWithWhereUniqueWithoutAssinaturaInput[]
    createMany?: PagamentoCreateManyAssinaturaInputEnvelope
    set?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    disconnect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    delete?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    connect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    update?: PagamentoUpdateWithWhereUniqueWithoutAssinaturaInput | PagamentoUpdateWithWhereUniqueWithoutAssinaturaInput[]
    updateMany?: PagamentoUpdateManyWithWhereWithoutAssinaturaInput | PagamentoUpdateManyWithWhereWithoutAssinaturaInput[]
    deleteMany?: PagamentoScalarWhereInput | PagamentoScalarWhereInput[]
  }

  export type PagamentoUncheckedUpdateManyWithoutAssinaturaNestedInput = {
    create?: XOR<PagamentoCreateWithoutAssinaturaInput, PagamentoUncheckedCreateWithoutAssinaturaInput> | PagamentoCreateWithoutAssinaturaInput[] | PagamentoUncheckedCreateWithoutAssinaturaInput[]
    connectOrCreate?: PagamentoCreateOrConnectWithoutAssinaturaInput | PagamentoCreateOrConnectWithoutAssinaturaInput[]
    upsert?: PagamentoUpsertWithWhereUniqueWithoutAssinaturaInput | PagamentoUpsertWithWhereUniqueWithoutAssinaturaInput[]
    createMany?: PagamentoCreateManyAssinaturaInputEnvelope
    set?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    disconnect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    delete?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    connect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    update?: PagamentoUpdateWithWhereUniqueWithoutAssinaturaInput | PagamentoUpdateWithWhereUniqueWithoutAssinaturaInput[]
    updateMany?: PagamentoUpdateManyWithWhereWithoutAssinaturaInput | PagamentoUpdateManyWithWhereWithoutAssinaturaInput[]
    deleteMany?: PagamentoScalarWhereInput | PagamentoScalarWhereInput[]
  }

  export type AssinaturaCreateNestedOneWithoutPagamentosInput = {
    create?: XOR<AssinaturaCreateWithoutPagamentosInput, AssinaturaUncheckedCreateWithoutPagamentosInput>
    connectOrCreate?: AssinaturaCreateOrConnectWithoutPagamentosInput
    connect?: AssinaturaWhereUniqueInput
  }

  export type AssinaturaUpdateOneRequiredWithoutPagamentosNestedInput = {
    create?: XOR<AssinaturaCreateWithoutPagamentosInput, AssinaturaUncheckedCreateWithoutPagamentosInput>
    connectOrCreate?: AssinaturaCreateOrConnectWithoutPagamentosInput
    upsert?: AssinaturaUpsertWithoutPagamentosInput
    connect?: AssinaturaWhereUniqueInput
    update?: XOR<XOR<AssinaturaUpdateToOneWithWhereWithoutPagamentosInput, AssinaturaUpdateWithoutPagamentosInput>, AssinaturaUncheckedUpdateWithoutPagamentosInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CursoCreateWithoutInstrutorInput = {
    titulo: string
    descricao: string
    nivel: string
    dataPublicacao?: Date | string
    totalAulas?: number
    totalHoras?: number
    categoria: CategoriaCreateNestedOneWithoutCursosInput
    modulos?: ModuloCreateNestedManyWithoutCursoInput
    matriculas?: MatriculaCreateNestedManyWithoutCursoInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutCursoInput
    certificados?: CertificadoCreateNestedManyWithoutCursoInput
    trilhasCursos?: TrilhaCursoCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateWithoutInstrutorInput = {
    id?: number
    titulo: string
    descricao: string
    categoriaId: number
    nivel: string
    dataPublicacao?: Date | string
    totalAulas?: number
    totalHoras?: number
    modulos?: ModuloUncheckedCreateNestedManyWithoutCursoInput
    matriculas?: MatriculaUncheckedCreateNestedManyWithoutCursoInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutCursoInput
    certificados?: CertificadoUncheckedCreateNestedManyWithoutCursoInput
    trilhasCursos?: TrilhaCursoUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoCreateOrConnectWithoutInstrutorInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutInstrutorInput, CursoUncheckedCreateWithoutInstrutorInput>
  }

  export type CursoCreateManyInstrutorInputEnvelope = {
    data: CursoCreateManyInstrutorInput | CursoCreateManyInstrutorInput[]
    skipDuplicates?: boolean
  }

  export type MatriculaCreateWithoutUsuarioInput = {
    dataMatricula?: Date | string
    dataConclusao?: Date | string | null
    curso: CursoCreateNestedOneWithoutMatriculasInput
  }

  export type MatriculaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    cursoId: number
    dataMatricula?: Date | string
    dataConclusao?: Date | string | null
  }

  export type MatriculaCreateOrConnectWithoutUsuarioInput = {
    where: MatriculaWhereUniqueInput
    create: XOR<MatriculaCreateWithoutUsuarioInput, MatriculaUncheckedCreateWithoutUsuarioInput>
  }

  export type MatriculaCreateManyUsuarioInputEnvelope = {
    data: MatriculaCreateManyUsuarioInput | MatriculaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ProgressoAulaCreateWithoutUsuarioInput = {
    dataConclusao?: Date | string
    status: string
    aula: AulaCreateNestedOneWithoutProgressosInput
  }

  export type ProgressoAulaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    aulaId: number
    dataConclusao?: Date | string
    status: string
  }

  export type ProgressoAulaCreateOrConnectWithoutUsuarioInput = {
    where: ProgressoAulaWhereUniqueInput
    create: XOR<ProgressoAulaCreateWithoutUsuarioInput, ProgressoAulaUncheckedCreateWithoutUsuarioInput>
  }

  export type ProgressoAulaCreateManyUsuarioInputEnvelope = {
    data: ProgressoAulaCreateManyUsuarioInput | ProgressoAulaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type AvaliacaoCreateWithoutUsuarioInput = {
    nota: number
    comentario?: string | null
    dataAvaliacao?: Date | string
    curso: CursoCreateNestedOneWithoutAvaliacoesInput
  }

  export type AvaliacaoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    cursoId: number
    nota: number
    comentario?: string | null
    dataAvaliacao?: Date | string
  }

  export type AvaliacaoCreateOrConnectWithoutUsuarioInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutUsuarioInput, AvaliacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type AvaliacaoCreateManyUsuarioInputEnvelope = {
    data: AvaliacaoCreateManyUsuarioInput | AvaliacaoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type CertificadoCreateWithoutUsuarioInput = {
    codigoVerificacao: string
    dataEmissao?: Date | string
    curso: CursoCreateNestedOneWithoutCertificadosInput
    trilha?: TrilhaCreateNestedOneWithoutCertificadosInput
  }

  export type CertificadoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    cursoId: number
    trilhaId?: number | null
    codigoVerificacao: string
    dataEmissao?: Date | string
  }

  export type CertificadoCreateOrConnectWithoutUsuarioInput = {
    where: CertificadoWhereUniqueInput
    create: XOR<CertificadoCreateWithoutUsuarioInput, CertificadoUncheckedCreateWithoutUsuarioInput>
  }

  export type CertificadoCreateManyUsuarioInputEnvelope = {
    data: CertificadoCreateManyUsuarioInput | CertificadoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type AssinaturaCreateWithoutUsuarioInput = {
    dataInicio?: Date | string
    dataFim: Date | string
    plano: PlanoCreateNestedOneWithoutAssinaturasInput
    pagamentos?: PagamentoCreateNestedManyWithoutAssinaturaInput
  }

  export type AssinaturaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    planoId: number
    dataInicio?: Date | string
    dataFim: Date | string
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutAssinaturaInput
  }

  export type AssinaturaCreateOrConnectWithoutUsuarioInput = {
    where: AssinaturaWhereUniqueInput
    create: XOR<AssinaturaCreateWithoutUsuarioInput, AssinaturaUncheckedCreateWithoutUsuarioInput>
  }

  export type AssinaturaCreateManyUsuarioInputEnvelope = {
    data: AssinaturaCreateManyUsuarioInput | AssinaturaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type CursoUpsertWithWhereUniqueWithoutInstrutorInput = {
    where: CursoWhereUniqueInput
    update: XOR<CursoUpdateWithoutInstrutorInput, CursoUncheckedUpdateWithoutInstrutorInput>
    create: XOR<CursoCreateWithoutInstrutorInput, CursoUncheckedCreateWithoutInstrutorInput>
  }

  export type CursoUpdateWithWhereUniqueWithoutInstrutorInput = {
    where: CursoWhereUniqueInput
    data: XOR<CursoUpdateWithoutInstrutorInput, CursoUncheckedUpdateWithoutInstrutorInput>
  }

  export type CursoUpdateManyWithWhereWithoutInstrutorInput = {
    where: CursoScalarWhereInput
    data: XOR<CursoUpdateManyMutationInput, CursoUncheckedUpdateManyWithoutInstrutorInput>
  }

  export type CursoScalarWhereInput = {
    AND?: CursoScalarWhereInput | CursoScalarWhereInput[]
    OR?: CursoScalarWhereInput[]
    NOT?: CursoScalarWhereInput | CursoScalarWhereInput[]
    id?: IntFilter<"Curso"> | number
    titulo?: StringFilter<"Curso"> | string
    descricao?: StringFilter<"Curso"> | string
    instrutorId?: IntFilter<"Curso"> | number
    categoriaId?: IntFilter<"Curso"> | number
    nivel?: StringFilter<"Curso"> | string
    dataPublicacao?: DateTimeFilter<"Curso"> | Date | string
    totalAulas?: IntFilter<"Curso"> | number
    totalHoras?: FloatFilter<"Curso"> | number
  }

  export type MatriculaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: MatriculaWhereUniqueInput
    update: XOR<MatriculaUpdateWithoutUsuarioInput, MatriculaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<MatriculaCreateWithoutUsuarioInput, MatriculaUncheckedCreateWithoutUsuarioInput>
  }

  export type MatriculaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: MatriculaWhereUniqueInput
    data: XOR<MatriculaUpdateWithoutUsuarioInput, MatriculaUncheckedUpdateWithoutUsuarioInput>
  }

  export type MatriculaUpdateManyWithWhereWithoutUsuarioInput = {
    where: MatriculaScalarWhereInput
    data: XOR<MatriculaUpdateManyMutationInput, MatriculaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type MatriculaScalarWhereInput = {
    AND?: MatriculaScalarWhereInput | MatriculaScalarWhereInput[]
    OR?: MatriculaScalarWhereInput[]
    NOT?: MatriculaScalarWhereInput | MatriculaScalarWhereInput[]
    id?: IntFilter<"Matricula"> | number
    usuarioId?: IntFilter<"Matricula"> | number
    cursoId?: IntFilter<"Matricula"> | number
    dataMatricula?: DateTimeFilter<"Matricula"> | Date | string
    dataConclusao?: DateTimeNullableFilter<"Matricula"> | Date | string | null
  }

  export type ProgressoAulaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ProgressoAulaWhereUniqueInput
    update: XOR<ProgressoAulaUpdateWithoutUsuarioInput, ProgressoAulaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ProgressoAulaCreateWithoutUsuarioInput, ProgressoAulaUncheckedCreateWithoutUsuarioInput>
  }

  export type ProgressoAulaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ProgressoAulaWhereUniqueInput
    data: XOR<ProgressoAulaUpdateWithoutUsuarioInput, ProgressoAulaUncheckedUpdateWithoutUsuarioInput>
  }

  export type ProgressoAulaUpdateManyWithWhereWithoutUsuarioInput = {
    where: ProgressoAulaScalarWhereInput
    data: XOR<ProgressoAulaUpdateManyMutationInput, ProgressoAulaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ProgressoAulaScalarWhereInput = {
    AND?: ProgressoAulaScalarWhereInput | ProgressoAulaScalarWhereInput[]
    OR?: ProgressoAulaScalarWhereInput[]
    NOT?: ProgressoAulaScalarWhereInput | ProgressoAulaScalarWhereInput[]
    id?: IntFilter<"ProgressoAula"> | number
    usuarioId?: IntFilter<"ProgressoAula"> | number
    aulaId?: IntFilter<"ProgressoAula"> | number
    dataConclusao?: DateTimeFilter<"ProgressoAula"> | Date | string
    status?: StringFilter<"ProgressoAula"> | string
  }

  export type AvaliacaoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: AvaliacaoWhereUniqueInput
    update: XOR<AvaliacaoUpdateWithoutUsuarioInput, AvaliacaoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<AvaliacaoCreateWithoutUsuarioInput, AvaliacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type AvaliacaoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: AvaliacaoWhereUniqueInput
    data: XOR<AvaliacaoUpdateWithoutUsuarioInput, AvaliacaoUncheckedUpdateWithoutUsuarioInput>
  }

  export type AvaliacaoUpdateManyWithWhereWithoutUsuarioInput = {
    where: AvaliacaoScalarWhereInput
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type AvaliacaoScalarWhereInput = {
    AND?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
    OR?: AvaliacaoScalarWhereInput[]
    NOT?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
    id?: IntFilter<"Avaliacao"> | number
    usuarioId?: IntFilter<"Avaliacao"> | number
    cursoId?: IntFilter<"Avaliacao"> | number
    nota?: IntFilter<"Avaliacao"> | number
    comentario?: StringNullableFilter<"Avaliacao"> | string | null
    dataAvaliacao?: DateTimeFilter<"Avaliacao"> | Date | string
  }

  export type CertificadoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: CertificadoWhereUniqueInput
    update: XOR<CertificadoUpdateWithoutUsuarioInput, CertificadoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<CertificadoCreateWithoutUsuarioInput, CertificadoUncheckedCreateWithoutUsuarioInput>
  }

  export type CertificadoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: CertificadoWhereUniqueInput
    data: XOR<CertificadoUpdateWithoutUsuarioInput, CertificadoUncheckedUpdateWithoutUsuarioInput>
  }

  export type CertificadoUpdateManyWithWhereWithoutUsuarioInput = {
    where: CertificadoScalarWhereInput
    data: XOR<CertificadoUpdateManyMutationInput, CertificadoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type CertificadoScalarWhereInput = {
    AND?: CertificadoScalarWhereInput | CertificadoScalarWhereInput[]
    OR?: CertificadoScalarWhereInput[]
    NOT?: CertificadoScalarWhereInput | CertificadoScalarWhereInput[]
    id?: IntFilter<"Certificado"> | number
    usuarioId?: IntFilter<"Certificado"> | number
    cursoId?: IntFilter<"Certificado"> | number
    trilhaId?: IntNullableFilter<"Certificado"> | number | null
    codigoVerificacao?: StringFilter<"Certificado"> | string
    dataEmissao?: DateTimeFilter<"Certificado"> | Date | string
  }

  export type AssinaturaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: AssinaturaWhereUniqueInput
    update: XOR<AssinaturaUpdateWithoutUsuarioInput, AssinaturaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<AssinaturaCreateWithoutUsuarioInput, AssinaturaUncheckedCreateWithoutUsuarioInput>
  }

  export type AssinaturaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: AssinaturaWhereUniqueInput
    data: XOR<AssinaturaUpdateWithoutUsuarioInput, AssinaturaUncheckedUpdateWithoutUsuarioInput>
  }

  export type AssinaturaUpdateManyWithWhereWithoutUsuarioInput = {
    where: AssinaturaScalarWhereInput
    data: XOR<AssinaturaUpdateManyMutationInput, AssinaturaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type AssinaturaScalarWhereInput = {
    AND?: AssinaturaScalarWhereInput | AssinaturaScalarWhereInput[]
    OR?: AssinaturaScalarWhereInput[]
    NOT?: AssinaturaScalarWhereInput | AssinaturaScalarWhereInput[]
    id?: IntFilter<"Assinatura"> | number
    usuarioId?: IntFilter<"Assinatura"> | number
    planoId?: IntFilter<"Assinatura"> | number
    dataInicio?: DateTimeFilter<"Assinatura"> | Date | string
    dataFim?: DateTimeFilter<"Assinatura"> | Date | string
  }

  export type CursoCreateWithoutCategoriaInput = {
    titulo: string
    descricao: string
    nivel: string
    dataPublicacao?: Date | string
    totalAulas?: number
    totalHoras?: number
    instrutor: UsuarioCreateNestedOneWithoutCursosInstrutorInput
    modulos?: ModuloCreateNestedManyWithoutCursoInput
    matriculas?: MatriculaCreateNestedManyWithoutCursoInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutCursoInput
    certificados?: CertificadoCreateNestedManyWithoutCursoInput
    trilhasCursos?: TrilhaCursoCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateWithoutCategoriaInput = {
    id?: number
    titulo: string
    descricao: string
    instrutorId: number
    nivel: string
    dataPublicacao?: Date | string
    totalAulas?: number
    totalHoras?: number
    modulos?: ModuloUncheckedCreateNestedManyWithoutCursoInput
    matriculas?: MatriculaUncheckedCreateNestedManyWithoutCursoInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutCursoInput
    certificados?: CertificadoUncheckedCreateNestedManyWithoutCursoInput
    trilhasCursos?: TrilhaCursoUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoCreateOrConnectWithoutCategoriaInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutCategoriaInput, CursoUncheckedCreateWithoutCategoriaInput>
  }

  export type CursoCreateManyCategoriaInputEnvelope = {
    data: CursoCreateManyCategoriaInput | CursoCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type TrilhaCreateWithoutCategoriaInput = {
    titulo: string
    descricao: string
    trilhasCursos?: TrilhaCursoCreateNestedManyWithoutTrilhaInput
    certificados?: CertificadoCreateNestedManyWithoutTrilhaInput
  }

  export type TrilhaUncheckedCreateWithoutCategoriaInput = {
    id?: number
    titulo: string
    descricao: string
    trilhasCursos?: TrilhaCursoUncheckedCreateNestedManyWithoutTrilhaInput
    certificados?: CertificadoUncheckedCreateNestedManyWithoutTrilhaInput
  }

  export type TrilhaCreateOrConnectWithoutCategoriaInput = {
    where: TrilhaWhereUniqueInput
    create: XOR<TrilhaCreateWithoutCategoriaInput, TrilhaUncheckedCreateWithoutCategoriaInput>
  }

  export type TrilhaCreateManyCategoriaInputEnvelope = {
    data: TrilhaCreateManyCategoriaInput | TrilhaCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type CursoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: CursoWhereUniqueInput
    update: XOR<CursoUpdateWithoutCategoriaInput, CursoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<CursoCreateWithoutCategoriaInput, CursoUncheckedCreateWithoutCategoriaInput>
  }

  export type CursoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: CursoWhereUniqueInput
    data: XOR<CursoUpdateWithoutCategoriaInput, CursoUncheckedUpdateWithoutCategoriaInput>
  }

  export type CursoUpdateManyWithWhereWithoutCategoriaInput = {
    where: CursoScalarWhereInput
    data: XOR<CursoUpdateManyMutationInput, CursoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type TrilhaUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: TrilhaWhereUniqueInput
    update: XOR<TrilhaUpdateWithoutCategoriaInput, TrilhaUncheckedUpdateWithoutCategoriaInput>
    create: XOR<TrilhaCreateWithoutCategoriaInput, TrilhaUncheckedCreateWithoutCategoriaInput>
  }

  export type TrilhaUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: TrilhaWhereUniqueInput
    data: XOR<TrilhaUpdateWithoutCategoriaInput, TrilhaUncheckedUpdateWithoutCategoriaInput>
  }

  export type TrilhaUpdateManyWithWhereWithoutCategoriaInput = {
    where: TrilhaScalarWhereInput
    data: XOR<TrilhaUpdateManyMutationInput, TrilhaUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type TrilhaScalarWhereInput = {
    AND?: TrilhaScalarWhereInput | TrilhaScalarWhereInput[]
    OR?: TrilhaScalarWhereInput[]
    NOT?: TrilhaScalarWhereInput | TrilhaScalarWhereInput[]
    id?: IntFilter<"Trilha"> | number
    titulo?: StringFilter<"Trilha"> | string
    descricao?: StringFilter<"Trilha"> | string
    categoriaId?: IntFilter<"Trilha"> | number
  }

  export type UsuarioCreateWithoutCursosInstrutorInput = {
    nomeCompleto: string
    email: string
    senhaHash: string
    dataCadastro?: Date | string
    updatedAt?: Date | string
    matriculas?: MatriculaCreateNestedManyWithoutUsuarioInput
    progressos?: ProgressoAulaCreateNestedManyWithoutUsuarioInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutUsuarioInput
    certificados?: CertificadoCreateNestedManyWithoutUsuarioInput
    assinaturas?: AssinaturaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutCursosInstrutorInput = {
    id?: number
    nomeCompleto: string
    email: string
    senhaHash: string
    dataCadastro?: Date | string
    updatedAt?: Date | string
    matriculas?: MatriculaUncheckedCreateNestedManyWithoutUsuarioInput
    progressos?: ProgressoAulaUncheckedCreateNestedManyWithoutUsuarioInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    certificados?: CertificadoUncheckedCreateNestedManyWithoutUsuarioInput
    assinaturas?: AssinaturaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutCursosInstrutorInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCursosInstrutorInput, UsuarioUncheckedCreateWithoutCursosInstrutorInput>
  }

  export type CategoriaCreateWithoutCursosInput = {
    nome: string
    descricao: string
    trilhas?: TrilhaCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateWithoutCursosInput = {
    id?: number
    nome: string
    descricao: string
    trilhas?: TrilhaUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaCreateOrConnectWithoutCursosInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutCursosInput, CategoriaUncheckedCreateWithoutCursosInput>
  }

  export type ModuloCreateWithoutCursoInput = {
    titulo: string
    ordem: number
    aulas?: AulaCreateNestedManyWithoutModuloInput
  }

  export type ModuloUncheckedCreateWithoutCursoInput = {
    id?: number
    titulo: string
    ordem: number
    aulas?: AulaUncheckedCreateNestedManyWithoutModuloInput
  }

  export type ModuloCreateOrConnectWithoutCursoInput = {
    where: ModuloWhereUniqueInput
    create: XOR<ModuloCreateWithoutCursoInput, ModuloUncheckedCreateWithoutCursoInput>
  }

  export type ModuloCreateManyCursoInputEnvelope = {
    data: ModuloCreateManyCursoInput | ModuloCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type MatriculaCreateWithoutCursoInput = {
    dataMatricula?: Date | string
    dataConclusao?: Date | string | null
    usuario: UsuarioCreateNestedOneWithoutMatriculasInput
  }

  export type MatriculaUncheckedCreateWithoutCursoInput = {
    id?: number
    usuarioId: number
    dataMatricula?: Date | string
    dataConclusao?: Date | string | null
  }

  export type MatriculaCreateOrConnectWithoutCursoInput = {
    where: MatriculaWhereUniqueInput
    create: XOR<MatriculaCreateWithoutCursoInput, MatriculaUncheckedCreateWithoutCursoInput>
  }

  export type MatriculaCreateManyCursoInputEnvelope = {
    data: MatriculaCreateManyCursoInput | MatriculaCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type AvaliacaoCreateWithoutCursoInput = {
    nota: number
    comentario?: string | null
    dataAvaliacao?: Date | string
    usuario: UsuarioCreateNestedOneWithoutAvaliacoesInput
  }

  export type AvaliacaoUncheckedCreateWithoutCursoInput = {
    id?: number
    usuarioId: number
    nota: number
    comentario?: string | null
    dataAvaliacao?: Date | string
  }

  export type AvaliacaoCreateOrConnectWithoutCursoInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutCursoInput, AvaliacaoUncheckedCreateWithoutCursoInput>
  }

  export type AvaliacaoCreateManyCursoInputEnvelope = {
    data: AvaliacaoCreateManyCursoInput | AvaliacaoCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type CertificadoCreateWithoutCursoInput = {
    codigoVerificacao: string
    dataEmissao?: Date | string
    usuario: UsuarioCreateNestedOneWithoutCertificadosInput
    trilha?: TrilhaCreateNestedOneWithoutCertificadosInput
  }

  export type CertificadoUncheckedCreateWithoutCursoInput = {
    id?: number
    usuarioId: number
    trilhaId?: number | null
    codigoVerificacao: string
    dataEmissao?: Date | string
  }

  export type CertificadoCreateOrConnectWithoutCursoInput = {
    where: CertificadoWhereUniqueInput
    create: XOR<CertificadoCreateWithoutCursoInput, CertificadoUncheckedCreateWithoutCursoInput>
  }

  export type CertificadoCreateManyCursoInputEnvelope = {
    data: CertificadoCreateManyCursoInput | CertificadoCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type TrilhaCursoCreateWithoutCursoInput = {
    ordem: number
    trilha: TrilhaCreateNestedOneWithoutTrilhasCursosInput
  }

  export type TrilhaCursoUncheckedCreateWithoutCursoInput = {
    id?: number
    trilhaId: number
    ordem: number
  }

  export type TrilhaCursoCreateOrConnectWithoutCursoInput = {
    where: TrilhaCursoWhereUniqueInput
    create: XOR<TrilhaCursoCreateWithoutCursoInput, TrilhaCursoUncheckedCreateWithoutCursoInput>
  }

  export type TrilhaCursoCreateManyCursoInputEnvelope = {
    data: TrilhaCursoCreateManyCursoInput | TrilhaCursoCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutCursosInstrutorInput = {
    update: XOR<UsuarioUpdateWithoutCursosInstrutorInput, UsuarioUncheckedUpdateWithoutCursosInstrutorInput>
    create: XOR<UsuarioCreateWithoutCursosInstrutorInput, UsuarioUncheckedCreateWithoutCursosInstrutorInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutCursosInstrutorInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutCursosInstrutorInput, UsuarioUncheckedUpdateWithoutCursosInstrutorInput>
  }

  export type UsuarioUpdateWithoutCursosInstrutorInput = {
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matriculas?: MatriculaUpdateManyWithoutUsuarioNestedInput
    progressos?: ProgressoAulaUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutUsuarioNestedInput
    certificados?: CertificadoUpdateManyWithoutUsuarioNestedInput
    assinaturas?: AssinaturaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCursosInstrutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matriculas?: MatriculaUncheckedUpdateManyWithoutUsuarioNestedInput
    progressos?: ProgressoAulaUncheckedUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    certificados?: CertificadoUncheckedUpdateManyWithoutUsuarioNestedInput
    assinaturas?: AssinaturaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type CategoriaUpsertWithoutCursosInput = {
    update: XOR<CategoriaUpdateWithoutCursosInput, CategoriaUncheckedUpdateWithoutCursosInput>
    create: XOR<CategoriaCreateWithoutCursosInput, CategoriaUncheckedCreateWithoutCursosInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutCursosInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutCursosInput, CategoriaUncheckedUpdateWithoutCursosInput>
  }

  export type CategoriaUpdateWithoutCursosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    trilhas?: TrilhaUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateWithoutCursosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    trilhas?: TrilhaUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type ModuloUpsertWithWhereUniqueWithoutCursoInput = {
    where: ModuloWhereUniqueInput
    update: XOR<ModuloUpdateWithoutCursoInput, ModuloUncheckedUpdateWithoutCursoInput>
    create: XOR<ModuloCreateWithoutCursoInput, ModuloUncheckedCreateWithoutCursoInput>
  }

  export type ModuloUpdateWithWhereUniqueWithoutCursoInput = {
    where: ModuloWhereUniqueInput
    data: XOR<ModuloUpdateWithoutCursoInput, ModuloUncheckedUpdateWithoutCursoInput>
  }

  export type ModuloUpdateManyWithWhereWithoutCursoInput = {
    where: ModuloScalarWhereInput
    data: XOR<ModuloUpdateManyMutationInput, ModuloUncheckedUpdateManyWithoutCursoInput>
  }

  export type ModuloScalarWhereInput = {
    AND?: ModuloScalarWhereInput | ModuloScalarWhereInput[]
    OR?: ModuloScalarWhereInput[]
    NOT?: ModuloScalarWhereInput | ModuloScalarWhereInput[]
    id?: IntFilter<"Modulo"> | number
    cursoId?: IntFilter<"Modulo"> | number
    titulo?: StringFilter<"Modulo"> | string
    ordem?: IntFilter<"Modulo"> | number
  }

  export type MatriculaUpsertWithWhereUniqueWithoutCursoInput = {
    where: MatriculaWhereUniqueInput
    update: XOR<MatriculaUpdateWithoutCursoInput, MatriculaUncheckedUpdateWithoutCursoInput>
    create: XOR<MatriculaCreateWithoutCursoInput, MatriculaUncheckedCreateWithoutCursoInput>
  }

  export type MatriculaUpdateWithWhereUniqueWithoutCursoInput = {
    where: MatriculaWhereUniqueInput
    data: XOR<MatriculaUpdateWithoutCursoInput, MatriculaUncheckedUpdateWithoutCursoInput>
  }

  export type MatriculaUpdateManyWithWhereWithoutCursoInput = {
    where: MatriculaScalarWhereInput
    data: XOR<MatriculaUpdateManyMutationInput, MatriculaUncheckedUpdateManyWithoutCursoInput>
  }

  export type AvaliacaoUpsertWithWhereUniqueWithoutCursoInput = {
    where: AvaliacaoWhereUniqueInput
    update: XOR<AvaliacaoUpdateWithoutCursoInput, AvaliacaoUncheckedUpdateWithoutCursoInput>
    create: XOR<AvaliacaoCreateWithoutCursoInput, AvaliacaoUncheckedCreateWithoutCursoInput>
  }

  export type AvaliacaoUpdateWithWhereUniqueWithoutCursoInput = {
    where: AvaliacaoWhereUniqueInput
    data: XOR<AvaliacaoUpdateWithoutCursoInput, AvaliacaoUncheckedUpdateWithoutCursoInput>
  }

  export type AvaliacaoUpdateManyWithWhereWithoutCursoInput = {
    where: AvaliacaoScalarWhereInput
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyWithoutCursoInput>
  }

  export type CertificadoUpsertWithWhereUniqueWithoutCursoInput = {
    where: CertificadoWhereUniqueInput
    update: XOR<CertificadoUpdateWithoutCursoInput, CertificadoUncheckedUpdateWithoutCursoInput>
    create: XOR<CertificadoCreateWithoutCursoInput, CertificadoUncheckedCreateWithoutCursoInput>
  }

  export type CertificadoUpdateWithWhereUniqueWithoutCursoInput = {
    where: CertificadoWhereUniqueInput
    data: XOR<CertificadoUpdateWithoutCursoInput, CertificadoUncheckedUpdateWithoutCursoInput>
  }

  export type CertificadoUpdateManyWithWhereWithoutCursoInput = {
    where: CertificadoScalarWhereInput
    data: XOR<CertificadoUpdateManyMutationInput, CertificadoUncheckedUpdateManyWithoutCursoInput>
  }

  export type TrilhaCursoUpsertWithWhereUniqueWithoutCursoInput = {
    where: TrilhaCursoWhereUniqueInput
    update: XOR<TrilhaCursoUpdateWithoutCursoInput, TrilhaCursoUncheckedUpdateWithoutCursoInput>
    create: XOR<TrilhaCursoCreateWithoutCursoInput, TrilhaCursoUncheckedCreateWithoutCursoInput>
  }

  export type TrilhaCursoUpdateWithWhereUniqueWithoutCursoInput = {
    where: TrilhaCursoWhereUniqueInput
    data: XOR<TrilhaCursoUpdateWithoutCursoInput, TrilhaCursoUncheckedUpdateWithoutCursoInput>
  }

  export type TrilhaCursoUpdateManyWithWhereWithoutCursoInput = {
    where: TrilhaCursoScalarWhereInput
    data: XOR<TrilhaCursoUpdateManyMutationInput, TrilhaCursoUncheckedUpdateManyWithoutCursoInput>
  }

  export type TrilhaCursoScalarWhereInput = {
    AND?: TrilhaCursoScalarWhereInput | TrilhaCursoScalarWhereInput[]
    OR?: TrilhaCursoScalarWhereInput[]
    NOT?: TrilhaCursoScalarWhereInput | TrilhaCursoScalarWhereInput[]
    id?: IntFilter<"TrilhaCurso"> | number
    trilhaId?: IntFilter<"TrilhaCurso"> | number
    cursoId?: IntFilter<"TrilhaCurso"> | number
    ordem?: IntFilter<"TrilhaCurso"> | number
  }

  export type CursoCreateWithoutModulosInput = {
    titulo: string
    descricao: string
    nivel: string
    dataPublicacao?: Date | string
    totalAulas?: number
    totalHoras?: number
    instrutor: UsuarioCreateNestedOneWithoutCursosInstrutorInput
    categoria: CategoriaCreateNestedOneWithoutCursosInput
    matriculas?: MatriculaCreateNestedManyWithoutCursoInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutCursoInput
    certificados?: CertificadoCreateNestedManyWithoutCursoInput
    trilhasCursos?: TrilhaCursoCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateWithoutModulosInput = {
    id?: number
    titulo: string
    descricao: string
    instrutorId: number
    categoriaId: number
    nivel: string
    dataPublicacao?: Date | string
    totalAulas?: number
    totalHoras?: number
    matriculas?: MatriculaUncheckedCreateNestedManyWithoutCursoInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutCursoInput
    certificados?: CertificadoUncheckedCreateNestedManyWithoutCursoInput
    trilhasCursos?: TrilhaCursoUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoCreateOrConnectWithoutModulosInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutModulosInput, CursoUncheckedCreateWithoutModulosInput>
  }

  export type AulaCreateWithoutModuloInput = {
    titulo: string
    tipoConteudo: string
    urlConteudo: string
    duracaoMinutos: number
    ordem: number
    progressos?: ProgressoAulaCreateNestedManyWithoutAulaInput
  }

  export type AulaUncheckedCreateWithoutModuloInput = {
    id?: number
    titulo: string
    tipoConteudo: string
    urlConteudo: string
    duracaoMinutos: number
    ordem: number
    progressos?: ProgressoAulaUncheckedCreateNestedManyWithoutAulaInput
  }

  export type AulaCreateOrConnectWithoutModuloInput = {
    where: AulaWhereUniqueInput
    create: XOR<AulaCreateWithoutModuloInput, AulaUncheckedCreateWithoutModuloInput>
  }

  export type AulaCreateManyModuloInputEnvelope = {
    data: AulaCreateManyModuloInput | AulaCreateManyModuloInput[]
    skipDuplicates?: boolean
  }

  export type CursoUpsertWithoutModulosInput = {
    update: XOR<CursoUpdateWithoutModulosInput, CursoUncheckedUpdateWithoutModulosInput>
    create: XOR<CursoCreateWithoutModulosInput, CursoUncheckedCreateWithoutModulosInput>
    where?: CursoWhereInput
  }

  export type CursoUpdateToOneWithWhereWithoutModulosInput = {
    where?: CursoWhereInput
    data: XOR<CursoUpdateWithoutModulosInput, CursoUncheckedUpdateWithoutModulosInput>
  }

  export type CursoUpdateWithoutModulosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAulas?: IntFieldUpdateOperationsInput | number
    totalHoras?: FloatFieldUpdateOperationsInput | number
    instrutor?: UsuarioUpdateOneRequiredWithoutCursosInstrutorNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutCursosNestedInput
    matriculas?: MatriculaUpdateManyWithoutCursoNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutCursoNestedInput
    certificados?: CertificadoUpdateManyWithoutCursoNestedInput
    trilhasCursos?: TrilhaCursoUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateWithoutModulosInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    instrutorId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    nivel?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAulas?: IntFieldUpdateOperationsInput | number
    totalHoras?: FloatFieldUpdateOperationsInput | number
    matriculas?: MatriculaUncheckedUpdateManyWithoutCursoNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutCursoNestedInput
    certificados?: CertificadoUncheckedUpdateManyWithoutCursoNestedInput
    trilhasCursos?: TrilhaCursoUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type AulaUpsertWithWhereUniqueWithoutModuloInput = {
    where: AulaWhereUniqueInput
    update: XOR<AulaUpdateWithoutModuloInput, AulaUncheckedUpdateWithoutModuloInput>
    create: XOR<AulaCreateWithoutModuloInput, AulaUncheckedCreateWithoutModuloInput>
  }

  export type AulaUpdateWithWhereUniqueWithoutModuloInput = {
    where: AulaWhereUniqueInput
    data: XOR<AulaUpdateWithoutModuloInput, AulaUncheckedUpdateWithoutModuloInput>
  }

  export type AulaUpdateManyWithWhereWithoutModuloInput = {
    where: AulaScalarWhereInput
    data: XOR<AulaUpdateManyMutationInput, AulaUncheckedUpdateManyWithoutModuloInput>
  }

  export type AulaScalarWhereInput = {
    AND?: AulaScalarWhereInput | AulaScalarWhereInput[]
    OR?: AulaScalarWhereInput[]
    NOT?: AulaScalarWhereInput | AulaScalarWhereInput[]
    id?: IntFilter<"Aula"> | number
    moduloId?: IntFilter<"Aula"> | number
    titulo?: StringFilter<"Aula"> | string
    tipoConteudo?: StringFilter<"Aula"> | string
    urlConteudo?: StringFilter<"Aula"> | string
    duracaoMinutos?: IntFilter<"Aula"> | number
    ordem?: IntFilter<"Aula"> | number
  }

  export type ModuloCreateWithoutAulasInput = {
    titulo: string
    ordem: number
    curso: CursoCreateNestedOneWithoutModulosInput
  }

  export type ModuloUncheckedCreateWithoutAulasInput = {
    id?: number
    cursoId: number
    titulo: string
    ordem: number
  }

  export type ModuloCreateOrConnectWithoutAulasInput = {
    where: ModuloWhereUniqueInput
    create: XOR<ModuloCreateWithoutAulasInput, ModuloUncheckedCreateWithoutAulasInput>
  }

  export type ProgressoAulaCreateWithoutAulaInput = {
    dataConclusao?: Date | string
    status: string
    usuario: UsuarioCreateNestedOneWithoutProgressosInput
  }

  export type ProgressoAulaUncheckedCreateWithoutAulaInput = {
    id?: number
    usuarioId: number
    dataConclusao?: Date | string
    status: string
  }

  export type ProgressoAulaCreateOrConnectWithoutAulaInput = {
    where: ProgressoAulaWhereUniqueInput
    create: XOR<ProgressoAulaCreateWithoutAulaInput, ProgressoAulaUncheckedCreateWithoutAulaInput>
  }

  export type ProgressoAulaCreateManyAulaInputEnvelope = {
    data: ProgressoAulaCreateManyAulaInput | ProgressoAulaCreateManyAulaInput[]
    skipDuplicates?: boolean
  }

  export type ModuloUpsertWithoutAulasInput = {
    update: XOR<ModuloUpdateWithoutAulasInput, ModuloUncheckedUpdateWithoutAulasInput>
    create: XOR<ModuloCreateWithoutAulasInput, ModuloUncheckedCreateWithoutAulasInput>
    where?: ModuloWhereInput
  }

  export type ModuloUpdateToOneWithWhereWithoutAulasInput = {
    where?: ModuloWhereInput
    data: XOR<ModuloUpdateWithoutAulasInput, ModuloUncheckedUpdateWithoutAulasInput>
  }

  export type ModuloUpdateWithoutAulasInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    curso?: CursoUpdateOneRequiredWithoutModulosNestedInput
  }

  export type ModuloUncheckedUpdateWithoutAulasInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type ProgressoAulaUpsertWithWhereUniqueWithoutAulaInput = {
    where: ProgressoAulaWhereUniqueInput
    update: XOR<ProgressoAulaUpdateWithoutAulaInput, ProgressoAulaUncheckedUpdateWithoutAulaInput>
    create: XOR<ProgressoAulaCreateWithoutAulaInput, ProgressoAulaUncheckedCreateWithoutAulaInput>
  }

  export type ProgressoAulaUpdateWithWhereUniqueWithoutAulaInput = {
    where: ProgressoAulaWhereUniqueInput
    data: XOR<ProgressoAulaUpdateWithoutAulaInput, ProgressoAulaUncheckedUpdateWithoutAulaInput>
  }

  export type ProgressoAulaUpdateManyWithWhereWithoutAulaInput = {
    where: ProgressoAulaScalarWhereInput
    data: XOR<ProgressoAulaUpdateManyMutationInput, ProgressoAulaUncheckedUpdateManyWithoutAulaInput>
  }

  export type UsuarioCreateWithoutMatriculasInput = {
    nomeCompleto: string
    email: string
    senhaHash: string
    dataCadastro?: Date | string
    updatedAt?: Date | string
    cursosInstrutor?: CursoCreateNestedManyWithoutInstrutorInput
    progressos?: ProgressoAulaCreateNestedManyWithoutUsuarioInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutUsuarioInput
    certificados?: CertificadoCreateNestedManyWithoutUsuarioInput
    assinaturas?: AssinaturaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutMatriculasInput = {
    id?: number
    nomeCompleto: string
    email: string
    senhaHash: string
    dataCadastro?: Date | string
    updatedAt?: Date | string
    cursosInstrutor?: CursoUncheckedCreateNestedManyWithoutInstrutorInput
    progressos?: ProgressoAulaUncheckedCreateNestedManyWithoutUsuarioInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    certificados?: CertificadoUncheckedCreateNestedManyWithoutUsuarioInput
    assinaturas?: AssinaturaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutMatriculasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutMatriculasInput, UsuarioUncheckedCreateWithoutMatriculasInput>
  }

  export type CursoCreateWithoutMatriculasInput = {
    titulo: string
    descricao: string
    nivel: string
    dataPublicacao?: Date | string
    totalAulas?: number
    totalHoras?: number
    instrutor: UsuarioCreateNestedOneWithoutCursosInstrutorInput
    categoria: CategoriaCreateNestedOneWithoutCursosInput
    modulos?: ModuloCreateNestedManyWithoutCursoInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutCursoInput
    certificados?: CertificadoCreateNestedManyWithoutCursoInput
    trilhasCursos?: TrilhaCursoCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateWithoutMatriculasInput = {
    id?: number
    titulo: string
    descricao: string
    instrutorId: number
    categoriaId: number
    nivel: string
    dataPublicacao?: Date | string
    totalAulas?: number
    totalHoras?: number
    modulos?: ModuloUncheckedCreateNestedManyWithoutCursoInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutCursoInput
    certificados?: CertificadoUncheckedCreateNestedManyWithoutCursoInput
    trilhasCursos?: TrilhaCursoUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoCreateOrConnectWithoutMatriculasInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutMatriculasInput, CursoUncheckedCreateWithoutMatriculasInput>
  }

  export type UsuarioUpsertWithoutMatriculasInput = {
    update: XOR<UsuarioUpdateWithoutMatriculasInput, UsuarioUncheckedUpdateWithoutMatriculasInput>
    create: XOR<UsuarioCreateWithoutMatriculasInput, UsuarioUncheckedCreateWithoutMatriculasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutMatriculasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutMatriculasInput, UsuarioUncheckedUpdateWithoutMatriculasInput>
  }

  export type UsuarioUpdateWithoutMatriculasInput = {
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cursosInstrutor?: CursoUpdateManyWithoutInstrutorNestedInput
    progressos?: ProgressoAulaUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutUsuarioNestedInput
    certificados?: CertificadoUpdateManyWithoutUsuarioNestedInput
    assinaturas?: AssinaturaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutMatriculasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cursosInstrutor?: CursoUncheckedUpdateManyWithoutInstrutorNestedInput
    progressos?: ProgressoAulaUncheckedUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    certificados?: CertificadoUncheckedUpdateManyWithoutUsuarioNestedInput
    assinaturas?: AssinaturaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type CursoUpsertWithoutMatriculasInput = {
    update: XOR<CursoUpdateWithoutMatriculasInput, CursoUncheckedUpdateWithoutMatriculasInput>
    create: XOR<CursoCreateWithoutMatriculasInput, CursoUncheckedCreateWithoutMatriculasInput>
    where?: CursoWhereInput
  }

  export type CursoUpdateToOneWithWhereWithoutMatriculasInput = {
    where?: CursoWhereInput
    data: XOR<CursoUpdateWithoutMatriculasInput, CursoUncheckedUpdateWithoutMatriculasInput>
  }

  export type CursoUpdateWithoutMatriculasInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAulas?: IntFieldUpdateOperationsInput | number
    totalHoras?: FloatFieldUpdateOperationsInput | number
    instrutor?: UsuarioUpdateOneRequiredWithoutCursosInstrutorNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutCursosNestedInput
    modulos?: ModuloUpdateManyWithoutCursoNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutCursoNestedInput
    certificados?: CertificadoUpdateManyWithoutCursoNestedInput
    trilhasCursos?: TrilhaCursoUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateWithoutMatriculasInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    instrutorId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    nivel?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAulas?: IntFieldUpdateOperationsInput | number
    totalHoras?: FloatFieldUpdateOperationsInput | number
    modulos?: ModuloUncheckedUpdateManyWithoutCursoNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutCursoNestedInput
    certificados?: CertificadoUncheckedUpdateManyWithoutCursoNestedInput
    trilhasCursos?: TrilhaCursoUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type UsuarioCreateWithoutProgressosInput = {
    nomeCompleto: string
    email: string
    senhaHash: string
    dataCadastro?: Date | string
    updatedAt?: Date | string
    cursosInstrutor?: CursoCreateNestedManyWithoutInstrutorInput
    matriculas?: MatriculaCreateNestedManyWithoutUsuarioInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutUsuarioInput
    certificados?: CertificadoCreateNestedManyWithoutUsuarioInput
    assinaturas?: AssinaturaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutProgressosInput = {
    id?: number
    nomeCompleto: string
    email: string
    senhaHash: string
    dataCadastro?: Date | string
    updatedAt?: Date | string
    cursosInstrutor?: CursoUncheckedCreateNestedManyWithoutInstrutorInput
    matriculas?: MatriculaUncheckedCreateNestedManyWithoutUsuarioInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    certificados?: CertificadoUncheckedCreateNestedManyWithoutUsuarioInput
    assinaturas?: AssinaturaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutProgressosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutProgressosInput, UsuarioUncheckedCreateWithoutProgressosInput>
  }

  export type AulaCreateWithoutProgressosInput = {
    titulo: string
    tipoConteudo: string
    urlConteudo: string
    duracaoMinutos: number
    ordem: number
    modulo: ModuloCreateNestedOneWithoutAulasInput
  }

  export type AulaUncheckedCreateWithoutProgressosInput = {
    id?: number
    moduloId: number
    titulo: string
    tipoConteudo: string
    urlConteudo: string
    duracaoMinutos: number
    ordem: number
  }

  export type AulaCreateOrConnectWithoutProgressosInput = {
    where: AulaWhereUniqueInput
    create: XOR<AulaCreateWithoutProgressosInput, AulaUncheckedCreateWithoutProgressosInput>
  }

  export type UsuarioUpsertWithoutProgressosInput = {
    update: XOR<UsuarioUpdateWithoutProgressosInput, UsuarioUncheckedUpdateWithoutProgressosInput>
    create: XOR<UsuarioCreateWithoutProgressosInput, UsuarioUncheckedCreateWithoutProgressosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutProgressosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutProgressosInput, UsuarioUncheckedUpdateWithoutProgressosInput>
  }

  export type UsuarioUpdateWithoutProgressosInput = {
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cursosInstrutor?: CursoUpdateManyWithoutInstrutorNestedInput
    matriculas?: MatriculaUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutUsuarioNestedInput
    certificados?: CertificadoUpdateManyWithoutUsuarioNestedInput
    assinaturas?: AssinaturaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutProgressosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cursosInstrutor?: CursoUncheckedUpdateManyWithoutInstrutorNestedInput
    matriculas?: MatriculaUncheckedUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    certificados?: CertificadoUncheckedUpdateManyWithoutUsuarioNestedInput
    assinaturas?: AssinaturaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type AulaUpsertWithoutProgressosInput = {
    update: XOR<AulaUpdateWithoutProgressosInput, AulaUncheckedUpdateWithoutProgressosInput>
    create: XOR<AulaCreateWithoutProgressosInput, AulaUncheckedCreateWithoutProgressosInput>
    where?: AulaWhereInput
  }

  export type AulaUpdateToOneWithWhereWithoutProgressosInput = {
    where?: AulaWhereInput
    data: XOR<AulaUpdateWithoutProgressosInput, AulaUncheckedUpdateWithoutProgressosInput>
  }

  export type AulaUpdateWithoutProgressosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    tipoConteudo?: StringFieldUpdateOperationsInput | string
    urlConteudo?: StringFieldUpdateOperationsInput | string
    duracaoMinutos?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
    modulo?: ModuloUpdateOneRequiredWithoutAulasNestedInput
  }

  export type AulaUncheckedUpdateWithoutProgressosInput = {
    id?: IntFieldUpdateOperationsInput | number
    moduloId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    tipoConteudo?: StringFieldUpdateOperationsInput | string
    urlConteudo?: StringFieldUpdateOperationsInput | string
    duracaoMinutos?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioCreateWithoutAvaliacoesInput = {
    nomeCompleto: string
    email: string
    senhaHash: string
    dataCadastro?: Date | string
    updatedAt?: Date | string
    cursosInstrutor?: CursoCreateNestedManyWithoutInstrutorInput
    matriculas?: MatriculaCreateNestedManyWithoutUsuarioInput
    progressos?: ProgressoAulaCreateNestedManyWithoutUsuarioInput
    certificados?: CertificadoCreateNestedManyWithoutUsuarioInput
    assinaturas?: AssinaturaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutAvaliacoesInput = {
    id?: number
    nomeCompleto: string
    email: string
    senhaHash: string
    dataCadastro?: Date | string
    updatedAt?: Date | string
    cursosInstrutor?: CursoUncheckedCreateNestedManyWithoutInstrutorInput
    matriculas?: MatriculaUncheckedCreateNestedManyWithoutUsuarioInput
    progressos?: ProgressoAulaUncheckedCreateNestedManyWithoutUsuarioInput
    certificados?: CertificadoUncheckedCreateNestedManyWithoutUsuarioInput
    assinaturas?: AssinaturaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutAvaliacoesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAvaliacoesInput, UsuarioUncheckedCreateWithoutAvaliacoesInput>
  }

  export type CursoCreateWithoutAvaliacoesInput = {
    titulo: string
    descricao: string
    nivel: string
    dataPublicacao?: Date | string
    totalAulas?: number
    totalHoras?: number
    instrutor: UsuarioCreateNestedOneWithoutCursosInstrutorInput
    categoria: CategoriaCreateNestedOneWithoutCursosInput
    modulos?: ModuloCreateNestedManyWithoutCursoInput
    matriculas?: MatriculaCreateNestedManyWithoutCursoInput
    certificados?: CertificadoCreateNestedManyWithoutCursoInput
    trilhasCursos?: TrilhaCursoCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateWithoutAvaliacoesInput = {
    id?: number
    titulo: string
    descricao: string
    instrutorId: number
    categoriaId: number
    nivel: string
    dataPublicacao?: Date | string
    totalAulas?: number
    totalHoras?: number
    modulos?: ModuloUncheckedCreateNestedManyWithoutCursoInput
    matriculas?: MatriculaUncheckedCreateNestedManyWithoutCursoInput
    certificados?: CertificadoUncheckedCreateNestedManyWithoutCursoInput
    trilhasCursos?: TrilhaCursoUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoCreateOrConnectWithoutAvaliacoesInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutAvaliacoesInput, CursoUncheckedCreateWithoutAvaliacoesInput>
  }

  export type UsuarioUpsertWithoutAvaliacoesInput = {
    update: XOR<UsuarioUpdateWithoutAvaliacoesInput, UsuarioUncheckedUpdateWithoutAvaliacoesInput>
    create: XOR<UsuarioCreateWithoutAvaliacoesInput, UsuarioUncheckedCreateWithoutAvaliacoesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAvaliacoesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAvaliacoesInput, UsuarioUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type UsuarioUpdateWithoutAvaliacoesInput = {
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cursosInstrutor?: CursoUpdateManyWithoutInstrutorNestedInput
    matriculas?: MatriculaUpdateManyWithoutUsuarioNestedInput
    progressos?: ProgressoAulaUpdateManyWithoutUsuarioNestedInput
    certificados?: CertificadoUpdateManyWithoutUsuarioNestedInput
    assinaturas?: AssinaturaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAvaliacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cursosInstrutor?: CursoUncheckedUpdateManyWithoutInstrutorNestedInput
    matriculas?: MatriculaUncheckedUpdateManyWithoutUsuarioNestedInput
    progressos?: ProgressoAulaUncheckedUpdateManyWithoutUsuarioNestedInput
    certificados?: CertificadoUncheckedUpdateManyWithoutUsuarioNestedInput
    assinaturas?: AssinaturaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type CursoUpsertWithoutAvaliacoesInput = {
    update: XOR<CursoUpdateWithoutAvaliacoesInput, CursoUncheckedUpdateWithoutAvaliacoesInput>
    create: XOR<CursoCreateWithoutAvaliacoesInput, CursoUncheckedCreateWithoutAvaliacoesInput>
    where?: CursoWhereInput
  }

  export type CursoUpdateToOneWithWhereWithoutAvaliacoesInput = {
    where?: CursoWhereInput
    data: XOR<CursoUpdateWithoutAvaliacoesInput, CursoUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type CursoUpdateWithoutAvaliacoesInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAulas?: IntFieldUpdateOperationsInput | number
    totalHoras?: FloatFieldUpdateOperationsInput | number
    instrutor?: UsuarioUpdateOneRequiredWithoutCursosInstrutorNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutCursosNestedInput
    modulos?: ModuloUpdateManyWithoutCursoNestedInput
    matriculas?: MatriculaUpdateManyWithoutCursoNestedInput
    certificados?: CertificadoUpdateManyWithoutCursoNestedInput
    trilhasCursos?: TrilhaCursoUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateWithoutAvaliacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    instrutorId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    nivel?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAulas?: IntFieldUpdateOperationsInput | number
    totalHoras?: FloatFieldUpdateOperationsInput | number
    modulos?: ModuloUncheckedUpdateManyWithoutCursoNestedInput
    matriculas?: MatriculaUncheckedUpdateManyWithoutCursoNestedInput
    certificados?: CertificadoUncheckedUpdateManyWithoutCursoNestedInput
    trilhasCursos?: TrilhaCursoUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type CategoriaCreateWithoutTrilhasInput = {
    nome: string
    descricao: string
    cursos?: CursoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateWithoutTrilhasInput = {
    id?: number
    nome: string
    descricao: string
    cursos?: CursoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaCreateOrConnectWithoutTrilhasInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutTrilhasInput, CategoriaUncheckedCreateWithoutTrilhasInput>
  }

  export type TrilhaCursoCreateWithoutTrilhaInput = {
    ordem: number
    curso: CursoCreateNestedOneWithoutTrilhasCursosInput
  }

  export type TrilhaCursoUncheckedCreateWithoutTrilhaInput = {
    id?: number
    cursoId: number
    ordem: number
  }

  export type TrilhaCursoCreateOrConnectWithoutTrilhaInput = {
    where: TrilhaCursoWhereUniqueInput
    create: XOR<TrilhaCursoCreateWithoutTrilhaInput, TrilhaCursoUncheckedCreateWithoutTrilhaInput>
  }

  export type TrilhaCursoCreateManyTrilhaInputEnvelope = {
    data: TrilhaCursoCreateManyTrilhaInput | TrilhaCursoCreateManyTrilhaInput[]
    skipDuplicates?: boolean
  }

  export type CertificadoCreateWithoutTrilhaInput = {
    codigoVerificacao: string
    dataEmissao?: Date | string
    usuario: UsuarioCreateNestedOneWithoutCertificadosInput
    curso: CursoCreateNestedOneWithoutCertificadosInput
  }

  export type CertificadoUncheckedCreateWithoutTrilhaInput = {
    id?: number
    usuarioId: number
    cursoId: number
    codigoVerificacao: string
    dataEmissao?: Date | string
  }

  export type CertificadoCreateOrConnectWithoutTrilhaInput = {
    where: CertificadoWhereUniqueInput
    create: XOR<CertificadoCreateWithoutTrilhaInput, CertificadoUncheckedCreateWithoutTrilhaInput>
  }

  export type CertificadoCreateManyTrilhaInputEnvelope = {
    data: CertificadoCreateManyTrilhaInput | CertificadoCreateManyTrilhaInput[]
    skipDuplicates?: boolean
  }

  export type CategoriaUpsertWithoutTrilhasInput = {
    update: XOR<CategoriaUpdateWithoutTrilhasInput, CategoriaUncheckedUpdateWithoutTrilhasInput>
    create: XOR<CategoriaCreateWithoutTrilhasInput, CategoriaUncheckedCreateWithoutTrilhasInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutTrilhasInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutTrilhasInput, CategoriaUncheckedUpdateWithoutTrilhasInput>
  }

  export type CategoriaUpdateWithoutTrilhasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    cursos?: CursoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateWithoutTrilhasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    cursos?: CursoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type TrilhaCursoUpsertWithWhereUniqueWithoutTrilhaInput = {
    where: TrilhaCursoWhereUniqueInput
    update: XOR<TrilhaCursoUpdateWithoutTrilhaInput, TrilhaCursoUncheckedUpdateWithoutTrilhaInput>
    create: XOR<TrilhaCursoCreateWithoutTrilhaInput, TrilhaCursoUncheckedCreateWithoutTrilhaInput>
  }

  export type TrilhaCursoUpdateWithWhereUniqueWithoutTrilhaInput = {
    where: TrilhaCursoWhereUniqueInput
    data: XOR<TrilhaCursoUpdateWithoutTrilhaInput, TrilhaCursoUncheckedUpdateWithoutTrilhaInput>
  }

  export type TrilhaCursoUpdateManyWithWhereWithoutTrilhaInput = {
    where: TrilhaCursoScalarWhereInput
    data: XOR<TrilhaCursoUpdateManyMutationInput, TrilhaCursoUncheckedUpdateManyWithoutTrilhaInput>
  }

  export type CertificadoUpsertWithWhereUniqueWithoutTrilhaInput = {
    where: CertificadoWhereUniqueInput
    update: XOR<CertificadoUpdateWithoutTrilhaInput, CertificadoUncheckedUpdateWithoutTrilhaInput>
    create: XOR<CertificadoCreateWithoutTrilhaInput, CertificadoUncheckedCreateWithoutTrilhaInput>
  }

  export type CertificadoUpdateWithWhereUniqueWithoutTrilhaInput = {
    where: CertificadoWhereUniqueInput
    data: XOR<CertificadoUpdateWithoutTrilhaInput, CertificadoUncheckedUpdateWithoutTrilhaInput>
  }

  export type CertificadoUpdateManyWithWhereWithoutTrilhaInput = {
    where: CertificadoScalarWhereInput
    data: XOR<CertificadoUpdateManyMutationInput, CertificadoUncheckedUpdateManyWithoutTrilhaInput>
  }

  export type TrilhaCreateWithoutTrilhasCursosInput = {
    titulo: string
    descricao: string
    categoria: CategoriaCreateNestedOneWithoutTrilhasInput
    certificados?: CertificadoCreateNestedManyWithoutTrilhaInput
  }

  export type TrilhaUncheckedCreateWithoutTrilhasCursosInput = {
    id?: number
    titulo: string
    descricao: string
    categoriaId: number
    certificados?: CertificadoUncheckedCreateNestedManyWithoutTrilhaInput
  }

  export type TrilhaCreateOrConnectWithoutTrilhasCursosInput = {
    where: TrilhaWhereUniqueInput
    create: XOR<TrilhaCreateWithoutTrilhasCursosInput, TrilhaUncheckedCreateWithoutTrilhasCursosInput>
  }

  export type CursoCreateWithoutTrilhasCursosInput = {
    titulo: string
    descricao: string
    nivel: string
    dataPublicacao?: Date | string
    totalAulas?: number
    totalHoras?: number
    instrutor: UsuarioCreateNestedOneWithoutCursosInstrutorInput
    categoria: CategoriaCreateNestedOneWithoutCursosInput
    modulos?: ModuloCreateNestedManyWithoutCursoInput
    matriculas?: MatriculaCreateNestedManyWithoutCursoInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutCursoInput
    certificados?: CertificadoCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateWithoutTrilhasCursosInput = {
    id?: number
    titulo: string
    descricao: string
    instrutorId: number
    categoriaId: number
    nivel: string
    dataPublicacao?: Date | string
    totalAulas?: number
    totalHoras?: number
    modulos?: ModuloUncheckedCreateNestedManyWithoutCursoInput
    matriculas?: MatriculaUncheckedCreateNestedManyWithoutCursoInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutCursoInput
    certificados?: CertificadoUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoCreateOrConnectWithoutTrilhasCursosInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutTrilhasCursosInput, CursoUncheckedCreateWithoutTrilhasCursosInput>
  }

  export type TrilhaUpsertWithoutTrilhasCursosInput = {
    update: XOR<TrilhaUpdateWithoutTrilhasCursosInput, TrilhaUncheckedUpdateWithoutTrilhasCursosInput>
    create: XOR<TrilhaCreateWithoutTrilhasCursosInput, TrilhaUncheckedCreateWithoutTrilhasCursosInput>
    where?: TrilhaWhereInput
  }

  export type TrilhaUpdateToOneWithWhereWithoutTrilhasCursosInput = {
    where?: TrilhaWhereInput
    data: XOR<TrilhaUpdateWithoutTrilhasCursosInput, TrilhaUncheckedUpdateWithoutTrilhasCursosInput>
  }

  export type TrilhaUpdateWithoutTrilhasCursosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: CategoriaUpdateOneRequiredWithoutTrilhasNestedInput
    certificados?: CertificadoUpdateManyWithoutTrilhaNestedInput
  }

  export type TrilhaUncheckedUpdateWithoutTrilhasCursosInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoriaId?: IntFieldUpdateOperationsInput | number
    certificados?: CertificadoUncheckedUpdateManyWithoutTrilhaNestedInput
  }

  export type CursoUpsertWithoutTrilhasCursosInput = {
    update: XOR<CursoUpdateWithoutTrilhasCursosInput, CursoUncheckedUpdateWithoutTrilhasCursosInput>
    create: XOR<CursoCreateWithoutTrilhasCursosInput, CursoUncheckedCreateWithoutTrilhasCursosInput>
    where?: CursoWhereInput
  }

  export type CursoUpdateToOneWithWhereWithoutTrilhasCursosInput = {
    where?: CursoWhereInput
    data: XOR<CursoUpdateWithoutTrilhasCursosInput, CursoUncheckedUpdateWithoutTrilhasCursosInput>
  }

  export type CursoUpdateWithoutTrilhasCursosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAulas?: IntFieldUpdateOperationsInput | number
    totalHoras?: FloatFieldUpdateOperationsInput | number
    instrutor?: UsuarioUpdateOneRequiredWithoutCursosInstrutorNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutCursosNestedInput
    modulos?: ModuloUpdateManyWithoutCursoNestedInput
    matriculas?: MatriculaUpdateManyWithoutCursoNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutCursoNestedInput
    certificados?: CertificadoUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateWithoutTrilhasCursosInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    instrutorId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    nivel?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAulas?: IntFieldUpdateOperationsInput | number
    totalHoras?: FloatFieldUpdateOperationsInput | number
    modulos?: ModuloUncheckedUpdateManyWithoutCursoNestedInput
    matriculas?: MatriculaUncheckedUpdateManyWithoutCursoNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutCursoNestedInput
    certificados?: CertificadoUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type UsuarioCreateWithoutCertificadosInput = {
    nomeCompleto: string
    email: string
    senhaHash: string
    dataCadastro?: Date | string
    updatedAt?: Date | string
    cursosInstrutor?: CursoCreateNestedManyWithoutInstrutorInput
    matriculas?: MatriculaCreateNestedManyWithoutUsuarioInput
    progressos?: ProgressoAulaCreateNestedManyWithoutUsuarioInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutUsuarioInput
    assinaturas?: AssinaturaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutCertificadosInput = {
    id?: number
    nomeCompleto: string
    email: string
    senhaHash: string
    dataCadastro?: Date | string
    updatedAt?: Date | string
    cursosInstrutor?: CursoUncheckedCreateNestedManyWithoutInstrutorInput
    matriculas?: MatriculaUncheckedCreateNestedManyWithoutUsuarioInput
    progressos?: ProgressoAulaUncheckedCreateNestedManyWithoutUsuarioInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    assinaturas?: AssinaturaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutCertificadosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCertificadosInput, UsuarioUncheckedCreateWithoutCertificadosInput>
  }

  export type CursoCreateWithoutCertificadosInput = {
    titulo: string
    descricao: string
    nivel: string
    dataPublicacao?: Date | string
    totalAulas?: number
    totalHoras?: number
    instrutor: UsuarioCreateNestedOneWithoutCursosInstrutorInput
    categoria: CategoriaCreateNestedOneWithoutCursosInput
    modulos?: ModuloCreateNestedManyWithoutCursoInput
    matriculas?: MatriculaCreateNestedManyWithoutCursoInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutCursoInput
    trilhasCursos?: TrilhaCursoCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateWithoutCertificadosInput = {
    id?: number
    titulo: string
    descricao: string
    instrutorId: number
    categoriaId: number
    nivel: string
    dataPublicacao?: Date | string
    totalAulas?: number
    totalHoras?: number
    modulos?: ModuloUncheckedCreateNestedManyWithoutCursoInput
    matriculas?: MatriculaUncheckedCreateNestedManyWithoutCursoInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutCursoInput
    trilhasCursos?: TrilhaCursoUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoCreateOrConnectWithoutCertificadosInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutCertificadosInput, CursoUncheckedCreateWithoutCertificadosInput>
  }

  export type TrilhaCreateWithoutCertificadosInput = {
    titulo: string
    descricao: string
    categoria: CategoriaCreateNestedOneWithoutTrilhasInput
    trilhasCursos?: TrilhaCursoCreateNestedManyWithoutTrilhaInput
  }

  export type TrilhaUncheckedCreateWithoutCertificadosInput = {
    id?: number
    titulo: string
    descricao: string
    categoriaId: number
    trilhasCursos?: TrilhaCursoUncheckedCreateNestedManyWithoutTrilhaInput
  }

  export type TrilhaCreateOrConnectWithoutCertificadosInput = {
    where: TrilhaWhereUniqueInput
    create: XOR<TrilhaCreateWithoutCertificadosInput, TrilhaUncheckedCreateWithoutCertificadosInput>
  }

  export type UsuarioUpsertWithoutCertificadosInput = {
    update: XOR<UsuarioUpdateWithoutCertificadosInput, UsuarioUncheckedUpdateWithoutCertificadosInput>
    create: XOR<UsuarioCreateWithoutCertificadosInput, UsuarioUncheckedCreateWithoutCertificadosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutCertificadosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutCertificadosInput, UsuarioUncheckedUpdateWithoutCertificadosInput>
  }

  export type UsuarioUpdateWithoutCertificadosInput = {
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cursosInstrutor?: CursoUpdateManyWithoutInstrutorNestedInput
    matriculas?: MatriculaUpdateManyWithoutUsuarioNestedInput
    progressos?: ProgressoAulaUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutUsuarioNestedInput
    assinaturas?: AssinaturaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCertificadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cursosInstrutor?: CursoUncheckedUpdateManyWithoutInstrutorNestedInput
    matriculas?: MatriculaUncheckedUpdateManyWithoutUsuarioNestedInput
    progressos?: ProgressoAulaUncheckedUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    assinaturas?: AssinaturaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type CursoUpsertWithoutCertificadosInput = {
    update: XOR<CursoUpdateWithoutCertificadosInput, CursoUncheckedUpdateWithoutCertificadosInput>
    create: XOR<CursoCreateWithoutCertificadosInput, CursoUncheckedCreateWithoutCertificadosInput>
    where?: CursoWhereInput
  }

  export type CursoUpdateToOneWithWhereWithoutCertificadosInput = {
    where?: CursoWhereInput
    data: XOR<CursoUpdateWithoutCertificadosInput, CursoUncheckedUpdateWithoutCertificadosInput>
  }

  export type CursoUpdateWithoutCertificadosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAulas?: IntFieldUpdateOperationsInput | number
    totalHoras?: FloatFieldUpdateOperationsInput | number
    instrutor?: UsuarioUpdateOneRequiredWithoutCursosInstrutorNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutCursosNestedInput
    modulos?: ModuloUpdateManyWithoutCursoNestedInput
    matriculas?: MatriculaUpdateManyWithoutCursoNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutCursoNestedInput
    trilhasCursos?: TrilhaCursoUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateWithoutCertificadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    instrutorId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    nivel?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAulas?: IntFieldUpdateOperationsInput | number
    totalHoras?: FloatFieldUpdateOperationsInput | number
    modulos?: ModuloUncheckedUpdateManyWithoutCursoNestedInput
    matriculas?: MatriculaUncheckedUpdateManyWithoutCursoNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutCursoNestedInput
    trilhasCursos?: TrilhaCursoUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type TrilhaUpsertWithoutCertificadosInput = {
    update: XOR<TrilhaUpdateWithoutCertificadosInput, TrilhaUncheckedUpdateWithoutCertificadosInput>
    create: XOR<TrilhaCreateWithoutCertificadosInput, TrilhaUncheckedCreateWithoutCertificadosInput>
    where?: TrilhaWhereInput
  }

  export type TrilhaUpdateToOneWithWhereWithoutCertificadosInput = {
    where?: TrilhaWhereInput
    data: XOR<TrilhaUpdateWithoutCertificadosInput, TrilhaUncheckedUpdateWithoutCertificadosInput>
  }

  export type TrilhaUpdateWithoutCertificadosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: CategoriaUpdateOneRequiredWithoutTrilhasNestedInput
    trilhasCursos?: TrilhaCursoUpdateManyWithoutTrilhaNestedInput
  }

  export type TrilhaUncheckedUpdateWithoutCertificadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoriaId?: IntFieldUpdateOperationsInput | number
    trilhasCursos?: TrilhaCursoUncheckedUpdateManyWithoutTrilhaNestedInput
  }

  export type AssinaturaCreateWithoutPlanoInput = {
    dataInicio?: Date | string
    dataFim: Date | string
    usuario: UsuarioCreateNestedOneWithoutAssinaturasInput
    pagamentos?: PagamentoCreateNestedManyWithoutAssinaturaInput
  }

  export type AssinaturaUncheckedCreateWithoutPlanoInput = {
    id?: number
    usuarioId: number
    dataInicio?: Date | string
    dataFim: Date | string
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutAssinaturaInput
  }

  export type AssinaturaCreateOrConnectWithoutPlanoInput = {
    where: AssinaturaWhereUniqueInput
    create: XOR<AssinaturaCreateWithoutPlanoInput, AssinaturaUncheckedCreateWithoutPlanoInput>
  }

  export type AssinaturaCreateManyPlanoInputEnvelope = {
    data: AssinaturaCreateManyPlanoInput | AssinaturaCreateManyPlanoInput[]
    skipDuplicates?: boolean
  }

  export type AssinaturaUpsertWithWhereUniqueWithoutPlanoInput = {
    where: AssinaturaWhereUniqueInput
    update: XOR<AssinaturaUpdateWithoutPlanoInput, AssinaturaUncheckedUpdateWithoutPlanoInput>
    create: XOR<AssinaturaCreateWithoutPlanoInput, AssinaturaUncheckedCreateWithoutPlanoInput>
  }

  export type AssinaturaUpdateWithWhereUniqueWithoutPlanoInput = {
    where: AssinaturaWhereUniqueInput
    data: XOR<AssinaturaUpdateWithoutPlanoInput, AssinaturaUncheckedUpdateWithoutPlanoInput>
  }

  export type AssinaturaUpdateManyWithWhereWithoutPlanoInput = {
    where: AssinaturaScalarWhereInput
    data: XOR<AssinaturaUpdateManyMutationInput, AssinaturaUncheckedUpdateManyWithoutPlanoInput>
  }

  export type UsuarioCreateWithoutAssinaturasInput = {
    nomeCompleto: string
    email: string
    senhaHash: string
    dataCadastro?: Date | string
    updatedAt?: Date | string
    cursosInstrutor?: CursoCreateNestedManyWithoutInstrutorInput
    matriculas?: MatriculaCreateNestedManyWithoutUsuarioInput
    progressos?: ProgressoAulaCreateNestedManyWithoutUsuarioInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutUsuarioInput
    certificados?: CertificadoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutAssinaturasInput = {
    id?: number
    nomeCompleto: string
    email: string
    senhaHash: string
    dataCadastro?: Date | string
    updatedAt?: Date | string
    cursosInstrutor?: CursoUncheckedCreateNestedManyWithoutInstrutorInput
    matriculas?: MatriculaUncheckedCreateNestedManyWithoutUsuarioInput
    progressos?: ProgressoAulaUncheckedCreateNestedManyWithoutUsuarioInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    certificados?: CertificadoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutAssinaturasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAssinaturasInput, UsuarioUncheckedCreateWithoutAssinaturasInput>
  }

  export type PlanoCreateWithoutAssinaturasInput = {
    nome: string
    descricao: string
    preco: number
    duracaoMeses: number
  }

  export type PlanoUncheckedCreateWithoutAssinaturasInput = {
    id?: number
    nome: string
    descricao: string
    preco: number
    duracaoMeses: number
  }

  export type PlanoCreateOrConnectWithoutAssinaturasInput = {
    where: PlanoWhereUniqueInput
    create: XOR<PlanoCreateWithoutAssinaturasInput, PlanoUncheckedCreateWithoutAssinaturasInput>
  }

  export type PagamentoCreateWithoutAssinaturaInput = {
    valorPago: number
    dataPagamento?: Date | string
    metodoPagamento: string
    idTransacaoGateway: string
  }

  export type PagamentoUncheckedCreateWithoutAssinaturaInput = {
    id?: number
    valorPago: number
    dataPagamento?: Date | string
    metodoPagamento: string
    idTransacaoGateway: string
  }

  export type PagamentoCreateOrConnectWithoutAssinaturaInput = {
    where: PagamentoWhereUniqueInput
    create: XOR<PagamentoCreateWithoutAssinaturaInput, PagamentoUncheckedCreateWithoutAssinaturaInput>
  }

  export type PagamentoCreateManyAssinaturaInputEnvelope = {
    data: PagamentoCreateManyAssinaturaInput | PagamentoCreateManyAssinaturaInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutAssinaturasInput = {
    update: XOR<UsuarioUpdateWithoutAssinaturasInput, UsuarioUncheckedUpdateWithoutAssinaturasInput>
    create: XOR<UsuarioCreateWithoutAssinaturasInput, UsuarioUncheckedCreateWithoutAssinaturasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAssinaturasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAssinaturasInput, UsuarioUncheckedUpdateWithoutAssinaturasInput>
  }

  export type UsuarioUpdateWithoutAssinaturasInput = {
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cursosInstrutor?: CursoUpdateManyWithoutInstrutorNestedInput
    matriculas?: MatriculaUpdateManyWithoutUsuarioNestedInput
    progressos?: ProgressoAulaUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutUsuarioNestedInput
    certificados?: CertificadoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAssinaturasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cursosInstrutor?: CursoUncheckedUpdateManyWithoutInstrutorNestedInput
    matriculas?: MatriculaUncheckedUpdateManyWithoutUsuarioNestedInput
    progressos?: ProgressoAulaUncheckedUpdateManyWithoutUsuarioNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    certificados?: CertificadoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type PlanoUpsertWithoutAssinaturasInput = {
    update: XOR<PlanoUpdateWithoutAssinaturasInput, PlanoUncheckedUpdateWithoutAssinaturasInput>
    create: XOR<PlanoCreateWithoutAssinaturasInput, PlanoUncheckedCreateWithoutAssinaturasInput>
    where?: PlanoWhereInput
  }

  export type PlanoUpdateToOneWithWhereWithoutAssinaturasInput = {
    where?: PlanoWhereInput
    data: XOR<PlanoUpdateWithoutAssinaturasInput, PlanoUncheckedUpdateWithoutAssinaturasInput>
  }

  export type PlanoUpdateWithoutAssinaturasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    duracaoMeses?: IntFieldUpdateOperationsInput | number
  }

  export type PlanoUncheckedUpdateWithoutAssinaturasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    duracaoMeses?: IntFieldUpdateOperationsInput | number
  }

  export type PagamentoUpsertWithWhereUniqueWithoutAssinaturaInput = {
    where: PagamentoWhereUniqueInput
    update: XOR<PagamentoUpdateWithoutAssinaturaInput, PagamentoUncheckedUpdateWithoutAssinaturaInput>
    create: XOR<PagamentoCreateWithoutAssinaturaInput, PagamentoUncheckedCreateWithoutAssinaturaInput>
  }

  export type PagamentoUpdateWithWhereUniqueWithoutAssinaturaInput = {
    where: PagamentoWhereUniqueInput
    data: XOR<PagamentoUpdateWithoutAssinaturaInput, PagamentoUncheckedUpdateWithoutAssinaturaInput>
  }

  export type PagamentoUpdateManyWithWhereWithoutAssinaturaInput = {
    where: PagamentoScalarWhereInput
    data: XOR<PagamentoUpdateManyMutationInput, PagamentoUncheckedUpdateManyWithoutAssinaturaInput>
  }

  export type PagamentoScalarWhereInput = {
    AND?: PagamentoScalarWhereInput | PagamentoScalarWhereInput[]
    OR?: PagamentoScalarWhereInput[]
    NOT?: PagamentoScalarWhereInput | PagamentoScalarWhereInput[]
    id?: IntFilter<"Pagamento"> | number
    assinaturaId?: IntFilter<"Pagamento"> | number
    valorPago?: FloatFilter<"Pagamento"> | number
    dataPagamento?: DateTimeFilter<"Pagamento"> | Date | string
    metodoPagamento?: StringFilter<"Pagamento"> | string
    idTransacaoGateway?: StringFilter<"Pagamento"> | string
  }

  export type AssinaturaCreateWithoutPagamentosInput = {
    dataInicio?: Date | string
    dataFim: Date | string
    usuario: UsuarioCreateNestedOneWithoutAssinaturasInput
    plano: PlanoCreateNestedOneWithoutAssinaturasInput
  }

  export type AssinaturaUncheckedCreateWithoutPagamentosInput = {
    id?: number
    usuarioId: number
    planoId: number
    dataInicio?: Date | string
    dataFim: Date | string
  }

  export type AssinaturaCreateOrConnectWithoutPagamentosInput = {
    where: AssinaturaWhereUniqueInput
    create: XOR<AssinaturaCreateWithoutPagamentosInput, AssinaturaUncheckedCreateWithoutPagamentosInput>
  }

  export type AssinaturaUpsertWithoutPagamentosInput = {
    update: XOR<AssinaturaUpdateWithoutPagamentosInput, AssinaturaUncheckedUpdateWithoutPagamentosInput>
    create: XOR<AssinaturaCreateWithoutPagamentosInput, AssinaturaUncheckedCreateWithoutPagamentosInput>
    where?: AssinaturaWhereInput
  }

  export type AssinaturaUpdateToOneWithWhereWithoutPagamentosInput = {
    where?: AssinaturaWhereInput
    data: XOR<AssinaturaUpdateWithoutPagamentosInput, AssinaturaUncheckedUpdateWithoutPagamentosInput>
  }

  export type AssinaturaUpdateWithoutPagamentosInput = {
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutAssinaturasNestedInput
    plano?: PlanoUpdateOneRequiredWithoutAssinaturasNestedInput
  }

  export type AssinaturaUncheckedUpdateWithoutPagamentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    planoId?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CursoCreateManyInstrutorInput = {
    id?: number
    titulo: string
    descricao: string
    categoriaId: number
    nivel: string
    dataPublicacao?: Date | string
    totalAulas?: number
    totalHoras?: number
  }

  export type MatriculaCreateManyUsuarioInput = {
    id?: number
    cursoId: number
    dataMatricula?: Date | string
    dataConclusao?: Date | string | null
  }

  export type ProgressoAulaCreateManyUsuarioInput = {
    id?: number
    aulaId: number
    dataConclusao?: Date | string
    status: string
  }

  export type AvaliacaoCreateManyUsuarioInput = {
    id?: number
    cursoId: number
    nota: number
    comentario?: string | null
    dataAvaliacao?: Date | string
  }

  export type CertificadoCreateManyUsuarioInput = {
    id?: number
    cursoId: number
    trilhaId?: number | null
    codigoVerificacao: string
    dataEmissao?: Date | string
  }

  export type AssinaturaCreateManyUsuarioInput = {
    id?: number
    planoId: number
    dataInicio?: Date | string
    dataFim: Date | string
  }

  export type CursoUpdateWithoutInstrutorInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAulas?: IntFieldUpdateOperationsInput | number
    totalHoras?: FloatFieldUpdateOperationsInput | number
    categoria?: CategoriaUpdateOneRequiredWithoutCursosNestedInput
    modulos?: ModuloUpdateManyWithoutCursoNestedInput
    matriculas?: MatriculaUpdateManyWithoutCursoNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutCursoNestedInput
    certificados?: CertificadoUpdateManyWithoutCursoNestedInput
    trilhasCursos?: TrilhaCursoUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateWithoutInstrutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoriaId?: IntFieldUpdateOperationsInput | number
    nivel?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAulas?: IntFieldUpdateOperationsInput | number
    totalHoras?: FloatFieldUpdateOperationsInput | number
    modulos?: ModuloUncheckedUpdateManyWithoutCursoNestedInput
    matriculas?: MatriculaUncheckedUpdateManyWithoutCursoNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutCursoNestedInput
    certificados?: CertificadoUncheckedUpdateManyWithoutCursoNestedInput
    trilhasCursos?: TrilhaCursoUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateManyWithoutInstrutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoriaId?: IntFieldUpdateOperationsInput | number
    nivel?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAulas?: IntFieldUpdateOperationsInput | number
    totalHoras?: FloatFieldUpdateOperationsInput | number
  }

  export type MatriculaUpdateWithoutUsuarioInput = {
    dataMatricula?: DateTimeFieldUpdateOperationsInput | Date | string
    dataConclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    curso?: CursoUpdateOneRequiredWithoutMatriculasNestedInput
  }

  export type MatriculaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    dataMatricula?: DateTimeFieldUpdateOperationsInput | Date | string
    dataConclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MatriculaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    dataMatricula?: DateTimeFieldUpdateOperationsInput | Date | string
    dataConclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProgressoAulaUpdateWithoutUsuarioInput = {
    dataConclusao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    aula?: AulaUpdateOneRequiredWithoutProgressosNestedInput
  }

  export type ProgressoAulaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    aulaId?: IntFieldUpdateOperationsInput | number
    dataConclusao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ProgressoAulaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    aulaId?: IntFieldUpdateOperationsInput | number
    dataConclusao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AvaliacaoUpdateWithoutUsuarioInput = {
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    dataAvaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    curso?: CursoUpdateOneRequiredWithoutAvaliacoesNestedInput
  }

  export type AvaliacaoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    dataAvaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    dataAvaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificadoUpdateWithoutUsuarioInput = {
    codigoVerificacao?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    curso?: CursoUpdateOneRequiredWithoutCertificadosNestedInput
    trilha?: TrilhaUpdateOneWithoutCertificadosNestedInput
  }

  export type CertificadoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    trilhaId?: NullableIntFieldUpdateOperationsInput | number | null
    codigoVerificacao?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificadoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    trilhaId?: NullableIntFieldUpdateOperationsInput | number | null
    codigoVerificacao?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssinaturaUpdateWithoutUsuarioInput = {
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    plano?: PlanoUpdateOneRequiredWithoutAssinaturasNestedInput
    pagamentos?: PagamentoUpdateManyWithoutAssinaturaNestedInput
  }

  export type AssinaturaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    planoId?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamentos?: PagamentoUncheckedUpdateManyWithoutAssinaturaNestedInput
  }

  export type AssinaturaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    planoId?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CursoCreateManyCategoriaInput = {
    id?: number
    titulo: string
    descricao: string
    instrutorId: number
    nivel: string
    dataPublicacao?: Date | string
    totalAulas?: number
    totalHoras?: number
  }

  export type TrilhaCreateManyCategoriaInput = {
    id?: number
    titulo: string
    descricao: string
  }

  export type CursoUpdateWithoutCategoriaInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAulas?: IntFieldUpdateOperationsInput | number
    totalHoras?: FloatFieldUpdateOperationsInput | number
    instrutor?: UsuarioUpdateOneRequiredWithoutCursosInstrutorNestedInput
    modulos?: ModuloUpdateManyWithoutCursoNestedInput
    matriculas?: MatriculaUpdateManyWithoutCursoNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutCursoNestedInput
    certificados?: CertificadoUpdateManyWithoutCursoNestedInput
    trilhasCursos?: TrilhaCursoUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    instrutorId?: IntFieldUpdateOperationsInput | number
    nivel?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAulas?: IntFieldUpdateOperationsInput | number
    totalHoras?: FloatFieldUpdateOperationsInput | number
    modulos?: ModuloUncheckedUpdateManyWithoutCursoNestedInput
    matriculas?: MatriculaUncheckedUpdateManyWithoutCursoNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutCursoNestedInput
    certificados?: CertificadoUncheckedUpdateManyWithoutCursoNestedInput
    trilhasCursos?: TrilhaCursoUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    instrutorId?: IntFieldUpdateOperationsInput | number
    nivel?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAulas?: IntFieldUpdateOperationsInput | number
    totalHoras?: FloatFieldUpdateOperationsInput | number
  }

  export type TrilhaUpdateWithoutCategoriaInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    trilhasCursos?: TrilhaCursoUpdateManyWithoutTrilhaNestedInput
    certificados?: CertificadoUpdateManyWithoutTrilhaNestedInput
  }

  export type TrilhaUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    trilhasCursos?: TrilhaCursoUncheckedUpdateManyWithoutTrilhaNestedInput
    certificados?: CertificadoUncheckedUpdateManyWithoutTrilhaNestedInput
  }

  export type TrilhaUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type ModuloCreateManyCursoInput = {
    id?: number
    titulo: string
    ordem: number
  }

  export type MatriculaCreateManyCursoInput = {
    id?: number
    usuarioId: number
    dataMatricula?: Date | string
    dataConclusao?: Date | string | null
  }

  export type AvaliacaoCreateManyCursoInput = {
    id?: number
    usuarioId: number
    nota: number
    comentario?: string | null
    dataAvaliacao?: Date | string
  }

  export type CertificadoCreateManyCursoInput = {
    id?: number
    usuarioId: number
    trilhaId?: number | null
    codigoVerificacao: string
    dataEmissao?: Date | string
  }

  export type TrilhaCursoCreateManyCursoInput = {
    id?: number
    trilhaId: number
    ordem: number
  }

  export type ModuloUpdateWithoutCursoInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    aulas?: AulaUpdateManyWithoutModuloNestedInput
  }

  export type ModuloUncheckedUpdateWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    aulas?: AulaUncheckedUpdateManyWithoutModuloNestedInput
  }

  export type ModuloUncheckedUpdateManyWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type MatriculaUpdateWithoutCursoInput = {
    dataMatricula?: DateTimeFieldUpdateOperationsInput | Date | string
    dataConclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutMatriculasNestedInput
  }

  export type MatriculaUncheckedUpdateWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    dataMatricula?: DateTimeFieldUpdateOperationsInput | Date | string
    dataConclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MatriculaUncheckedUpdateManyWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    dataMatricula?: DateTimeFieldUpdateOperationsInput | Date | string
    dataConclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AvaliacaoUpdateWithoutCursoInput = {
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    dataAvaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutAvaliacoesNestedInput
  }

  export type AvaliacaoUncheckedUpdateWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    dataAvaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoUncheckedUpdateManyWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    nota?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    dataAvaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificadoUpdateWithoutCursoInput = {
    codigoVerificacao?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutCertificadosNestedInput
    trilha?: TrilhaUpdateOneWithoutCertificadosNestedInput
  }

  export type CertificadoUncheckedUpdateWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    trilhaId?: NullableIntFieldUpdateOperationsInput | number | null
    codigoVerificacao?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificadoUncheckedUpdateManyWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    trilhaId?: NullableIntFieldUpdateOperationsInput | number | null
    codigoVerificacao?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrilhaCursoUpdateWithoutCursoInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    trilha?: TrilhaUpdateOneRequiredWithoutTrilhasCursosNestedInput
  }

  export type TrilhaCursoUncheckedUpdateWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    trilhaId?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type TrilhaCursoUncheckedUpdateManyWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    trilhaId?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type AulaCreateManyModuloInput = {
    id?: number
    titulo: string
    tipoConteudo: string
    urlConteudo: string
    duracaoMinutos: number
    ordem: number
  }

  export type AulaUpdateWithoutModuloInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    tipoConteudo?: StringFieldUpdateOperationsInput | string
    urlConteudo?: StringFieldUpdateOperationsInput | string
    duracaoMinutos?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
    progressos?: ProgressoAulaUpdateManyWithoutAulaNestedInput
  }

  export type AulaUncheckedUpdateWithoutModuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    tipoConteudo?: StringFieldUpdateOperationsInput | string
    urlConteudo?: StringFieldUpdateOperationsInput | string
    duracaoMinutos?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
    progressos?: ProgressoAulaUncheckedUpdateManyWithoutAulaNestedInput
  }

  export type AulaUncheckedUpdateManyWithoutModuloInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    tipoConteudo?: StringFieldUpdateOperationsInput | string
    urlConteudo?: StringFieldUpdateOperationsInput | string
    duracaoMinutos?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type ProgressoAulaCreateManyAulaInput = {
    id?: number
    usuarioId: number
    dataConclusao?: Date | string
    status: string
  }

  export type ProgressoAulaUpdateWithoutAulaInput = {
    dataConclusao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutProgressosNestedInput
  }

  export type ProgressoAulaUncheckedUpdateWithoutAulaInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    dataConclusao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ProgressoAulaUncheckedUpdateManyWithoutAulaInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    dataConclusao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type TrilhaCursoCreateManyTrilhaInput = {
    id?: number
    cursoId: number
    ordem: number
  }

  export type CertificadoCreateManyTrilhaInput = {
    id?: number
    usuarioId: number
    cursoId: number
    codigoVerificacao: string
    dataEmissao?: Date | string
  }

  export type TrilhaCursoUpdateWithoutTrilhaInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    curso?: CursoUpdateOneRequiredWithoutTrilhasCursosNestedInput
  }

  export type TrilhaCursoUncheckedUpdateWithoutTrilhaInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type TrilhaCursoUncheckedUpdateManyWithoutTrilhaInput = {
    id?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type CertificadoUpdateWithoutTrilhaInput = {
    codigoVerificacao?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutCertificadosNestedInput
    curso?: CursoUpdateOneRequiredWithoutCertificadosNestedInput
  }

  export type CertificadoUncheckedUpdateWithoutTrilhaInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    codigoVerificacao?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificadoUncheckedUpdateManyWithoutTrilhaInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    codigoVerificacao?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssinaturaCreateManyPlanoInput = {
    id?: number
    usuarioId: number
    dataInicio?: Date | string
    dataFim: Date | string
  }

  export type AssinaturaUpdateWithoutPlanoInput = {
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutAssinaturasNestedInput
    pagamentos?: PagamentoUpdateManyWithoutAssinaturaNestedInput
  }

  export type AssinaturaUncheckedUpdateWithoutPlanoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamentos?: PagamentoUncheckedUpdateManyWithoutAssinaturaNestedInput
  }

  export type AssinaturaUncheckedUpdateManyWithoutPlanoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PagamentoCreateManyAssinaturaInput = {
    id?: number
    valorPago: number
    dataPagamento?: Date | string
    metodoPagamento: string
    idTransacaoGateway: string
  }

  export type PagamentoUpdateWithoutAssinaturaInput = {
    valorPago?: FloatFieldUpdateOperationsInput | number
    dataPagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    metodoPagamento?: StringFieldUpdateOperationsInput | string
    idTransacaoGateway?: StringFieldUpdateOperationsInput | string
  }

  export type PagamentoUncheckedUpdateWithoutAssinaturaInput = {
    id?: IntFieldUpdateOperationsInput | number
    valorPago?: FloatFieldUpdateOperationsInput | number
    dataPagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    metodoPagamento?: StringFieldUpdateOperationsInput | string
    idTransacaoGateway?: StringFieldUpdateOperationsInput | string
  }

  export type PagamentoUncheckedUpdateManyWithoutAssinaturaInput = {
    id?: IntFieldUpdateOperationsInput | number
    valorPago?: FloatFieldUpdateOperationsInput | number
    dataPagamento?: DateTimeFieldUpdateOperationsInput | Date | string
    metodoPagamento?: StringFieldUpdateOperationsInput | string
    idTransacaoGateway?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsuarioCountOutputTypeDefaultArgs instead
     */
    export type UsuarioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoriaCountOutputTypeDefaultArgs instead
     */
    export type CategoriaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoriaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CursoCountOutputTypeDefaultArgs instead
     */
    export type CursoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CursoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ModuloCountOutputTypeDefaultArgs instead
     */
    export type ModuloCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ModuloCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AulaCountOutputTypeDefaultArgs instead
     */
    export type AulaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AulaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrilhaCountOutputTypeDefaultArgs instead
     */
    export type TrilhaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrilhaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlanoCountOutputTypeDefaultArgs instead
     */
    export type PlanoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlanoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssinaturaCountOutputTypeDefaultArgs instead
     */
    export type AssinaturaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssinaturaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuarioDefaultArgs instead
     */
    export type UsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoriaDefaultArgs instead
     */
    export type CategoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoriaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CursoDefaultArgs instead
     */
    export type CursoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CursoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ModuloDefaultArgs instead
     */
    export type ModuloArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ModuloDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AulaDefaultArgs instead
     */
    export type AulaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AulaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MatriculaDefaultArgs instead
     */
    export type MatriculaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MatriculaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProgressoAulaDefaultArgs instead
     */
    export type ProgressoAulaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProgressoAulaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AvaliacaoDefaultArgs instead
     */
    export type AvaliacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AvaliacaoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrilhaDefaultArgs instead
     */
    export type TrilhaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrilhaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrilhaCursoDefaultArgs instead
     */
    export type TrilhaCursoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrilhaCursoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CertificadoDefaultArgs instead
     */
    export type CertificadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CertificadoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlanoDefaultArgs instead
     */
    export type PlanoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlanoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssinaturaDefaultArgs instead
     */
    export type AssinaturaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssinaturaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PagamentoDefaultArgs instead
     */
    export type PagamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PagamentoDefaultArgs<ExtArgs>

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