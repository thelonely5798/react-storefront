import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
    return async (): Promise<TData> => {
        const res = await fetch(endpoint, {
            method: 'POST',
            ...requestInit,
            body: JSON.stringify({ query, variables }),
        });

        const json = await res.json();

        if (json.errors) {
            const { message } = json.errors[0];

            throw new Error(message);
        }

        return json.data;
    }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    _Any: any;
    Date: any;
    DateTime: any;
    GenericScalar: any;
    JSONString: any;
    PositiveDecimal: any;
    Upload: any;
    UUID: any;
    WeightScalar: any;
};

export type _Entity = App | Address | User | Group | ProductVariant | Product | ProductType | Collection | Category | ProductMedia | PageType;

export type _Service = {
    __typename?: '_Service';
    sdl?: Maybe<Scalars['String']>;
};

export type AccountAddressCreate = {
    __typename?: 'AccountAddressCreate';
    user?: Maybe<User>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
    address?: Maybe<Address>;
};

export type AccountAddressDelete = {
    __typename?: 'AccountAddressDelete';
    user?: Maybe<User>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
    address?: Maybe<Address>;
};

export type AccountAddressUpdate = {
    __typename?: 'AccountAddressUpdate';
    user?: Maybe<User>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
    address?: Maybe<Address>;
};

export type AccountDelete = {
    __typename?: 'AccountDelete';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
    user?: Maybe<User>;
};

export type AccountError = {
    __typename?: 'AccountError';
    field?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    code: AccountErrorCode;
    addressType?: Maybe<AddressTypeEnum>;
};

export enum AccountErrorCode {
    ActivateOwnAccount = 'ACTIVATE_OWN_ACCOUNT',
    ActivateSuperuserAccount = 'ACTIVATE_SUPERUSER_ACCOUNT',
    DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
    DeactivateOwnAccount = 'DEACTIVATE_OWN_ACCOUNT',
    DeactivateSuperuserAccount = 'DEACTIVATE_SUPERUSER_ACCOUNT',
    DeleteNonStaffUser = 'DELETE_NON_STAFF_USER',
    DeleteOwnAccount = 'DELETE_OWN_ACCOUNT',
    DeleteStaffAccount = 'DELETE_STAFF_ACCOUNT',
    DeleteSuperuserAccount = 'DELETE_SUPERUSER_ACCOUNT',
    GraphqlError = 'GRAPHQL_ERROR',
    Inactive = 'INACTIVE',
    Invalid = 'INVALID',
    InvalidPassword = 'INVALID_PASSWORD',
    LeftNotManageablePermission = 'LEFT_NOT_MANAGEABLE_PERMISSION',
    InvalidCredentials = 'INVALID_CREDENTIALS',
    NotFound = 'NOT_FOUND',
    OutOfScopeUser = 'OUT_OF_SCOPE_USER',
    OutOfScopeGroup = 'OUT_OF_SCOPE_GROUP',
    OutOfScopePermission = 'OUT_OF_SCOPE_PERMISSION',
    PasswordEntirelyNumeric = 'PASSWORD_ENTIRELY_NUMERIC',
    PasswordTooCommon = 'PASSWORD_TOO_COMMON',
    PasswordTooShort = 'PASSWORD_TOO_SHORT',
    PasswordTooSimilar = 'PASSWORD_TOO_SIMILAR',
    Required = 'REQUIRED',
    Unique = 'UNIQUE',
    JwtSignatureExpired = 'JWT_SIGNATURE_EXPIRED',
    JwtInvalidToken = 'JWT_INVALID_TOKEN',
    JwtDecodeError = 'JWT_DECODE_ERROR',
    JwtMissingToken = 'JWT_MISSING_TOKEN',
    JwtInvalidCsrfToken = 'JWT_INVALID_CSRF_TOKEN',
    ChannelInactive = 'CHANNEL_INACTIVE',
    MissingChannelSlug = 'MISSING_CHANNEL_SLUG',
    AccountNotConfirmed = 'ACCOUNT_NOT_CONFIRMED'
}

export type AccountInput = {
    firstName?: InputMaybe<Scalars['String']>;
    lastName?: InputMaybe<Scalars['String']>;
    languageCode?: InputMaybe<LanguageCodeEnum>;
    defaultBillingAddress?: InputMaybe<AddressInput>;
    defaultShippingAddress?: InputMaybe<AddressInput>;
};

export type AccountRegister = {
    __typename?: 'AccountRegister';
    requiresConfirmation?: Maybe<Scalars['Boolean']>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
    user?: Maybe<User>;
};

export type AccountRegisterInput = {
    firstName?: InputMaybe<Scalars['String']>;
    lastName?: InputMaybe<Scalars['String']>;
    languageCode?: InputMaybe<LanguageCodeEnum>;
    email: Scalars['String'];
    password: Scalars['String'];
    redirectUrl?: InputMaybe<Scalars['String']>;
    metadata?: InputMaybe<Array<MetadataInput>>;
    channel?: InputMaybe<Scalars['String']>;
};

export type AccountRequestDeletion = {
    __typename?: 'AccountRequestDeletion';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type AccountSetDefaultAddress = {
    __typename?: 'AccountSetDefaultAddress';
    user?: Maybe<User>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type AccountUpdate = {
    __typename?: 'AccountUpdate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
    user?: Maybe<User>;
};

export type Address = Node & {
    __typename?: 'Address';
    id: Scalars['ID'];
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    companyName: Scalars['String'];
    streetAddress1: Scalars['String'];
    streetAddress2: Scalars['String'];
    city: Scalars['String'];
    cityArea: Scalars['String'];
    postalCode: Scalars['String'];
    country: CountryDisplay;
    countryArea: Scalars['String'];
    phone?: Maybe<Scalars['String']>;
    isDefaultShippingAddress?: Maybe<Scalars['Boolean']>;
    isDefaultBillingAddress?: Maybe<Scalars['Boolean']>;
};

export type AddressCreate = {
    __typename?: 'AddressCreate';
    user?: Maybe<User>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
    address?: Maybe<Address>;
};

export type AddressDelete = {
    __typename?: 'AddressDelete';
    user?: Maybe<User>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
    address?: Maybe<Address>;
};

export type AddressInput = {
    firstName?: InputMaybe<Scalars['String']>;
    lastName?: InputMaybe<Scalars['String']>;
    companyName?: InputMaybe<Scalars['String']>;
    streetAddress1?: InputMaybe<Scalars['String']>;
    streetAddress2?: InputMaybe<Scalars['String']>;
    city?: InputMaybe<Scalars['String']>;
    cityArea?: InputMaybe<Scalars['String']>;
    postalCode?: InputMaybe<Scalars['String']>;
    country?: InputMaybe<CountryCode>;
    countryArea?: InputMaybe<Scalars['String']>;
    phone?: InputMaybe<Scalars['String']>;
};

export type AddressSetDefault = {
    __typename?: 'AddressSetDefault';
    user?: Maybe<User>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export enum AddressTypeEnum {
    Billing = 'BILLING',
    Shipping = 'SHIPPING'
}

export type AddressUpdate = {
    __typename?: 'AddressUpdate';
    user?: Maybe<User>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
    address?: Maybe<Address>;
};

export type AddressValidationData = {
    __typename?: 'AddressValidationData';
    countryCode?: Maybe<Scalars['String']>;
    countryName?: Maybe<Scalars['String']>;
    addressFormat?: Maybe<Scalars['String']>;
    addressLatinFormat?: Maybe<Scalars['String']>;
    allowedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
    requiredFields?: Maybe<Array<Maybe<Scalars['String']>>>;
    upperFields?: Maybe<Array<Maybe<Scalars['String']>>>;
    countryAreaType?: Maybe<Scalars['String']>;
    countryAreaChoices?: Maybe<Array<Maybe<ChoiceValue>>>;
    cityType?: Maybe<Scalars['String']>;
    cityChoices?: Maybe<Array<Maybe<ChoiceValue>>>;
    cityAreaType?: Maybe<Scalars['String']>;
    cityAreaChoices?: Maybe<Array<Maybe<ChoiceValue>>>;
    postalCodeType?: Maybe<Scalars['String']>;
    postalCodeMatchers?: Maybe<Array<Maybe<Scalars['String']>>>;
    postalCodeExamples?: Maybe<Array<Maybe<Scalars['String']>>>;
    postalCodePrefix?: Maybe<Scalars['String']>;
};

export type Allocation = Node & {
    __typename?: 'Allocation';
    id: Scalars['ID'];
    quantity: Scalars['Int'];
    warehouse: Warehouse;
};

export type App = Node & ObjectWithMetadata & {
    __typename?: 'App';
    id: Scalars['ID'];
    privateMetadata: Array<Maybe<MetadataItem>>;
    metadata: Array<Maybe<MetadataItem>>;
    permissions?: Maybe<Array<Maybe<Permission>>>;
    created?: Maybe<Scalars['DateTime']>;
    isActive?: Maybe<Scalars['Boolean']>;
    name?: Maybe<Scalars['String']>;
    type?: Maybe<AppTypeEnum>;
    tokens?: Maybe<Array<Maybe<AppToken>>>;
    webhooks?: Maybe<Array<Maybe<Webhook>>>;
    aboutApp?: Maybe<Scalars['String']>;
    dataPrivacy?: Maybe<Scalars['String']>;
    dataPrivacyUrl?: Maybe<Scalars['String']>;
    homepageUrl?: Maybe<Scalars['String']>;
    supportUrl?: Maybe<Scalars['String']>;
    configurationUrl?: Maybe<Scalars['String']>;
    appUrl?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
    accessToken?: Maybe<Scalars['String']>;
    extensions: Array<AppExtension>;
};

export type AppActivate = {
    __typename?: 'AppActivate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    appErrors: Array<AppError>;
    errors: Array<AppError>;
    app?: Maybe<App>;
};

export type AppCountableConnection = {
    __typename?: 'AppCountableConnection';
    pageInfo: PageInfo;
    edges: Array<AppCountableEdge>;
    totalCount?: Maybe<Scalars['Int']>;
};

export type AppCountableEdge = {
    __typename?: 'AppCountableEdge';
    node: App;
    cursor: Scalars['String'];
};

export type AppCreate = {
    __typename?: 'AppCreate';
    authToken?: Maybe<Scalars['String']>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    appErrors: Array<AppError>;
    errors: Array<AppError>;
    app?: Maybe<App>;
};

export type AppDeactivate = {
    __typename?: 'AppDeactivate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    appErrors: Array<AppError>;
    errors: Array<AppError>;
    app?: Maybe<App>;
};

export type AppDelete = {
    __typename?: 'AppDelete';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    appErrors: Array<AppError>;
    errors: Array<AppError>;
    app?: Maybe<App>;
};

export type AppDeleteFailedInstallation = {
    __typename?: 'AppDeleteFailedInstallation';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    appErrors: Array<AppError>;
    errors: Array<AppError>;
    appInstallation?: Maybe<AppInstallation>;
};

export type AppError = {
    __typename?: 'AppError';
    field?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    code: AppErrorCode;
    permissions?: Maybe<Array<PermissionEnum>>;
};

export enum AppErrorCode {
    Forbidden = 'FORBIDDEN',
    GraphqlError = 'GRAPHQL_ERROR',
    Invalid = 'INVALID',
    InvalidStatus = 'INVALID_STATUS',
    InvalidPermission = 'INVALID_PERMISSION',
    InvalidUrlFormat = 'INVALID_URL_FORMAT',
    InvalidManifestFormat = 'INVALID_MANIFEST_FORMAT',
    ManifestUrlCantConnect = 'MANIFEST_URL_CANT_CONNECT',
    NotFound = 'NOT_FOUND',
    Required = 'REQUIRED',
    Unique = 'UNIQUE',
    OutOfScopeApp = 'OUT_OF_SCOPE_APP',
    OutOfScopePermission = 'OUT_OF_SCOPE_PERMISSION'
}

export type AppExtension = Node & {
    __typename?: 'AppExtension';
    id: Scalars['ID'];
    permissions: Array<Permission>;
    label: Scalars['String'];
    url: Scalars['String'];
    mount: AppExtensionMountEnum;
    target: AppExtensionTargetEnum;
    app: App;
    accessToken?: Maybe<Scalars['String']>;
};

export type AppExtensionCountableConnection = {
    __typename?: 'AppExtensionCountableConnection';
    pageInfo: PageInfo;
    edges: Array<AppExtensionCountableEdge>;
    totalCount?: Maybe<Scalars['Int']>;
};

export type AppExtensionCountableEdge = {
    __typename?: 'AppExtensionCountableEdge';
    node: AppExtension;
    cursor: Scalars['String'];
};

export type AppExtensionFilterInput = {
    mount?: InputMaybe<Array<InputMaybe<AppExtensionMountEnum>>>;
    target?: InputMaybe<AppExtensionTargetEnum>;
};

export enum AppExtensionMountEnum {
    ProductOverviewCreate = 'PRODUCT_OVERVIEW_CREATE',
    ProductOverviewMoreActions = 'PRODUCT_OVERVIEW_MORE_ACTIONS',
    ProductDetailsMoreActions = 'PRODUCT_DETAILS_MORE_ACTIONS',
    NavigationCatalog = 'NAVIGATION_CATALOG',
    NavigationOrders = 'NAVIGATION_ORDERS',
    NavigationCustomers = 'NAVIGATION_CUSTOMERS',
    NavigationDiscounts = 'NAVIGATION_DISCOUNTS',
    NavigationTranslations = 'NAVIGATION_TRANSLATIONS',
    NavigationPages = 'NAVIGATION_PAGES'
}

export enum AppExtensionTargetEnum {
    Popup = 'POPUP',
    AppPage = 'APP_PAGE'
}

export type AppFetchManifest = {
    __typename?: 'AppFetchManifest';
    manifest?: Maybe<Manifest>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    appErrors: Array<AppError>;
    errors: Array<AppError>;
};

export type AppFilterInput = {
    search?: InputMaybe<Scalars['String']>;
    isActive?: InputMaybe<Scalars['Boolean']>;
    type?: InputMaybe<AppTypeEnum>;
};

export type AppInput = {
    name?: InputMaybe<Scalars['String']>;
    permissions?: InputMaybe<Array<InputMaybe<PermissionEnum>>>;
};

export type AppInstall = {
    __typename?: 'AppInstall';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    appErrors: Array<AppError>;
    errors: Array<AppError>;
    appInstallation?: Maybe<AppInstallation>;
};

export type AppInstallation = Node & Job & {
    __typename?: 'AppInstallation';
    id: Scalars['ID'];
    status: JobStatusEnum;
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    message?: Maybe<Scalars['String']>;
    appName: Scalars['String'];
    manifestUrl: Scalars['String'];
};

export type AppInstallInput = {
    appName?: InputMaybe<Scalars['String']>;
    manifestUrl?: InputMaybe<Scalars['String']>;
    activateAfterInstallation?: InputMaybe<Scalars['Boolean']>;
    permissions?: InputMaybe<Array<InputMaybe<PermissionEnum>>>;
};

export type AppManifestExtension = {
    __typename?: 'AppManifestExtension';
    permissions: Array<Permission>;
    label: Scalars['String'];
    url: Scalars['String'];
    mount: AppExtensionMountEnum;
    target: AppExtensionTargetEnum;
};

export type AppRetryInstall = {
    __typename?: 'AppRetryInstall';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    appErrors: Array<AppError>;
    errors: Array<AppError>;
    appInstallation?: Maybe<AppInstallation>;
};

export enum AppSortField {
    Name = 'NAME',
    CreationDate = 'CREATION_DATE'
}

export type AppSortingInput = {
    direction: OrderDirection;
    field: AppSortField;
};

export type AppToken = Node & {
    __typename?: 'AppToken';
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    authToken?: Maybe<Scalars['String']>;
};

export type AppTokenCreate = {
    __typename?: 'AppTokenCreate';
    authToken?: Maybe<Scalars['String']>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    appErrors: Array<AppError>;
    errors: Array<AppError>;
    appToken?: Maybe<AppToken>;
};

export type AppTokenDelete = {
    __typename?: 'AppTokenDelete';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    appErrors: Array<AppError>;
    errors: Array<AppError>;
    appToken?: Maybe<AppToken>;
};

export type AppTokenInput = {
    name?: InputMaybe<Scalars['String']>;
    app: Scalars['ID'];
};

export type AppTokenVerify = {
    __typename?: 'AppTokenVerify';
    valid: Scalars['Boolean'];
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    appErrors: Array<AppError>;
    errors: Array<AppError>;
};

export enum AppTypeEnum {
    Local = 'LOCAL',
    Thirdparty = 'THIRDPARTY'
}

export type AppUpdate = {
    __typename?: 'AppUpdate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    appErrors: Array<AppError>;
    errors: Array<AppError>;
    app?: Maybe<App>;
};

export enum AreaUnitsEnum {
    SqCm = 'SQ_CM',
    SqM = 'SQ_M',
    SqKm = 'SQ_KM',
    SqFt = 'SQ_FT',
    SqYd = 'SQ_YD',
    SqInch = 'SQ_INCH'
}

export type AssignedVariantAttribute = {
    __typename?: 'AssignedVariantAttribute';
    attribute: Attribute;
    variantSelection: Scalars['Boolean'];
};

export type AssignNavigation = {
    __typename?: 'AssignNavigation';
    menu?: Maybe<Menu>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    menuErrors: Array<MenuError>;
    errors: Array<MenuError>;
};

export type Attribute = Node & ObjectWithMetadata & {
    __typename?: 'Attribute';
    id: Scalars['ID'];
    privateMetadata: Array<Maybe<MetadataItem>>;
    metadata: Array<Maybe<MetadataItem>>;
    inputType?: Maybe<AttributeInputTypeEnum>;
    entityType?: Maybe<AttributeEntityTypeEnum>;
    name?: Maybe<Scalars['String']>;
    slug?: Maybe<Scalars['String']>;
    type?: Maybe<AttributeTypeEnum>;
    unit?: Maybe<MeasurementUnitsEnum>;
    choices?: Maybe<AttributeValueCountableConnection>;
    valueRequired: Scalars['Boolean'];
    visibleInStorefront: Scalars['Boolean'];
    filterableInStorefront: Scalars['Boolean'];
    filterableInDashboard: Scalars['Boolean'];
    availableInGrid: Scalars['Boolean'];
    translation?: Maybe<AttributeTranslation>;
    storefrontSearchPosition: Scalars['Int'];
    withChoices: Scalars['Boolean'];
    productTypes: ProductTypeCountableConnection;
    productVariantTypes: ProductTypeCountableConnection;
};


export type AttributeChoicesArgs = {
    sortBy?: InputMaybe<AttributeChoicesSortingInput>;
    filter?: InputMaybe<AttributeValueFilterInput>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type AttributeTranslationArgs = {
    languageCode: LanguageCodeEnum;
};


export type AttributeProductTypesArgs = {
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type AttributeProductVariantTypesArgs = {
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};

export type AttributeBulkDelete = {
    __typename?: 'AttributeBulkDelete';
    count: Scalars['Int'];
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    attributeErrors: Array<AttributeError>;
    errors: Array<AttributeError>;
};

export enum AttributeChoicesSortField {
    Name = 'NAME',
    Slug = 'SLUG'
}

export type AttributeChoicesSortingInput = {
    direction: OrderDirection;
    field: AttributeChoicesSortField;
};

export type AttributeCountableConnection = {
    __typename?: 'AttributeCountableConnection';
    pageInfo: PageInfo;
    edges: Array<AttributeCountableEdge>;
    totalCount?: Maybe<Scalars['Int']>;
};

export type AttributeCountableEdge = {
    __typename?: 'AttributeCountableEdge';
    node: Attribute;
    cursor: Scalars['String'];
};

export type AttributeCreate = {
    __typename?: 'AttributeCreate';
    attribute?: Maybe<Attribute>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    attributeErrors: Array<AttributeError>;
    errors: Array<AttributeError>;
};

export type AttributeCreateInput = {
    inputType?: InputMaybe<AttributeInputTypeEnum>;
    entityType?: InputMaybe<AttributeEntityTypeEnum>;
    name: Scalars['String'];
    slug?: InputMaybe<Scalars['String']>;
    type: AttributeTypeEnum;
    unit?: InputMaybe<MeasurementUnitsEnum>;
    values?: InputMaybe<Array<InputMaybe<AttributeValueCreateInput>>>;
    valueRequired?: InputMaybe<Scalars['Boolean']>;
    isVariantOnly?: InputMaybe<Scalars['Boolean']>;
    visibleInStorefront?: InputMaybe<Scalars['Boolean']>;
    filterableInStorefront?: InputMaybe<Scalars['Boolean']>;
    filterableInDashboard?: InputMaybe<Scalars['Boolean']>;
    storefrontSearchPosition?: InputMaybe<Scalars['Int']>;
    availableInGrid?: InputMaybe<Scalars['Boolean']>;
};

export type AttributeDelete = {
    __typename?: 'AttributeDelete';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    attributeErrors: Array<AttributeError>;
    errors: Array<AttributeError>;
    attribute?: Maybe<Attribute>;
};

export enum AttributeEntityTypeEnum {
    Page = 'PAGE',
    Product = 'PRODUCT'
}

export type AttributeError = {
    __typename?: 'AttributeError';
    field?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    code: AttributeErrorCode;
};

export enum AttributeErrorCode {
    AlreadyExists = 'ALREADY_EXISTS',
    GraphqlError = 'GRAPHQL_ERROR',
    Invalid = 'INVALID',
    NotFound = 'NOT_FOUND',
    Required = 'REQUIRED',
    Unique = 'UNIQUE'
}

export type AttributeFilterInput = {
    valueRequired?: InputMaybe<Scalars['Boolean']>;
    isVariantOnly?: InputMaybe<Scalars['Boolean']>;
    visibleInStorefront?: InputMaybe<Scalars['Boolean']>;
    filterableInStorefront?: InputMaybe<Scalars['Boolean']>;
    filterableInDashboard?: InputMaybe<Scalars['Boolean']>;
    availableInGrid?: InputMaybe<Scalars['Boolean']>;
    metadata?: InputMaybe<Array<InputMaybe<MetadataFilter>>>;
    search?: InputMaybe<Scalars['String']>;
    ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    type?: InputMaybe<AttributeTypeEnum>;
    inCollection?: InputMaybe<Scalars['ID']>;
    inCategory?: InputMaybe<Scalars['ID']>;
    channel?: InputMaybe<Scalars['String']>;
};

export type AttributeInput = {
    slug: Scalars['String'];
    values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    valuesRange?: InputMaybe<IntRangeInput>;
    dateTime?: InputMaybe<DateTimeRangeInput>;
    date?: InputMaybe<DateRangeInput>;
    boolean?: InputMaybe<Scalars['Boolean']>;
};

export enum AttributeInputTypeEnum {
    Dropdown = 'DROPDOWN',
    Multiselect = 'MULTISELECT',
    File = 'FILE',
    Reference = 'REFERENCE',
    Numeric = 'NUMERIC',
    RichText = 'RICH_TEXT',
    Swatch = 'SWATCH',
    Boolean = 'BOOLEAN',
    Date = 'DATE',
    DateTime = 'DATE_TIME'
}

export type AttributeReorderValues = {
    __typename?: 'AttributeReorderValues';
    attribute?: Maybe<Attribute>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    attributeErrors: Array<AttributeError>;
    errors: Array<AttributeError>;
};

export enum AttributeSortField {
    Name = 'NAME',
    Slug = 'SLUG',
    ValueRequired = 'VALUE_REQUIRED',
    IsVariantOnly = 'IS_VARIANT_ONLY',
    VisibleInStorefront = 'VISIBLE_IN_STOREFRONT',
    FilterableInStorefront = 'FILTERABLE_IN_STOREFRONT',
    FilterableInDashboard = 'FILTERABLE_IN_DASHBOARD',
    StorefrontSearchPosition = 'STOREFRONT_SEARCH_POSITION',
    AvailableInGrid = 'AVAILABLE_IN_GRID'
}

export type AttributeSortingInput = {
    direction: OrderDirection;
    field: AttributeSortField;
};

export type AttributeTranslatableContent = Node & {
    __typename?: 'AttributeTranslatableContent';
    id: Scalars['ID'];
    name: Scalars['String'];
    translation?: Maybe<AttributeTranslation>;
    /** @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries. */
    attribute?: Maybe<Attribute>;
};


export type AttributeTranslatableContentTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type AttributeTranslate = {
    __typename?: 'AttributeTranslate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    translationErrors: Array<TranslationError>;
    errors: Array<TranslationError>;
    attribute?: Maybe<Attribute>;
};

export type AttributeTranslation = Node & {
    __typename?: 'AttributeTranslation';
    id: Scalars['ID'];
    language: LanguageDisplay;
    name: Scalars['String'];
};

export enum AttributeTypeEnum {
    ProductType = 'PRODUCT_TYPE',
    PageType = 'PAGE_TYPE'
}

export type AttributeUpdate = {
    __typename?: 'AttributeUpdate';
    attribute?: Maybe<Attribute>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    attributeErrors: Array<AttributeError>;
    errors: Array<AttributeError>;
};

export type AttributeUpdateInput = {
    name?: InputMaybe<Scalars['String']>;
    slug?: InputMaybe<Scalars['String']>;
    unit?: InputMaybe<MeasurementUnitsEnum>;
    removeValues?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    addValues?: InputMaybe<Array<InputMaybe<AttributeValueUpdateInput>>>;
    valueRequired?: InputMaybe<Scalars['Boolean']>;
    isVariantOnly?: InputMaybe<Scalars['Boolean']>;
    visibleInStorefront?: InputMaybe<Scalars['Boolean']>;
    filterableInStorefront?: InputMaybe<Scalars['Boolean']>;
    filterableInDashboard?: InputMaybe<Scalars['Boolean']>;
    storefrontSearchPosition?: InputMaybe<Scalars['Int']>;
    availableInGrid?: InputMaybe<Scalars['Boolean']>;
};

export type AttributeValue = Node & {
    __typename?: 'AttributeValue';
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    slug?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
    translation?: Maybe<AttributeValueTranslation>;
    inputType?: Maybe<AttributeInputTypeEnum>;
    reference?: Maybe<Scalars['ID']>;
    file?: Maybe<File>;
    richText?: Maybe<Scalars['JSONString']>;
    boolean?: Maybe<Scalars['Boolean']>;
    date?: Maybe<Scalars['Date']>;
    dateTime?: Maybe<Scalars['DateTime']>;
};


export type AttributeValueTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type AttributeValueBulkDelete = {
    __typename?: 'AttributeValueBulkDelete';
    count: Scalars['Int'];
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    attributeErrors: Array<AttributeError>;
    errors: Array<AttributeError>;
};

export type AttributeValueCountableConnection = {
    __typename?: 'AttributeValueCountableConnection';
    pageInfo: PageInfo;
    edges: Array<AttributeValueCountableEdge>;
    totalCount?: Maybe<Scalars['Int']>;
};

export type AttributeValueCountableEdge = {
    __typename?: 'AttributeValueCountableEdge';
    node: AttributeValue;
    cursor: Scalars['String'];
};

export type AttributeValueCreate = {
    __typename?: 'AttributeValueCreate';
    attribute?: Maybe<Attribute>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    attributeErrors: Array<AttributeError>;
    errors: Array<AttributeError>;
    attributeValue?: Maybe<AttributeValue>;
};

export type AttributeValueCreateInput = {
    value?: InputMaybe<Scalars['String']>;
    richText?: InputMaybe<Scalars['JSONString']>;
    fileUrl?: InputMaybe<Scalars['String']>;
    contentType?: InputMaybe<Scalars['String']>;
    name: Scalars['String'];
};

export type AttributeValueDelete = {
    __typename?: 'AttributeValueDelete';
    attribute?: Maybe<Attribute>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    attributeErrors: Array<AttributeError>;
    errors: Array<AttributeError>;
    attributeValue?: Maybe<AttributeValue>;
};

export type AttributeValueFilterInput = {
    search?: InputMaybe<Scalars['String']>;
};

export type AttributeValueInput = {
    id?: InputMaybe<Scalars['ID']>;
    values?: InputMaybe<Array<Scalars['String']>>;
    file?: InputMaybe<Scalars['String']>;
    contentType?: InputMaybe<Scalars['String']>;
    references?: InputMaybe<Array<Scalars['ID']>>;
    richText?: InputMaybe<Scalars['JSONString']>;
    boolean?: InputMaybe<Scalars['Boolean']>;
    date?: InputMaybe<Scalars['Date']>;
    dateTime?: InputMaybe<Scalars['DateTime']>;
};

export type AttributeValueTranslatableContent = Node & {
    __typename?: 'AttributeValueTranslatableContent';
    id: Scalars['ID'];
    name: Scalars['String'];
    richText?: Maybe<Scalars['JSONString']>;
    translation?: Maybe<AttributeValueTranslation>;
    /** @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries. */
    attributeValue?: Maybe<AttributeValue>;
};


export type AttributeValueTranslatableContentTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type AttributeValueTranslate = {
    __typename?: 'AttributeValueTranslate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    translationErrors: Array<TranslationError>;
    errors: Array<TranslationError>;
    attributeValue?: Maybe<AttributeValue>;
};

export type AttributeValueTranslation = Node & {
    __typename?: 'AttributeValueTranslation';
    id: Scalars['ID'];
    language: LanguageDisplay;
    name: Scalars['String'];
    richText?: Maybe<Scalars['JSONString']>;
};

export type AttributeValueTranslationInput = {
    name?: InputMaybe<Scalars['String']>;
    richText?: InputMaybe<Scalars['JSONString']>;
};

export type AttributeValueUpdate = {
    __typename?: 'AttributeValueUpdate';
    attribute?: Maybe<Attribute>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    attributeErrors: Array<AttributeError>;
    errors: Array<AttributeError>;
    attributeValue?: Maybe<AttributeValue>;
};

export type AttributeValueUpdateInput = {
    value?: InputMaybe<Scalars['String']>;
    richText?: InputMaybe<Scalars['JSONString']>;
    fileUrl?: InputMaybe<Scalars['String']>;
    contentType?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
};

export type BulkAttributeValueInput = {
    id?: InputMaybe<Scalars['ID']>;
    values?: InputMaybe<Array<Scalars['String']>>;
    boolean?: InputMaybe<Scalars['Boolean']>;
};

export type BulkProductError = {
    __typename?: 'BulkProductError';
    field?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    code: ProductErrorCode;
    attributes?: Maybe<Array<Scalars['ID']>>;
    values?: Maybe<Array<Scalars['ID']>>;
    index?: Maybe<Scalars['Int']>;
    warehouses?: Maybe<Array<Scalars['ID']>>;
    channels?: Maybe<Array<Scalars['ID']>>;
};

export type BulkStockError = {
    __typename?: 'BulkStockError';
    field?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    code: ProductErrorCode;
    attributes?: Maybe<Array<Scalars['ID']>>;
    values?: Maybe<Array<Scalars['ID']>>;
    index?: Maybe<Scalars['Int']>;
};

export type CardInput = {
    code: Scalars['String'];
    cvc?: InputMaybe<Scalars['String']>;
    money: MoneyInput;
};

export type CatalogueInput = {
    products?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    collections?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    variants?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type Category = Node & ObjectWithMetadata & {
    __typename?: 'Category';
    id: Scalars['ID'];
    privateMetadata: Array<Maybe<MetadataItem>>;
    metadata: Array<Maybe<MetadataItem>>;
    seoTitle?: Maybe<Scalars['String']>;
    seoDescription?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    description?: Maybe<Scalars['JSONString']>;
    slug: Scalars['String'];
    parent?: Maybe<Category>;
    level: Scalars['Int'];
    /** @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead. */
    descriptionJson?: Maybe<Scalars['JSONString']>;
    ancestors?: Maybe<CategoryCountableConnection>;
    products?: Maybe<ProductCountableConnection>;
    children?: Maybe<CategoryCountableConnection>;
    backgroundImage?: Maybe<Image>;
    translation?: Maybe<CategoryTranslation>;
};


export type CategoryAncestorsArgs = {
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type CategoryProductsArgs = {
    channel?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type CategoryChildrenArgs = {
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type CategoryBackgroundImageArgs = {
    size?: InputMaybe<Scalars['Int']>;
};


export type CategoryTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type CategoryBulkDelete = {
    __typename?: 'CategoryBulkDelete';
    count: Scalars['Int'];
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type CategoryCountableConnection = {
    __typename?: 'CategoryCountableConnection';
    pageInfo: PageInfo;
    edges: Array<CategoryCountableEdge>;
    totalCount?: Maybe<Scalars['Int']>;
};

export type CategoryCountableEdge = {
    __typename?: 'CategoryCountableEdge';
    node: Category;
    cursor: Scalars['String'];
};

export type CategoryCreate = {
    __typename?: 'CategoryCreate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
    category?: Maybe<Category>;
};

export type CategoryDelete = {
    __typename?: 'CategoryDelete';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
    category?: Maybe<Category>;
};

export type CategoryFilterInput = {
    search?: InputMaybe<Scalars['String']>;
    metadata?: InputMaybe<Array<InputMaybe<MetadataFilter>>>;
    ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type CategoryInput = {
    description?: InputMaybe<Scalars['JSONString']>;
    name?: InputMaybe<Scalars['String']>;
    slug?: InputMaybe<Scalars['String']>;
    seo?: InputMaybe<SeoInput>;
    backgroundImage?: InputMaybe<Scalars['Upload']>;
    backgroundImageAlt?: InputMaybe<Scalars['String']>;
};

export enum CategorySortField {
    Name = 'NAME',
    ProductCount = 'PRODUCT_COUNT',
    SubcategoryCount = 'SUBCATEGORY_COUNT'
}

export type CategorySortingInput = {
    direction: OrderDirection;
    channel?: InputMaybe<Scalars['String']>;
    field: CategorySortField;
};

export type CategoryTranslatableContent = Node & {
    __typename?: 'CategoryTranslatableContent';
    id: Scalars['ID'];
    seoTitle?: Maybe<Scalars['String']>;
    seoDescription?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    description?: Maybe<Scalars['JSONString']>;
    /** @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead. */
    descriptionJson?: Maybe<Scalars['JSONString']>;
    translation?: Maybe<CategoryTranslation>;
    /** @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries. */
    category?: Maybe<Category>;
};


export type CategoryTranslatableContentTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type CategoryTranslate = {
    __typename?: 'CategoryTranslate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    translationErrors: Array<TranslationError>;
    errors: Array<TranslationError>;
    category?: Maybe<Category>;
};

export type CategoryTranslation = Node & {
    __typename?: 'CategoryTranslation';
    id: Scalars['ID'];
    language: LanguageDisplay;
    seoTitle?: Maybe<Scalars['String']>;
    seoDescription?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['JSONString']>;
    /** @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead. */
    descriptionJson?: Maybe<Scalars['JSONString']>;
};

export type CategoryUpdate = {
    __typename?: 'CategoryUpdate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
    category?: Maybe<Category>;
};

export type Channel = Node & {
    __typename?: 'Channel';
    id: Scalars['ID'];
    name: Scalars['String'];
    isActive: Scalars['Boolean'];
    currencyCode: Scalars['String'];
    slug: Scalars['String'];
    hasOrders: Scalars['Boolean'];
    defaultCountry: CountryDisplay;
};

export type ChannelActivate = {
    __typename?: 'ChannelActivate';
    channel?: Maybe<Channel>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    channelErrors: Array<ChannelError>;
    errors: Array<ChannelError>;
};

export type ChannelCreate = {
    __typename?: 'ChannelCreate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    channelErrors: Array<ChannelError>;
    errors: Array<ChannelError>;
    channel?: Maybe<Channel>;
};

export type ChannelCreateInput = {
    isActive?: InputMaybe<Scalars['Boolean']>;
    name: Scalars['String'];
    slug: Scalars['String'];
    currencyCode: Scalars['String'];
    defaultCountry: CountryCode;
    addShippingZones?: InputMaybe<Array<Scalars['ID']>>;
};

export type ChannelDeactivate = {
    __typename?: 'ChannelDeactivate';
    channel?: Maybe<Channel>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    channelErrors: Array<ChannelError>;
    errors: Array<ChannelError>;
};

export type ChannelDelete = {
    __typename?: 'ChannelDelete';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    channelErrors: Array<ChannelError>;
    errors: Array<ChannelError>;
    channel?: Maybe<Channel>;
};

export type ChannelDeleteInput = {
    channelId: Scalars['ID'];
};

export type ChannelError = {
    __typename?: 'ChannelError';
    field?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    code: ChannelErrorCode;
    shippingZones?: Maybe<Array<Scalars['ID']>>;
};

export enum ChannelErrorCode {
    AlreadyExists = 'ALREADY_EXISTS',
    GraphqlError = 'GRAPHQL_ERROR',
    Invalid = 'INVALID',
    NotFound = 'NOT_FOUND',
    Required = 'REQUIRED',
    Unique = 'UNIQUE',
    ChannelsCurrencyMustBeTheSame = 'CHANNELS_CURRENCY_MUST_BE_THE_SAME',
    ChannelWithOrders = 'CHANNEL_WITH_ORDERS',
    DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM'
}

export type ChannelUpdate = {
    __typename?: 'ChannelUpdate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    channelErrors: Array<ChannelError>;
    errors: Array<ChannelError>;
    channel?: Maybe<Channel>;
};

export type ChannelUpdateInput = {
    isActive?: InputMaybe<Scalars['Boolean']>;
    name?: InputMaybe<Scalars['String']>;
    slug?: InputMaybe<Scalars['String']>;
    defaultCountry?: InputMaybe<CountryCode>;
    addShippingZones?: InputMaybe<Array<Scalars['ID']>>;
    removeShippingZones?: InputMaybe<Array<Scalars['ID']>>;
};

export type Checkout = Node & ObjectWithMetadata & {
    __typename?: 'Checkout';
    id: Scalars['ID'];
    privateMetadata: Array<Maybe<MetadataItem>>;
    metadata: Array<Maybe<MetadataItem>>;
    created: Scalars['DateTime'];
    lastChange: Scalars['DateTime'];
    user?: Maybe<User>;
    channel: Channel;
    billingAddress?: Maybe<Address>;
    shippingAddress?: Maybe<Address>;
    note: Scalars['String'];
    discount?: Maybe<Money>;
    discountName?: Maybe<Scalars['String']>;
    translatedDiscountName?: Maybe<Scalars['String']>;
    voucherCode?: Maybe<Scalars['String']>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `shippingMethods` instead. */
    availableShippingMethods: Array<Maybe<ShippingMethod>>;
    shippingMethods: Array<Maybe<ShippingMethod>>;
    availableCollectionPoints: Array<Warehouse>;
    availablePaymentGateways: Array<PaymentGateway>;
    email?: Maybe<Scalars['String']>;
    giftCards?: Maybe<Array<Maybe<GiftCard>>>;
    isShippingRequired: Scalars['Boolean'];
    quantity: Scalars['Int'];
    stockReservationExpires?: Maybe<Scalars['DateTime']>;
    lines?: Maybe<Array<Maybe<CheckoutLine>>>;
    shippingPrice?: Maybe<TaxedMoney>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `deliveryMethod` instead. */
    shippingMethod?: Maybe<ShippingMethod>;
    deliveryMethod?: Maybe<DeliveryMethod>;
    subtotalPrice?: Maybe<TaxedMoney>;
    token: Scalars['UUID'];
    totalPrice?: Maybe<TaxedMoney>;
    languageCode: LanguageCodeEnum;
};

export type CheckoutAddPromoCode = {
    __typename?: 'CheckoutAddPromoCode';
    checkout?: Maybe<Checkout>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    checkoutErrors: Array<CheckoutError>;
    errors: Array<CheckoutError>;
};

export type CheckoutBillingAddressUpdate = {
    __typename?: 'CheckoutBillingAddressUpdate';
    checkout?: Maybe<Checkout>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    checkoutErrors: Array<CheckoutError>;
    errors: Array<CheckoutError>;
};

export type CheckoutComplete = {
    __typename?: 'CheckoutComplete';
    order?: Maybe<Order>;
    confirmationNeeded: Scalars['Boolean'];
    confirmationData?: Maybe<Scalars['JSONString']>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    checkoutErrors: Array<CheckoutError>;
    errors: Array<CheckoutError>;
};

export type CheckoutCountableConnection = {
    __typename?: 'CheckoutCountableConnection';
    pageInfo: PageInfo;
    edges: Array<CheckoutCountableEdge>;
    totalCount?: Maybe<Scalars['Int']>;
};

export type CheckoutCountableEdge = {
    __typename?: 'CheckoutCountableEdge';
    node: Checkout;
    cursor: Scalars['String'];
};

export type CheckoutCreate = {
    __typename?: 'CheckoutCreate';
    /** @deprecated This field will be removed in Saleor 4.0. Always returns `true`. */
    created?: Maybe<Scalars['Boolean']>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    checkoutErrors: Array<CheckoutError>;
    errors: Array<CheckoutError>;
    checkout?: Maybe<Checkout>;
};

export type CheckoutCreateInput = {
    channel?: InputMaybe<Scalars['String']>;
    lines: Array<InputMaybe<CheckoutLineInput>>;
    email?: InputMaybe<Scalars['String']>;
    shippingAddress?: InputMaybe<AddressInput>;
    billingAddress?: InputMaybe<AddressInput>;
    languageCode?: InputMaybe<LanguageCodeEnum>;
};

export type CheckoutCustomerAttach = {
    __typename?: 'CheckoutCustomerAttach';
    checkout?: Maybe<Checkout>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    checkoutErrors: Array<CheckoutError>;
    errors: Array<CheckoutError>;
};

export type CheckoutCustomerDetach = {
    __typename?: 'CheckoutCustomerDetach';
    checkout?: Maybe<Checkout>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    checkoutErrors: Array<CheckoutError>;
    errors: Array<CheckoutError>;
};

export type CheckoutDeliveryMethodUpdate = {
    __typename?: 'CheckoutDeliveryMethodUpdate';
    checkout?: Maybe<Checkout>;
    errors: Array<CheckoutError>;
};

export type CheckoutEmailUpdate = {
    __typename?: 'CheckoutEmailUpdate';
    checkout?: Maybe<Checkout>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    checkoutErrors: Array<CheckoutError>;
    errors: Array<CheckoutError>;
};

export type CheckoutError = {
    __typename?: 'CheckoutError';
    field?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    code: CheckoutErrorCode;
    variants?: Maybe<Array<Scalars['ID']>>;
    lines?: Maybe<Array<Scalars['ID']>>;
    addressType?: Maybe<AddressTypeEnum>;
};

export enum CheckoutErrorCode {
    BillingAddressNotSet = 'BILLING_ADDRESS_NOT_SET',
    CheckoutNotFullyPaid = 'CHECKOUT_NOT_FULLY_PAID',
    GraphqlError = 'GRAPHQL_ERROR',
    ProductNotPublished = 'PRODUCT_NOT_PUBLISHED',
    ProductUnavailableForPurchase = 'PRODUCT_UNAVAILABLE_FOR_PURCHASE',
    InsufficientStock = 'INSUFFICIENT_STOCK',
    Invalid = 'INVALID',
    InvalidShippingMethod = 'INVALID_SHIPPING_METHOD',
    NotFound = 'NOT_FOUND',
    PaymentError = 'PAYMENT_ERROR',
    QuantityGreaterThanLimit = 'QUANTITY_GREATER_THAN_LIMIT',
    Required = 'REQUIRED',
    ShippingAddressNotSet = 'SHIPPING_ADDRESS_NOT_SET',
    ShippingMethodNotApplicable = 'SHIPPING_METHOD_NOT_APPLICABLE',
    DeliveryMethodNotApplicable = 'DELIVERY_METHOD_NOT_APPLICABLE',
    ShippingMethodNotSet = 'SHIPPING_METHOD_NOT_SET',
    ShippingNotRequired = 'SHIPPING_NOT_REQUIRED',
    TaxError = 'TAX_ERROR',
    Unique = 'UNIQUE',
    VoucherNotApplicable = 'VOUCHER_NOT_APPLICABLE',
    GiftCardNotApplicable = 'GIFT_CARD_NOT_APPLICABLE',
    ZeroQuantity = 'ZERO_QUANTITY',
    MissingChannelSlug = 'MISSING_CHANNEL_SLUG',
    ChannelInactive = 'CHANNEL_INACTIVE',
    UnavailableVariantInChannel = 'UNAVAILABLE_VARIANT_IN_CHANNEL',
    EmailNotSet = 'EMAIL_NOT_SET',
    NoLines = 'NO_LINES'
}

export type CheckoutFilterInput = {
    customer?: InputMaybe<Scalars['String']>;
    created?: InputMaybe<DateRangeInput>;
    search?: InputMaybe<Scalars['String']>;
    metadata?: InputMaybe<Array<InputMaybe<MetadataFilter>>>;
    channels?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type CheckoutLanguageCodeUpdate = {
    __typename?: 'CheckoutLanguageCodeUpdate';
    checkout?: Maybe<Checkout>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    checkoutErrors: Array<CheckoutError>;
    errors: Array<CheckoutError>;
};

export type CheckoutLine = Node & {
    __typename?: 'CheckoutLine';
    id: Scalars['ID'];
    variant: ProductVariant;
    quantity: Scalars['Int'];
    totalPrice?: Maybe<TaxedMoney>;
    requiresShipping?: Maybe<Scalars['Boolean']>;
};

export type CheckoutLineCountableConnection = {
    __typename?: 'CheckoutLineCountableConnection';
    pageInfo: PageInfo;
    edges: Array<CheckoutLineCountableEdge>;
    totalCount?: Maybe<Scalars['Int']>;
};

export type CheckoutLineCountableEdge = {
    __typename?: 'CheckoutLineCountableEdge';
    node: CheckoutLine;
    cursor: Scalars['String'];
};

export type CheckoutLineDelete = {
    __typename?: 'CheckoutLineDelete';
    checkout?: Maybe<Checkout>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    checkoutErrors: Array<CheckoutError>;
    errors: Array<CheckoutError>;
};

export type CheckoutLineInput = {
    quantity: Scalars['Int'];
    variantId: Scalars['ID'];
};

export type CheckoutLinesAdd = {
    __typename?: 'CheckoutLinesAdd';
    checkout?: Maybe<Checkout>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    checkoutErrors: Array<CheckoutError>;
    errors: Array<CheckoutError>;
};

export type CheckoutLinesDelete = {
    __typename?: 'CheckoutLinesDelete';
    checkout?: Maybe<Checkout>;
    errors: Array<CheckoutError>;
};

export type CheckoutLinesUpdate = {
    __typename?: 'CheckoutLinesUpdate';
    checkout?: Maybe<Checkout>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    checkoutErrors: Array<CheckoutError>;
    errors: Array<CheckoutError>;
};

export type CheckoutPaymentCreate = {
    __typename?: 'CheckoutPaymentCreate';
    checkout?: Maybe<Checkout>;
    payment?: Maybe<Payment>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    paymentErrors: Array<PaymentError>;
    errors: Array<PaymentError>;
};

export type CheckoutRemovePromoCode = {
    __typename?: 'CheckoutRemovePromoCode';
    checkout?: Maybe<Checkout>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    checkoutErrors: Array<CheckoutError>;
    errors: Array<CheckoutError>;
};

export type CheckoutShippingAddressUpdate = {
    __typename?: 'CheckoutShippingAddressUpdate';
    checkout?: Maybe<Checkout>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    checkoutErrors: Array<CheckoutError>;
    errors: Array<CheckoutError>;
};

export type CheckoutShippingMethodUpdate = {
    __typename?: 'CheckoutShippingMethodUpdate';
    checkout?: Maybe<Checkout>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    checkoutErrors: Array<CheckoutError>;
    errors: Array<CheckoutError>;
};

export enum CheckoutSortField {
    CreationDate = 'CREATION_DATE',
    Customer = 'CUSTOMER',
    Payment = 'PAYMENT'
}

export type CheckoutSortingInput = {
    direction: OrderDirection;
    field: CheckoutSortField;
};

export type ChoiceValue = {
    __typename?: 'ChoiceValue';
    raw?: Maybe<Scalars['String']>;
    verbose?: Maybe<Scalars['String']>;
};

export type Collection = Node & ObjectWithMetadata & {
    __typename?: 'Collection';
    id: Scalars['ID'];
    privateMetadata: Array<Maybe<MetadataItem>>;
    metadata: Array<Maybe<MetadataItem>>;
    seoTitle?: Maybe<Scalars['String']>;
    seoDescription?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    description?: Maybe<Scalars['JSONString']>;
    slug: Scalars['String'];
    channel?: Maybe<Scalars['String']>;
    /** @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead. */
    descriptionJson?: Maybe<Scalars['JSONString']>;
    products?: Maybe<ProductCountableConnection>;
    backgroundImage?: Maybe<Image>;
    translation?: Maybe<CollectionTranslation>;
    channelListings?: Maybe<Array<CollectionChannelListing>>;
};


export type CollectionProductsArgs = {
    filter?: InputMaybe<ProductFilterInput>;
    sortBy?: InputMaybe<ProductOrder>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type CollectionBackgroundImageArgs = {
    size?: InputMaybe<Scalars['Int']>;
};


export type CollectionTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type CollectionAddProducts = {
    __typename?: 'CollectionAddProducts';
    collection?: Maybe<Collection>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    collectionErrors: Array<CollectionError>;
    errors: Array<CollectionError>;
};

export type CollectionBulkDelete = {
    __typename?: 'CollectionBulkDelete';
    count: Scalars['Int'];
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    collectionErrors: Array<CollectionError>;
    errors: Array<CollectionError>;
};

export type CollectionChannelListing = Node & {
    __typename?: 'CollectionChannelListing';
    id: Scalars['ID'];
    publicationDate?: Maybe<Scalars['Date']>;
    isPublished: Scalars['Boolean'];
    channel: Channel;
};

export type CollectionChannelListingError = {
    __typename?: 'CollectionChannelListingError';
    field?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    code: ProductErrorCode;
    attributes?: Maybe<Array<Scalars['ID']>>;
    values?: Maybe<Array<Scalars['ID']>>;
    channels?: Maybe<Array<Scalars['ID']>>;
};

export type CollectionChannelListingUpdate = {
    __typename?: 'CollectionChannelListingUpdate';
    collection?: Maybe<Collection>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    collectionChannelListingErrors: Array<CollectionChannelListingError>;
    errors: Array<CollectionChannelListingError>;
};

export type CollectionChannelListingUpdateInput = {
    addChannels?: InputMaybe<Array<PublishableChannelListingInput>>;
    removeChannels?: InputMaybe<Array<Scalars['ID']>>;
};

export type CollectionCountableConnection = {
    __typename?: 'CollectionCountableConnection';
    pageInfo: PageInfo;
    edges: Array<CollectionCountableEdge>;
    totalCount?: Maybe<Scalars['Int']>;
};

export type CollectionCountableEdge = {
    __typename?: 'CollectionCountableEdge';
    node: Collection;
    cursor: Scalars['String'];
};

export type CollectionCreate = {
    __typename?: 'CollectionCreate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    collectionErrors: Array<CollectionError>;
    errors: Array<CollectionError>;
    collection?: Maybe<Collection>;
};

export type CollectionCreateInput = {
    isPublished?: InputMaybe<Scalars['Boolean']>;
    name?: InputMaybe<Scalars['String']>;
    slug?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['JSONString']>;
    backgroundImage?: InputMaybe<Scalars['Upload']>;
    backgroundImageAlt?: InputMaybe<Scalars['String']>;
    seo?: InputMaybe<SeoInput>;
    publicationDate?: InputMaybe<Scalars['Date']>;
    products?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type CollectionDelete = {
    __typename?: 'CollectionDelete';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    collectionErrors: Array<CollectionError>;
    errors: Array<CollectionError>;
    collection?: Maybe<Collection>;
};

export type CollectionError = {
    __typename?: 'CollectionError';
    field?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    products?: Maybe<Array<Scalars['ID']>>;
    code: CollectionErrorCode;
};

export enum CollectionErrorCode {
    DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
    GraphqlError = 'GRAPHQL_ERROR',
    Invalid = 'INVALID',
    NotFound = 'NOT_FOUND',
    Required = 'REQUIRED',
    Unique = 'UNIQUE',
    CannotManageProductWithoutVariant = 'CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT'
}

export type CollectionFilterInput = {
    published?: InputMaybe<CollectionPublished>;
    search?: InputMaybe<Scalars['String']>;
    metadata?: InputMaybe<Array<InputMaybe<MetadataFilter>>>;
    ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    channel?: InputMaybe<Scalars['String']>;
};

export type CollectionInput = {
    isPublished?: InputMaybe<Scalars['Boolean']>;
    name?: InputMaybe<Scalars['String']>;
    slug?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['JSONString']>;
    backgroundImage?: InputMaybe<Scalars['Upload']>;
    backgroundImageAlt?: InputMaybe<Scalars['String']>;
    seo?: InputMaybe<SeoInput>;
    publicationDate?: InputMaybe<Scalars['Date']>;
};

export enum CollectionPublished {
    Published = 'PUBLISHED',
    Hidden = 'HIDDEN'
}

export type CollectionRemoveProducts = {
    __typename?: 'CollectionRemoveProducts';
    collection?: Maybe<Collection>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    collectionErrors: Array<CollectionError>;
    errors: Array<CollectionError>;
};

export type CollectionReorderProducts = {
    __typename?: 'CollectionReorderProducts';
    collection?: Maybe<Collection>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    collectionErrors: Array<CollectionError>;
    errors: Array<CollectionError>;
};

export enum CollectionSortField {
    Name = 'NAME',
    Availability = 'AVAILABILITY',
    ProductCount = 'PRODUCT_COUNT',
    PublicationDate = 'PUBLICATION_DATE'
}

export type CollectionSortingInput = {
    direction: OrderDirection;
    channel?: InputMaybe<Scalars['String']>;
    field: CollectionSortField;
};

export type CollectionTranslatableContent = Node & {
    __typename?: 'CollectionTranslatableContent';
    id: Scalars['ID'];
    seoTitle?: Maybe<Scalars['String']>;
    seoDescription?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    description?: Maybe<Scalars['JSONString']>;
    /** @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead. */
    descriptionJson?: Maybe<Scalars['JSONString']>;
    translation?: Maybe<CollectionTranslation>;
    /** @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries. */
    collection?: Maybe<Collection>;
};


export type CollectionTranslatableContentTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type CollectionTranslate = {
    __typename?: 'CollectionTranslate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    translationErrors: Array<TranslationError>;
    errors: Array<TranslationError>;
    collection?: Maybe<Collection>;
};

export type CollectionTranslation = Node & {
    __typename?: 'CollectionTranslation';
    id: Scalars['ID'];
    language: LanguageDisplay;
    seoTitle?: Maybe<Scalars['String']>;
    seoDescription?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['JSONString']>;
    /** @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead. */
    descriptionJson?: Maybe<Scalars['JSONString']>;
};

export type CollectionUpdate = {
    __typename?: 'CollectionUpdate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    collectionErrors: Array<CollectionError>;
    errors: Array<CollectionError>;
    collection?: Maybe<Collection>;
};

export type ConfigurationItem = {
    __typename?: 'ConfigurationItem';
    name: Scalars['String'];
    value?: Maybe<Scalars['String']>;
    type?: Maybe<ConfigurationTypeFieldEnum>;
    helpText?: Maybe<Scalars['String']>;
    label?: Maybe<Scalars['String']>;
};

export type ConfigurationItemInput = {
    name: Scalars['String'];
    value?: InputMaybe<Scalars['String']>;
};

export enum ConfigurationTypeFieldEnum {
    String = 'STRING',
    Multiline = 'MULTILINE',
    Boolean = 'BOOLEAN',
    Secret = 'SECRET',
    Password = 'PASSWORD',
    Secretmultiline = 'SECRETMULTILINE',
    Output = 'OUTPUT'
}

export type ConfirmAccount = {
    __typename?: 'ConfirmAccount';
    user?: Maybe<User>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type ConfirmEmailChange = {
    __typename?: 'ConfirmEmailChange';
    user?: Maybe<User>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export enum CountryCode {
    Af = 'AF',
    Ax = 'AX',
    Al = 'AL',
    Dz = 'DZ',
    As = 'AS',
    Ad = 'AD',
    Ao = 'AO',
    Ai = 'AI',
    Aq = 'AQ',
    Ag = 'AG',
    Ar = 'AR',
    Am = 'AM',
    Aw = 'AW',
    Au = 'AU',
    At = 'AT',
    Az = 'AZ',
    Bs = 'BS',
    Bh = 'BH',
    Bd = 'BD',
    Bb = 'BB',
    By = 'BY',
    Be = 'BE',
    Bz = 'BZ',
    Bj = 'BJ',
    Bm = 'BM',
    Bt = 'BT',
    Bo = 'BO',
    Bq = 'BQ',
    Ba = 'BA',
    Bw = 'BW',
    Bv = 'BV',
    Br = 'BR',
    Io = 'IO',
    Bn = 'BN',
    Bg = 'BG',
    Bf = 'BF',
    Bi = 'BI',
    Cv = 'CV',
    Kh = 'KH',
    Cm = 'CM',
    Ca = 'CA',
    Ky = 'KY',
    Cf = 'CF',
    Td = 'TD',
    Cl = 'CL',
    Cn = 'CN',
    Cx = 'CX',
    Cc = 'CC',
    Co = 'CO',
    Km = 'KM',
    Cg = 'CG',
    Cd = 'CD',
    Ck = 'CK',
    Cr = 'CR',
    Ci = 'CI',
    Hr = 'HR',
    Cu = 'CU',
    Cw = 'CW',
    Cy = 'CY',
    Cz = 'CZ',
    Dk = 'DK',
    Dj = 'DJ',
    Dm = 'DM',
    Do = 'DO',
    Ec = 'EC',
    Eg = 'EG',
    Sv = 'SV',
    Gq = 'GQ',
    Er = 'ER',
    Ee = 'EE',
    Sz = 'SZ',
    Et = 'ET',
    Eu = 'EU',
    Fk = 'FK',
    Fo = 'FO',
    Fj = 'FJ',
    Fi = 'FI',
    Fr = 'FR',
    Gf = 'GF',
    Pf = 'PF',
    Tf = 'TF',
    Ga = 'GA',
    Gm = 'GM',
    Ge = 'GE',
    De = 'DE',
    Gh = 'GH',
    Gi = 'GI',
    Gr = 'GR',
    Gl = 'GL',
    Gd = 'GD',
    Gp = 'GP',
    Gu = 'GU',
    Gt = 'GT',
    Gg = 'GG',
    Gn = 'GN',
    Gw = 'GW',
    Gy = 'GY',
    Ht = 'HT',
    Hm = 'HM',
    Va = 'VA',
    Hn = 'HN',
    Hk = 'HK',
    Hu = 'HU',
    Is = 'IS',
    In = 'IN',
    Id = 'ID',
    Ir = 'IR',
    Iq = 'IQ',
    Ie = 'IE',
    Im = 'IM',
    Il = 'IL',
    It = 'IT',
    Jm = 'JM',
    Jp = 'JP',
    Je = 'JE',
    Jo = 'JO',
    Kz = 'KZ',
    Ke = 'KE',
    Ki = 'KI',
    Kw = 'KW',
    Kg = 'KG',
    La = 'LA',
    Lv = 'LV',
    Lb = 'LB',
    Ls = 'LS',
    Lr = 'LR',
    Ly = 'LY',
    Li = 'LI',
    Lt = 'LT',
    Lu = 'LU',
    Mo = 'MO',
    Mg = 'MG',
    Mw = 'MW',
    My = 'MY',
    Mv = 'MV',
    Ml = 'ML',
    Mt = 'MT',
    Mh = 'MH',
    Mq = 'MQ',
    Mr = 'MR',
    Mu = 'MU',
    Yt = 'YT',
    Mx = 'MX',
    Fm = 'FM',
    Md = 'MD',
    Mc = 'MC',
    Mn = 'MN',
    Me = 'ME',
    Ms = 'MS',
    Ma = 'MA',
    Mz = 'MZ',
    Mm = 'MM',
    Na = 'NA',
    Nr = 'NR',
    Np = 'NP',
    Nl = 'NL',
    Nc = 'NC',
    Nz = 'NZ',
    Ni = 'NI',
    Ne = 'NE',
    Ng = 'NG',
    Nu = 'NU',
    Nf = 'NF',
    Kp = 'KP',
    Mk = 'MK',
    Mp = 'MP',
    No = 'NO',
    Om = 'OM',
    Pk = 'PK',
    Pw = 'PW',
    Ps = 'PS',
    Pa = 'PA',
    Pg = 'PG',
    Py = 'PY',
    Pe = 'PE',
    Ph = 'PH',
    Pn = 'PN',
    Pl = 'PL',
    Pt = 'PT',
    Pr = 'PR',
    Qa = 'QA',
    Re = 'RE',
    Ro = 'RO',
    Ru = 'RU',
    Rw = 'RW',
    Bl = 'BL',
    Sh = 'SH',
    Kn = 'KN',
    Lc = 'LC',
    Mf = 'MF',
    Pm = 'PM',
    Vc = 'VC',
    Ws = 'WS',
    Sm = 'SM',
    St = 'ST',
    Sa = 'SA',
    Sn = 'SN',
    Rs = 'RS',
    Sc = 'SC',
    Sl = 'SL',
    Sg = 'SG',
    Sx = 'SX',
    Sk = 'SK',
    Si = 'SI',
    Sb = 'SB',
    So = 'SO',
    Za = 'ZA',
    Gs = 'GS',
    Kr = 'KR',
    Ss = 'SS',
    Es = 'ES',
    Lk = 'LK',
    Sd = 'SD',
    Sr = 'SR',
    Sj = 'SJ',
    Se = 'SE',
    Ch = 'CH',
    Sy = 'SY',
    Tw = 'TW',
    Tj = 'TJ',
    Tz = 'TZ',
    Th = 'TH',
    Tl = 'TL',
    Tg = 'TG',
    Tk = 'TK',
    To = 'TO',
    Tt = 'TT',
    Tn = 'TN',
    Tr = 'TR',
    Tm = 'TM',
    Tc = 'TC',
    Tv = 'TV',
    Ug = 'UG',
    Ua = 'UA',
    Ae = 'AE',
    Gb = 'GB',
    Um = 'UM',
    Us = 'US',
    Uy = 'UY',
    Uz = 'UZ',
    Vu = 'VU',
    Ve = 'VE',
    Vn = 'VN',
    Vg = 'VG',
    Vi = 'VI',
    Wf = 'WF',
    Eh = 'EH',
    Ye = 'YE',
    Zm = 'ZM',
    Zw = 'ZW'
}

export type CountryDisplay = {
    __typename?: 'CountryDisplay';
    code: Scalars['String'];
    country: Scalars['String'];
    vat?: Maybe<Vat>;
};

export type CountryFilterInput = {
    attachedToShippingZones?: InputMaybe<Scalars['Boolean']>;
};

export type CreateToken = {
    __typename?: 'CreateToken';
    token?: Maybe<Scalars['String']>;
    refreshToken?: Maybe<Scalars['String']>;
    csrfToken?: Maybe<Scalars['String']>;
    user?: Maybe<User>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type CreditCard = {
    __typename?: 'CreditCard';
    brand: Scalars['String'];
    firstDigits?: Maybe<Scalars['String']>;
    lastDigits: Scalars['String'];
    expMonth?: Maybe<Scalars['Int']>;
    expYear?: Maybe<Scalars['Int']>;
};

export type CustomerBulkDelete = {
    __typename?: 'CustomerBulkDelete';
    count: Scalars['Int'];
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type CustomerCreate = {
    __typename?: 'CustomerCreate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
    user?: Maybe<User>;
};

export type CustomerDelete = {
    __typename?: 'CustomerDelete';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
    user?: Maybe<User>;
};

export type CustomerEvent = Node & {
    __typename?: 'CustomerEvent';
    id: Scalars['ID'];
    date?: Maybe<Scalars['DateTime']>;
    type?: Maybe<CustomerEventsEnum>;
    user?: Maybe<User>;
    app?: Maybe<App>;
    message?: Maybe<Scalars['String']>;
    count?: Maybe<Scalars['Int']>;
    order?: Maybe<Order>;
    orderLine?: Maybe<OrderLine>;
};

export enum CustomerEventsEnum {
    AccountCreated = 'ACCOUNT_CREATED',
    PasswordResetLinkSent = 'PASSWORD_RESET_LINK_SENT',
    PasswordReset = 'PASSWORD_RESET',
    EmailChangedRequest = 'EMAIL_CHANGED_REQUEST',
    PasswordChanged = 'PASSWORD_CHANGED',
    EmailChanged = 'EMAIL_CHANGED',
    PlacedOrder = 'PLACED_ORDER',
    NoteAddedToOrder = 'NOTE_ADDED_TO_ORDER',
    DigitalLinkDownloaded = 'DIGITAL_LINK_DOWNLOADED',
    CustomerDeleted = 'CUSTOMER_DELETED',
    NameAssigned = 'NAME_ASSIGNED',
    EmailAssigned = 'EMAIL_ASSIGNED',
    NoteAdded = 'NOTE_ADDED'
}

export type CustomerFilterInput = {
    dateJoined?: InputMaybe<DateRangeInput>;
    numberOfOrders?: InputMaybe<IntRangeInput>;
    placedOrders?: InputMaybe<DateRangeInput>;
    search?: InputMaybe<Scalars['String']>;
    metadata?: InputMaybe<Array<InputMaybe<MetadataFilter>>>;
    updatedAt?: InputMaybe<DateTimeRangeInput>;
};

export type CustomerInput = {
    defaultBillingAddress?: InputMaybe<AddressInput>;
    defaultShippingAddress?: InputMaybe<AddressInput>;
    firstName?: InputMaybe<Scalars['String']>;
    lastName?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    isActive?: InputMaybe<Scalars['Boolean']>;
    note?: InputMaybe<Scalars['String']>;
    languageCode?: InputMaybe<LanguageCodeEnum>;
};

export type CustomerUpdate = {
    __typename?: 'CustomerUpdate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
    user?: Maybe<User>;
};

export type DateRangeInput = {
    gte?: InputMaybe<Scalars['Date']>;
    lte?: InputMaybe<Scalars['Date']>;
};

export type DateTimeRangeInput = {
    gte?: InputMaybe<Scalars['DateTime']>;
    lte?: InputMaybe<Scalars['DateTime']>;
};

export type DeactivateAllUserTokens = {
    __typename?: 'DeactivateAllUserTokens';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type DeleteMetadata = {
    __typename?: 'DeleteMetadata';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    metadataErrors: Array<MetadataError>;
    errors: Array<MetadataError>;
    item?: Maybe<ObjectWithMetadata>;
};

export type DeletePrivateMetadata = {
    __typename?: 'DeletePrivateMetadata';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    metadataErrors: Array<MetadataError>;
    errors: Array<MetadataError>;
    item?: Maybe<ObjectWithMetadata>;
};

export type DeliveryMethod = Warehouse | ShippingMethod;

export type DigitalContent = Node & ObjectWithMetadata & {
    __typename?: 'DigitalContent';
    id: Scalars['ID'];
    privateMetadata: Array<Maybe<MetadataItem>>;
    metadata: Array<Maybe<MetadataItem>>;
    useDefaultSettings: Scalars['Boolean'];
    automaticFulfillment: Scalars['Boolean'];
    contentFile: Scalars['String'];
    maxDownloads?: Maybe<Scalars['Int']>;
    urlValidDays?: Maybe<Scalars['Int']>;
    urls?: Maybe<Array<Maybe<DigitalContentUrl>>>;
    productVariant: ProductVariant;
};

export type DigitalContentCountableConnection = {
    __typename?: 'DigitalContentCountableConnection';
    pageInfo: PageInfo;
    edges: Array<DigitalContentCountableEdge>;
    totalCount?: Maybe<Scalars['Int']>;
};

export type DigitalContentCountableEdge = {
    __typename?: 'DigitalContentCountableEdge';
    node: DigitalContent;
    cursor: Scalars['String'];
};

export type DigitalContentCreate = {
    __typename?: 'DigitalContentCreate';
    variant?: Maybe<ProductVariant>;
    content?: Maybe<DigitalContent>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type DigitalContentDelete = {
    __typename?: 'DigitalContentDelete';
    variant?: Maybe<ProductVariant>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type DigitalContentInput = {
    useDefaultSettings: Scalars['Boolean'];
    maxDownloads?: InputMaybe<Scalars['Int']>;
    urlValidDays?: InputMaybe<Scalars['Int']>;
    automaticFulfillment?: InputMaybe<Scalars['Boolean']>;
};

export type DigitalContentUpdate = {
    __typename?: 'DigitalContentUpdate';
    variant?: Maybe<ProductVariant>;
    content?: Maybe<DigitalContent>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type DigitalContentUploadInput = {
    useDefaultSettings: Scalars['Boolean'];
    maxDownloads?: InputMaybe<Scalars['Int']>;
    urlValidDays?: InputMaybe<Scalars['Int']>;
    automaticFulfillment?: InputMaybe<Scalars['Boolean']>;
    contentFile: Scalars['Upload'];
};

export type DigitalContentUrl = Node & {
    __typename?: 'DigitalContentUrl';
    id: Scalars['ID'];
    content: DigitalContent;
    created: Scalars['DateTime'];
    downloadNum: Scalars['Int'];
    url?: Maybe<Scalars['String']>;
    token: Scalars['UUID'];
};

export type DigitalContentUrlCreate = {
    __typename?: 'DigitalContentUrlCreate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
    digitalContentUrl?: Maybe<DigitalContentUrl>;
};

export type DigitalContentUrlCreateInput = {
    content: Scalars['ID'];
};

export type DiscountError = {
    __typename?: 'DiscountError';
    field?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    products?: Maybe<Array<Scalars['ID']>>;
    code: DiscountErrorCode;
    channels?: Maybe<Array<Scalars['ID']>>;
};

export enum DiscountErrorCode {
    AlreadyExists = 'ALREADY_EXISTS',
    GraphqlError = 'GRAPHQL_ERROR',
    Invalid = 'INVALID',
    NotFound = 'NOT_FOUND',
    Required = 'REQUIRED',
    Unique = 'UNIQUE',
    CannotManageProductWithoutVariant = 'CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT',
    DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM'
}

export enum DiscountStatusEnum {
    Active = 'ACTIVE',
    Expired = 'EXPIRED',
    Scheduled = 'SCHEDULED'
}

export enum DiscountValueTypeEnum {
    Fixed = 'FIXED',
    Percentage = 'PERCENTAGE'
}

export enum DistanceUnitsEnum {
    Cm = 'CM',
    M = 'M',
    Km = 'KM',
    Ft = 'FT',
    Yd = 'YD',
    Inch = 'INCH'
}

export type Domain = {
    __typename?: 'Domain';
    host: Scalars['String'];
    sslEnabled: Scalars['Boolean'];
    url: Scalars['String'];
};

export type DraftOrderBulkDelete = {
    __typename?: 'DraftOrderBulkDelete';
    count: Scalars['Int'];
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type DraftOrderComplete = {
    __typename?: 'DraftOrderComplete';
    order?: Maybe<Order>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type DraftOrderCreate = {
    __typename?: 'DraftOrderCreate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
    order?: Maybe<Order>;
};

export type DraftOrderCreateInput = {
    billingAddress?: InputMaybe<AddressInput>;
    user?: InputMaybe<Scalars['ID']>;
    userEmail?: InputMaybe<Scalars['String']>;
    discount?: InputMaybe<Scalars['PositiveDecimal']>;
    shippingAddress?: InputMaybe<AddressInput>;
    shippingMethod?: InputMaybe<Scalars['ID']>;
    voucher?: InputMaybe<Scalars['ID']>;
    customerNote?: InputMaybe<Scalars['String']>;
    channelId?: InputMaybe<Scalars['ID']>;
    redirectUrl?: InputMaybe<Scalars['String']>;
    lines?: InputMaybe<Array<InputMaybe<OrderLineCreateInput>>>;
};

export type DraftOrderDelete = {
    __typename?: 'DraftOrderDelete';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
    order?: Maybe<Order>;
};

export type DraftOrderInput = {
    billingAddress?: InputMaybe<AddressInput>;
    user?: InputMaybe<Scalars['ID']>;
    userEmail?: InputMaybe<Scalars['String']>;
    discount?: InputMaybe<Scalars['PositiveDecimal']>;
    shippingAddress?: InputMaybe<AddressInput>;
    shippingMethod?: InputMaybe<Scalars['ID']>;
    voucher?: InputMaybe<Scalars['ID']>;
    customerNote?: InputMaybe<Scalars['String']>;
    channelId?: InputMaybe<Scalars['ID']>;
    redirectUrl?: InputMaybe<Scalars['String']>;
};

export type DraftOrderLinesBulkDelete = {
    __typename?: 'DraftOrderLinesBulkDelete';
    count: Scalars['Int'];
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type DraftOrderUpdate = {
    __typename?: 'DraftOrderUpdate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
    order?: Maybe<Order>;
};

export type EventDelivery = Node & {
    __typename?: 'EventDelivery';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    status: EventDeliveryStatusEnum;
    eventType: WebhookEventTypeEnum;
    attempts?: Maybe<EventDeliveryAttemptCountableConnection>;
    payload?: Maybe<Scalars['String']>;
};


export type EventDeliveryAttemptsArgs = {
    sortBy?: InputMaybe<EventDeliveryAttemptSortingInput>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};

export type EventDeliveryAttempt = Node & {
    __typename?: 'EventDeliveryAttempt';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    taskId?: Maybe<Scalars['String']>;
    duration?: Maybe<Scalars['Float']>;
    response?: Maybe<Scalars['String']>;
    responseHeaders?: Maybe<Scalars['String']>;
    requestHeaders?: Maybe<Scalars['String']>;
    status: EventDeliveryStatusEnum;
};

export type EventDeliveryAttemptCountableConnection = {
    __typename?: 'EventDeliveryAttemptCountableConnection';
    pageInfo: PageInfo;
    edges: Array<EventDeliveryAttemptCountableEdge>;
    totalCount?: Maybe<Scalars['Int']>;
};

export type EventDeliveryAttemptCountableEdge = {
    __typename?: 'EventDeliveryAttemptCountableEdge';
    node: EventDeliveryAttempt;
    cursor: Scalars['String'];
};

export enum EventDeliveryAttemptSortField {
    CreatedAt = 'CREATED_AT'
}

export type EventDeliveryAttemptSortingInput = {
    direction: OrderDirection;
    field: EventDeliveryAttemptSortField;
};

export type EventDeliveryCountableConnection = {
    __typename?: 'EventDeliveryCountableConnection';
    pageInfo: PageInfo;
    edges: Array<EventDeliveryCountableEdge>;
    totalCount?: Maybe<Scalars['Int']>;
};

export type EventDeliveryCountableEdge = {
    __typename?: 'EventDeliveryCountableEdge';
    node: EventDelivery;
    cursor: Scalars['String'];
};

export type EventDeliveryFilterInput = {
    status?: InputMaybe<EventDeliveryStatusEnum>;
    eventType?: InputMaybe<WebhookEventTypeEnum>;
};

export type EventDeliveryRetry = {
    __typename?: 'EventDeliveryRetry';
    delivery?: Maybe<EventDelivery>;
    errors: Array<WebhookError>;
};

export enum EventDeliverySortField {
    CreatedAt = 'CREATED_AT'
}

export type EventDeliverySortingInput = {
    direction: OrderDirection;
    field: EventDeliverySortField;
};

export enum EventDeliveryStatusEnum {
    Pending = 'PENDING',
    Success = 'SUCCESS',
    Failed = 'FAILED'
}

export type ExportError = {
    __typename?: 'ExportError';
    field?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    code: ExportErrorCode;
};

export enum ExportErrorCode {
    GraphqlError = 'GRAPHQL_ERROR',
    Invalid = 'INVALID',
    NotFound = 'NOT_FOUND',
    Required = 'REQUIRED'
}

export type ExportEvent = Node & {
    __typename?: 'ExportEvent';
    id: Scalars['ID'];
    date: Scalars['DateTime'];
    type: ExportEventsEnum;
    user?: Maybe<User>;
    app?: Maybe<App>;
    message: Scalars['String'];
};

export enum ExportEventsEnum {
    ExportPending = 'EXPORT_PENDING',
    ExportSuccess = 'EXPORT_SUCCESS',
    ExportFailed = 'EXPORT_FAILED',
    ExportDeleted = 'EXPORT_DELETED',
    ExportedFileSent = 'EXPORTED_FILE_SENT',
    ExportFailedInfoSent = 'EXPORT_FAILED_INFO_SENT'
}

export type ExportFile = Node & Job & {
    __typename?: 'ExportFile';
    id: Scalars['ID'];
    status: JobStatusEnum;
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    message?: Maybe<Scalars['String']>;
    url?: Maybe<Scalars['String']>;
    events?: Maybe<Array<ExportEvent>>;
    user?: Maybe<User>;
    app?: Maybe<App>;
};

export type ExportFileCountableConnection = {
    __typename?: 'ExportFileCountableConnection';
    pageInfo: PageInfo;
    edges: Array<ExportFileCountableEdge>;
    totalCount?: Maybe<Scalars['Int']>;
};

export type ExportFileCountableEdge = {
    __typename?: 'ExportFileCountableEdge';
    node: ExportFile;
    cursor: Scalars['String'];
};

export type ExportFileFilterInput = {
    createdAt?: InputMaybe<DateTimeRangeInput>;
    updatedAt?: InputMaybe<DateTimeRangeInput>;
    status?: InputMaybe<JobStatusEnum>;
    user?: InputMaybe<Scalars['String']>;
    app?: InputMaybe<Scalars['String']>;
};

export enum ExportFileSortField {
    Status = 'STATUS',
    CreatedAt = 'CREATED_AT',
    UpdatedAt = 'UPDATED_AT',
    LastModifiedAt = 'LAST_MODIFIED_AT'
}

export type ExportFileSortingInput = {
    direction: OrderDirection;
    field: ExportFileSortField;
};

export type ExportGiftCards = {
    __typename?: 'ExportGiftCards';
    exportFile?: Maybe<ExportFile>;
    errors: Array<ExportError>;
};

export type ExportGiftCardsInput = {
    scope: ExportScope;
    filter?: InputMaybe<GiftCardFilterInput>;
    ids?: InputMaybe<Array<Scalars['ID']>>;
    fileType: FileTypesEnum;
};

export type ExportInfoInput = {
    attributes?: InputMaybe<Array<Scalars['ID']>>;
    warehouses?: InputMaybe<Array<Scalars['ID']>>;
    channels?: InputMaybe<Array<Scalars['ID']>>;
    fields?: InputMaybe<Array<ProductFieldEnum>>;
};

export type ExportProducts = {
    __typename?: 'ExportProducts';
    exportFile?: Maybe<ExportFile>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    exportErrors: Array<ExportError>;
    errors: Array<ExportError>;
};

export type ExportProductsInput = {
    scope: ExportScope;
    filter?: InputMaybe<ProductFilterInput>;
    ids?: InputMaybe<Array<Scalars['ID']>>;
    exportInfo?: InputMaybe<ExportInfoInput>;
    fileType: FileTypesEnum;
};

export enum ExportScope {
    All = 'ALL',
    Ids = 'IDS',
    Filter = 'FILTER'
}

export type ExternalAuthentication = {
    __typename?: 'ExternalAuthentication';
    id: Scalars['String'];
    name?: Maybe<Scalars['String']>;
};

export type ExternalAuthenticationUrl = {
    __typename?: 'ExternalAuthenticationUrl';
    authenticationData?: Maybe<Scalars['JSONString']>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type ExternalLogout = {
    __typename?: 'ExternalLogout';
    logoutData?: Maybe<Scalars['JSONString']>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type ExternalNotificationError = {
    __typename?: 'ExternalNotificationError';
    field?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    code: ExternalNotificationErrorCodes;
};

export enum ExternalNotificationErrorCodes {
    Required = 'REQUIRED',
    InvalidModelType = 'INVALID_MODEL_TYPE',
    NotFound = 'NOT_FOUND',
    ChannelInactive = 'CHANNEL_INACTIVE'
}

export type ExternalNotificationTrigger = {
    __typename?: 'ExternalNotificationTrigger';
    errors: Array<ExternalNotificationError>;
};

export type ExternalNotificationTriggerInput = {
    ids: Array<InputMaybe<Scalars['ID']>>;
    extraPayload?: InputMaybe<Scalars['JSONString']>;
    externalEventType: Scalars['String'];
};

export type ExternalObtainAccessTokens = {
    __typename?: 'ExternalObtainAccessTokens';
    token?: Maybe<Scalars['String']>;
    refreshToken?: Maybe<Scalars['String']>;
    csrfToken?: Maybe<Scalars['String']>;
    user?: Maybe<User>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type ExternalRefresh = {
    __typename?: 'ExternalRefresh';
    token?: Maybe<Scalars['String']>;
    refreshToken?: Maybe<Scalars['String']>;
    csrfToken?: Maybe<Scalars['String']>;
    user?: Maybe<User>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type ExternalVerify = {
    __typename?: 'ExternalVerify';
    user?: Maybe<User>;
    isValid: Scalars['Boolean'];
    verifyData?: Maybe<Scalars['JSONString']>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type File = {
    __typename?: 'File';
    url: Scalars['String'];
    contentType?: Maybe<Scalars['String']>;
};

export enum FileTypesEnum {
    Csv = 'CSV',
    Xlsx = 'XLSX'
}

export type FileUpload = {
    __typename?: 'FileUpload';
    uploadedFile?: Maybe<File>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    uploadErrors: Array<UploadError>;
    errors: Array<UploadError>;
};

export type Fulfillment = Node & ObjectWithMetadata & {
    __typename?: 'Fulfillment';
    id: Scalars['ID'];
    privateMetadata: Array<Maybe<MetadataItem>>;
    metadata: Array<Maybe<MetadataItem>>;
    fulfillmentOrder: Scalars['Int'];
    status: FulfillmentStatus;
    trackingNumber: Scalars['String'];
    created: Scalars['DateTime'];
    lines?: Maybe<Array<Maybe<FulfillmentLine>>>;
    statusDisplay?: Maybe<Scalars['String']>;
    warehouse?: Maybe<Warehouse>;
};

export type FulfillmentApprove = {
    __typename?: 'FulfillmentApprove';
    fulfillment?: Maybe<Fulfillment>;
    order?: Maybe<Order>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type FulfillmentCancel = {
    __typename?: 'FulfillmentCancel';
    fulfillment?: Maybe<Fulfillment>;
    order?: Maybe<Order>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type FulfillmentCancelInput = {
    warehouseId?: InputMaybe<Scalars['ID']>;
};

export type FulfillmentLine = Node & {
    __typename?: 'FulfillmentLine';
    id: Scalars['ID'];
    quantity: Scalars['Int'];
    orderLine?: Maybe<OrderLine>;
};

export type FulfillmentRefundProducts = {
    __typename?: 'FulfillmentRefundProducts';
    fulfillment?: Maybe<Fulfillment>;
    order?: Maybe<Order>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type FulfillmentReturnProducts = {
    __typename?: 'FulfillmentReturnProducts';
    returnFulfillment?: Maybe<Fulfillment>;
    replaceFulfillment?: Maybe<Fulfillment>;
    order?: Maybe<Order>;
    replaceOrder?: Maybe<Order>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export enum FulfillmentStatus {
    Fulfilled = 'FULFILLED',
    Refunded = 'REFUNDED',
    Returned = 'RETURNED',
    Replaced = 'REPLACED',
    RefundedAndReturned = 'REFUNDED_AND_RETURNED',
    Canceled = 'CANCELED',
    WaitingForApproval = 'WAITING_FOR_APPROVAL'
}

export type FulfillmentUpdateTracking = {
    __typename?: 'FulfillmentUpdateTracking';
    fulfillment?: Maybe<Fulfillment>;
    order?: Maybe<Order>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type FulfillmentUpdateTrackingInput = {
    trackingNumber?: InputMaybe<Scalars['String']>;
    notifyCustomer?: InputMaybe<Scalars['Boolean']>;
};

export type GatewayConfigLine = {
    __typename?: 'GatewayConfigLine';
    field: Scalars['String'];
    value?: Maybe<Scalars['String']>;
};

export type GiftCard = Node & ObjectWithMetadata & {
    __typename?: 'GiftCard';
    id: Scalars['ID'];
    privateMetadata: Array<Maybe<MetadataItem>>;
    metadata: Array<Maybe<MetadataItem>>;
    displayCode: Scalars['String'];
    last4CodeChars: Scalars['String'];
    code: Scalars['String'];
    created: Scalars['DateTime'];
    createdBy?: Maybe<User>;
    usedBy?: Maybe<User>;
    createdByEmail?: Maybe<Scalars['String']>;
    usedByEmail?: Maybe<Scalars['String']>;
    lastUsedOn?: Maybe<Scalars['DateTime']>;
    expiryDate?: Maybe<Scalars['Date']>;
    app?: Maybe<App>;
    product?: Maybe<Product>;
    events: Array<GiftCardEvent>;
    tags: Array<GiftCardTag>;
    boughtInChannel?: Maybe<Scalars['String']>;
    isActive: Scalars['Boolean'];
    initialBalance?: Maybe<Money>;
    currentBalance?: Maybe<Money>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `createdBy` field instead. */
    user?: Maybe<User>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `expiryDate` field instead. */
    endDate?: Maybe<Scalars['DateTime']>;
    /** @deprecated This field will be removed in Saleor 4.0. */
    startDate?: Maybe<Scalars['DateTime']>;
};


export type GiftCardEventsArgs = {
    filter?: InputMaybe<GiftCardEventFilterInput>;
};

export type GiftCardActivate = {
    __typename?: 'GiftCardActivate';
    giftCard?: Maybe<GiftCard>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    giftCardErrors: Array<GiftCardError>;
    errors: Array<GiftCardError>;
};

export type GiftCardAddNote = {
    __typename?: 'GiftCardAddNote';
    giftCard?: Maybe<GiftCard>;
    event?: Maybe<GiftCardEvent>;
    errors: Array<GiftCardError>;
};

export type GiftCardAddNoteInput = {
    message: Scalars['String'];
};

export type GiftCardBulkActivate = {
    __typename?: 'GiftCardBulkActivate';
    count: Scalars['Int'];
    errors: Array<GiftCardError>;
};

export type GiftCardBulkCreate = {
    __typename?: 'GiftCardBulkCreate';
    count: Scalars['Int'];
    giftCards: Array<GiftCard>;
    errors: Array<GiftCardError>;
};

export type GiftCardBulkCreateInput = {
    count: Scalars['Int'];
    balance: PriceInput;
    tags?: InputMaybe<Array<Scalars['String']>>;
    expiryDate?: InputMaybe<Scalars['Date']>;
    isActive: Scalars['Boolean'];
};

export type GiftCardBulkDeactivate = {
    __typename?: 'GiftCardBulkDeactivate';
    count: Scalars['Int'];
    errors: Array<GiftCardError>;
};

export type GiftCardBulkDelete = {
    __typename?: 'GiftCardBulkDelete';
    count: Scalars['Int'];
    errors: Array<GiftCardError>;
};

export type GiftCardCountableConnection = {
    __typename?: 'GiftCardCountableConnection';
    pageInfo: PageInfo;
    edges: Array<GiftCardCountableEdge>;
    totalCount?: Maybe<Scalars['Int']>;
};

export type GiftCardCountableEdge = {
    __typename?: 'GiftCardCountableEdge';
    node: GiftCard;
    cursor: Scalars['String'];
};

export type GiftCardCreate = {
    __typename?: 'GiftCardCreate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    giftCardErrors: Array<GiftCardError>;
    errors: Array<GiftCardError>;
    giftCard?: Maybe<GiftCard>;
};

export type GiftCardCreateInput = {
    addTags?: InputMaybe<Array<Scalars['String']>>;
    expiryDate?: InputMaybe<Scalars['Date']>;
    startDate?: InputMaybe<Scalars['Date']>;
    endDate?: InputMaybe<Scalars['Date']>;
    balance: PriceInput;
    userEmail?: InputMaybe<Scalars['String']>;
    channel?: InputMaybe<Scalars['String']>;
    isActive: Scalars['Boolean'];
    code?: InputMaybe<Scalars['String']>;
    note?: InputMaybe<Scalars['String']>;
};

export type GiftCardDeactivate = {
    __typename?: 'GiftCardDeactivate';
    giftCard?: Maybe<GiftCard>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    giftCardErrors: Array<GiftCardError>;
    errors: Array<GiftCardError>;
};

export type GiftCardDelete = {
    __typename?: 'GiftCardDelete';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    giftCardErrors: Array<GiftCardError>;
    errors: Array<GiftCardError>;
    giftCard?: Maybe<GiftCard>;
};

export type GiftCardError = {
    __typename?: 'GiftCardError';
    field?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    code: GiftCardErrorCode;
    tags?: Maybe<Array<Scalars['String']>>;
};

export enum GiftCardErrorCode {
    AlreadyExists = 'ALREADY_EXISTS',
    GraphqlError = 'GRAPHQL_ERROR',
    Invalid = 'INVALID',
    NotFound = 'NOT_FOUND',
    Required = 'REQUIRED',
    Unique = 'UNIQUE',
    ExpiredGiftCard = 'EXPIRED_GIFT_CARD',
    DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM'
}

export type GiftCardEvent = Node & {
    __typename?: 'GiftCardEvent';
    id: Scalars['ID'];
    date?: Maybe<Scalars['DateTime']>;
    type?: Maybe<GiftCardEventsEnum>;
    user?: Maybe<User>;
    app?: Maybe<App>;
    message?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    orderId?: Maybe<Scalars['ID']>;
    orderNumber?: Maybe<Scalars['String']>;
    tags?: Maybe<Array<Scalars['String']>>;
    oldTags?: Maybe<Array<Scalars['String']>>;
    balance?: Maybe<GiftCardEventBalance>;
    expiryDate?: Maybe<Scalars['Date']>;
    oldExpiryDate?: Maybe<Scalars['Date']>;
};

export type GiftCardEventBalance = {
    __typename?: 'GiftCardEventBalance';
    initialBalance?: Maybe<Money>;
    currentBalance: Money;
    oldInitialBalance?: Maybe<Money>;
    oldCurrentBalance?: Maybe<Money>;
};

export type GiftCardEventFilterInput = {
    type?: InputMaybe<GiftCardEventsEnum>;
    orders?: InputMaybe<Array<Scalars['ID']>>;
};

export enum GiftCardEventsEnum {
    Issued = 'ISSUED',
    Bought = 'BOUGHT',
    Updated = 'UPDATED',
    Activated = 'ACTIVATED',
    Deactivated = 'DEACTIVATED',
    BalanceReset = 'BALANCE_RESET',
    ExpiryDateUpdated = 'EXPIRY_DATE_UPDATED',
    TagsUpdated = 'TAGS_UPDATED',
    SentToCustomer = 'SENT_TO_CUSTOMER',
    Resent = 'RESENT',
    NoteAdded = 'NOTE_ADDED',
    UsedInOrder = 'USED_IN_ORDER'
}

export type GiftCardFilterInput = {
    isActive?: InputMaybe<Scalars['Boolean']>;
    metadata?: InputMaybe<Array<InputMaybe<MetadataFilter>>>;
    tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    products?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    usedBy?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    used?: InputMaybe<Scalars['Boolean']>;
    currency?: InputMaybe<Scalars['String']>;
    currentBalance?: InputMaybe<PriceRangeInput>;
    initialBalance?: InputMaybe<PriceRangeInput>;
    code?: InputMaybe<Scalars['String']>;
};

export type GiftCardResend = {
    __typename?: 'GiftCardResend';
    giftCard?: Maybe<GiftCard>;
    errors: Array<GiftCardError>;
};

export type GiftCardResendInput = {
    id: Scalars['ID'];
    email?: InputMaybe<Scalars['String']>;
    channel: Scalars['String'];
};

export type GiftCardSettings = {
    __typename?: 'GiftCardSettings';
    expiryType: GiftCardSettingsExpiryTypeEnum;
    expiryPeriod?: Maybe<TimePeriod>;
};

export type GiftCardSettingsError = {
    __typename?: 'GiftCardSettingsError';
    field?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    code: GiftCardSettingsErrorCode;
};

export enum GiftCardSettingsErrorCode {
    Invalid = 'INVALID',
    Required = 'REQUIRED',
    GraphqlError = 'GRAPHQL_ERROR'
}

export enum GiftCardSettingsExpiryTypeEnum {
    NeverExpire = 'NEVER_EXPIRE',
    ExpiryPeriod = 'EXPIRY_PERIOD'
}

export type GiftCardSettingsUpdate = {
    __typename?: 'GiftCardSettingsUpdate';
    giftCardSettings?: Maybe<GiftCardSettings>;
    errors: Array<GiftCardSettingsError>;
};

export type GiftCardSettingsUpdateInput = {
    expiryType?: InputMaybe<GiftCardSettingsExpiryTypeEnum>;
    expiryPeriod?: InputMaybe<TimePeriodInputType>;
};

export enum GiftCardSortField {
    Product = 'PRODUCT',
    UsedBy = 'USED_BY',
    CurrentBalance = 'CURRENT_BALANCE'
}

export type GiftCardSortingInput = {
    direction: OrderDirection;
    field: GiftCardSortField;
};

export type GiftCardTag = Node & {
    __typename?: 'GiftCardTag';
    id: Scalars['ID'];
    name: Scalars['String'];
};

export type GiftCardTagCountableConnection = {
    __typename?: 'GiftCardTagCountableConnection';
    pageInfo: PageInfo;
    edges: Array<GiftCardTagCountableEdge>;
    totalCount?: Maybe<Scalars['Int']>;
};

export type GiftCardTagCountableEdge = {
    __typename?: 'GiftCardTagCountableEdge';
    node: GiftCardTag;
    cursor: Scalars['String'];
};

export type GiftCardTagFilterInput = {
    search?: InputMaybe<Scalars['String']>;
};

export type GiftCardUpdate = {
    __typename?: 'GiftCardUpdate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    giftCardErrors: Array<GiftCardError>;
    errors: Array<GiftCardError>;
    giftCard?: Maybe<GiftCard>;
};

export type GiftCardUpdateInput = {
    addTags?: InputMaybe<Array<Scalars['String']>>;
    expiryDate?: InputMaybe<Scalars['Date']>;
    startDate?: InputMaybe<Scalars['Date']>;
    endDate?: InputMaybe<Scalars['Date']>;
    removeTags?: InputMaybe<Array<Scalars['String']>>;
    balanceAmount?: InputMaybe<Scalars['PositiveDecimal']>;
};

export type Group = Node & {
    __typename?: 'Group';
    id: Scalars['ID'];
    name: Scalars['String'];
    users?: Maybe<Array<Maybe<User>>>;
    permissions?: Maybe<Array<Maybe<Permission>>>;
    userCanManage: Scalars['Boolean'];
};

export type GroupCountableConnection = {
    __typename?: 'GroupCountableConnection';
    pageInfo: PageInfo;
    edges: Array<GroupCountableEdge>;
    totalCount?: Maybe<Scalars['Int']>;
};

export type GroupCountableEdge = {
    __typename?: 'GroupCountableEdge';
    node: Group;
    cursor: Scalars['String'];
};

export type Image = {
    __typename?: 'Image';
    url: Scalars['String'];
    alt?: Maybe<Scalars['String']>;
};

export type IntRangeInput = {
    gte?: InputMaybe<Scalars['Int']>;
    lte?: InputMaybe<Scalars['Int']>;
};

export type Invoice = ObjectWithMetadata & Job & Node & {
    __typename?: 'Invoice';
    privateMetadata: Array<Maybe<MetadataItem>>;
    metadata: Array<Maybe<MetadataItem>>;
    status: JobStatusEnum;
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    message?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    number?: Maybe<Scalars['String']>;
    externalUrl?: Maybe<Scalars['String']>;
    url?: Maybe<Scalars['String']>;
};

export type InvoiceCreate = {
    __typename?: 'InvoiceCreate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    invoiceErrors: Array<InvoiceError>;
    errors: Array<InvoiceError>;
    invoice?: Maybe<Invoice>;
};

export type InvoiceCreateInput = {
    number: Scalars['String'];
    url: Scalars['String'];
};

export type InvoiceDelete = {
    __typename?: 'InvoiceDelete';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    invoiceErrors: Array<InvoiceError>;
    errors: Array<InvoiceError>;
    invoice?: Maybe<Invoice>;
};

export type InvoiceError = {
    __typename?: 'InvoiceError';
    field?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    code: InvoiceErrorCode;
};

export enum InvoiceErrorCode {
    Required = 'REQUIRED',
    NotReady = 'NOT_READY',
    UrlNotSet = 'URL_NOT_SET',
    EmailNotSet = 'EMAIL_NOT_SET',
    NumberNotSet = 'NUMBER_NOT_SET',
    NotFound = 'NOT_FOUND',
    InvalidStatus = 'INVALID_STATUS',
    NoInvoicePlugin = 'NO_INVOICE_PLUGIN'
}

export type InvoiceRequest = {
    __typename?: 'InvoiceRequest';
    order?: Maybe<Order>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    invoiceErrors: Array<InvoiceError>;
    errors: Array<InvoiceError>;
    invoice?: Maybe<Invoice>;
};

export type InvoiceRequestDelete = {
    __typename?: 'InvoiceRequestDelete';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    invoiceErrors: Array<InvoiceError>;
    errors: Array<InvoiceError>;
    invoice?: Maybe<Invoice>;
};

export type InvoiceSendNotification = {
    __typename?: 'InvoiceSendNotification';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    invoiceErrors: Array<InvoiceError>;
    errors: Array<InvoiceError>;
    invoice?: Maybe<Invoice>;
};

export type InvoiceUpdate = {
    __typename?: 'InvoiceUpdate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    invoiceErrors: Array<InvoiceError>;
    errors: Array<InvoiceError>;
    invoice?: Maybe<Invoice>;
};

export type Job = {
    status: JobStatusEnum;
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    message?: Maybe<Scalars['String']>;
};

export enum JobStatusEnum {
    Pending = 'PENDING',
    Success = 'SUCCESS',
    Failed = 'FAILED',
    Deleted = 'DELETED'
}

export enum LanguageCodeEnum {
    Af = 'AF',
    AfNa = 'AF_NA',
    AfZa = 'AF_ZA',
    Agq = 'AGQ',
    AgqCm = 'AGQ_CM',
    Ak = 'AK',
    AkGh = 'AK_GH',
    Am = 'AM',
    AmEt = 'AM_ET',
    Ar = 'AR',
    ArAe = 'AR_AE',
    ArBh = 'AR_BH',
    ArDj = 'AR_DJ',
    ArDz = 'AR_DZ',
    ArEg = 'AR_EG',
    ArEh = 'AR_EH',
    ArEr = 'AR_ER',
    ArIl = 'AR_IL',
    ArIq = 'AR_IQ',
    ArJo = 'AR_JO',
    ArKm = 'AR_KM',
    ArKw = 'AR_KW',
    ArLb = 'AR_LB',
    ArLy = 'AR_LY',
    ArMa = 'AR_MA',
    ArMr = 'AR_MR',
    ArOm = 'AR_OM',
    ArPs = 'AR_PS',
    ArQa = 'AR_QA',
    ArSa = 'AR_SA',
    ArSd = 'AR_SD',
    ArSo = 'AR_SO',
    ArSs = 'AR_SS',
    ArSy = 'AR_SY',
    ArTd = 'AR_TD',
    ArTn = 'AR_TN',
    ArYe = 'AR_YE',
    As = 'AS',
    AsIn = 'AS_IN',
    Asa = 'ASA',
    AsaTz = 'ASA_TZ',
    Ast = 'AST',
    AstEs = 'AST_ES',
    Az = 'AZ',
    AzCyrl = 'AZ_CYRL',
    AzCyrlAz = 'AZ_CYRL_AZ',
    AzLatn = 'AZ_LATN',
    AzLatnAz = 'AZ_LATN_AZ',
    Bas = 'BAS',
    BasCm = 'BAS_CM',
    Be = 'BE',
    BeBy = 'BE_BY',
    Bem = 'BEM',
    BemZm = 'BEM_ZM',
    Bez = 'BEZ',
    BezTz = 'BEZ_TZ',
    Bg = 'BG',
    BgBg = 'BG_BG',
    Bm = 'BM',
    BmMl = 'BM_ML',
    Bn = 'BN',
    BnBd = 'BN_BD',
    BnIn = 'BN_IN',
    Bo = 'BO',
    BoCn = 'BO_CN',
    BoIn = 'BO_IN',
    Br = 'BR',
    BrFr = 'BR_FR',
    Brx = 'BRX',
    BrxIn = 'BRX_IN',
    Bs = 'BS',
    BsCyrl = 'BS_CYRL',
    BsCyrlBa = 'BS_CYRL_BA',
    BsLatn = 'BS_LATN',
    BsLatnBa = 'BS_LATN_BA',
    Ca = 'CA',
    CaAd = 'CA_AD',
    CaEs = 'CA_ES',
    CaEsValencia = 'CA_ES_VALENCIA',
    CaFr = 'CA_FR',
    CaIt = 'CA_IT',
    Ccp = 'CCP',
    CcpBd = 'CCP_BD',
    CcpIn = 'CCP_IN',
    Ce = 'CE',
    CeRu = 'CE_RU',
    Ceb = 'CEB',
    CebPh = 'CEB_PH',
    Cgg = 'CGG',
    CggUg = 'CGG_UG',
    Chr = 'CHR',
    ChrUs = 'CHR_US',
    Ckb = 'CKB',
    CkbIq = 'CKB_IQ',
    CkbIr = 'CKB_IR',
    Cs = 'CS',
    CsCz = 'CS_CZ',
    Cu = 'CU',
    CuRu = 'CU_RU',
    Cy = 'CY',
    CyGb = 'CY_GB',
    Da = 'DA',
    DaDk = 'DA_DK',
    DaGl = 'DA_GL',
    Dav = 'DAV',
    DavKe = 'DAV_KE',
    De = 'DE',
    DeAt = 'DE_AT',
    DeBe = 'DE_BE',
    DeCh = 'DE_CH',
    DeDe = 'DE_DE',
    DeIt = 'DE_IT',
    DeLi = 'DE_LI',
    DeLu = 'DE_LU',
    Dje = 'DJE',
    DjeNe = 'DJE_NE',
    Dsb = 'DSB',
    DsbDe = 'DSB_DE',
    Dua = 'DUA',
    DuaCm = 'DUA_CM',
    Dyo = 'DYO',
    DyoSn = 'DYO_SN',
    Dz = 'DZ',
    DzBt = 'DZ_BT',
    Ebu = 'EBU',
    EbuKe = 'EBU_KE',
    Ee = 'EE',
    EeGh = 'EE_GH',
    EeTg = 'EE_TG',
    El = 'EL',
    ElCy = 'EL_CY',
    ElGr = 'EL_GR',
    En = 'EN',
    EnAe = 'EN_AE',
    EnAg = 'EN_AG',
    EnAi = 'EN_AI',
    EnAs = 'EN_AS',
    EnAt = 'EN_AT',
    EnAu = 'EN_AU',
    EnBb = 'EN_BB',
    EnBe = 'EN_BE',
    EnBi = 'EN_BI',
    EnBm = 'EN_BM',
    EnBs = 'EN_BS',
    EnBw = 'EN_BW',
    EnBz = 'EN_BZ',
    EnCa = 'EN_CA',
    EnCc = 'EN_CC',
    EnCh = 'EN_CH',
    EnCk = 'EN_CK',
    EnCm = 'EN_CM',
    EnCx = 'EN_CX',
    EnCy = 'EN_CY',
    EnDe = 'EN_DE',
    EnDg = 'EN_DG',
    EnDk = 'EN_DK',
    EnDm = 'EN_DM',
    EnEr = 'EN_ER',
    EnFi = 'EN_FI',
    EnFj = 'EN_FJ',
    EnFk = 'EN_FK',
    EnFm = 'EN_FM',
    EnGb = 'EN_GB',
    EnGd = 'EN_GD',
    EnGg = 'EN_GG',
    EnGh = 'EN_GH',
    EnGi = 'EN_GI',
    EnGm = 'EN_GM',
    EnGu = 'EN_GU',
    EnGy = 'EN_GY',
    EnHk = 'EN_HK',
    EnIe = 'EN_IE',
    EnIl = 'EN_IL',
    EnIm = 'EN_IM',
    EnIn = 'EN_IN',
    EnIo = 'EN_IO',
    EnJe = 'EN_JE',
    EnJm = 'EN_JM',
    EnKe = 'EN_KE',
    EnKi = 'EN_KI',
    EnKn = 'EN_KN',
    EnKy = 'EN_KY',
    EnLc = 'EN_LC',
    EnLr = 'EN_LR',
    EnLs = 'EN_LS',
    EnMg = 'EN_MG',
    EnMh = 'EN_MH',
    EnMo = 'EN_MO',
    EnMp = 'EN_MP',
    EnMs = 'EN_MS',
    EnMt = 'EN_MT',
    EnMu = 'EN_MU',
    EnMw = 'EN_MW',
    EnMy = 'EN_MY',
    EnNa = 'EN_NA',
    EnNf = 'EN_NF',
    EnNg = 'EN_NG',
    EnNl = 'EN_NL',
    EnNr = 'EN_NR',
    EnNu = 'EN_NU',
    EnNz = 'EN_NZ',
    EnPg = 'EN_PG',
    EnPh = 'EN_PH',
    EnPk = 'EN_PK',
    EnPn = 'EN_PN',
    EnPr = 'EN_PR',
    EnPw = 'EN_PW',
    EnRw = 'EN_RW',
    EnSb = 'EN_SB',
    EnSc = 'EN_SC',
    EnSd = 'EN_SD',
    EnSe = 'EN_SE',
    EnSg = 'EN_SG',
    EnSh = 'EN_SH',
    EnSi = 'EN_SI',
    EnSl = 'EN_SL',
    EnSs = 'EN_SS',
    EnSx = 'EN_SX',
    EnSz = 'EN_SZ',
    EnTc = 'EN_TC',
    EnTk = 'EN_TK',
    EnTo = 'EN_TO',
    EnTt = 'EN_TT',
    EnTv = 'EN_TV',
    EnTz = 'EN_TZ',
    EnUg = 'EN_UG',
    EnUm = 'EN_UM',
    EnUs = 'EN_US',
    EnVc = 'EN_VC',
    EnVg = 'EN_VG',
    EnVi = 'EN_VI',
    EnVu = 'EN_VU',
    EnWs = 'EN_WS',
    EnZa = 'EN_ZA',
    EnZm = 'EN_ZM',
    EnZw = 'EN_ZW',
    Eo = 'EO',
    Es = 'ES',
    EsAr = 'ES_AR',
    EsBo = 'ES_BO',
    EsBr = 'ES_BR',
    EsBz = 'ES_BZ',
    EsCl = 'ES_CL',
    EsCo = 'ES_CO',
    EsCr = 'ES_CR',
    EsCu = 'ES_CU',
    EsDo = 'ES_DO',
    EsEa = 'ES_EA',
    EsEc = 'ES_EC',
    EsEs = 'ES_ES',
    EsGq = 'ES_GQ',
    EsGt = 'ES_GT',
    EsHn = 'ES_HN',
    EsIc = 'ES_IC',
    EsMx = 'ES_MX',
    EsNi = 'ES_NI',
    EsPa = 'ES_PA',
    EsPe = 'ES_PE',
    EsPh = 'ES_PH',
    EsPr = 'ES_PR',
    EsPy = 'ES_PY',
    EsSv = 'ES_SV',
    EsUs = 'ES_US',
    EsUy = 'ES_UY',
    EsVe = 'ES_VE',
    Et = 'ET',
    EtEe = 'ET_EE',
    Eu = 'EU',
    EuEs = 'EU_ES',
    Ewo = 'EWO',
    EwoCm = 'EWO_CM',
    Fa = 'FA',
    FaAf = 'FA_AF',
    FaIr = 'FA_IR',
    Ff = 'FF',
    FfAdlm = 'FF_ADLM',
    FfAdlmBf = 'FF_ADLM_BF',
    FfAdlmCm = 'FF_ADLM_CM',
    FfAdlmGh = 'FF_ADLM_GH',
    FfAdlmGm = 'FF_ADLM_GM',
    FfAdlmGn = 'FF_ADLM_GN',
    FfAdlmGw = 'FF_ADLM_GW',
    FfAdlmLr = 'FF_ADLM_LR',
    FfAdlmMr = 'FF_ADLM_MR',
    FfAdlmNe = 'FF_ADLM_NE',
    FfAdlmNg = 'FF_ADLM_NG',
    FfAdlmSl = 'FF_ADLM_SL',
    FfAdlmSn = 'FF_ADLM_SN',
    FfLatn = 'FF_LATN',
    FfLatnBf = 'FF_LATN_BF',
    FfLatnCm = 'FF_LATN_CM',
    FfLatnGh = 'FF_LATN_GH',
    FfLatnGm = 'FF_LATN_GM',
    FfLatnGn = 'FF_LATN_GN',
    FfLatnGw = 'FF_LATN_GW',
    FfLatnLr = 'FF_LATN_LR',
    FfLatnMr = 'FF_LATN_MR',
    FfLatnNe = 'FF_LATN_NE',
    FfLatnNg = 'FF_LATN_NG',
    FfLatnSl = 'FF_LATN_SL',
    FfLatnSn = 'FF_LATN_SN',
    Fi = 'FI',
    FiFi = 'FI_FI',
    Fil = 'FIL',
    FilPh = 'FIL_PH',
    Fo = 'FO',
    FoDk = 'FO_DK',
    FoFo = 'FO_FO',
    Fr = 'FR',
    FrBe = 'FR_BE',
    FrBf = 'FR_BF',
    FrBi = 'FR_BI',
    FrBj = 'FR_BJ',
    FrBl = 'FR_BL',
    FrCa = 'FR_CA',
    FrCd = 'FR_CD',
    FrCf = 'FR_CF',
    FrCg = 'FR_CG',
    FrCh = 'FR_CH',
    FrCi = 'FR_CI',
    FrCm = 'FR_CM',
    FrDj = 'FR_DJ',
    FrDz = 'FR_DZ',
    FrFr = 'FR_FR',
    FrGa = 'FR_GA',
    FrGf = 'FR_GF',
    FrGn = 'FR_GN',
    FrGp = 'FR_GP',
    FrGq = 'FR_GQ',
    FrHt = 'FR_HT',
    FrKm = 'FR_KM',
    FrLu = 'FR_LU',
    FrMa = 'FR_MA',
    FrMc = 'FR_MC',
    FrMf = 'FR_MF',
    FrMg = 'FR_MG',
    FrMl = 'FR_ML',
    FrMq = 'FR_MQ',
    FrMr = 'FR_MR',
    FrMu = 'FR_MU',
    FrNc = 'FR_NC',
    FrNe = 'FR_NE',
    FrPf = 'FR_PF',
    FrPm = 'FR_PM',
    FrRe = 'FR_RE',
    FrRw = 'FR_RW',
    FrSc = 'FR_SC',
    FrSn = 'FR_SN',
    FrSy = 'FR_SY',
    FrTd = 'FR_TD',
    FrTg = 'FR_TG',
    FrTn = 'FR_TN',
    FrVu = 'FR_VU',
    FrWf = 'FR_WF',
    FrYt = 'FR_YT',
    Fur = 'FUR',
    FurIt = 'FUR_IT',
    Fy = 'FY',
    FyNl = 'FY_NL',
    Ga = 'GA',
    GaGb = 'GA_GB',
    GaIe = 'GA_IE',
    Gd = 'GD',
    GdGb = 'GD_GB',
    Gl = 'GL',
    GlEs = 'GL_ES',
    Gsw = 'GSW',
    GswCh = 'GSW_CH',
    GswFr = 'GSW_FR',
    GswLi = 'GSW_LI',
    Gu = 'GU',
    GuIn = 'GU_IN',
    Guz = 'GUZ',
    GuzKe = 'GUZ_KE',
    Gv = 'GV',
    GvIm = 'GV_IM',
    Ha = 'HA',
    HaGh = 'HA_GH',
    HaNe = 'HA_NE',
    HaNg = 'HA_NG',
    Haw = 'HAW',
    HawUs = 'HAW_US',
    He = 'HE',
    HeIl = 'HE_IL',
    Hi = 'HI',
    HiIn = 'HI_IN',
    Hr = 'HR',
    HrBa = 'HR_BA',
    HrHr = 'HR_HR',
    Hsb = 'HSB',
    HsbDe = 'HSB_DE',
    Hu = 'HU',
    HuHu = 'HU_HU',
    Hy = 'HY',
    HyAm = 'HY_AM',
    Ia = 'IA',
    Id = 'ID',
    IdId = 'ID_ID',
    Ig = 'IG',
    IgNg = 'IG_NG',
    Ii = 'II',
    IiCn = 'II_CN',
    Is = 'IS',
    IsIs = 'IS_IS',
    It = 'IT',
    ItCh = 'IT_CH',
    ItIt = 'IT_IT',
    ItSm = 'IT_SM',
    ItVa = 'IT_VA',
    Ja = 'JA',
    JaJp = 'JA_JP',
    Jgo = 'JGO',
    JgoCm = 'JGO_CM',
    Jmc = 'JMC',
    JmcTz = 'JMC_TZ',
    Jv = 'JV',
    JvId = 'JV_ID',
    Ka = 'KA',
    KaGe = 'KA_GE',
    Kab = 'KAB',
    KabDz = 'KAB_DZ',
    Kam = 'KAM',
    KamKe = 'KAM_KE',
    Kde = 'KDE',
    KdeTz = 'KDE_TZ',
    Kea = 'KEA',
    KeaCv = 'KEA_CV',
    Khq = 'KHQ',
    KhqMl = 'KHQ_ML',
    Ki = 'KI',
    KiKe = 'KI_KE',
    Kk = 'KK',
    KkKz = 'KK_KZ',
    Kkj = 'KKJ',
    KkjCm = 'KKJ_CM',
    Kl = 'KL',
    KlGl = 'KL_GL',
    Kln = 'KLN',
    KlnKe = 'KLN_KE',
    Km = 'KM',
    KmKh = 'KM_KH',
    Kn = 'KN',
    KnIn = 'KN_IN',
    Ko = 'KO',
    KoKp = 'KO_KP',
    KoKr = 'KO_KR',
    Kok = 'KOK',
    KokIn = 'KOK_IN',
    Ks = 'KS',
    KsArab = 'KS_ARAB',
    KsArabIn = 'KS_ARAB_IN',
    Ksb = 'KSB',
    KsbTz = 'KSB_TZ',
    Ksf = 'KSF',
    KsfCm = 'KSF_CM',
    Ksh = 'KSH',
    KshDe = 'KSH_DE',
    Ku = 'KU',
    KuTr = 'KU_TR',
    Kw = 'KW',
    KwGb = 'KW_GB',
    Ky = 'KY',
    KyKg = 'KY_KG',
    Lag = 'LAG',
    LagTz = 'LAG_TZ',
    Lb = 'LB',
    LbLu = 'LB_LU',
    Lg = 'LG',
    LgUg = 'LG_UG',
    Lkt = 'LKT',
    LktUs = 'LKT_US',
    Ln = 'LN',
    LnAo = 'LN_AO',
    LnCd = 'LN_CD',
    LnCf = 'LN_CF',
    LnCg = 'LN_CG',
    Lo = 'LO',
    LoLa = 'LO_LA',
    Lrc = 'LRC',
    LrcIq = 'LRC_IQ',
    LrcIr = 'LRC_IR',
    Lt = 'LT',
    LtLt = 'LT_LT',
    Lu = 'LU',
    LuCd = 'LU_CD',
    Luo = 'LUO',
    LuoKe = 'LUO_KE',
    Luy = 'LUY',
    LuyKe = 'LUY_KE',
    Lv = 'LV',
    LvLv = 'LV_LV',
    Mai = 'MAI',
    MaiIn = 'MAI_IN',
    Mas = 'MAS',
    MasKe = 'MAS_KE',
    MasTz = 'MAS_TZ',
    Mer = 'MER',
    MerKe = 'MER_KE',
    Mfe = 'MFE',
    MfeMu = 'MFE_MU',
    Mg = 'MG',
    MgMg = 'MG_MG',
    Mgh = 'MGH',
    MghMz = 'MGH_MZ',
    Mgo = 'MGO',
    MgoCm = 'MGO_CM',
    Mi = 'MI',
    MiNz = 'MI_NZ',
    Mk = 'MK',
    MkMk = 'MK_MK',
    Ml = 'ML',
    MlIn = 'ML_IN',
    Mn = 'MN',
    MnMn = 'MN_MN',
    Mni = 'MNI',
    MniBeng = 'MNI_BENG',
    MniBengIn = 'MNI_BENG_IN',
    Mr = 'MR',
    MrIn = 'MR_IN',
    Ms = 'MS',
    MsBn = 'MS_BN',
    MsId = 'MS_ID',
    MsMy = 'MS_MY',
    MsSg = 'MS_SG',
    Mt = 'MT',
    MtMt = 'MT_MT',
    Mua = 'MUA',
    MuaCm = 'MUA_CM',
    My = 'MY',
    MyMm = 'MY_MM',
    Mzn = 'MZN',
    MznIr = 'MZN_IR',
    Naq = 'NAQ',
    NaqNa = 'NAQ_NA',
    Nb = 'NB',
    NbNo = 'NB_NO',
    NbSj = 'NB_SJ',
    Nd = 'ND',
    NdZw = 'ND_ZW',
    Nds = 'NDS',
    NdsDe = 'NDS_DE',
    NdsNl = 'NDS_NL',
    Ne = 'NE',
    NeIn = 'NE_IN',
    NeNp = 'NE_NP',
    Nl = 'NL',
    NlAw = 'NL_AW',
    NlBe = 'NL_BE',
    NlBq = 'NL_BQ',
    NlCw = 'NL_CW',
    NlNl = 'NL_NL',
    NlSr = 'NL_SR',
    NlSx = 'NL_SX',
    Nmg = 'NMG',
    NmgCm = 'NMG_CM',
    Nn = 'NN',
    NnNo = 'NN_NO',
    Nnh = 'NNH',
    NnhCm = 'NNH_CM',
    Nus = 'NUS',
    NusSs = 'NUS_SS',
    Nyn = 'NYN',
    NynUg = 'NYN_UG',
    Om = 'OM',
    OmEt = 'OM_ET',
    OmKe = 'OM_KE',
    Or = 'OR',
    OrIn = 'OR_IN',
    Os = 'OS',
    OsGe = 'OS_GE',
    OsRu = 'OS_RU',
    Pa = 'PA',
    PaArab = 'PA_ARAB',
    PaArabPk = 'PA_ARAB_PK',
    PaGuru = 'PA_GURU',
    PaGuruIn = 'PA_GURU_IN',
    Pcm = 'PCM',
    PcmNg = 'PCM_NG',
    Pl = 'PL',
    PlPl = 'PL_PL',
    Prg = 'PRG',
    Ps = 'PS',
    PsAf = 'PS_AF',
    PsPk = 'PS_PK',
    Pt = 'PT',
    PtAo = 'PT_AO',
    PtBr = 'PT_BR',
    PtCh = 'PT_CH',
    PtCv = 'PT_CV',
    PtGq = 'PT_GQ',
    PtGw = 'PT_GW',
    PtLu = 'PT_LU',
    PtMo = 'PT_MO',
    PtMz = 'PT_MZ',
    PtPt = 'PT_PT',
    PtSt = 'PT_ST',
    PtTl = 'PT_TL',
    Qu = 'QU',
    QuBo = 'QU_BO',
    QuEc = 'QU_EC',
    QuPe = 'QU_PE',
    Rm = 'RM',
    RmCh = 'RM_CH',
    Rn = 'RN',
    RnBi = 'RN_BI',
    Ro = 'RO',
    RoMd = 'RO_MD',
    RoRo = 'RO_RO',
    Rof = 'ROF',
    RofTz = 'ROF_TZ',
    Ru = 'RU',
    RuBy = 'RU_BY',
    RuKg = 'RU_KG',
    RuKz = 'RU_KZ',
    RuMd = 'RU_MD',
    RuRu = 'RU_RU',
    RuUa = 'RU_UA',
    Rw = 'RW',
    RwRw = 'RW_RW',
    Rwk = 'RWK',
    RwkTz = 'RWK_TZ',
    Sah = 'SAH',
    SahRu = 'SAH_RU',
    Saq = 'SAQ',
    SaqKe = 'SAQ_KE',
    Sat = 'SAT',
    SatOlck = 'SAT_OLCK',
    SatOlckIn = 'SAT_OLCK_IN',
    Sbp = 'SBP',
    SbpTz = 'SBP_TZ',
    Sd = 'SD',
    SdArab = 'SD_ARAB',
    SdArabPk = 'SD_ARAB_PK',
    SdDeva = 'SD_DEVA',
    SdDevaIn = 'SD_DEVA_IN',
    Se = 'SE',
    SeFi = 'SE_FI',
    SeNo = 'SE_NO',
    SeSe = 'SE_SE',
    Seh = 'SEH',
    SehMz = 'SEH_MZ',
    Ses = 'SES',
    SesMl = 'SES_ML',
    Sg = 'SG',
    SgCf = 'SG_CF',
    Shi = 'SHI',
    ShiLatn = 'SHI_LATN',
    ShiLatnMa = 'SHI_LATN_MA',
    ShiTfng = 'SHI_TFNG',
    ShiTfngMa = 'SHI_TFNG_MA',
    Si = 'SI',
    SiLk = 'SI_LK',
    Sk = 'SK',
    SkSk = 'SK_SK',
    Sl = 'SL',
    SlSi = 'SL_SI',
    Smn = 'SMN',
    SmnFi = 'SMN_FI',
    Sn = 'SN',
    SnZw = 'SN_ZW',
    So = 'SO',
    SoDj = 'SO_DJ',
    SoEt = 'SO_ET',
    SoKe = 'SO_KE',
    SoSo = 'SO_SO',
    Sq = 'SQ',
    SqAl = 'SQ_AL',
    SqMk = 'SQ_MK',
    SqXk = 'SQ_XK',
    Sr = 'SR',
    SrCyrl = 'SR_CYRL',
    SrCyrlBa = 'SR_CYRL_BA',
    SrCyrlMe = 'SR_CYRL_ME',
    SrCyrlRs = 'SR_CYRL_RS',
    SrCyrlXk = 'SR_CYRL_XK',
    SrLatn = 'SR_LATN',
    SrLatnBa = 'SR_LATN_BA',
    SrLatnMe = 'SR_LATN_ME',
    SrLatnRs = 'SR_LATN_RS',
    SrLatnXk = 'SR_LATN_XK',
    Su = 'SU',
    SuLatn = 'SU_LATN',
    SuLatnId = 'SU_LATN_ID',
    Sv = 'SV',
    SvAx = 'SV_AX',
    SvFi = 'SV_FI',
    SvSe = 'SV_SE',
    Sw = 'SW',
    SwCd = 'SW_CD',
    SwKe = 'SW_KE',
    SwTz = 'SW_TZ',
    SwUg = 'SW_UG',
    Ta = 'TA',
    TaIn = 'TA_IN',
    TaLk = 'TA_LK',
    TaMy = 'TA_MY',
    TaSg = 'TA_SG',
    Te = 'TE',
    TeIn = 'TE_IN',
    Teo = 'TEO',
    TeoKe = 'TEO_KE',
    TeoUg = 'TEO_UG',
    Tg = 'TG',
    TgTj = 'TG_TJ',
    Th = 'TH',
    ThTh = 'TH_TH',
    Ti = 'TI',
    TiEr = 'TI_ER',
    TiEt = 'TI_ET',
    Tk = 'TK',
    TkTm = 'TK_TM',
    To = 'TO',
    ToTo = 'TO_TO',
    Tr = 'TR',
    TrCy = 'TR_CY',
    TrTr = 'TR_TR',
    Tt = 'TT',
    TtRu = 'TT_RU',
    Twq = 'TWQ',
    TwqNe = 'TWQ_NE',
    Tzm = 'TZM',
    TzmMa = 'TZM_MA',
    Ug = 'UG',
    UgCn = 'UG_CN',
    Uk = 'UK',
    UkUa = 'UK_UA',
    Ur = 'UR',
    UrIn = 'UR_IN',
    UrPk = 'UR_PK',
    Uz = 'UZ',
    UzArab = 'UZ_ARAB',
    UzArabAf = 'UZ_ARAB_AF',
    UzCyrl = 'UZ_CYRL',
    UzCyrlUz = 'UZ_CYRL_UZ',
    UzLatn = 'UZ_LATN',
    UzLatnUz = 'UZ_LATN_UZ',
    Vai = 'VAI',
    VaiLatn = 'VAI_LATN',
    VaiLatnLr = 'VAI_LATN_LR',
    VaiVaii = 'VAI_VAII',
    VaiVaiiLr = 'VAI_VAII_LR',
    Vi = 'VI',
    ViVn = 'VI_VN',
    Vo = 'VO',
    Vun = 'VUN',
    VunTz = 'VUN_TZ',
    Wae = 'WAE',
    WaeCh = 'WAE_CH',
    Wo = 'WO',
    WoSn = 'WO_SN',
    Xh = 'XH',
    XhZa = 'XH_ZA',
    Xog = 'XOG',
    XogUg = 'XOG_UG',
    Yav = 'YAV',
    YavCm = 'YAV_CM',
    Yi = 'YI',
    Yo = 'YO',
    YoBj = 'YO_BJ',
    YoNg = 'YO_NG',
    Yue = 'YUE',
    YueHans = 'YUE_HANS',
    YueHansCn = 'YUE_HANS_CN',
    YueHant = 'YUE_HANT',
    YueHantHk = 'YUE_HANT_HK',
    Zgh = 'ZGH',
    ZghMa = 'ZGH_MA',
    Zh = 'ZH',
    ZhHans = 'ZH_HANS',
    ZhHansCn = 'ZH_HANS_CN',
    ZhHansHk = 'ZH_HANS_HK',
    ZhHansMo = 'ZH_HANS_MO',
    ZhHansSg = 'ZH_HANS_SG',
    ZhHant = 'ZH_HANT',
    ZhHantHk = 'ZH_HANT_HK',
    ZhHantMo = 'ZH_HANT_MO',
    ZhHantTw = 'ZH_HANT_TW',
    Zu = 'ZU',
    ZuZa = 'ZU_ZA'
}

export type LanguageDisplay = {
    __typename?: 'LanguageDisplay';
    code: LanguageCodeEnum;
    language: Scalars['String'];
};

export type LimitInfo = {
    __typename?: 'LimitInfo';
    currentUsage: Limits;
    allowedUsage: Limits;
};

export type Limits = {
    __typename?: 'Limits';
    channels?: Maybe<Scalars['Int']>;
    orders?: Maybe<Scalars['Int']>;
    productVariants?: Maybe<Scalars['Int']>;
    staffUsers?: Maybe<Scalars['Int']>;
    warehouses?: Maybe<Scalars['Int']>;
};

export type Manifest = {
    __typename?: 'Manifest';
    identifier: Scalars['String'];
    version: Scalars['String'];
    name: Scalars['String'];
    about?: Maybe<Scalars['String']>;
    permissions?: Maybe<Array<Maybe<Permission>>>;
    appUrl?: Maybe<Scalars['String']>;
    configurationUrl?: Maybe<Scalars['String']>;
    tokenTargetUrl?: Maybe<Scalars['String']>;
    dataPrivacy?: Maybe<Scalars['String']>;
    dataPrivacyUrl?: Maybe<Scalars['String']>;
    homepageUrl?: Maybe<Scalars['String']>;
    supportUrl?: Maybe<Scalars['String']>;
    extensions: Array<AppManifestExtension>;
};

export type Margin = {
    __typename?: 'Margin';
    start?: Maybe<Scalars['Int']>;
    stop?: Maybe<Scalars['Int']>;
};

export enum MeasurementUnitsEnum {
    Cm = 'CM',
    M = 'M',
    Km = 'KM',
    Ft = 'FT',
    Yd = 'YD',
    Inch = 'INCH',
    SqCm = 'SQ_CM',
    SqM = 'SQ_M',
    SqKm = 'SQ_KM',
    SqFt = 'SQ_FT',
    SqYd = 'SQ_YD',
    SqInch = 'SQ_INCH',
    CubicMillimeter = 'CUBIC_MILLIMETER',
    CubicCentimeter = 'CUBIC_CENTIMETER',
    CubicDecimeter = 'CUBIC_DECIMETER',
    CubicMeter = 'CUBIC_METER',
    Liter = 'LITER',
    CubicFoot = 'CUBIC_FOOT',
    CubicInch = 'CUBIC_INCH',
    CubicYard = 'CUBIC_YARD',
    Qt = 'QT',
    Pint = 'PINT',
    FlOz = 'FL_OZ',
    AcreIn = 'ACRE_IN',
    AcreFt = 'ACRE_FT',
    G = 'G',
    Lb = 'LB',
    Oz = 'OZ',
    Kg = 'KG',
    Tonne = 'TONNE'
}

export type Menu = Node & ObjectWithMetadata & {
    __typename?: 'Menu';
    id: Scalars['ID'];
    privateMetadata: Array<Maybe<MetadataItem>>;
    metadata: Array<Maybe<MetadataItem>>;
    name: Scalars['String'];
    slug: Scalars['String'];
    items?: Maybe<Array<Maybe<MenuItem>>>;
};

export type MenuBulkDelete = {
    __typename?: 'MenuBulkDelete';
    count: Scalars['Int'];
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    menuErrors: Array<MenuError>;
    errors: Array<MenuError>;
};

export type MenuCountableConnection = {
    __typename?: 'MenuCountableConnection';
    pageInfo: PageInfo;
    edges: Array<MenuCountableEdge>;
    totalCount?: Maybe<Scalars['Int']>;
};

export type MenuCountableEdge = {
    __typename?: 'MenuCountableEdge';
    node: Menu;
    cursor: Scalars['String'];
};

export type MenuCreate = {
    __typename?: 'MenuCreate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    menuErrors: Array<MenuError>;
    errors: Array<MenuError>;
    menu?: Maybe<Menu>;
};

export type MenuCreateInput = {
    name: Scalars['String'];
    slug?: InputMaybe<Scalars['String']>;
    items?: InputMaybe<Array<InputMaybe<MenuItemInput>>>;
};

export type MenuDelete = {
    __typename?: 'MenuDelete';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    menuErrors: Array<MenuError>;
    errors: Array<MenuError>;
    menu?: Maybe<Menu>;
};

export type MenuError = {
    __typename?: 'MenuError';
    field?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    code: MenuErrorCode;
};

export enum MenuErrorCode {
    CannotAssignNode = 'CANNOT_ASSIGN_NODE',
    GraphqlError = 'GRAPHQL_ERROR',
    Invalid = 'INVALID',
    InvalidMenuItem = 'INVALID_MENU_ITEM',
    NoMenuItemProvided = 'NO_MENU_ITEM_PROVIDED',
    NotFound = 'NOT_FOUND',
    Required = 'REQUIRED',
    TooManyMenuItems = 'TOO_MANY_MENU_ITEMS',
    Unique = 'UNIQUE'
}

export type MenuFilterInput = {
    search?: InputMaybe<Scalars['String']>;
    slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    metadata?: InputMaybe<Array<InputMaybe<MetadataFilter>>>;
};

export type MenuInput = {
    name?: InputMaybe<Scalars['String']>;
    slug?: InputMaybe<Scalars['String']>;
};

export type MenuItem = Node & ObjectWithMetadata & {
    __typename?: 'MenuItem';
    id: Scalars['ID'];
    privateMetadata: Array<Maybe<MetadataItem>>;
    metadata: Array<Maybe<MetadataItem>>;
    name: Scalars['String'];
    menu: Menu;
    parent?: Maybe<MenuItem>;
    category?: Maybe<Category>;
    collection?: Maybe<Collection>;
    page?: Maybe<Page>;
    level: Scalars['Int'];
    children?: Maybe<Array<Maybe<MenuItem>>>;
    url?: Maybe<Scalars['String']>;
    translation?: Maybe<MenuItemTranslation>;
};


export type MenuItemTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type MenuItemBulkDelete = {
    __typename?: 'MenuItemBulkDelete';
    count: Scalars['Int'];
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    menuErrors: Array<MenuError>;
    errors: Array<MenuError>;
};

export type MenuItemCountableConnection = {
    __typename?: 'MenuItemCountableConnection';
    pageInfo: PageInfo;
    edges: Array<MenuItemCountableEdge>;
    totalCount?: Maybe<Scalars['Int']>;
};

export type MenuItemCountableEdge = {
    __typename?: 'MenuItemCountableEdge';
    node: MenuItem;
    cursor: Scalars['String'];
};

export type MenuItemCreate = {
    __typename?: 'MenuItemCreate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    menuErrors: Array<MenuError>;
    errors: Array<MenuError>;
    menuItem?: Maybe<MenuItem>;
};

export type MenuItemCreateInput = {
    name: Scalars['String'];
    url?: InputMaybe<Scalars['String']>;
    category?: InputMaybe<Scalars['ID']>;
    collection?: InputMaybe<Scalars['ID']>;
    page?: InputMaybe<Scalars['ID']>;
    menu: Scalars['ID'];
    parent?: InputMaybe<Scalars['ID']>;
};

export type MenuItemDelete = {
    __typename?: 'MenuItemDelete';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    menuErrors: Array<MenuError>;
    errors: Array<MenuError>;
    menuItem?: Maybe<MenuItem>;
};

export type MenuItemFilterInput = {
    search?: InputMaybe<Scalars['String']>;
    metadata?: InputMaybe<Array<InputMaybe<MetadataFilter>>>;
};

export type MenuItemInput = {
    name?: InputMaybe<Scalars['String']>;
    url?: InputMaybe<Scalars['String']>;
    category?: InputMaybe<Scalars['ID']>;
    collection?: InputMaybe<Scalars['ID']>;
    page?: InputMaybe<Scalars['ID']>;
};

export type MenuItemMove = {
    __typename?: 'MenuItemMove';
    menu?: Maybe<Menu>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    menuErrors: Array<MenuError>;
    errors: Array<MenuError>;
};

export type MenuItemMoveInput = {
    itemId: Scalars['ID'];
    parentId?: InputMaybe<Scalars['ID']>;
    sortOrder?: InputMaybe<Scalars['Int']>;
};

export type MenuItemSortingInput = {
    direction: OrderDirection;
    field: MenuItemsSortField;
};

export enum MenuItemsSortField {
    Name = 'NAME'
}

export type MenuItemTranslatableContent = Node & {
    __typename?: 'MenuItemTranslatableContent';
    id: Scalars['ID'];
    name: Scalars['String'];
    translation?: Maybe<MenuItemTranslation>;
    /** @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries. */
    menuItem?: Maybe<MenuItem>;
};


export type MenuItemTranslatableContentTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type MenuItemTranslate = {
    __typename?: 'MenuItemTranslate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    translationErrors: Array<TranslationError>;
    errors: Array<TranslationError>;
    menuItem?: Maybe<MenuItem>;
};

export type MenuItemTranslation = Node & {
    __typename?: 'MenuItemTranslation';
    id: Scalars['ID'];
    language: LanguageDisplay;
    name: Scalars['String'];
};

export type MenuItemUpdate = {
    __typename?: 'MenuItemUpdate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    menuErrors: Array<MenuError>;
    errors: Array<MenuError>;
    menuItem?: Maybe<MenuItem>;
};

export enum MenuSortField {
    Name = 'NAME',
    ItemsCount = 'ITEMS_COUNT'
}

export type MenuSortingInput = {
    direction: OrderDirection;
    field: MenuSortField;
};

export type MenuUpdate = {
    __typename?: 'MenuUpdate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    menuErrors: Array<MenuError>;
    errors: Array<MenuError>;
    menu?: Maybe<Menu>;
};

export type MetadataError = {
    __typename?: 'MetadataError';
    field?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    code: MetadataErrorCode;
};

export enum MetadataErrorCode {
    GraphqlError = 'GRAPHQL_ERROR',
    Invalid = 'INVALID',
    NotFound = 'NOT_FOUND',
    Required = 'REQUIRED',
    NotUpdated = 'NOT_UPDATED'
}

export type MetadataFilter = {
    key: Scalars['String'];
    value?: InputMaybe<Scalars['String']>;
};

export type MetadataInput = {
    key: Scalars['String'];
    value: Scalars['String'];
};

export type MetadataItem = {
    __typename?: 'MetadataItem';
    key: Scalars['String'];
    value: Scalars['String'];
};

export type Money = {
    __typename?: 'Money';
    currency: Scalars['String'];
    amount: Scalars['Float'];
};

export type MoneyInput = {
    currency: Scalars['String'];
    amount: Scalars['PositiveDecimal'];
};

export type MoneyRange = {
    __typename?: 'MoneyRange';
    start?: Maybe<Money>;
    stop?: Maybe<Money>;
};

export type MoveProductInput = {
    productId: Scalars['ID'];
    sortOrder?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
    __typename?: 'Mutation';
    webhookCreate?: Maybe<WebhookCreate>;
    webhookDelete?: Maybe<WebhookDelete>;
    webhookUpdate?: Maybe<WebhookUpdate>;
    eventDeliveryRetry?: Maybe<EventDeliveryRetry>;
    createWarehouse?: Maybe<WarehouseCreate>;
    updateWarehouse?: Maybe<WarehouseUpdate>;
    deleteWarehouse?: Maybe<WarehouseDelete>;
    assignWarehouseShippingZone?: Maybe<WarehouseShippingZoneAssign>;
    unassignWarehouseShippingZone?: Maybe<WarehouseShippingZoneUnassign>;
    staffNotificationRecipientCreate?: Maybe<StaffNotificationRecipientCreate>;
    staffNotificationRecipientUpdate?: Maybe<StaffNotificationRecipientUpdate>;
    staffNotificationRecipientDelete?: Maybe<StaffNotificationRecipientDelete>;
    shopDomainUpdate?: Maybe<ShopDomainUpdate>;
    shopSettingsUpdate?: Maybe<ShopSettingsUpdate>;
    shopFetchTaxRates?: Maybe<ShopFetchTaxRates>;
    shopSettingsTranslate?: Maybe<ShopSettingsTranslate>;
    shopAddressUpdate?: Maybe<ShopAddressUpdate>;
    orderSettingsUpdate?: Maybe<OrderSettingsUpdate>;
    giftCardSettingsUpdate?: Maybe<GiftCardSettingsUpdate>;
    shippingMethodChannelListingUpdate?: Maybe<ShippingMethodChannelListingUpdate>;
    shippingPriceCreate?: Maybe<ShippingPriceCreate>;
    shippingPriceDelete?: Maybe<ShippingPriceDelete>;
    shippingPriceBulkDelete?: Maybe<ShippingPriceBulkDelete>;
    shippingPriceUpdate?: Maybe<ShippingPriceUpdate>;
    shippingPriceTranslate?: Maybe<ShippingPriceTranslate>;
    shippingPriceExcludeProducts?: Maybe<ShippingPriceExcludeProducts>;
    shippingPriceRemoveProductFromExclude?: Maybe<ShippingPriceRemoveProductFromExclude>;
    shippingZoneCreate?: Maybe<ShippingZoneCreate>;
    shippingZoneDelete?: Maybe<ShippingZoneDelete>;
    shippingZoneBulkDelete?: Maybe<ShippingZoneBulkDelete>;
    shippingZoneUpdate?: Maybe<ShippingZoneUpdate>;
    productAttributeAssign?: Maybe<ProductAttributeAssign>;
    productAttributeAssignmentUpdate?: Maybe<ProductAttributeAssignmentUpdate>;
    productAttributeUnassign?: Maybe<ProductAttributeUnassign>;
    categoryCreate?: Maybe<CategoryCreate>;
    categoryDelete?: Maybe<CategoryDelete>;
    categoryBulkDelete?: Maybe<CategoryBulkDelete>;
    categoryUpdate?: Maybe<CategoryUpdate>;
    categoryTranslate?: Maybe<CategoryTranslate>;
    collectionAddProducts?: Maybe<CollectionAddProducts>;
    collectionCreate?: Maybe<CollectionCreate>;
    collectionDelete?: Maybe<CollectionDelete>;
    collectionReorderProducts?: Maybe<CollectionReorderProducts>;
    collectionBulkDelete?: Maybe<CollectionBulkDelete>;
    collectionRemoveProducts?: Maybe<CollectionRemoveProducts>;
    collectionUpdate?: Maybe<CollectionUpdate>;
    collectionTranslate?: Maybe<CollectionTranslate>;
    collectionChannelListingUpdate?: Maybe<CollectionChannelListingUpdate>;
    productCreate?: Maybe<ProductCreate>;
    productDelete?: Maybe<ProductDelete>;
    productBulkDelete?: Maybe<ProductBulkDelete>;
    productUpdate?: Maybe<ProductUpdate>;
    productTranslate?: Maybe<ProductTranslate>;
    productChannelListingUpdate?: Maybe<ProductChannelListingUpdate>;
    productMediaCreate?: Maybe<ProductMediaCreate>;
    productVariantReorder?: Maybe<ProductVariantReorder>;
    productMediaDelete?: Maybe<ProductMediaDelete>;
    productMediaBulkDelete?: Maybe<ProductMediaBulkDelete>;
    productMediaReorder?: Maybe<ProductMediaReorder>;
    productMediaUpdate?: Maybe<ProductMediaUpdate>;
    productTypeCreate?: Maybe<ProductTypeCreate>;
    productTypeDelete?: Maybe<ProductTypeDelete>;
    productTypeBulkDelete?: Maybe<ProductTypeBulkDelete>;
    productTypeUpdate?: Maybe<ProductTypeUpdate>;
    productTypeReorderAttributes?: Maybe<ProductTypeReorderAttributes>;
    productReorderAttributeValues?: Maybe<ProductReorderAttributeValues>;
    digitalContentCreate?: Maybe<DigitalContentCreate>;
    digitalContentDelete?: Maybe<DigitalContentDelete>;
    digitalContentUpdate?: Maybe<DigitalContentUpdate>;
    digitalContentUrlCreate?: Maybe<DigitalContentUrlCreate>;
    productVariantCreate?: Maybe<ProductVariantCreate>;
    productVariantDelete?: Maybe<ProductVariantDelete>;
    productVariantBulkCreate?: Maybe<ProductVariantBulkCreate>;
    productVariantBulkDelete?: Maybe<ProductVariantBulkDelete>;
    productVariantStocksCreate?: Maybe<ProductVariantStocksCreate>;
    productVariantStocksDelete?: Maybe<ProductVariantStocksDelete>;
    productVariantStocksUpdate?: Maybe<ProductVariantStocksUpdate>;
    productVariantUpdate?: Maybe<ProductVariantUpdate>;
    productVariantSetDefault?: Maybe<ProductVariantSetDefault>;
    productVariantTranslate?: Maybe<ProductVariantTranslate>;
    productVariantChannelListingUpdate?: Maybe<ProductVariantChannelListingUpdate>;
    productVariantReorderAttributeValues?: Maybe<ProductVariantReorderAttributeValues>;
    productVariantPreorderDeactivate?: Maybe<ProductVariantPreorderDeactivate>;
    variantMediaAssign?: Maybe<VariantMediaAssign>;
    variantMediaUnassign?: Maybe<VariantMediaUnassign>;
    paymentCapture?: Maybe<PaymentCapture>;
    paymentRefund?: Maybe<PaymentRefund>;
    paymentVoid?: Maybe<PaymentVoid>;
    paymentInitialize?: Maybe<PaymentInitialize>;
    paymentCheckBalance?: Maybe<PaymentCheckBalance>;
    pageCreate?: Maybe<PageCreate>;
    pageDelete?: Maybe<PageDelete>;
    pageBulkDelete?: Maybe<PageBulkDelete>;
    pageBulkPublish?: Maybe<PageBulkPublish>;
    pageUpdate?: Maybe<PageUpdate>;
    pageTranslate?: Maybe<PageTranslate>;
    pageTypeCreate?: Maybe<PageTypeCreate>;
    pageTypeUpdate?: Maybe<PageTypeUpdate>;
    pageTypeDelete?: Maybe<PageTypeDelete>;
    pageTypeBulkDelete?: Maybe<PageTypeBulkDelete>;
    pageAttributeAssign?: Maybe<PageAttributeAssign>;
    pageAttributeUnassign?: Maybe<PageAttributeUnassign>;
    pageTypeReorderAttributes?: Maybe<PageTypeReorderAttributes>;
    pageReorderAttributeValues?: Maybe<PageReorderAttributeValues>;
    draftOrderComplete?: Maybe<DraftOrderComplete>;
    draftOrderCreate?: Maybe<DraftOrderCreate>;
    draftOrderDelete?: Maybe<DraftOrderDelete>;
    draftOrderBulkDelete?: Maybe<DraftOrderBulkDelete>;
    /** @deprecated This field will be removed in Saleor 4.0. */
    draftOrderLinesBulkDelete?: Maybe<DraftOrderLinesBulkDelete>;
    draftOrderUpdate?: Maybe<DraftOrderUpdate>;
    orderAddNote?: Maybe<OrderAddNote>;
    orderCancel?: Maybe<OrderCancel>;
    orderCapture?: Maybe<OrderCapture>;
    orderConfirm?: Maybe<OrderConfirm>;
    orderFulfill?: Maybe<OrderFulfill>;
    orderFulfillmentCancel?: Maybe<FulfillmentCancel>;
    orderFulfillmentApprove?: Maybe<FulfillmentApprove>;
    orderFulfillmentUpdateTracking?: Maybe<FulfillmentUpdateTracking>;
    orderFulfillmentRefundProducts?: Maybe<FulfillmentRefundProducts>;
    orderFulfillmentReturnProducts?: Maybe<FulfillmentReturnProducts>;
    orderLinesCreate?: Maybe<OrderLinesCreate>;
    orderLineDelete?: Maybe<OrderLineDelete>;
    orderLineUpdate?: Maybe<OrderLineUpdate>;
    orderDiscountAdd?: Maybe<OrderDiscountAdd>;
    orderDiscountUpdate?: Maybe<OrderDiscountUpdate>;
    orderDiscountDelete?: Maybe<OrderDiscountDelete>;
    orderLineDiscountUpdate?: Maybe<OrderLineDiscountUpdate>;
    orderLineDiscountRemove?: Maybe<OrderLineDiscountRemove>;
    orderMarkAsPaid?: Maybe<OrderMarkAsPaid>;
    orderRefund?: Maybe<OrderRefund>;
    orderUpdate?: Maybe<OrderUpdate>;
    orderUpdateShipping?: Maybe<OrderUpdateShipping>;
    orderVoid?: Maybe<OrderVoid>;
    orderBulkCancel?: Maybe<OrderBulkCancel>;
    deleteMetadata?: Maybe<DeleteMetadata>;
    deletePrivateMetadata?: Maybe<DeletePrivateMetadata>;
    updateMetadata?: Maybe<UpdateMetadata>;
    updatePrivateMetadata?: Maybe<UpdatePrivateMetadata>;
    assignNavigation?: Maybe<AssignNavigation>;
    menuCreate?: Maybe<MenuCreate>;
    menuDelete?: Maybe<MenuDelete>;
    menuBulkDelete?: Maybe<MenuBulkDelete>;
    menuUpdate?: Maybe<MenuUpdate>;
    menuItemCreate?: Maybe<MenuItemCreate>;
    menuItemDelete?: Maybe<MenuItemDelete>;
    menuItemBulkDelete?: Maybe<MenuItemBulkDelete>;
    menuItemUpdate?: Maybe<MenuItemUpdate>;
    menuItemTranslate?: Maybe<MenuItemTranslate>;
    menuItemMove?: Maybe<MenuItemMove>;
    invoiceRequest?: Maybe<InvoiceRequest>;
    invoiceRequestDelete?: Maybe<InvoiceRequestDelete>;
    invoiceCreate?: Maybe<InvoiceCreate>;
    invoiceDelete?: Maybe<InvoiceDelete>;
    invoiceUpdate?: Maybe<InvoiceUpdate>;
    invoiceSendNotification?: Maybe<InvoiceSendNotification>;
    giftCardActivate?: Maybe<GiftCardActivate>;
    giftCardCreate?: Maybe<GiftCardCreate>;
    giftCardDelete?: Maybe<GiftCardDelete>;
    giftCardDeactivate?: Maybe<GiftCardDeactivate>;
    giftCardUpdate?: Maybe<GiftCardUpdate>;
    giftCardResend?: Maybe<GiftCardResend>;
    giftCardAddNote?: Maybe<GiftCardAddNote>;
    giftCardBulkCreate?: Maybe<GiftCardBulkCreate>;
    giftCardBulkDelete?: Maybe<GiftCardBulkDelete>;
    giftCardBulkActivate?: Maybe<GiftCardBulkActivate>;
    giftCardBulkDeactivate?: Maybe<GiftCardBulkDeactivate>;
    pluginUpdate?: Maybe<PluginUpdate>;
    externalNotificationTrigger?: Maybe<ExternalNotificationTrigger>;
    saleCreate?: Maybe<SaleCreate>;
    saleDelete?: Maybe<SaleDelete>;
    saleBulkDelete?: Maybe<SaleBulkDelete>;
    saleUpdate?: Maybe<SaleUpdate>;
    saleCataloguesAdd?: Maybe<SaleAddCatalogues>;
    saleCataloguesRemove?: Maybe<SaleRemoveCatalogues>;
    saleTranslate?: Maybe<SaleTranslate>;
    saleChannelListingUpdate?: Maybe<SaleChannelListingUpdate>;
    voucherCreate?: Maybe<VoucherCreate>;
    voucherDelete?: Maybe<VoucherDelete>;
    voucherBulkDelete?: Maybe<VoucherBulkDelete>;
    voucherUpdate?: Maybe<VoucherUpdate>;
    voucherCataloguesAdd?: Maybe<VoucherAddCatalogues>;
    voucherCataloguesRemove?: Maybe<VoucherRemoveCatalogues>;
    voucherTranslate?: Maybe<VoucherTranslate>;
    voucherChannelListingUpdate?: Maybe<VoucherChannelListingUpdate>;
    exportProducts?: Maybe<ExportProducts>;
    exportGiftCards?: Maybe<ExportGiftCards>;
    fileUpload?: Maybe<FileUpload>;
    checkoutAddPromoCode?: Maybe<CheckoutAddPromoCode>;
    checkoutBillingAddressUpdate?: Maybe<CheckoutBillingAddressUpdate>;
    checkoutComplete?: Maybe<CheckoutComplete>;
    checkoutCreate?: Maybe<CheckoutCreate>;
    checkoutCustomerAttach?: Maybe<CheckoutCustomerAttach>;
    checkoutCustomerDetach?: Maybe<CheckoutCustomerDetach>;
    checkoutEmailUpdate?: Maybe<CheckoutEmailUpdate>;
    /** @deprecated DEPRECATED: Will be removed in Saleor 4.0. Use `checkoutLinesDelete` instead. */
    checkoutLineDelete?: Maybe<CheckoutLineDelete>;
    checkoutLinesDelete?: Maybe<CheckoutLinesDelete>;
    checkoutLinesAdd?: Maybe<CheckoutLinesAdd>;
    checkoutLinesUpdate?: Maybe<CheckoutLinesUpdate>;
    checkoutRemovePromoCode?: Maybe<CheckoutRemovePromoCode>;
    checkoutPaymentCreate?: Maybe<CheckoutPaymentCreate>;
    checkoutShippingAddressUpdate?: Maybe<CheckoutShippingAddressUpdate>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `checkoutDeliveryMethodUpdate` instead. */
    checkoutShippingMethodUpdate?: Maybe<CheckoutShippingMethodUpdate>;
    checkoutDeliveryMethodUpdate?: Maybe<CheckoutDeliveryMethodUpdate>;
    checkoutLanguageCodeUpdate?: Maybe<CheckoutLanguageCodeUpdate>;
    channelCreate?: Maybe<ChannelCreate>;
    channelUpdate?: Maybe<ChannelUpdate>;
    channelDelete?: Maybe<ChannelDelete>;
    channelActivate?: Maybe<ChannelActivate>;
    channelDeactivate?: Maybe<ChannelDeactivate>;
    attributeCreate?: Maybe<AttributeCreate>;
    attributeDelete?: Maybe<AttributeDelete>;
    attributeUpdate?: Maybe<AttributeUpdate>;
    attributeTranslate?: Maybe<AttributeTranslate>;
    attributeBulkDelete?: Maybe<AttributeBulkDelete>;
    attributeValueBulkDelete?: Maybe<AttributeValueBulkDelete>;
    attributeValueCreate?: Maybe<AttributeValueCreate>;
    attributeValueDelete?: Maybe<AttributeValueDelete>;
    attributeValueUpdate?: Maybe<AttributeValueUpdate>;
    attributeValueTranslate?: Maybe<AttributeValueTranslate>;
    attributeReorderValues?: Maybe<AttributeReorderValues>;
    appCreate?: Maybe<AppCreate>;
    appUpdate?: Maybe<AppUpdate>;
    appDelete?: Maybe<AppDelete>;
    appTokenCreate?: Maybe<AppTokenCreate>;
    appTokenDelete?: Maybe<AppTokenDelete>;
    appTokenVerify?: Maybe<AppTokenVerify>;
    appInstall?: Maybe<AppInstall>;
    appRetryInstall?: Maybe<AppRetryInstall>;
    appDeleteFailedInstallation?: Maybe<AppDeleteFailedInstallation>;
    appFetchManifest?: Maybe<AppFetchManifest>;
    appActivate?: Maybe<AppActivate>;
    appDeactivate?: Maybe<AppDeactivate>;
    tokenCreate?: Maybe<CreateToken>;
    tokenRefresh?: Maybe<RefreshToken>;
    tokenVerify?: Maybe<VerifyToken>;
    tokensDeactivateAll?: Maybe<DeactivateAllUserTokens>;
    externalAuthenticationUrl?: Maybe<ExternalAuthenticationUrl>;
    externalObtainAccessTokens?: Maybe<ExternalObtainAccessTokens>;
    externalRefresh?: Maybe<ExternalRefresh>;
    externalLogout?: Maybe<ExternalLogout>;
    externalVerify?: Maybe<ExternalVerify>;
    requestPasswordReset?: Maybe<RequestPasswordReset>;
    confirmAccount?: Maybe<ConfirmAccount>;
    setPassword?: Maybe<SetPassword>;
    passwordChange?: Maybe<PasswordChange>;
    requestEmailChange?: Maybe<RequestEmailChange>;
    confirmEmailChange?: Maybe<ConfirmEmailChange>;
    accountAddressCreate?: Maybe<AccountAddressCreate>;
    accountAddressUpdate?: Maybe<AccountAddressUpdate>;
    accountAddressDelete?: Maybe<AccountAddressDelete>;
    accountSetDefaultAddress?: Maybe<AccountSetDefaultAddress>;
    accountRegister?: Maybe<AccountRegister>;
    accountUpdate?: Maybe<AccountUpdate>;
    accountRequestDeletion?: Maybe<AccountRequestDeletion>;
    accountDelete?: Maybe<AccountDelete>;
    addressCreate?: Maybe<AddressCreate>;
    addressUpdate?: Maybe<AddressUpdate>;
    addressDelete?: Maybe<AddressDelete>;
    addressSetDefault?: Maybe<AddressSetDefault>;
    customerCreate?: Maybe<CustomerCreate>;
    customerUpdate?: Maybe<CustomerUpdate>;
    customerDelete?: Maybe<CustomerDelete>;
    customerBulkDelete?: Maybe<CustomerBulkDelete>;
    staffCreate?: Maybe<StaffCreate>;
    staffUpdate?: Maybe<StaffUpdate>;
    staffDelete?: Maybe<StaffDelete>;
    staffBulkDelete?: Maybe<StaffBulkDelete>;
    userAvatarUpdate?: Maybe<UserAvatarUpdate>;
    userAvatarDelete?: Maybe<UserAvatarDelete>;
    userBulkSetActive?: Maybe<UserBulkSetActive>;
    permissionGroupCreate?: Maybe<PermissionGroupCreate>;
    permissionGroupUpdate?: Maybe<PermissionGroupUpdate>;
    permissionGroupDelete?: Maybe<PermissionGroupDelete>;
};


export type MutationWebhookCreateArgs = {
    input: WebhookCreateInput;
};


export type MutationWebhookDeleteArgs = {
    id: Scalars['ID'];
};


export type MutationWebhookUpdateArgs = {
    id: Scalars['ID'];
    input: WebhookUpdateInput;
};


export type MutationEventDeliveryRetryArgs = {
    id: Scalars['ID'];
};


export type MutationCreateWarehouseArgs = {
    input: WarehouseCreateInput;
};


export type MutationUpdateWarehouseArgs = {
    id: Scalars['ID'];
    input: WarehouseUpdateInput;
};


export type MutationDeleteWarehouseArgs = {
    id: Scalars['ID'];
};


export type MutationAssignWarehouseShippingZoneArgs = {
    id: Scalars['ID'];
    shippingZoneIds: Array<Scalars['ID']>;
};


export type MutationUnassignWarehouseShippingZoneArgs = {
    id: Scalars['ID'];
    shippingZoneIds: Array<Scalars['ID']>;
};


export type MutationStaffNotificationRecipientCreateArgs = {
    input: StaffNotificationRecipientInput;
};


export type MutationStaffNotificationRecipientUpdateArgs = {
    id: Scalars['ID'];
    input: StaffNotificationRecipientInput;
};


export type MutationStaffNotificationRecipientDeleteArgs = {
    id: Scalars['ID'];
};


export type MutationShopDomainUpdateArgs = {
    input?: InputMaybe<SiteDomainInput>;
};


export type MutationShopSettingsUpdateArgs = {
    input: ShopSettingsInput;
};


export type MutationShopSettingsTranslateArgs = {
    input: ShopSettingsTranslationInput;
    languageCode: LanguageCodeEnum;
};


export type MutationShopAddressUpdateArgs = {
    input?: InputMaybe<AddressInput>;
};


export type MutationOrderSettingsUpdateArgs = {
    input: OrderSettingsUpdateInput;
};


export type MutationGiftCardSettingsUpdateArgs = {
    input: GiftCardSettingsUpdateInput;
};


export type MutationShippingMethodChannelListingUpdateArgs = {
    id: Scalars['ID'];
    input: ShippingMethodChannelListingInput;
};


export type MutationShippingPriceCreateArgs = {
    input: ShippingPriceInput;
};


export type MutationShippingPriceDeleteArgs = {
    id: Scalars['ID'];
};


export type MutationShippingPriceBulkDeleteArgs = {
    ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationShippingPriceUpdateArgs = {
    id: Scalars['ID'];
    input: ShippingPriceInput;
};


export type MutationShippingPriceTranslateArgs = {
    id: Scalars['ID'];
    input: ShippingPriceTranslationInput;
    languageCode: LanguageCodeEnum;
};


export type MutationShippingPriceExcludeProductsArgs = {
    id: Scalars['ID'];
    input: ShippingPriceExcludeProductsInput;
};


export type MutationShippingPriceRemoveProductFromExcludeArgs = {
    id: Scalars['ID'];
    products: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationShippingZoneCreateArgs = {
    input: ShippingZoneCreateInput;
};


export type MutationShippingZoneDeleteArgs = {
    id: Scalars['ID'];
};


export type MutationShippingZoneBulkDeleteArgs = {
    ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationShippingZoneUpdateArgs = {
    id: Scalars['ID'];
    input: ShippingZoneUpdateInput;
};


export type MutationProductAttributeAssignArgs = {
    operations: Array<InputMaybe<ProductAttributeAssignInput>>;
    productTypeId: Scalars['ID'];
};


export type MutationProductAttributeAssignmentUpdateArgs = {
    operations: Array<InputMaybe<ProductAttributeAssignmentUpdateInput>>;
    productTypeId: Scalars['ID'];
};


export type MutationProductAttributeUnassignArgs = {
    attributeIds: Array<InputMaybe<Scalars['ID']>>;
    productTypeId: Scalars['ID'];
};


export type MutationCategoryCreateArgs = {
    input: CategoryInput;
    parent?: InputMaybe<Scalars['ID']>;
};


export type MutationCategoryDeleteArgs = {
    id: Scalars['ID'];
};


export type MutationCategoryBulkDeleteArgs = {
    ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationCategoryUpdateArgs = {
    id: Scalars['ID'];
    input: CategoryInput;
};


export type MutationCategoryTranslateArgs = {
    id: Scalars['ID'];
    input: TranslationInput;
    languageCode: LanguageCodeEnum;
};


export type MutationCollectionAddProductsArgs = {
    collectionId: Scalars['ID'];
    products: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationCollectionCreateArgs = {
    input: CollectionCreateInput;
};


export type MutationCollectionDeleteArgs = {
    id: Scalars['ID'];
};


export type MutationCollectionReorderProductsArgs = {
    collectionId: Scalars['ID'];
    moves: Array<InputMaybe<MoveProductInput>>;
};


export type MutationCollectionBulkDeleteArgs = {
    ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationCollectionRemoveProductsArgs = {
    collectionId: Scalars['ID'];
    products: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationCollectionUpdateArgs = {
    id: Scalars['ID'];
    input: CollectionInput;
};


export type MutationCollectionTranslateArgs = {
    id: Scalars['ID'];
    input: TranslationInput;
    languageCode: LanguageCodeEnum;
};


export type MutationCollectionChannelListingUpdateArgs = {
    id: Scalars['ID'];
    input: CollectionChannelListingUpdateInput;
};


export type MutationProductCreateArgs = {
    input: ProductCreateInput;
};


export type MutationProductDeleteArgs = {
    id: Scalars['ID'];
};


export type MutationProductBulkDeleteArgs = {
    ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationProductUpdateArgs = {
    id: Scalars['ID'];
    input: ProductInput;
};


export type MutationProductTranslateArgs = {
    id: Scalars['ID'];
    input: TranslationInput;
    languageCode: LanguageCodeEnum;
};


export type MutationProductChannelListingUpdateArgs = {
    id: Scalars['ID'];
    input: ProductChannelListingUpdateInput;
};


export type MutationProductMediaCreateArgs = {
    input: ProductMediaCreateInput;
};


export type MutationProductVariantReorderArgs = {
    moves: Array<InputMaybe<ReorderInput>>;
    productId: Scalars['ID'];
};


export type MutationProductMediaDeleteArgs = {
    id: Scalars['ID'];
};


export type MutationProductMediaBulkDeleteArgs = {
    ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationProductMediaReorderArgs = {
    mediaIds: Array<InputMaybe<Scalars['ID']>>;
    productId: Scalars['ID'];
};


export type MutationProductMediaUpdateArgs = {
    id: Scalars['ID'];
    input: ProductMediaUpdateInput;
};


export type MutationProductTypeCreateArgs = {
    input: ProductTypeInput;
};


export type MutationProductTypeDeleteArgs = {
    id: Scalars['ID'];
};


export type MutationProductTypeBulkDeleteArgs = {
    ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationProductTypeUpdateArgs = {
    id: Scalars['ID'];
    input: ProductTypeInput;
};


export type MutationProductTypeReorderAttributesArgs = {
    moves: Array<InputMaybe<ReorderInput>>;
    productTypeId: Scalars['ID'];
    type: ProductAttributeType;
};


export type MutationProductReorderAttributeValuesArgs = {
    attributeId: Scalars['ID'];
    moves: Array<InputMaybe<ReorderInput>>;
    productId: Scalars['ID'];
};


export type MutationDigitalContentCreateArgs = {
    input: DigitalContentUploadInput;
    variantId: Scalars['ID'];
};


export type MutationDigitalContentDeleteArgs = {
    variantId: Scalars['ID'];
};


export type MutationDigitalContentUpdateArgs = {
    input: DigitalContentInput;
    variantId: Scalars['ID'];
};


export type MutationDigitalContentUrlCreateArgs = {
    input: DigitalContentUrlCreateInput;
};


export type MutationProductVariantCreateArgs = {
    input: ProductVariantCreateInput;
};


export type MutationProductVariantDeleteArgs = {
    id: Scalars['ID'];
};


export type MutationProductVariantBulkCreateArgs = {
    product: Scalars['ID'];
    variants: Array<InputMaybe<ProductVariantBulkCreateInput>>;
};


export type MutationProductVariantBulkDeleteArgs = {
    ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationProductVariantStocksCreateArgs = {
    stocks: Array<StockInput>;
    variantId: Scalars['ID'];
};


export type MutationProductVariantStocksDeleteArgs = {
    variantId: Scalars['ID'];
    warehouseIds?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationProductVariantStocksUpdateArgs = {
    stocks: Array<StockInput>;
    variantId: Scalars['ID'];
};


export type MutationProductVariantUpdateArgs = {
    id: Scalars['ID'];
    input: ProductVariantInput;
};


export type MutationProductVariantSetDefaultArgs = {
    productId: Scalars['ID'];
    variantId: Scalars['ID'];
};


export type MutationProductVariantTranslateArgs = {
    id: Scalars['ID'];
    input: NameTranslationInput;
    languageCode: LanguageCodeEnum;
};


export type MutationProductVariantChannelListingUpdateArgs = {
    id: Scalars['ID'];
    input: Array<ProductVariantChannelListingAddInput>;
};


export type MutationProductVariantReorderAttributeValuesArgs = {
    attributeId: Scalars['ID'];
    moves: Array<InputMaybe<ReorderInput>>;
    variantId: Scalars['ID'];
};


export type MutationProductVariantPreorderDeactivateArgs = {
    id: Scalars['ID'];
};


export type MutationVariantMediaAssignArgs = {
    mediaId: Scalars['ID'];
    variantId: Scalars['ID'];
};


export type MutationVariantMediaUnassignArgs = {
    mediaId: Scalars['ID'];
    variantId: Scalars['ID'];
};


export type MutationPaymentCaptureArgs = {
    amount?: InputMaybe<Scalars['PositiveDecimal']>;
    paymentId: Scalars['ID'];
};


export type MutationPaymentRefundArgs = {
    amount?: InputMaybe<Scalars['PositiveDecimal']>;
    paymentId: Scalars['ID'];
};


export type MutationPaymentVoidArgs = {
    paymentId: Scalars['ID'];
};


export type MutationPaymentInitializeArgs = {
    channel?: InputMaybe<Scalars['String']>;
    gateway: Scalars['String'];
    paymentData?: InputMaybe<Scalars['JSONString']>;
};


export type MutationPaymentCheckBalanceArgs = {
    input: PaymentCheckBalanceInput;
};


export type MutationPageCreateArgs = {
    input: PageCreateInput;
};


export type MutationPageDeleteArgs = {
    id: Scalars['ID'];
};


export type MutationPageBulkDeleteArgs = {
    ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationPageBulkPublishArgs = {
    ids: Array<InputMaybe<Scalars['ID']>>;
    isPublished: Scalars['Boolean'];
};


export type MutationPageUpdateArgs = {
    id: Scalars['ID'];
    input: PageInput;
};


export type MutationPageTranslateArgs = {
    id: Scalars['ID'];
    input: PageTranslationInput;
    languageCode: LanguageCodeEnum;
};


export type MutationPageTypeCreateArgs = {
    input: PageTypeCreateInput;
};


export type MutationPageTypeUpdateArgs = {
    id?: InputMaybe<Scalars['ID']>;
    input: PageTypeUpdateInput;
};


export type MutationPageTypeDeleteArgs = {
    id: Scalars['ID'];
};


export type MutationPageTypeBulkDeleteArgs = {
    ids: Array<Scalars['ID']>;
};


export type MutationPageAttributeAssignArgs = {
    attributeIds: Array<Scalars['ID']>;
    pageTypeId: Scalars['ID'];
};


export type MutationPageAttributeUnassignArgs = {
    attributeIds: Array<Scalars['ID']>;
    pageTypeId: Scalars['ID'];
};


export type MutationPageTypeReorderAttributesArgs = {
    moves: Array<ReorderInput>;
    pageTypeId: Scalars['ID'];
};


export type MutationPageReorderAttributeValuesArgs = {
    attributeId: Scalars['ID'];
    moves: Array<InputMaybe<ReorderInput>>;
    pageId: Scalars['ID'];
};


export type MutationDraftOrderCompleteArgs = {
    id: Scalars['ID'];
};


export type MutationDraftOrderCreateArgs = {
    input: DraftOrderCreateInput;
};


export type MutationDraftOrderDeleteArgs = {
    id: Scalars['ID'];
};


export type MutationDraftOrderBulkDeleteArgs = {
    ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDraftOrderLinesBulkDeleteArgs = {
    ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDraftOrderUpdateArgs = {
    id: Scalars['ID'];
    input: DraftOrderInput;
};


export type MutationOrderAddNoteArgs = {
    order: Scalars['ID'];
    input: OrderAddNoteInput;
};


export type MutationOrderCancelArgs = {
    id: Scalars['ID'];
};


export type MutationOrderCaptureArgs = {
    amount: Scalars['PositiveDecimal'];
    id: Scalars['ID'];
};


export type MutationOrderConfirmArgs = {
    id: Scalars['ID'];
};


export type MutationOrderFulfillArgs = {
    input: OrderFulfillInput;
    order?: InputMaybe<Scalars['ID']>;
};


export type MutationOrderFulfillmentCancelArgs = {
    id: Scalars['ID'];
    input?: InputMaybe<FulfillmentCancelInput>;
};


export type MutationOrderFulfillmentApproveArgs = {
    allowStockToBeExceeded?: InputMaybe<Scalars['Boolean']>;
    id: Scalars['ID'];
    notifyCustomer: Scalars['Boolean'];
};


export type MutationOrderFulfillmentUpdateTrackingArgs = {
    id: Scalars['ID'];
    input: FulfillmentUpdateTrackingInput;
};


export type MutationOrderFulfillmentRefundProductsArgs = {
    input: OrderRefundProductsInput;
    order: Scalars['ID'];
};


export type MutationOrderFulfillmentReturnProductsArgs = {
    input: OrderReturnProductsInput;
    order: Scalars['ID'];
};


export type MutationOrderLinesCreateArgs = {
    id: Scalars['ID'];
    input: Array<InputMaybe<OrderLineCreateInput>>;
};


export type MutationOrderLineDeleteArgs = {
    id: Scalars['ID'];
};


export type MutationOrderLineUpdateArgs = {
    id: Scalars['ID'];
    input: OrderLineInput;
};


export type MutationOrderDiscountAddArgs = {
    input: OrderDiscountCommonInput;
    orderId: Scalars['ID'];
};


export type MutationOrderDiscountUpdateArgs = {
    discountId: Scalars['ID'];
    input: OrderDiscountCommonInput;
};


export type MutationOrderDiscountDeleteArgs = {
    discountId: Scalars['ID'];
};


export type MutationOrderLineDiscountUpdateArgs = {
    input: OrderDiscountCommonInput;
    orderLineId: Scalars['ID'];
};


export type MutationOrderLineDiscountRemoveArgs = {
    orderLineId: Scalars['ID'];
};


export type MutationOrderMarkAsPaidArgs = {
    id: Scalars['ID'];
    transactionReference?: InputMaybe<Scalars['String']>;
};


export type MutationOrderRefundArgs = {
    amount: Scalars['PositiveDecimal'];
    id: Scalars['ID'];
};


export type MutationOrderUpdateArgs = {
    id: Scalars['ID'];
    input: OrderUpdateInput;
};


export type MutationOrderUpdateShippingArgs = {
    order: Scalars['ID'];
    input: OrderUpdateShippingInput;
};


export type MutationOrderVoidArgs = {
    id: Scalars['ID'];
};


export type MutationOrderBulkCancelArgs = {
    ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDeleteMetadataArgs = {
    id: Scalars['ID'];
    keys: Array<Scalars['String']>;
};


export type MutationDeletePrivateMetadataArgs = {
    id: Scalars['ID'];
    keys: Array<Scalars['String']>;
};


export type MutationUpdateMetadataArgs = {
    id: Scalars['ID'];
    input: Array<MetadataInput>;
};


export type MutationUpdatePrivateMetadataArgs = {
    id: Scalars['ID'];
    input: Array<MetadataInput>;
};


export type MutationAssignNavigationArgs = {
    menu?: InputMaybe<Scalars['ID']>;
    navigationType: NavigationType;
};


export type MutationMenuCreateArgs = {
    input: MenuCreateInput;
};


export type MutationMenuDeleteArgs = {
    id: Scalars['ID'];
};


export type MutationMenuBulkDeleteArgs = {
    ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationMenuUpdateArgs = {
    id: Scalars['ID'];
    input: MenuInput;
};


export type MutationMenuItemCreateArgs = {
    input: MenuItemCreateInput;
};


export type MutationMenuItemDeleteArgs = {
    id: Scalars['ID'];
};


export type MutationMenuItemBulkDeleteArgs = {
    ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationMenuItemUpdateArgs = {
    id: Scalars['ID'];
    input: MenuItemInput;
};


export type MutationMenuItemTranslateArgs = {
    id: Scalars['ID'];
    input: NameTranslationInput;
    languageCode: LanguageCodeEnum;
};


export type MutationMenuItemMoveArgs = {
    menu: Scalars['ID'];
    moves: Array<InputMaybe<MenuItemMoveInput>>;
};


export type MutationInvoiceRequestArgs = {
    number?: InputMaybe<Scalars['String']>;
    orderId: Scalars['ID'];
};


export type MutationInvoiceRequestDeleteArgs = {
    id: Scalars['ID'];
};


export type MutationInvoiceCreateArgs = {
    input: InvoiceCreateInput;
    orderId: Scalars['ID'];
};


export type MutationInvoiceDeleteArgs = {
    id: Scalars['ID'];
};


export type MutationInvoiceUpdateArgs = {
    id: Scalars['ID'];
    input: UpdateInvoiceInput;
};


export type MutationInvoiceSendNotificationArgs = {
    id: Scalars['ID'];
};


export type MutationGiftCardActivateArgs = {
    id: Scalars['ID'];
};


export type MutationGiftCardCreateArgs = {
    input: GiftCardCreateInput;
};


export type MutationGiftCardDeleteArgs = {
    id: Scalars['ID'];
};


export type MutationGiftCardDeactivateArgs = {
    id: Scalars['ID'];
};


export type MutationGiftCardUpdateArgs = {
    id: Scalars['ID'];
    input: GiftCardUpdateInput;
};


export type MutationGiftCardResendArgs = {
    input: GiftCardResendInput;
};


export type MutationGiftCardAddNoteArgs = {
    id: Scalars['ID'];
    input: GiftCardAddNoteInput;
};


export type MutationGiftCardBulkCreateArgs = {
    input: GiftCardBulkCreateInput;
};


export type MutationGiftCardBulkDeleteArgs = {
    ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationGiftCardBulkActivateArgs = {
    ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationGiftCardBulkDeactivateArgs = {
    ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationPluginUpdateArgs = {
    channelId?: InputMaybe<Scalars['ID']>;
    id: Scalars['ID'];
    input: PluginUpdateInput;
};


export type MutationExternalNotificationTriggerArgs = {
    channel: Scalars['String'];
    input: ExternalNotificationTriggerInput;
    pluginId?: InputMaybe<Scalars['String']>;
};


export type MutationSaleCreateArgs = {
    input: SaleInput;
};


export type MutationSaleDeleteArgs = {
    id: Scalars['ID'];
};


export type MutationSaleBulkDeleteArgs = {
    ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationSaleUpdateArgs = {
    id: Scalars['ID'];
    input: SaleInput;
};


export type MutationSaleCataloguesAddArgs = {
    id: Scalars['ID'];
    input: CatalogueInput;
};


export type MutationSaleCataloguesRemoveArgs = {
    id: Scalars['ID'];
    input: CatalogueInput;
};


export type MutationSaleTranslateArgs = {
    id: Scalars['ID'];
    input: NameTranslationInput;
    languageCode: LanguageCodeEnum;
};


export type MutationSaleChannelListingUpdateArgs = {
    id: Scalars['ID'];
    input: SaleChannelListingInput;
};


export type MutationVoucherCreateArgs = {
    input: VoucherInput;
};


export type MutationVoucherDeleteArgs = {
    id: Scalars['ID'];
};


export type MutationVoucherBulkDeleteArgs = {
    ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationVoucherUpdateArgs = {
    id: Scalars['ID'];
    input: VoucherInput;
};


export type MutationVoucherCataloguesAddArgs = {
    id: Scalars['ID'];
    input: CatalogueInput;
};


export type MutationVoucherCataloguesRemoveArgs = {
    id: Scalars['ID'];
    input: CatalogueInput;
};


export type MutationVoucherTranslateArgs = {
    id: Scalars['ID'];
    input: NameTranslationInput;
    languageCode: LanguageCodeEnum;
};


export type MutationVoucherChannelListingUpdateArgs = {
    id: Scalars['ID'];
    input: VoucherChannelListingInput;
};


export type MutationExportProductsArgs = {
    input: ExportProductsInput;
};


export type MutationExportGiftCardsArgs = {
    input: ExportGiftCardsInput;
};


export type MutationFileUploadArgs = {
    file: Scalars['Upload'];
};


export type MutationCheckoutAddPromoCodeArgs = {
    checkoutId?: InputMaybe<Scalars['ID']>;
    promoCode: Scalars['String'];
    token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutBillingAddressUpdateArgs = {
    billingAddress: AddressInput;
    checkoutId?: InputMaybe<Scalars['ID']>;
    token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutCompleteArgs = {
    checkoutId?: InputMaybe<Scalars['ID']>;
    paymentData?: InputMaybe<Scalars['JSONString']>;
    redirectUrl?: InputMaybe<Scalars['String']>;
    storeSource?: InputMaybe<Scalars['Boolean']>;
    token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutCreateArgs = {
    input: CheckoutCreateInput;
};


export type MutationCheckoutCustomerAttachArgs = {
    checkoutId?: InputMaybe<Scalars['ID']>;
    customerId?: InputMaybe<Scalars['ID']>;
    token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutCustomerDetachArgs = {
    checkoutId?: InputMaybe<Scalars['ID']>;
    token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutEmailUpdateArgs = {
    checkoutId?: InputMaybe<Scalars['ID']>;
    email: Scalars['String'];
    token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutLineDeleteArgs = {
    checkoutId?: InputMaybe<Scalars['ID']>;
    lineId?: InputMaybe<Scalars['ID']>;
    token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutLinesDeleteArgs = {
    linesIds: Array<InputMaybe<Scalars['ID']>>;
    token: Scalars['UUID'];
};


export type MutationCheckoutLinesAddArgs = {
    checkoutId?: InputMaybe<Scalars['ID']>;
    lines: Array<InputMaybe<CheckoutLineInput>>;
    token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutLinesUpdateArgs = {
    checkoutId?: InputMaybe<Scalars['ID']>;
    lines: Array<InputMaybe<CheckoutLineInput>>;
    token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutRemovePromoCodeArgs = {
    checkoutId?: InputMaybe<Scalars['ID']>;
    promoCode?: InputMaybe<Scalars['String']>;
    promoCodeId?: InputMaybe<Scalars['ID']>;
    token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutPaymentCreateArgs = {
    checkoutId?: InputMaybe<Scalars['ID']>;
    input: PaymentInput;
    token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutShippingAddressUpdateArgs = {
    checkoutId?: InputMaybe<Scalars['ID']>;
    shippingAddress: AddressInput;
    token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutShippingMethodUpdateArgs = {
    checkoutId?: InputMaybe<Scalars['ID']>;
    shippingMethodId: Scalars['ID'];
    token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutDeliveryMethodUpdateArgs = {
    deliveryMethodId?: InputMaybe<Scalars['ID']>;
    token?: InputMaybe<Scalars['UUID']>;
};


export type MutationCheckoutLanguageCodeUpdateArgs = {
    checkoutId?: InputMaybe<Scalars['ID']>;
    languageCode: LanguageCodeEnum;
    token?: InputMaybe<Scalars['UUID']>;
};


export type MutationChannelCreateArgs = {
    input: ChannelCreateInput;
};


export type MutationChannelUpdateArgs = {
    id: Scalars['ID'];
    input: ChannelUpdateInput;
};


export type MutationChannelDeleteArgs = {
    id: Scalars['ID'];
    input?: InputMaybe<ChannelDeleteInput>;
};


export type MutationChannelActivateArgs = {
    id: Scalars['ID'];
};


export type MutationChannelDeactivateArgs = {
    id: Scalars['ID'];
};


export type MutationAttributeCreateArgs = {
    input: AttributeCreateInput;
};


export type MutationAttributeDeleteArgs = {
    id: Scalars['ID'];
};


export type MutationAttributeUpdateArgs = {
    id: Scalars['ID'];
    input: AttributeUpdateInput;
};


export type MutationAttributeTranslateArgs = {
    id: Scalars['ID'];
    input: NameTranslationInput;
    languageCode: LanguageCodeEnum;
};


export type MutationAttributeBulkDeleteArgs = {
    ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationAttributeValueBulkDeleteArgs = {
    ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationAttributeValueCreateArgs = {
    attribute: Scalars['ID'];
    input: AttributeValueCreateInput;
};


export type MutationAttributeValueDeleteArgs = {
    id: Scalars['ID'];
};


export type MutationAttributeValueUpdateArgs = {
    id: Scalars['ID'];
    input: AttributeValueUpdateInput;
};


export type MutationAttributeValueTranslateArgs = {
    id: Scalars['ID'];
    input: AttributeValueTranslationInput;
    languageCode: LanguageCodeEnum;
};


export type MutationAttributeReorderValuesArgs = {
    attributeId: Scalars['ID'];
    moves: Array<InputMaybe<ReorderInput>>;
};


export type MutationAppCreateArgs = {
    input: AppInput;
};


export type MutationAppUpdateArgs = {
    id: Scalars['ID'];
    input: AppInput;
};


export type MutationAppDeleteArgs = {
    id: Scalars['ID'];
};


export type MutationAppTokenCreateArgs = {
    input: AppTokenInput;
};


export type MutationAppTokenDeleteArgs = {
    id: Scalars['ID'];
};


export type MutationAppTokenVerifyArgs = {
    token: Scalars['String'];
};


export type MutationAppInstallArgs = {
    input: AppInstallInput;
};


export type MutationAppRetryInstallArgs = {
    activateAfterInstallation?: InputMaybe<Scalars['Boolean']>;
    id: Scalars['ID'];
};


export type MutationAppDeleteFailedInstallationArgs = {
    id: Scalars['ID'];
};


export type MutationAppFetchManifestArgs = {
    manifestUrl: Scalars['String'];
};


export type MutationAppActivateArgs = {
    id: Scalars['ID'];
};


export type MutationAppDeactivateArgs = {
    id: Scalars['ID'];
};


export type MutationTokenCreateArgs = {
    email: Scalars['String'];
    password: Scalars['String'];
};


export type MutationTokenRefreshArgs = {
    csrfToken?: InputMaybe<Scalars['String']>;
    refreshToken?: InputMaybe<Scalars['String']>;
};


export type MutationTokenVerifyArgs = {
    token: Scalars['String'];
};


export type MutationExternalAuthenticationUrlArgs = {
    input: Scalars['JSONString'];
    pluginId: Scalars['String'];
};


export type MutationExternalObtainAccessTokensArgs = {
    input: Scalars['JSONString'];
    pluginId: Scalars['String'];
};


export type MutationExternalRefreshArgs = {
    input: Scalars['JSONString'];
    pluginId: Scalars['String'];
};


export type MutationExternalLogoutArgs = {
    input: Scalars['JSONString'];
    pluginId: Scalars['String'];
};


export type MutationExternalVerifyArgs = {
    input: Scalars['JSONString'];
    pluginId: Scalars['String'];
};


export type MutationRequestPasswordResetArgs = {
    channel?: InputMaybe<Scalars['String']>;
    email: Scalars['String'];
    redirectUrl: Scalars['String'];
};


export type MutationConfirmAccountArgs = {
    email: Scalars['String'];
    token: Scalars['String'];
};


export type MutationSetPasswordArgs = {
    email: Scalars['String'];
    password: Scalars['String'];
    token: Scalars['String'];
};


export type MutationPasswordChangeArgs = {
    newPassword: Scalars['String'];
    oldPassword: Scalars['String'];
};


export type MutationRequestEmailChangeArgs = {
    channel?: InputMaybe<Scalars['String']>;
    newEmail: Scalars['String'];
    password: Scalars['String'];
    redirectUrl: Scalars['String'];
};


export type MutationConfirmEmailChangeArgs = {
    channel?: InputMaybe<Scalars['String']>;
    token: Scalars['String'];
};


export type MutationAccountAddressCreateArgs = {
    input: AddressInput;
    type?: InputMaybe<AddressTypeEnum>;
};


export type MutationAccountAddressUpdateArgs = {
    id: Scalars['ID'];
    input: AddressInput;
};


export type MutationAccountAddressDeleteArgs = {
    id: Scalars['ID'];
};


export type MutationAccountSetDefaultAddressArgs = {
    id: Scalars['ID'];
    type: AddressTypeEnum;
};


export type MutationAccountRegisterArgs = {
    input: AccountRegisterInput;
};


export type MutationAccountUpdateArgs = {
    input: AccountInput;
};


export type MutationAccountRequestDeletionArgs = {
    channel?: InputMaybe<Scalars['String']>;
    redirectUrl: Scalars['String'];
};


export type MutationAccountDeleteArgs = {
    token: Scalars['String'];
};


export type MutationAddressCreateArgs = {
    input: AddressInput;
    userId: Scalars['ID'];
};


export type MutationAddressUpdateArgs = {
    id: Scalars['ID'];
    input: AddressInput;
};


export type MutationAddressDeleteArgs = {
    id: Scalars['ID'];
};


export type MutationAddressSetDefaultArgs = {
    addressId: Scalars['ID'];
    type: AddressTypeEnum;
    userId: Scalars['ID'];
};


export type MutationCustomerCreateArgs = {
    input: UserCreateInput;
};


export type MutationCustomerUpdateArgs = {
    id: Scalars['ID'];
    input: CustomerInput;
};


export type MutationCustomerDeleteArgs = {
    id: Scalars['ID'];
};


export type MutationCustomerBulkDeleteArgs = {
    ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationStaffCreateArgs = {
    input: StaffCreateInput;
};


export type MutationStaffUpdateArgs = {
    id: Scalars['ID'];
    input: StaffUpdateInput;
};


export type MutationStaffDeleteArgs = {
    id: Scalars['ID'];
};


export type MutationStaffBulkDeleteArgs = {
    ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationUserAvatarUpdateArgs = {
    image: Scalars['Upload'];
};


export type MutationUserBulkSetActiveArgs = {
    ids: Array<InputMaybe<Scalars['ID']>>;
    isActive: Scalars['Boolean'];
};


export type MutationPermissionGroupCreateArgs = {
    input: PermissionGroupCreateInput;
};


export type MutationPermissionGroupUpdateArgs = {
    id: Scalars['ID'];
    input: PermissionGroupUpdateInput;
};


export type MutationPermissionGroupDeleteArgs = {
    id: Scalars['ID'];
};

export type NameTranslationInput = {
    name?: InputMaybe<Scalars['String']>;
};

export enum NavigationType {
    Main = 'MAIN',
    Secondary = 'SECONDARY'
}

export type Node = {
    id: Scalars['ID'];
};

export type ObjectWithMetadata = {
    privateMetadata: Array<Maybe<MetadataItem>>;
    metadata: Array<Maybe<MetadataItem>>;
};

export type Order = Node & ObjectWithMetadata & {
    __typename?: 'Order';
    id: Scalars['ID'];
    privateMetadata: Array<Maybe<MetadataItem>>;
    metadata: Array<Maybe<MetadataItem>>;
    created: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    status: OrderStatus;
    user?: Maybe<User>;
    trackingClientId: Scalars['String'];
    billingAddress?: Maybe<Address>;
    shippingAddress?: Maybe<Address>;
    shippingMethodName?: Maybe<Scalars['String']>;
    collectionPointName?: Maybe<Scalars['String']>;
    channel: Channel;
    fulfillments: Array<Maybe<Fulfillment>>;
    lines: Array<Maybe<OrderLine>>;
    actions: Array<Maybe<OrderAction>>;
    /** @deprecated Use `shippingMethods`, this field will be removed in 4.0 */
    availableShippingMethods?: Maybe<Array<Maybe<ShippingMethod>>>;
    shippingMethods?: Maybe<Array<Maybe<ShippingMethod>>>;
    availableCollectionPoints: Array<Warehouse>;
    invoices?: Maybe<Array<Maybe<Invoice>>>;
    number?: Maybe<Scalars['String']>;
    original?: Maybe<Scalars['ID']>;
    origin: OrderOriginEnum;
    isPaid: Scalars['Boolean'];
    paymentStatus: PaymentChargeStatusEnum;
    paymentStatusDisplay: Scalars['String'];
    payments?: Maybe<Array<Maybe<Payment>>>;
    total: TaxedMoney;
    undiscountedTotal: TaxedMoney;
    /** @deprecated This field will be removed in Saleor 4.0. Use `deliveryMethod` instead. */
    shippingMethod?: Maybe<ShippingMethod>;
    shippingPrice: TaxedMoney;
    shippingTaxRate: Scalars['Float'];
    token: Scalars['String'];
    voucher?: Maybe<Voucher>;
    giftCards?: Maybe<Array<Maybe<GiftCard>>>;
    displayGrossPrices: Scalars['Boolean'];
    customerNote: Scalars['String'];
    weight?: Maybe<Weight>;
    redirectUrl?: Maybe<Scalars['String']>;
    subtotal: TaxedMoney;
    statusDisplay?: Maybe<Scalars['String']>;
    canFinalize: Scalars['Boolean'];
    totalAuthorized: Money;
    totalCaptured: Money;
    events?: Maybe<Array<Maybe<OrderEvent>>>;
    totalBalance: Money;
    userEmail?: Maybe<Scalars['String']>;
    isShippingRequired: Scalars['Boolean'];
    deliveryMethod?: Maybe<DeliveryMethod>;
    /** @deprecated This field will be removed in Saleor 4.0. Use the `languageCodeEnum` field to fetch the language code.  */
    languageCode: Scalars['String'];
    languageCodeEnum: LanguageCodeEnum;
    /** @deprecated This field will be removed in Saleor 4.0. Use the `discounts` field instead. */
    discount?: Maybe<Money>;
    /** @deprecated This field will be removed in Saleor 4.0. Use the `discounts` field instead. */
    discountName?: Maybe<Scalars['String']>;
    /** @deprecated This field will be removed in Saleor 4.0. Use the `discounts` field instead.  */
    translatedDiscountName?: Maybe<Scalars['String']>;
    discounts?: Maybe<Array<OrderDiscount>>;
    errors: Array<OrderError>;
};

export enum OrderAction {
    Capture = 'CAPTURE',
    MarkAsPaid = 'MARK_AS_PAID',
    Refund = 'REFUND',
    Void = 'VOID'
}

export type OrderAddNote = {
    __typename?: 'OrderAddNote';
    order?: Maybe<Order>;
    event?: Maybe<OrderEvent>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type OrderAddNoteInput = {
    message: Scalars['String'];
};

export type OrderBulkCancel = {
    __typename?: 'OrderBulkCancel';
    count: Scalars['Int'];
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type OrderCancel = {
    __typename?: 'OrderCancel';
    order?: Maybe<Order>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type OrderCapture = {
    __typename?: 'OrderCapture';
    order?: Maybe<Order>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type OrderConfirm = {
    __typename?: 'OrderConfirm';
    order?: Maybe<Order>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type OrderCountableConnection = {
    __typename?: 'OrderCountableConnection';
    pageInfo: PageInfo;
    edges: Array<OrderCountableEdge>;
    totalCount?: Maybe<Scalars['Int']>;
};

export type OrderCountableEdge = {
    __typename?: 'OrderCountableEdge';
    node: Order;
    cursor: Scalars['String'];
};

export enum OrderDirection {
    Asc = 'ASC',
    Desc = 'DESC'
}

export type OrderDiscount = Node & {
    __typename?: 'OrderDiscount';
    id: Scalars['ID'];
    type: OrderDiscountType;
    name?: Maybe<Scalars['String']>;
    translatedName?: Maybe<Scalars['String']>;
    valueType: DiscountValueTypeEnum;
    value: Scalars['PositiveDecimal'];
    reason?: Maybe<Scalars['String']>;
    amount: Money;
};

export type OrderDiscountAdd = {
    __typename?: 'OrderDiscountAdd';
    order?: Maybe<Order>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type OrderDiscountCommonInput = {
    valueType: DiscountValueTypeEnum;
    value: Scalars['PositiveDecimal'];
    reason?: InputMaybe<Scalars['String']>;
};

export type OrderDiscountDelete = {
    __typename?: 'OrderDiscountDelete';
    order?: Maybe<Order>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export enum OrderDiscountType {
    Voucher = 'VOUCHER',
    Manual = 'MANUAL'
}

export type OrderDiscountUpdate = {
    __typename?: 'OrderDiscountUpdate';
    order?: Maybe<Order>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type OrderDraftFilterInput = {
    customer?: InputMaybe<Scalars['String']>;
    created?: InputMaybe<DateRangeInput>;
    search?: InputMaybe<Scalars['String']>;
    metadata?: InputMaybe<Array<InputMaybe<MetadataFilter>>>;
    channels?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type OrderError = {
    __typename?: 'OrderError';
    field?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    code: OrderErrorCode;
    warehouse?: Maybe<Scalars['ID']>;
    orderLines?: Maybe<Array<Scalars['ID']>>;
    variants?: Maybe<Array<Scalars['ID']>>;
    addressType?: Maybe<AddressTypeEnum>;
};

export enum OrderErrorCode {
    BillingAddressNotSet = 'BILLING_ADDRESS_NOT_SET',
    CannotCancelFulfillment = 'CANNOT_CANCEL_FULFILLMENT',
    CannotCancelOrder = 'CANNOT_CANCEL_ORDER',
    CannotDelete = 'CANNOT_DELETE',
    CannotDiscount = 'CANNOT_DISCOUNT',
    CannotRefund = 'CANNOT_REFUND',
    CannotFulfillUnpaidOrder = 'CANNOT_FULFILL_UNPAID_ORDER',
    CaptureInactivePayment = 'CAPTURE_INACTIVE_PAYMENT',
    GiftCardLine = 'GIFT_CARD_LINE',
    NotEditable = 'NOT_EDITABLE',
    FulfillOrderLine = 'FULFILL_ORDER_LINE',
    GraphqlError = 'GRAPHQL_ERROR',
    Invalid = 'INVALID',
    ProductNotPublished = 'PRODUCT_NOT_PUBLISHED',
    ProductUnavailableForPurchase = 'PRODUCT_UNAVAILABLE_FOR_PURCHASE',
    NotFound = 'NOT_FOUND',
    OrderNoShippingAddress = 'ORDER_NO_SHIPPING_ADDRESS',
    PaymentError = 'PAYMENT_ERROR',
    PaymentMissing = 'PAYMENT_MISSING',
    Required = 'REQUIRED',
    ShippingMethodNotApplicable = 'SHIPPING_METHOD_NOT_APPLICABLE',
    ShippingMethodRequired = 'SHIPPING_METHOD_REQUIRED',
    TaxError = 'TAX_ERROR',
    Unique = 'UNIQUE',
    VoidInactivePayment = 'VOID_INACTIVE_PAYMENT',
    ZeroQuantity = 'ZERO_QUANTITY',
    InvalidQuantity = 'INVALID_QUANTITY',
    InsufficientStock = 'INSUFFICIENT_STOCK',
    DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
    NotAvailableInChannel = 'NOT_AVAILABLE_IN_CHANNEL',
    ChannelInactive = 'CHANNEL_INACTIVE'
}

export type OrderEvent = Node & {
    __typename?: 'OrderEvent';
    id: Scalars['ID'];
    date?: Maybe<Scalars['DateTime']>;
    type?: Maybe<OrderEventsEnum>;
    user?: Maybe<User>;
    app?: Maybe<App>;
    message?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    emailType?: Maybe<OrderEventsEmailsEnum>;
    amount?: Maybe<Scalars['Float']>;
    paymentId?: Maybe<Scalars['String']>;
    paymentGateway?: Maybe<Scalars['String']>;
    quantity?: Maybe<Scalars['Int']>;
    composedId?: Maybe<Scalars['String']>;
    orderNumber?: Maybe<Scalars['String']>;
    invoiceNumber?: Maybe<Scalars['String']>;
    oversoldItems?: Maybe<Array<Maybe<Scalars['String']>>>;
    lines?: Maybe<Array<Maybe<OrderEventOrderLineObject>>>;
    fulfilledItems?: Maybe<Array<Maybe<FulfillmentLine>>>;
    warehouse?: Maybe<Warehouse>;
    transactionReference?: Maybe<Scalars['String']>;
    shippingCostsIncluded?: Maybe<Scalars['Boolean']>;
    relatedOrder?: Maybe<Order>;
    discount?: Maybe<OrderEventDiscountObject>;
};

export type OrderEventCountableConnection = {
    __typename?: 'OrderEventCountableConnection';
    pageInfo: PageInfo;
    edges: Array<OrderEventCountableEdge>;
    totalCount?: Maybe<Scalars['Int']>;
};

export type OrderEventCountableEdge = {
    __typename?: 'OrderEventCountableEdge';
    node: OrderEvent;
    cursor: Scalars['String'];
};

export type OrderEventDiscountObject = {
    __typename?: 'OrderEventDiscountObject';
    valueType: DiscountValueTypeEnum;
    value: Scalars['PositiveDecimal'];
    reason?: Maybe<Scalars['String']>;
    amount?: Maybe<Money>;
    oldValueType?: Maybe<DiscountValueTypeEnum>;
    oldValue?: Maybe<Scalars['PositiveDecimal']>;
    oldAmount?: Maybe<Money>;
};

export type OrderEventOrderLineObject = {
    __typename?: 'OrderEventOrderLineObject';
    quantity?: Maybe<Scalars['Int']>;
    orderLine?: Maybe<OrderLine>;
    itemName?: Maybe<Scalars['String']>;
    discount?: Maybe<OrderEventDiscountObject>;
};

export enum OrderEventsEmailsEnum {
    PaymentConfirmation = 'PAYMENT_CONFIRMATION',
    Confirmed = 'CONFIRMED',
    ShippingConfirmation = 'SHIPPING_CONFIRMATION',
    TrackingUpdated = 'TRACKING_UPDATED',
    OrderConfirmation = 'ORDER_CONFIRMATION',
    OrderCancel = 'ORDER_CANCEL',
    OrderRefund = 'ORDER_REFUND',
    FulfillmentConfirmation = 'FULFILLMENT_CONFIRMATION',
    DigitalLinks = 'DIGITAL_LINKS'
}

export enum OrderEventsEnum {
    DraftCreated = 'DRAFT_CREATED',
    DraftCreatedFromReplace = 'DRAFT_CREATED_FROM_REPLACE',
    AddedProducts = 'ADDED_PRODUCTS',
    RemovedProducts = 'REMOVED_PRODUCTS',
    Placed = 'PLACED',
    PlacedFromDraft = 'PLACED_FROM_DRAFT',
    OversoldItems = 'OVERSOLD_ITEMS',
    Canceled = 'CANCELED',
    OrderMarkedAsPaid = 'ORDER_MARKED_AS_PAID',
    OrderFullyPaid = 'ORDER_FULLY_PAID',
    OrderReplacementCreated = 'ORDER_REPLACEMENT_CREATED',
    OrderDiscountAdded = 'ORDER_DISCOUNT_ADDED',
    OrderDiscountAutomaticallyUpdated = 'ORDER_DISCOUNT_AUTOMATICALLY_UPDATED',
    OrderDiscountUpdated = 'ORDER_DISCOUNT_UPDATED',
    OrderDiscountDeleted = 'ORDER_DISCOUNT_DELETED',
    OrderLineDiscountUpdated = 'ORDER_LINE_DISCOUNT_UPDATED',
    OrderLineDiscountRemoved = 'ORDER_LINE_DISCOUNT_REMOVED',
    OrderLineProductDeleted = 'ORDER_LINE_PRODUCT_DELETED',
    OrderLineVariantDeleted = 'ORDER_LINE_VARIANT_DELETED',
    UpdatedAddress = 'UPDATED_ADDRESS',
    EmailSent = 'EMAIL_SENT',
    Confirmed = 'CONFIRMED',
    PaymentAuthorized = 'PAYMENT_AUTHORIZED',
    PaymentCaptured = 'PAYMENT_CAPTURED',
    ExternalServiceNotification = 'EXTERNAL_SERVICE_NOTIFICATION',
    PaymentRefunded = 'PAYMENT_REFUNDED',
    PaymentVoided = 'PAYMENT_VOIDED',
    PaymentFailed = 'PAYMENT_FAILED',
    InvoiceRequested = 'INVOICE_REQUESTED',
    InvoiceGenerated = 'INVOICE_GENERATED',
    InvoiceUpdated = 'INVOICE_UPDATED',
    InvoiceSent = 'INVOICE_SENT',
    FulfillmentCanceled = 'FULFILLMENT_CANCELED',
    FulfillmentRestockedItems = 'FULFILLMENT_RESTOCKED_ITEMS',
    FulfillmentFulfilledItems = 'FULFILLMENT_FULFILLED_ITEMS',
    FulfillmentRefunded = 'FULFILLMENT_REFUNDED',
    FulfillmentReturned = 'FULFILLMENT_RETURNED',
    FulfillmentReplaced = 'FULFILLMENT_REPLACED',
    FulfillmentAwaitsApproval = 'FULFILLMENT_AWAITS_APPROVAL',
    TrackingUpdated = 'TRACKING_UPDATED',
    NoteAdded = 'NOTE_ADDED',
    Other = 'OTHER'
}

export type OrderFilterInput = {
    paymentStatus?: InputMaybe<Array<InputMaybe<PaymentChargeStatusEnum>>>;
    status?: InputMaybe<Array<InputMaybe<OrderStatusFilter>>>;
    customer?: InputMaybe<Scalars['String']>;
    created?: InputMaybe<DateRangeInput>;
    search?: InputMaybe<Scalars['String']>;
    metadata?: InputMaybe<Array<InputMaybe<MetadataFilter>>>;
    channels?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    updatedAt?: InputMaybe<DateTimeRangeInput>;
    isClickAndCollect?: InputMaybe<Scalars['Boolean']>;
    isPreorder?: InputMaybe<Scalars['Boolean']>;
    ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    giftCardUsed?: InputMaybe<Scalars['Boolean']>;
    giftCardBought?: InputMaybe<Scalars['Boolean']>;
};

export type OrderFulfill = {
    __typename?: 'OrderFulfill';
    fulfillments?: Maybe<Array<Maybe<Fulfillment>>>;
    order?: Maybe<Order>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type OrderFulfillInput = {
    lines: Array<OrderFulfillLineInput>;
    notifyCustomer?: InputMaybe<Scalars['Boolean']>;
    allowStockToBeExceeded?: InputMaybe<Scalars['Boolean']>;
};

export type OrderFulfillLineInput = {
    orderLineId?: InputMaybe<Scalars['ID']>;
    stocks: Array<OrderFulfillStockInput>;
};

export type OrderFulfillStockInput = {
    quantity: Scalars['Int'];
    warehouse: Scalars['ID'];
};

export type OrderLine = Node & {
    __typename?: 'OrderLine';
    id: Scalars['ID'];
    productName: Scalars['String'];
    variantName: Scalars['String'];
    productSku?: Maybe<Scalars['String']>;
    productVariantId?: Maybe<Scalars['String']>;
    isShippingRequired: Scalars['Boolean'];
    quantity: Scalars['Int'];
    quantityFulfilled: Scalars['Int'];
    unitDiscountReason?: Maybe<Scalars['String']>;
    taxRate: Scalars['Float'];
    digitalContentUrl?: Maybe<DigitalContentUrl>;
    thumbnail?: Maybe<Image>;
    unitPrice: TaxedMoney;
    undiscountedUnitPrice: TaxedMoney;
    unitDiscount: Money;
    unitDiscountValue: Scalars['PositiveDecimal'];
    totalPrice: TaxedMoney;
    variant?: Maybe<ProductVariant>;
    translatedProductName: Scalars['String'];
    translatedVariantName: Scalars['String'];
    allocations?: Maybe<Array<Allocation>>;
    quantityToFulfill: Scalars['Int'];
    unitDiscountType?: Maybe<DiscountValueTypeEnum>;
};


export type OrderLineThumbnailArgs = {
    size?: InputMaybe<Scalars['Int']>;
};

export type OrderLineCreateInput = {
    quantity: Scalars['Int'];
    variantId: Scalars['ID'];
};

export type OrderLineDelete = {
    __typename?: 'OrderLineDelete';
    order?: Maybe<Order>;
    orderLine?: Maybe<OrderLine>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type OrderLineDiscountRemove = {
    __typename?: 'OrderLineDiscountRemove';
    orderLine?: Maybe<OrderLine>;
    order?: Maybe<Order>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type OrderLineDiscountUpdate = {
    __typename?: 'OrderLineDiscountUpdate';
    orderLine?: Maybe<OrderLine>;
    order?: Maybe<Order>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type OrderLineInput = {
    quantity: Scalars['Int'];
};

export type OrderLinesCreate = {
    __typename?: 'OrderLinesCreate';
    order?: Maybe<Order>;
    orderLines?: Maybe<Array<OrderLine>>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type OrderLineUpdate = {
    __typename?: 'OrderLineUpdate';
    order?: Maybe<Order>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
    orderLine?: Maybe<OrderLine>;
};

export type OrderMarkAsPaid = {
    __typename?: 'OrderMarkAsPaid';
    order?: Maybe<Order>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export enum OrderOriginEnum {
    Checkout = 'CHECKOUT',
    Draft = 'DRAFT',
    Reissue = 'REISSUE'
}

export type OrderRefund = {
    __typename?: 'OrderRefund';
    order?: Maybe<Order>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type OrderRefundFulfillmentLineInput = {
    fulfillmentLineId: Scalars['ID'];
    quantity: Scalars['Int'];
};

export type OrderRefundLineInput = {
    orderLineId: Scalars['ID'];
    quantity: Scalars['Int'];
};

export type OrderRefundProductsInput = {
    orderLines?: InputMaybe<Array<OrderRefundLineInput>>;
    fulfillmentLines?: InputMaybe<Array<OrderRefundFulfillmentLineInput>>;
    amountToRefund?: InputMaybe<Scalars['PositiveDecimal']>;
    includeShippingCosts?: InputMaybe<Scalars['Boolean']>;
};

export type OrderReturnFulfillmentLineInput = {
    fulfillmentLineId: Scalars['ID'];
    quantity: Scalars['Int'];
    replace?: InputMaybe<Scalars['Boolean']>;
};

export type OrderReturnLineInput = {
    orderLineId: Scalars['ID'];
    quantity: Scalars['Int'];
    replace?: InputMaybe<Scalars['Boolean']>;
};

export type OrderReturnProductsInput = {
    orderLines?: InputMaybe<Array<OrderReturnLineInput>>;
    fulfillmentLines?: InputMaybe<Array<OrderReturnFulfillmentLineInput>>;
    amountToRefund?: InputMaybe<Scalars['PositiveDecimal']>;
    includeShippingCosts?: InputMaybe<Scalars['Boolean']>;
    refund?: InputMaybe<Scalars['Boolean']>;
};

export type OrderSettings = {
    __typename?: 'OrderSettings';
    automaticallyConfirmAllNewOrders: Scalars['Boolean'];
    automaticallyFulfillNonShippableGiftCard: Scalars['Boolean'];
};

export type OrderSettingsError = {
    __typename?: 'OrderSettingsError';
    field?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    code: OrderSettingsErrorCode;
};

export enum OrderSettingsErrorCode {
    Invalid = 'INVALID'
}

export type OrderSettingsUpdate = {
    __typename?: 'OrderSettingsUpdate';
    orderSettings?: Maybe<OrderSettings>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    orderSettingsErrors: Array<OrderSettingsError>;
    errors: Array<OrderSettingsError>;
};

export type OrderSettingsUpdateInput = {
    automaticallyConfirmAllNewOrders?: InputMaybe<Scalars['Boolean']>;
    automaticallyFulfillNonShippableGiftCard?: InputMaybe<Scalars['Boolean']>;
};

export enum OrderSortField {
    Number = 'NUMBER',
    CreationDate = 'CREATION_DATE',
    CreatedAt = 'CREATED_AT',
    LastModifiedAt = 'LAST_MODIFIED_AT',
    Customer = 'CUSTOMER',
    Payment = 'PAYMENT',
    FulfillmentStatus = 'FULFILLMENT_STATUS'
}

export type OrderSortingInput = {
    direction: OrderDirection;
    field: OrderSortField;
};

export enum OrderStatus {
    Draft = 'DRAFT',
    Unconfirmed = 'UNCONFIRMED',
    Unfulfilled = 'UNFULFILLED',
    PartiallyFulfilled = 'PARTIALLY_FULFILLED',
    PartiallyReturned = 'PARTIALLY_RETURNED',
    Returned = 'RETURNED',
    Fulfilled = 'FULFILLED',
    Canceled = 'CANCELED'
}

export enum OrderStatusFilter {
    ReadyToFulfill = 'READY_TO_FULFILL',
    ReadyToCapture = 'READY_TO_CAPTURE',
    Unfulfilled = 'UNFULFILLED',
    Unconfirmed = 'UNCONFIRMED',
    PartiallyFulfilled = 'PARTIALLY_FULFILLED',
    Fulfilled = 'FULFILLED',
    Canceled = 'CANCELED'
}

export type OrderUpdate = {
    __typename?: 'OrderUpdate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
    order?: Maybe<Order>;
};

export type OrderUpdateInput = {
    billingAddress?: InputMaybe<AddressInput>;
    userEmail?: InputMaybe<Scalars['String']>;
    shippingAddress?: InputMaybe<AddressInput>;
};

export type OrderUpdateShipping = {
    __typename?: 'OrderUpdateShipping';
    order?: Maybe<Order>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type OrderUpdateShippingInput = {
    shippingMethod?: InputMaybe<Scalars['ID']>;
};

export type OrderVoid = {
    __typename?: 'OrderVoid';
    order?: Maybe<Order>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    orderErrors: Array<OrderError>;
    errors: Array<OrderError>;
};

export type Page = Node & ObjectWithMetadata & {
    __typename?: 'Page';
    id: Scalars['ID'];
    privateMetadata: Array<Maybe<MetadataItem>>;
    metadata: Array<Maybe<MetadataItem>>;
    seoTitle?: Maybe<Scalars['String']>;
    seoDescription?: Maybe<Scalars['String']>;
    title: Scalars['String'];
    content?: Maybe<Scalars['JSONString']>;
    publicationDate?: Maybe<Scalars['Date']>;
    isPublished: Scalars['Boolean'];
    slug: Scalars['String'];
    pageType: PageType;
    created: Scalars['DateTime'];
    /** @deprecated This field will be removed in Saleor 4.0. Use the `content` field instead. */
    contentJson: Scalars['JSONString'];
    translation?: Maybe<PageTranslation>;
    attributes: Array<SelectedAttribute>;
};


export type PageTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type PageAttributeAssign = {
    __typename?: 'PageAttributeAssign';
    pageType?: Maybe<PageType>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    pageErrors: Array<PageError>;
    errors: Array<PageError>;
};

export type PageAttributeUnassign = {
    __typename?: 'PageAttributeUnassign';
    pageType?: Maybe<PageType>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    pageErrors: Array<PageError>;
    errors: Array<PageError>;
};

export type PageBulkDelete = {
    __typename?: 'PageBulkDelete';
    count: Scalars['Int'];
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    pageErrors: Array<PageError>;
    errors: Array<PageError>;
};

export type PageBulkPublish = {
    __typename?: 'PageBulkPublish';
    count: Scalars['Int'];
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    pageErrors: Array<PageError>;
    errors: Array<PageError>;
};

export type PageCountableConnection = {
    __typename?: 'PageCountableConnection';
    pageInfo: PageInfo;
    edges: Array<PageCountableEdge>;
    totalCount?: Maybe<Scalars['Int']>;
};

export type PageCountableEdge = {
    __typename?: 'PageCountableEdge';
    node: Page;
    cursor: Scalars['String'];
};

export type PageCreate = {
    __typename?: 'PageCreate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    pageErrors: Array<PageError>;
    errors: Array<PageError>;
    page?: Maybe<Page>;
};

export type PageCreateInput = {
    slug?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
    content?: InputMaybe<Scalars['JSONString']>;
    attributes?: InputMaybe<Array<AttributeValueInput>>;
    isPublished?: InputMaybe<Scalars['Boolean']>;
    publicationDate?: InputMaybe<Scalars['String']>;
    seo?: InputMaybe<SeoInput>;
    pageType: Scalars['ID'];
};

export type PageDelete = {
    __typename?: 'PageDelete';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    pageErrors: Array<PageError>;
    errors: Array<PageError>;
    page?: Maybe<Page>;
};

export type PageError = {
    __typename?: 'PageError';
    field?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    code: PageErrorCode;
    attributes?: Maybe<Array<Scalars['ID']>>;
    values?: Maybe<Array<Scalars['ID']>>;
};

export enum PageErrorCode {
    GraphqlError = 'GRAPHQL_ERROR',
    Invalid = 'INVALID',
    NotFound = 'NOT_FOUND',
    Required = 'REQUIRED',
    Unique = 'UNIQUE',
    DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
    AttributeAlreadyAssigned = 'ATTRIBUTE_ALREADY_ASSIGNED'
}

export type PageFilterInput = {
    search?: InputMaybe<Scalars['String']>;
    metadata?: InputMaybe<Array<InputMaybe<MetadataFilter>>>;
    pageTypes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type PageInfo = {
    __typename?: 'PageInfo';
    hasNextPage: Scalars['Boolean'];
    hasPreviousPage: Scalars['Boolean'];
    startCursor?: Maybe<Scalars['String']>;
    endCursor?: Maybe<Scalars['String']>;
};

export type PageInput = {
    slug?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
    content?: InputMaybe<Scalars['JSONString']>;
    attributes?: InputMaybe<Array<AttributeValueInput>>;
    isPublished?: InputMaybe<Scalars['Boolean']>;
    publicationDate?: InputMaybe<Scalars['String']>;
    seo?: InputMaybe<SeoInput>;
};

export type PageReorderAttributeValues = {
    __typename?: 'PageReorderAttributeValues';
    page?: Maybe<Page>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    pageErrors: Array<PageError>;
    errors: Array<PageError>;
};

export enum PageSortField {
    Title = 'TITLE',
    Slug = 'SLUG',
    Visibility = 'VISIBILITY',
    CreationDate = 'CREATION_DATE',
    PublicationDate = 'PUBLICATION_DATE'
}

export type PageSortingInput = {
    direction: OrderDirection;
    field: PageSortField;
};

export type PageTranslatableContent = Node & {
    __typename?: 'PageTranslatableContent';
    id: Scalars['ID'];
    seoTitle?: Maybe<Scalars['String']>;
    seoDescription?: Maybe<Scalars['String']>;
    title: Scalars['String'];
    content?: Maybe<Scalars['JSONString']>;
    /** @deprecated This field will be removed in Saleor 4.0. Use the `content` field instead. */
    contentJson?: Maybe<Scalars['JSONString']>;
    translation?: Maybe<PageTranslation>;
    /** @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries. */
    page?: Maybe<Page>;
    attributeValues: Array<AttributeValueTranslatableContent>;
};


export type PageTranslatableContentTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type PageTranslate = {
    __typename?: 'PageTranslate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    translationErrors: Array<TranslationError>;
    errors: Array<TranslationError>;
    page?: Maybe<PageTranslatableContent>;
};

export type PageTranslation = Node & {
    __typename?: 'PageTranslation';
    id: Scalars['ID'];
    language: LanguageDisplay;
    seoTitle?: Maybe<Scalars['String']>;
    seoDescription?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    content?: Maybe<Scalars['JSONString']>;
    /** @deprecated This field will be removed in Saleor 4.0. Use the `content` field instead. */
    contentJson?: Maybe<Scalars['JSONString']>;
};

export type PageTranslationInput = {
    seoTitle?: InputMaybe<Scalars['String']>;
    seoDescription?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
    content?: InputMaybe<Scalars['JSONString']>;
};

export type PageType = Node & ObjectWithMetadata & {
    __typename?: 'PageType';
    id: Scalars['ID'];
    privateMetadata: Array<Maybe<MetadataItem>>;
    metadata: Array<Maybe<MetadataItem>>;
    name: Scalars['String'];
    slug: Scalars['String'];
    attributes?: Maybe<Array<Maybe<Attribute>>>;
    availableAttributes?: Maybe<AttributeCountableConnection>;
    hasPages?: Maybe<Scalars['Boolean']>;
};


export type PageTypeAvailableAttributesArgs = {
    filter?: InputMaybe<AttributeFilterInput>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};

export type PageTypeBulkDelete = {
    __typename?: 'PageTypeBulkDelete';
    count: Scalars['Int'];
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    pageErrors: Array<PageError>;
    errors: Array<PageError>;
};

export type PageTypeCountableConnection = {
    __typename?: 'PageTypeCountableConnection';
    pageInfo: PageInfo;
    edges: Array<PageTypeCountableEdge>;
    totalCount?: Maybe<Scalars['Int']>;
};

export type PageTypeCountableEdge = {
    __typename?: 'PageTypeCountableEdge';
    node: PageType;
    cursor: Scalars['String'];
};

export type PageTypeCreate = {
    __typename?: 'PageTypeCreate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    pageErrors: Array<PageError>;
    errors: Array<PageError>;
    pageType?: Maybe<PageType>;
};

export type PageTypeCreateInput = {
    name?: InputMaybe<Scalars['String']>;
    slug?: InputMaybe<Scalars['String']>;
    addAttributes?: InputMaybe<Array<Scalars['ID']>>;
};

export type PageTypeDelete = {
    __typename?: 'PageTypeDelete';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    pageErrors: Array<PageError>;
    errors: Array<PageError>;
    pageType?: Maybe<PageType>;
};

export type PageTypeFilterInput = {
    search?: InputMaybe<Scalars['String']>;
};

export type PageTypeReorderAttributes = {
    __typename?: 'PageTypeReorderAttributes';
    pageType?: Maybe<PageType>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    pageErrors: Array<PageError>;
    errors: Array<PageError>;
};

export enum PageTypeSortField {
    Name = 'NAME',
    Slug = 'SLUG'
}

export type PageTypeSortingInput = {
    direction: OrderDirection;
    field: PageTypeSortField;
};

export type PageTypeUpdate = {
    __typename?: 'PageTypeUpdate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    pageErrors: Array<PageError>;
    errors: Array<PageError>;
    pageType?: Maybe<PageType>;
};

export type PageTypeUpdateInput = {
    name?: InputMaybe<Scalars['String']>;
    slug?: InputMaybe<Scalars['String']>;
    addAttributes?: InputMaybe<Array<Scalars['ID']>>;
    removeAttributes?: InputMaybe<Array<Scalars['ID']>>;
};

export type PageUpdate = {
    __typename?: 'PageUpdate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    pageErrors: Array<PageError>;
    errors: Array<PageError>;
    page?: Maybe<Page>;
};

export type PasswordChange = {
    __typename?: 'PasswordChange';
    user?: Maybe<User>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type Payment = Node & ObjectWithMetadata & {
    __typename?: 'Payment';
    id: Scalars['ID'];
    privateMetadata: Array<Maybe<MetadataItem>>;
    metadata: Array<Maybe<MetadataItem>>;
    gateway: Scalars['String'];
    isActive: Scalars['Boolean'];
    created: Scalars['DateTime'];
    modified: Scalars['DateTime'];
    token: Scalars['String'];
    checkout?: Maybe<Checkout>;
    order?: Maybe<Order>;
    paymentMethodType: Scalars['String'];
    customerIpAddress?: Maybe<Scalars['String']>;
    chargeStatus: PaymentChargeStatusEnum;
    actions: Array<Maybe<OrderAction>>;
    total?: Maybe<Money>;
    capturedAmount?: Maybe<Money>;
    transactions?: Maybe<Array<Maybe<Transaction>>>;
    availableCaptureAmount?: Maybe<Money>;
    availableRefundAmount?: Maybe<Money>;
    creditCard?: Maybe<CreditCard>;
};

export type PaymentCapture = {
    __typename?: 'PaymentCapture';
    payment?: Maybe<Payment>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    paymentErrors: Array<PaymentError>;
    errors: Array<PaymentError>;
};

export enum PaymentChargeStatusEnum {
    NotCharged = 'NOT_CHARGED',
    Pending = 'PENDING',
    PartiallyCharged = 'PARTIALLY_CHARGED',
    FullyCharged = 'FULLY_CHARGED',
    PartiallyRefunded = 'PARTIALLY_REFUNDED',
    FullyRefunded = 'FULLY_REFUNDED',
    Refused = 'REFUSED',
    Cancelled = 'CANCELLED'
}

export type PaymentCheckBalance = {
    __typename?: 'PaymentCheckBalance';
    data?: Maybe<Scalars['JSONString']>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    paymentErrors: Array<PaymentError>;
    errors: Array<PaymentError>;
};

export type PaymentCheckBalanceInput = {
    gatewayId: Scalars['String'];
    method: Scalars['String'];
    channel: Scalars['String'];
    card: CardInput;
};

export type PaymentCountableConnection = {
    __typename?: 'PaymentCountableConnection';
    pageInfo: PageInfo;
    edges: Array<PaymentCountableEdge>;
    totalCount?: Maybe<Scalars['Int']>;
};

export type PaymentCountableEdge = {
    __typename?: 'PaymentCountableEdge';
    node: Payment;
    cursor: Scalars['String'];
};

export type PaymentError = {
    __typename?: 'PaymentError';
    field?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    code: PaymentErrorCode;
    variants?: Maybe<Array<Scalars['ID']>>;
};

export enum PaymentErrorCode {
    BillingAddressNotSet = 'BILLING_ADDRESS_NOT_SET',
    GraphqlError = 'GRAPHQL_ERROR',
    Invalid = 'INVALID',
    NotFound = 'NOT_FOUND',
    Required = 'REQUIRED',
    Unique = 'UNIQUE',
    PartialPaymentNotAllowed = 'PARTIAL_PAYMENT_NOT_ALLOWED',
    ShippingAddressNotSet = 'SHIPPING_ADDRESS_NOT_SET',
    InvalidShippingMethod = 'INVALID_SHIPPING_METHOD',
    ShippingMethodNotSet = 'SHIPPING_METHOD_NOT_SET',
    PaymentError = 'PAYMENT_ERROR',
    NotSupportedGateway = 'NOT_SUPPORTED_GATEWAY',
    ChannelInactive = 'CHANNEL_INACTIVE',
    BalanceCheckError = 'BALANCE_CHECK_ERROR',
    CheckoutEmailNotSet = 'CHECKOUT_EMAIL_NOT_SET',
    UnavailableVariantInChannel = 'UNAVAILABLE_VARIANT_IN_CHANNEL',
    NoCheckoutLines = 'NO_CHECKOUT_LINES'
}

export type PaymentFilterInput = {
    checkouts?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type PaymentGateway = {
    __typename?: 'PaymentGateway';
    name: Scalars['String'];
    id: Scalars['ID'];
    config: Array<GatewayConfigLine>;
    currencies: Array<Maybe<Scalars['String']>>;
};

export type PaymentInitialize = {
    __typename?: 'PaymentInitialize';
    initializedPayment?: Maybe<PaymentInitialized>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    paymentErrors: Array<PaymentError>;
    errors: Array<PaymentError>;
};

export type PaymentInitialized = {
    __typename?: 'PaymentInitialized';
    gateway: Scalars['String'];
    name: Scalars['String'];
    data?: Maybe<Scalars['JSONString']>;
};

export type PaymentInput = {
    gateway: Scalars['String'];
    token?: InputMaybe<Scalars['String']>;
    amount?: InputMaybe<Scalars['PositiveDecimal']>;
    returnUrl?: InputMaybe<Scalars['String']>;
    storePaymentMethod?: InputMaybe<StorePaymentMethodEnum>;
    metadata?: InputMaybe<Array<MetadataInput>>;
};

export type PaymentRefund = {
    __typename?: 'PaymentRefund';
    payment?: Maybe<Payment>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    paymentErrors: Array<PaymentError>;
    errors: Array<PaymentError>;
};

export type PaymentSource = {
    __typename?: 'PaymentSource';
    gateway: Scalars['String'];
    paymentMethodId?: Maybe<Scalars['String']>;
    creditCardInfo?: Maybe<CreditCard>;
    metadata: Array<Maybe<MetadataItem>>;
};

export type PaymentVoid = {
    __typename?: 'PaymentVoid';
    payment?: Maybe<Payment>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    paymentErrors: Array<PaymentError>;
    errors: Array<PaymentError>;
};

export type Permission = {
    __typename?: 'Permission';
    code: PermissionEnum;
    name: Scalars['String'];
};

export enum PermissionEnum {
    ManageUsers = 'MANAGE_USERS',
    ManageStaff = 'MANAGE_STAFF',
    ImpersonateUser = 'IMPERSONATE_USER',
    ManageApps = 'MANAGE_APPS',
    ManageChannels = 'MANAGE_CHANNELS',
    ManageDiscounts = 'MANAGE_DISCOUNTS',
    ManagePlugins = 'MANAGE_PLUGINS',
    ManageGiftCard = 'MANAGE_GIFT_CARD',
    ManageMenus = 'MANAGE_MENUS',
    ManageOrders = 'MANAGE_ORDERS',
    ManagePages = 'MANAGE_PAGES',
    ManagePageTypesAndAttributes = 'MANAGE_PAGE_TYPES_AND_ATTRIBUTES',
    HandlePayments = 'HANDLE_PAYMENTS',
    ManageProducts = 'MANAGE_PRODUCTS',
    ManageProductTypesAndAttributes = 'MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES',
    ManageShipping = 'MANAGE_SHIPPING',
    ManageSettings = 'MANAGE_SETTINGS',
    ManageTranslations = 'MANAGE_TRANSLATIONS',
    ManageCheckouts = 'MANAGE_CHECKOUTS'
}

export type PermissionGroupCreate = {
    __typename?: 'PermissionGroupCreate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    permissionGroupErrors: Array<PermissionGroupError>;
    errors: Array<PermissionGroupError>;
    group?: Maybe<Group>;
};

export type PermissionGroupCreateInput = {
    addPermissions?: InputMaybe<Array<PermissionEnum>>;
    addUsers?: InputMaybe<Array<Scalars['ID']>>;
    name: Scalars['String'];
};

export type PermissionGroupDelete = {
    __typename?: 'PermissionGroupDelete';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    permissionGroupErrors: Array<PermissionGroupError>;
    errors: Array<PermissionGroupError>;
    group?: Maybe<Group>;
};

export type PermissionGroupError = {
    __typename?: 'PermissionGroupError';
    field?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    code: PermissionGroupErrorCode;
    permissions?: Maybe<Array<PermissionEnum>>;
    users?: Maybe<Array<Scalars['ID']>>;
};

export enum PermissionGroupErrorCode {
    AssignNonStaffMember = 'ASSIGN_NON_STAFF_MEMBER',
    DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
    CannotRemoveFromLastGroup = 'CANNOT_REMOVE_FROM_LAST_GROUP',
    LeftNotManageablePermission = 'LEFT_NOT_MANAGEABLE_PERMISSION',
    OutOfScopePermission = 'OUT_OF_SCOPE_PERMISSION',
    OutOfScopeUser = 'OUT_OF_SCOPE_USER',
    Required = 'REQUIRED',
    Unique = 'UNIQUE'
}

export type PermissionGroupFilterInput = {
    search?: InputMaybe<Scalars['String']>;
    ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export enum PermissionGroupSortField {
    Name = 'NAME'
}

export type PermissionGroupSortingInput = {
    direction: OrderDirection;
    field: PermissionGroupSortField;
};

export type PermissionGroupUpdate = {
    __typename?: 'PermissionGroupUpdate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    permissionGroupErrors: Array<PermissionGroupError>;
    errors: Array<PermissionGroupError>;
    group?: Maybe<Group>;
};

export type PermissionGroupUpdateInput = {
    addPermissions?: InputMaybe<Array<PermissionEnum>>;
    addUsers?: InputMaybe<Array<Scalars['ID']>>;
    name?: InputMaybe<Scalars['String']>;
    removePermissions?: InputMaybe<Array<PermissionEnum>>;
    removeUsers?: InputMaybe<Array<Scalars['ID']>>;
};

export type Plugin = {
    __typename?: 'Plugin';
    id: Scalars['ID'];
    name: Scalars['String'];
    description: Scalars['String'];
    globalConfiguration?: Maybe<PluginConfiguration>;
    channelConfigurations: Array<PluginConfiguration>;
};

export type PluginConfiguration = {
    __typename?: 'PluginConfiguration';
    active: Scalars['Boolean'];
    channel?: Maybe<Channel>;
    configuration?: Maybe<Array<Maybe<ConfigurationItem>>>;
};

export enum PluginConfigurationType {
    PerChannel = 'PER_CHANNEL',
    Global = 'GLOBAL'
}

export type PluginCountableConnection = {
    __typename?: 'PluginCountableConnection';
    pageInfo: PageInfo;
    edges: Array<PluginCountableEdge>;
    totalCount?: Maybe<Scalars['Int']>;
};

export type PluginCountableEdge = {
    __typename?: 'PluginCountableEdge';
    node: Plugin;
    cursor: Scalars['String'];
};

export type PluginError = {
    __typename?: 'PluginError';
    field?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    code: PluginErrorCode;
};

export enum PluginErrorCode {
    GraphqlError = 'GRAPHQL_ERROR',
    Invalid = 'INVALID',
    PluginMisconfigured = 'PLUGIN_MISCONFIGURED',
    NotFound = 'NOT_FOUND',
    Required = 'REQUIRED',
    Unique = 'UNIQUE'
}

export type PluginFilterInput = {
    statusInChannels?: InputMaybe<PluginStatusInChannelsInput>;
    search?: InputMaybe<Scalars['String']>;
    type?: InputMaybe<PluginConfigurationType>;
};

export enum PluginSortField {
    Name = 'NAME',
    IsActive = 'IS_ACTIVE'
}

export type PluginSortingInput = {
    direction: OrderDirection;
    field: PluginSortField;
};

export type PluginStatusInChannelsInput = {
    active: Scalars['Boolean'];
    channels: Array<Scalars['ID']>;
};

export type PluginUpdate = {
    __typename?: 'PluginUpdate';
    plugin?: Maybe<Plugin>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    pluginsErrors: Array<PluginError>;
    errors: Array<PluginError>;
};

export type PluginUpdateInput = {
    active?: InputMaybe<Scalars['Boolean']>;
    configuration?: InputMaybe<Array<InputMaybe<ConfigurationItemInput>>>;
};

export enum PostalCodeRuleInclusionTypeEnum {
    Include = 'INCLUDE',
    Exclude = 'EXCLUDE'
}

export type PreorderData = {
    __typename?: 'PreorderData';
    globalThreshold?: Maybe<Scalars['Int']>;
    globalSoldUnits: Scalars['Int'];
    endDate?: Maybe<Scalars['DateTime']>;
};

export type PreorderSettingsInput = {
    globalThreshold?: InputMaybe<Scalars['Int']>;
    endDate?: InputMaybe<Scalars['DateTime']>;
};

export type PreorderThreshold = {
    __typename?: 'PreorderThreshold';
    quantity?: Maybe<Scalars['Int']>;
    soldUnits: Scalars['Int'];
};

export type PriceInput = {
    currency: Scalars['String'];
    amount: Scalars['PositiveDecimal'];
};

export type PriceRangeInput = {
    gte?: InputMaybe<Scalars['Float']>;
    lte?: InputMaybe<Scalars['Float']>;
};

export type Product = Node & ObjectWithMetadata & {
    __typename?: 'Product';
    id: Scalars['ID'];
    privateMetadata: Array<Maybe<MetadataItem>>;
    metadata: Array<Maybe<MetadataItem>>;
    seoTitle?: Maybe<Scalars['String']>;
    seoDescription?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    description?: Maybe<Scalars['JSONString']>;
    productType: ProductType;
    slug: Scalars['String'];
    category?: Maybe<Category>;
    created: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    chargeTaxes: Scalars['Boolean'];
    weight?: Maybe<Weight>;
    defaultVariant?: Maybe<ProductVariant>;
    rating?: Maybe<Scalars['Float']>;
    channel?: Maybe<Scalars['String']>;
    /** @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead. */
    descriptionJson?: Maybe<Scalars['JSONString']>;
    thumbnail?: Maybe<Image>;
    pricing?: Maybe<ProductPricingInfo>;
    isAvailable?: Maybe<Scalars['Boolean']>;
    taxType?: Maybe<TaxType>;
    attributes: Array<SelectedAttribute>;
    channelListings?: Maybe<Array<ProductChannelListing>>;
    mediaById?: Maybe<ProductMedia>;
    /** @deprecated This field will be removed in Saleor 4.0. Use the `mediaById` field instead. */
    imageById?: Maybe<ProductImage>;
    variants?: Maybe<Array<Maybe<ProductVariant>>>;
    media?: Maybe<Array<ProductMedia>>;
    /** @deprecated This field will be removed in Saleor 4.0. Use the `media` field instead. */
    images?: Maybe<Array<Maybe<ProductImage>>>;
    collections?: Maybe<Array<Maybe<Collection>>>;
    translation?: Maybe<ProductTranslation>;
    availableForPurchase?: Maybe<Scalars['Date']>;
    isAvailableForPurchase?: Maybe<Scalars['Boolean']>;
};


export type ProductThumbnailArgs = {
    size?: InputMaybe<Scalars['Int']>;
};


export type ProductPricingArgs = {
    address?: InputMaybe<AddressInput>;
};


export type ProductIsAvailableArgs = {
    address?: InputMaybe<AddressInput>;
};


export type ProductMediaByIdArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type ProductImageByIdArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type ProductTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type ProductAttributeAssign = {
    __typename?: 'ProductAttributeAssign';
    productType?: Maybe<ProductType>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type ProductAttributeAssignInput = {
    id: Scalars['ID'];
    type: ProductAttributeType;
    variantSelection?: InputMaybe<Scalars['Boolean']>;
};

export type ProductAttributeAssignmentUpdate = {
    __typename?: 'ProductAttributeAssignmentUpdate';
    productType?: Maybe<ProductType>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type ProductAttributeAssignmentUpdateInput = {
    id: Scalars['ID'];
    variantSelection: Scalars['Boolean'];
};

export enum ProductAttributeType {
    Product = 'PRODUCT',
    Variant = 'VARIANT'
}

export type ProductAttributeUnassign = {
    __typename?: 'ProductAttributeUnassign';
    productType?: Maybe<ProductType>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type ProductBulkDelete = {
    __typename?: 'ProductBulkDelete';
    count: Scalars['Int'];
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type ProductChannelListing = Node & {
    __typename?: 'ProductChannelListing';
    id: Scalars['ID'];
    publicationDate?: Maybe<Scalars['Date']>;
    isPublished: Scalars['Boolean'];
    channel: Channel;
    visibleInListings: Scalars['Boolean'];
    availableForPurchase?: Maybe<Scalars['Date']>;
    discountedPrice?: Maybe<Money>;
    purchaseCost?: Maybe<MoneyRange>;
    margin?: Maybe<Margin>;
    isAvailableForPurchase?: Maybe<Scalars['Boolean']>;
    pricing?: Maybe<ProductPricingInfo>;
};


export type ProductChannelListingPricingArgs = {
    address?: InputMaybe<AddressInput>;
};

export type ProductChannelListingAddInput = {
    channelId: Scalars['ID'];
    isPublished?: InputMaybe<Scalars['Boolean']>;
    publicationDate?: InputMaybe<Scalars['Date']>;
    visibleInListings?: InputMaybe<Scalars['Boolean']>;
    isAvailableForPurchase?: InputMaybe<Scalars['Boolean']>;
    availableForPurchaseDate?: InputMaybe<Scalars['Date']>;
    addVariants?: InputMaybe<Array<Scalars['ID']>>;
    removeVariants?: InputMaybe<Array<Scalars['ID']>>;
};

export type ProductChannelListingError = {
    __typename?: 'ProductChannelListingError';
    field?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    code: ProductErrorCode;
    attributes?: Maybe<Array<Scalars['ID']>>;
    values?: Maybe<Array<Scalars['ID']>>;
    channels?: Maybe<Array<Scalars['ID']>>;
    variants?: Maybe<Array<Scalars['ID']>>;
};

export type ProductChannelListingUpdate = {
    __typename?: 'ProductChannelListingUpdate';
    product?: Maybe<Product>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productChannelListingErrors: Array<ProductChannelListingError>;
    errors: Array<ProductChannelListingError>;
};

export type ProductChannelListingUpdateInput = {
    updateChannels?: InputMaybe<Array<ProductChannelListingAddInput>>;
    removeChannels?: InputMaybe<Array<Scalars['ID']>>;
};

export type ProductCountableConnection = {
    __typename?: 'ProductCountableConnection';
    pageInfo: PageInfo;
    edges: Array<ProductCountableEdge>;
    totalCount?: Maybe<Scalars['Int']>;
};

export type ProductCountableEdge = {
    __typename?: 'ProductCountableEdge';
    node: Product;
    cursor: Scalars['String'];
};

export type ProductCreate = {
    __typename?: 'ProductCreate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
    product?: Maybe<Product>;
};

export type ProductCreateInput = {
    attributes?: InputMaybe<Array<AttributeValueInput>>;
    category?: InputMaybe<Scalars['ID']>;
    chargeTaxes?: InputMaybe<Scalars['Boolean']>;
    collections?: InputMaybe<Array<Scalars['ID']>>;
    description?: InputMaybe<Scalars['JSONString']>;
    name?: InputMaybe<Scalars['String']>;
    slug?: InputMaybe<Scalars['String']>;
    taxCode?: InputMaybe<Scalars['String']>;
    seo?: InputMaybe<SeoInput>;
    weight?: InputMaybe<Scalars['WeightScalar']>;
    rating?: InputMaybe<Scalars['Float']>;
    productType: Scalars['ID'];
};

export type ProductDelete = {
    __typename?: 'ProductDelete';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
    product?: Maybe<Product>;
};

export type ProductError = {
    __typename?: 'ProductError';
    field?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    code: ProductErrorCode;
    attributes?: Maybe<Array<Scalars['ID']>>;
    values?: Maybe<Array<Scalars['ID']>>;
};

export enum ProductErrorCode {
    AlreadyExists = 'ALREADY_EXISTS',
    AttributeAlreadyAssigned = 'ATTRIBUTE_ALREADY_ASSIGNED',
    AttributeCannotBeAssigned = 'ATTRIBUTE_CANNOT_BE_ASSIGNED',
    AttributeVariantsDisabled = 'ATTRIBUTE_VARIANTS_DISABLED',
    DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
    GraphqlError = 'GRAPHQL_ERROR',
    Invalid = 'INVALID',
    ProductWithoutCategory = 'PRODUCT_WITHOUT_CATEGORY',
    NotProductsImage = 'NOT_PRODUCTS_IMAGE',
    NotProductsVariant = 'NOT_PRODUCTS_VARIANT',
    NotFound = 'NOT_FOUND',
    Required = 'REQUIRED',
    Unique = 'UNIQUE',
    VariantNoDigitalContent = 'VARIANT_NO_DIGITAL_CONTENT',
    CannotManageProductWithoutVariant = 'CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT',
    ProductNotAssignedToChannel = 'PRODUCT_NOT_ASSIGNED_TO_CHANNEL',
    UnsupportedMediaProvider = 'UNSUPPORTED_MEDIA_PROVIDER',
    PreorderVariantCannotBeDeactivated = 'PREORDER_VARIANT_CANNOT_BE_DEACTIVATED'
}

export enum ProductFieldEnum {
    Name = 'NAME',
    Description = 'DESCRIPTION',
    ProductType = 'PRODUCT_TYPE',
    Category = 'CATEGORY',
    ProductWeight = 'PRODUCT_WEIGHT',
    Collections = 'COLLECTIONS',
    ChargeTaxes = 'CHARGE_TAXES',
    ProductMedia = 'PRODUCT_MEDIA',
    VariantId = 'VARIANT_ID',
    VariantSku = 'VARIANT_SKU',
    VariantWeight = 'VARIANT_WEIGHT',
    VariantMedia = 'VARIANT_MEDIA'
}

export type ProductFilterInput = {
    isPublished?: InputMaybe<Scalars['Boolean']>;
    collections?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    hasCategory?: InputMaybe<Scalars['Boolean']>;
    attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
    stockAvailability?: InputMaybe<StockAvailability>;
    stocks?: InputMaybe<ProductStockFilterInput>;
    search?: InputMaybe<Scalars['String']>;
    metadata?: InputMaybe<Array<InputMaybe<MetadataFilter>>>;
    price?: InputMaybe<PriceRangeInput>;
    minimalPrice?: InputMaybe<PriceRangeInput>;
    updatedAt?: InputMaybe<DateTimeRangeInput>;
    productTypes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    giftCard?: InputMaybe<Scalars['Boolean']>;
    ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    hasPreorderedVariants?: InputMaybe<Scalars['Boolean']>;
    channel?: InputMaybe<Scalars['String']>;
};

export type ProductImage = {
    __typename?: 'ProductImage';
    id: Scalars['ID'];
    alt?: Maybe<Scalars['String']>;
    sortOrder?: Maybe<Scalars['Int']>;
    url: Scalars['String'];
};


export type ProductImageUrlArgs = {
    size?: InputMaybe<Scalars['Int']>;
};

export type ProductInput = {
    attributes?: InputMaybe<Array<AttributeValueInput>>;
    category?: InputMaybe<Scalars['ID']>;
    chargeTaxes?: InputMaybe<Scalars['Boolean']>;
    collections?: InputMaybe<Array<Scalars['ID']>>;
    description?: InputMaybe<Scalars['JSONString']>;
    name?: InputMaybe<Scalars['String']>;
    slug?: InputMaybe<Scalars['String']>;
    taxCode?: InputMaybe<Scalars['String']>;
    seo?: InputMaybe<SeoInput>;
    weight?: InputMaybe<Scalars['WeightScalar']>;
    rating?: InputMaybe<Scalars['Float']>;
};

export type ProductMedia = Node & {
    __typename?: 'ProductMedia';
    id: Scalars['ID'];
    sortOrder?: Maybe<Scalars['Int']>;
    alt: Scalars['String'];
    type: ProductMediaType;
    oembedData: Scalars['JSONString'];
    url: Scalars['String'];
};


export type ProductMediaUrlArgs = {
    size?: InputMaybe<Scalars['Int']>;
};

export type ProductMediaBulkDelete = {
    __typename?: 'ProductMediaBulkDelete';
    count: Scalars['Int'];
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type ProductMediaCreate = {
    __typename?: 'ProductMediaCreate';
    product?: Maybe<Product>;
    media?: Maybe<ProductMedia>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type ProductMediaCreateInput = {
    alt?: InputMaybe<Scalars['String']>;
    image?: InputMaybe<Scalars['Upload']>;
    product: Scalars['ID'];
    mediaUrl?: InputMaybe<Scalars['String']>;
};

export type ProductMediaDelete = {
    __typename?: 'ProductMediaDelete';
    product?: Maybe<Product>;
    media?: Maybe<ProductMedia>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type ProductMediaReorder = {
    __typename?: 'ProductMediaReorder';
    product?: Maybe<Product>;
    media?: Maybe<Array<ProductMedia>>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export enum ProductMediaType {
    Image = 'IMAGE',
    Video = 'VIDEO'
}

export type ProductMediaUpdate = {
    __typename?: 'ProductMediaUpdate';
    product?: Maybe<Product>;
    media?: Maybe<ProductMedia>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type ProductMediaUpdateInput = {
    alt?: InputMaybe<Scalars['String']>;
};

export type ProductOrder = {
    direction: OrderDirection;
    channel?: InputMaybe<Scalars['String']>;
    attributeId?: InputMaybe<Scalars['ID']>;
    field?: InputMaybe<ProductOrderField>;
};

export enum ProductOrderField {
    Name = 'NAME',
    Rank = 'RANK',
    Price = 'PRICE',
    MinimalPrice = 'MINIMAL_PRICE',
    LastModified = 'LAST_MODIFIED',
    Date = 'DATE',
    Type = 'TYPE',
    Published = 'PUBLISHED',
    PublicationDate = 'PUBLICATION_DATE',
    PublishedAt = 'PUBLISHED_AT',
    LastModifiedAt = 'LAST_MODIFIED_AT',
    Collection = 'COLLECTION',
    Rating = 'RATING'
}

export type ProductPricingInfo = {
    __typename?: 'ProductPricingInfo';
    onSale?: Maybe<Scalars['Boolean']>;
    discount?: Maybe<TaxedMoney>;
    discountLocalCurrency?: Maybe<TaxedMoney>;
    priceRange?: Maybe<TaxedMoneyRange>;
    priceRangeUndiscounted?: Maybe<TaxedMoneyRange>;
    priceRangeLocalCurrency?: Maybe<TaxedMoneyRange>;
};

export type ProductReorderAttributeValues = {
    __typename?: 'ProductReorderAttributeValues';
    product?: Maybe<Product>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type ProductStockFilterInput = {
    warehouseIds?: InputMaybe<Array<Scalars['ID']>>;
    quantity?: InputMaybe<IntRangeInput>;
};

export type ProductTranslatableContent = Node & {
    __typename?: 'ProductTranslatableContent';
    id: Scalars['ID'];
    seoTitle?: Maybe<Scalars['String']>;
    seoDescription?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    description?: Maybe<Scalars['JSONString']>;
    /** @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead. */
    descriptionJson?: Maybe<Scalars['JSONString']>;
    translation?: Maybe<ProductTranslation>;
    /** @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries. */
    product?: Maybe<Product>;
    attributeValues: Array<AttributeValueTranslatableContent>;
};


export type ProductTranslatableContentTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type ProductTranslate = {
    __typename?: 'ProductTranslate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    translationErrors: Array<TranslationError>;
    errors: Array<TranslationError>;
    product?: Maybe<Product>;
};

export type ProductTranslation = Node & {
    __typename?: 'ProductTranslation';
    id: Scalars['ID'];
    language: LanguageDisplay;
    seoTitle?: Maybe<Scalars['String']>;
    seoDescription?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['JSONString']>;
    /** @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead. */
    descriptionJson?: Maybe<Scalars['JSONString']>;
};

export type ProductType = Node & ObjectWithMetadata & {
    __typename?: 'ProductType';
    id: Scalars['ID'];
    privateMetadata: Array<Maybe<MetadataItem>>;
    metadata: Array<Maybe<MetadataItem>>;
    name: Scalars['String'];
    slug: Scalars['String'];
    hasVariants: Scalars['Boolean'];
    isShippingRequired: Scalars['Boolean'];
    isDigital: Scalars['Boolean'];
    weight?: Maybe<Weight>;
    kind: ProductTypeKindEnum;
    /** @deprecated This field will be removed in Saleor 4.0. Use the top-level `products` query with the `productTypes` filter. */
    products?: Maybe<ProductCountableConnection>;
    taxType?: Maybe<TaxType>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `assignedVariantAttributes` instead. */
    variantAttributes?: Maybe<Array<Maybe<Attribute>>>;
    assignedVariantAttributes?: Maybe<Array<Maybe<AssignedVariantAttribute>>>;
    productAttributes?: Maybe<Array<Maybe<Attribute>>>;
    availableAttributes?: Maybe<AttributeCountableConnection>;
};


export type ProductTypeProductsArgs = {
    channel?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type ProductTypeVariantAttributesArgs = {
    variantSelection?: InputMaybe<VariantAttributeScope>;
};


export type ProductTypeAssignedVariantAttributesArgs = {
    variantSelection?: InputMaybe<VariantAttributeScope>;
};


export type ProductTypeAvailableAttributesArgs = {
    filter?: InputMaybe<AttributeFilterInput>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};

export type ProductTypeBulkDelete = {
    __typename?: 'ProductTypeBulkDelete';
    count: Scalars['Int'];
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export enum ProductTypeConfigurable {
    Configurable = 'CONFIGURABLE',
    Simple = 'SIMPLE'
}

export type ProductTypeCountableConnection = {
    __typename?: 'ProductTypeCountableConnection';
    pageInfo: PageInfo;
    edges: Array<ProductTypeCountableEdge>;
    totalCount?: Maybe<Scalars['Int']>;
};

export type ProductTypeCountableEdge = {
    __typename?: 'ProductTypeCountableEdge';
    node: ProductType;
    cursor: Scalars['String'];
};

export type ProductTypeCreate = {
    __typename?: 'ProductTypeCreate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
    productType?: Maybe<ProductType>;
};

export type ProductTypeDelete = {
    __typename?: 'ProductTypeDelete';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
    productType?: Maybe<ProductType>;
};

export enum ProductTypeEnum {
    Digital = 'DIGITAL',
    Shippable = 'SHIPPABLE'
}

export type ProductTypeFilterInput = {
    search?: InputMaybe<Scalars['String']>;
    configurable?: InputMaybe<ProductTypeConfigurable>;
    productType?: InputMaybe<ProductTypeEnum>;
    metadata?: InputMaybe<Array<InputMaybe<MetadataFilter>>>;
    kind?: InputMaybe<ProductTypeKindEnum>;
    ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ProductTypeInput = {
    name?: InputMaybe<Scalars['String']>;
    slug?: InputMaybe<Scalars['String']>;
    kind?: InputMaybe<ProductTypeKindEnum>;
    hasVariants?: InputMaybe<Scalars['Boolean']>;
    productAttributes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    variantAttributes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    isShippingRequired?: InputMaybe<Scalars['Boolean']>;
    isDigital?: InputMaybe<Scalars['Boolean']>;
    weight?: InputMaybe<Scalars['WeightScalar']>;
    taxCode?: InputMaybe<Scalars['String']>;
};

export enum ProductTypeKindEnum {
    Normal = 'NORMAL',
    GiftCard = 'GIFT_CARD'
}

export type ProductTypeReorderAttributes = {
    __typename?: 'ProductTypeReorderAttributes';
    productType?: Maybe<ProductType>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export enum ProductTypeSortField {
    Name = 'NAME',
    Digital = 'DIGITAL',
    ShippingRequired = 'SHIPPING_REQUIRED'
}

export type ProductTypeSortingInput = {
    direction: OrderDirection;
    field: ProductTypeSortField;
};

export type ProductTypeUpdate = {
    __typename?: 'ProductTypeUpdate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
    productType?: Maybe<ProductType>;
};

export type ProductUpdate = {
    __typename?: 'ProductUpdate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
    product?: Maybe<Product>;
};

export type ProductVariant = Node & ObjectWithMetadata & {
    __typename?: 'ProductVariant';
    id: Scalars['ID'];
    privateMetadata: Array<Maybe<MetadataItem>>;
    metadata: Array<Maybe<MetadataItem>>;
    name: Scalars['String'];
    sku?: Maybe<Scalars['String']>;
    product: Product;
    trackInventory: Scalars['Boolean'];
    quantityLimitPerCustomer?: Maybe<Scalars['Int']>;
    weight?: Maybe<Weight>;
    channel?: Maybe<Scalars['String']>;
    channelListings?: Maybe<Array<ProductVariantChannelListing>>;
    pricing?: Maybe<VariantPricingInfo>;
    attributes: Array<SelectedAttribute>;
    margin?: Maybe<Scalars['Int']>;
    quantityOrdered?: Maybe<Scalars['Int']>;
    revenue?: Maybe<TaxedMoney>;
    /** @deprecated This field will be removed in Saleor 4.0. Use the `media` field instead. */
    images?: Maybe<Array<Maybe<ProductImage>>>;
    media?: Maybe<Array<ProductMedia>>;
    translation?: Maybe<ProductVariantTranslation>;
    digitalContent?: Maybe<DigitalContent>;
    stocks?: Maybe<Array<Maybe<Stock>>>;
    quantityAvailable?: Maybe<Scalars['Int']>;
    preorder?: Maybe<PreorderData>;
    created: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
};


export type ProductVariantPricingArgs = {
    address?: InputMaybe<AddressInput>;
};


export type ProductVariantAttributesArgs = {
    variantSelection?: InputMaybe<VariantAttributeScope>;
};


export type ProductVariantRevenueArgs = {
    period?: InputMaybe<ReportingPeriod>;
};


export type ProductVariantTranslationArgs = {
    languageCode: LanguageCodeEnum;
};


export type ProductVariantStocksArgs = {
    address?: InputMaybe<AddressInput>;
    countryCode?: InputMaybe<CountryCode>;
};


export type ProductVariantQuantityAvailableArgs = {
    address?: InputMaybe<AddressInput>;
    countryCode?: InputMaybe<CountryCode>;
};

export type ProductVariantBulkCreate = {
    __typename?: 'ProductVariantBulkCreate';
    count: Scalars['Int'];
    productVariants: Array<ProductVariant>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    bulkProductErrors: Array<BulkProductError>;
    errors: Array<BulkProductError>;
};

export type ProductVariantBulkCreateInput = {
    attributes: Array<BulkAttributeValueInput>;
    sku?: InputMaybe<Scalars['String']>;
    trackInventory?: InputMaybe<Scalars['Boolean']>;
    weight?: InputMaybe<Scalars['WeightScalar']>;
    preorder?: InputMaybe<PreorderSettingsInput>;
    quantityLimitPerCustomer?: InputMaybe<Scalars['Int']>;
    stocks?: InputMaybe<Array<StockInput>>;
    channelListings?: InputMaybe<Array<ProductVariantChannelListingAddInput>>;
};

export type ProductVariantBulkDelete = {
    __typename?: 'ProductVariantBulkDelete';
    count: Scalars['Int'];
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type ProductVariantChannelListing = Node & {
    __typename?: 'ProductVariantChannelListing';
    id: Scalars['ID'];
    channel: Channel;
    price?: Maybe<Money>;
    costPrice?: Maybe<Money>;
    margin?: Maybe<Scalars['Int']>;
    preorderThreshold?: Maybe<PreorderThreshold>;
};

export type ProductVariantChannelListingAddInput = {
    channelId: Scalars['ID'];
    price: Scalars['PositiveDecimal'];
    costPrice?: InputMaybe<Scalars['PositiveDecimal']>;
    preorderThreshold?: InputMaybe<Scalars['Int']>;
};

export type ProductVariantChannelListingUpdate = {
    __typename?: 'ProductVariantChannelListingUpdate';
    variant?: Maybe<ProductVariant>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productChannelListingErrors: Array<ProductChannelListingError>;
    errors: Array<ProductChannelListingError>;
};

export type ProductVariantCountableConnection = {
    __typename?: 'ProductVariantCountableConnection';
    pageInfo: PageInfo;
    edges: Array<ProductVariantCountableEdge>;
    totalCount?: Maybe<Scalars['Int']>;
};

export type ProductVariantCountableEdge = {
    __typename?: 'ProductVariantCountableEdge';
    node: ProductVariant;
    cursor: Scalars['String'];
};

export type ProductVariantCreate = {
    __typename?: 'ProductVariantCreate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
    productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantCreateInput = {
    attributes: Array<AttributeValueInput>;
    sku?: InputMaybe<Scalars['String']>;
    trackInventory?: InputMaybe<Scalars['Boolean']>;
    weight?: InputMaybe<Scalars['WeightScalar']>;
    preorder?: InputMaybe<PreorderSettingsInput>;
    quantityLimitPerCustomer?: InputMaybe<Scalars['Int']>;
    product: Scalars['ID'];
    stocks?: InputMaybe<Array<StockInput>>;
};

export type ProductVariantDelete = {
    __typename?: 'ProductVariantDelete';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
    productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantFilterInput = {
    search?: InputMaybe<Scalars['String']>;
    sku?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    metadata?: InputMaybe<Array<InputMaybe<MetadataFilter>>>;
    isPreorder?: InputMaybe<Scalars['Boolean']>;
    updatedAt?: InputMaybe<DateTimeRangeInput>;
};

export type ProductVariantInput = {
    attributes?: InputMaybe<Array<AttributeValueInput>>;
    sku?: InputMaybe<Scalars['String']>;
    trackInventory?: InputMaybe<Scalars['Boolean']>;
    weight?: InputMaybe<Scalars['WeightScalar']>;
    preorder?: InputMaybe<PreorderSettingsInput>;
    quantityLimitPerCustomer?: InputMaybe<Scalars['Int']>;
};

export type ProductVariantPreorderDeactivate = {
    __typename?: 'ProductVariantPreorderDeactivate';
    productVariant?: Maybe<ProductVariant>;
    errors: Array<ProductError>;
};

export type ProductVariantReorder = {
    __typename?: 'ProductVariantReorder';
    product?: Maybe<Product>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type ProductVariantReorderAttributeValues = {
    __typename?: 'ProductVariantReorderAttributeValues';
    productVariant?: Maybe<ProductVariant>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type ProductVariantSetDefault = {
    __typename?: 'ProductVariantSetDefault';
    product?: Maybe<Product>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export enum ProductVariantSortField {
    LastModifiedAt = 'LAST_MODIFIED_AT'
}

export type ProductVariantSortingInput = {
    direction: OrderDirection;
    field: ProductVariantSortField;
};

export type ProductVariantStocksCreate = {
    __typename?: 'ProductVariantStocksCreate';
    productVariant?: Maybe<ProductVariant>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    bulkStockErrors: Array<BulkStockError>;
    errors: Array<BulkStockError>;
};

export type ProductVariantStocksDelete = {
    __typename?: 'ProductVariantStocksDelete';
    productVariant?: Maybe<ProductVariant>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    stockErrors: Array<StockError>;
    errors: Array<StockError>;
};

export type ProductVariantStocksUpdate = {
    __typename?: 'ProductVariantStocksUpdate';
    productVariant?: Maybe<ProductVariant>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    bulkStockErrors: Array<BulkStockError>;
    errors: Array<BulkStockError>;
};

export type ProductVariantTranslatableContent = Node & {
    __typename?: 'ProductVariantTranslatableContent';
    id: Scalars['ID'];
    name: Scalars['String'];
    translation?: Maybe<ProductVariantTranslation>;
    /** @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries. */
    productVariant?: Maybe<ProductVariant>;
    attributeValues: Array<AttributeValueTranslatableContent>;
};


export type ProductVariantTranslatableContentTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type ProductVariantTranslate = {
    __typename?: 'ProductVariantTranslate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    translationErrors: Array<TranslationError>;
    errors: Array<TranslationError>;
    productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantTranslation = Node & {
    __typename?: 'ProductVariantTranslation';
    id: Scalars['ID'];
    language: LanguageDisplay;
    name: Scalars['String'];
};

export type ProductVariantUpdate = {
    __typename?: 'ProductVariantUpdate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
    productVariant?: Maybe<ProductVariant>;
};

export type PublishableChannelListingInput = {
    channelId: Scalars['ID'];
    isPublished?: InputMaybe<Scalars['Boolean']>;
    publicationDate?: InputMaybe<Scalars['Date']>;
};

export type Query = {
    __typename?: 'Query';
    webhook?: Maybe<Webhook>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `WebhookEventTypeAsyncEnum` and `WebhookEventTypeSyncEnum` to get available event types. */
    webhookEvents?: Maybe<Array<Maybe<WebhookEvent>>>;
    webhookSamplePayload?: Maybe<Scalars['JSONString']>;
    warehouse?: Maybe<Warehouse>;
    warehouses?: Maybe<WarehouseCountableConnection>;
    translations?: Maybe<TranslatableItemConnection>;
    translation?: Maybe<TranslatableItem>;
    stock?: Maybe<Stock>;
    stocks?: Maybe<StockCountableConnection>;
    shop: Shop;
    orderSettings?: Maybe<OrderSettings>;
    giftCardSettings: GiftCardSettings;
    shippingZone?: Maybe<ShippingZone>;
    shippingZones?: Maybe<ShippingZoneCountableConnection>;
    digitalContent?: Maybe<DigitalContent>;
    digitalContents?: Maybe<DigitalContentCountableConnection>;
    categories?: Maybe<CategoryCountableConnection>;
    category?: Maybe<Category>;
    collection?: Maybe<Collection>;
    collections?: Maybe<CollectionCountableConnection>;
    product?: Maybe<Product>;
    products?: Maybe<ProductCountableConnection>;
    productType?: Maybe<ProductType>;
    productTypes?: Maybe<ProductTypeCountableConnection>;
    productVariant?: Maybe<ProductVariant>;
    productVariants?: Maybe<ProductVariantCountableConnection>;
    reportProductSales?: Maybe<ProductVariantCountableConnection>;
    payment?: Maybe<Payment>;
    payments?: Maybe<PaymentCountableConnection>;
    page?: Maybe<Page>;
    pages?: Maybe<PageCountableConnection>;
    pageType?: Maybe<PageType>;
    pageTypes?: Maybe<PageTypeCountableConnection>;
    homepageEvents?: Maybe<OrderEventCountableConnection>;
    order?: Maybe<Order>;
    orders?: Maybe<OrderCountableConnection>;
    draftOrders?: Maybe<OrderCountableConnection>;
    ordersTotal?: Maybe<TaxedMoney>;
    orderByToken?: Maybe<Order>;
    menu?: Maybe<Menu>;
    menus?: Maybe<MenuCountableConnection>;
    menuItem?: Maybe<MenuItem>;
    menuItems?: Maybe<MenuItemCountableConnection>;
    giftCard?: Maybe<GiftCard>;
    giftCards?: Maybe<GiftCardCountableConnection>;
    giftCardCurrencies: Array<Scalars['String']>;
    giftCardTags?: Maybe<GiftCardTagCountableConnection>;
    plugin?: Maybe<Plugin>;
    plugins?: Maybe<PluginCountableConnection>;
    sale?: Maybe<Sale>;
    sales?: Maybe<SaleCountableConnection>;
    voucher?: Maybe<Voucher>;
    vouchers?: Maybe<VoucherCountableConnection>;
    exportFile?: Maybe<ExportFile>;
    exportFiles?: Maybe<ExportFileCountableConnection>;
    taxTypes?: Maybe<Array<Maybe<TaxType>>>;
    checkout?: Maybe<Checkout>;
    checkouts?: Maybe<CheckoutCountableConnection>;
    checkoutLines?: Maybe<CheckoutLineCountableConnection>;
    channel?: Maybe<Channel>;
    channels?: Maybe<Array<Channel>>;
    attributes?: Maybe<AttributeCountableConnection>;
    attribute?: Maybe<Attribute>;
    appsInstallations: Array<AppInstallation>;
    apps?: Maybe<AppCountableConnection>;
    app?: Maybe<App>;
    appExtensions?: Maybe<AppExtensionCountableConnection>;
    appExtension?: Maybe<AppExtension>;
    addressValidationRules?: Maybe<AddressValidationData>;
    address?: Maybe<Address>;
    customers?: Maybe<UserCountableConnection>;
    permissionGroups?: Maybe<GroupCountableConnection>;
    permissionGroup?: Maybe<Group>;
    me?: Maybe<User>;
    staffUsers?: Maybe<UserCountableConnection>;
    user?: Maybe<User>;
    _entities?: Maybe<Array<Maybe<_Entity>>>;
    _service?: Maybe<_Service>;
};


export type QueryWebhookArgs = {
    id: Scalars['ID'];
};


export type QueryWebhookSamplePayloadArgs = {
    eventType: WebhookSampleEventTypeEnum;
};


export type QueryWarehouseArgs = {
    id: Scalars['ID'];
};


export type QueryWarehousesArgs = {
    filter?: InputMaybe<WarehouseFilterInput>;
    sortBy?: InputMaybe<WarehouseSortingInput>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type QueryTranslationsArgs = {
    kind: TranslatableKinds;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type QueryTranslationArgs = {
    id: Scalars['ID'];
    kind: TranslatableKinds;
};


export type QueryStockArgs = {
    id: Scalars['ID'];
};


export type QueryStocksArgs = {
    filter?: InputMaybe<StockFilterInput>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type QueryShippingZoneArgs = {
    id: Scalars['ID'];
    channel?: InputMaybe<Scalars['String']>;
};


export type QueryShippingZonesArgs = {
    filter?: InputMaybe<ShippingZoneFilterInput>;
    channel?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type QueryDigitalContentArgs = {
    id: Scalars['ID'];
};


export type QueryDigitalContentsArgs = {
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type QueryCategoriesArgs = {
    filter?: InputMaybe<CategoryFilterInput>;
    sortBy?: InputMaybe<CategorySortingInput>;
    level?: InputMaybe<Scalars['Int']>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type QueryCategoryArgs = {
    id?: InputMaybe<Scalars['ID']>;
    slug?: InputMaybe<Scalars['String']>;
};


export type QueryCollectionArgs = {
    id?: InputMaybe<Scalars['ID']>;
    slug?: InputMaybe<Scalars['String']>;
    channel?: InputMaybe<Scalars['String']>;
};


export type QueryCollectionsArgs = {
    filter?: InputMaybe<CollectionFilterInput>;
    sortBy?: InputMaybe<CollectionSortingInput>;
    channel?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type QueryProductArgs = {
    id?: InputMaybe<Scalars['ID']>;
    slug?: InputMaybe<Scalars['String']>;
    channel?: InputMaybe<Scalars['String']>;
};


export type QueryProductsArgs = {
    filter?: InputMaybe<ProductFilterInput>;
    sortBy?: InputMaybe<ProductOrder>;
    channel?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type QueryProductTypeArgs = {
    id: Scalars['ID'];
};


export type QueryProductTypesArgs = {
    filter?: InputMaybe<ProductTypeFilterInput>;
    sortBy?: InputMaybe<ProductTypeSortingInput>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type QueryProductVariantArgs = {
    id?: InputMaybe<Scalars['ID']>;
    sku?: InputMaybe<Scalars['String']>;
    channel?: InputMaybe<Scalars['String']>;
};


export type QueryProductVariantsArgs = {
    ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    channel?: InputMaybe<Scalars['String']>;
    filter?: InputMaybe<ProductVariantFilterInput>;
    sortBy?: InputMaybe<ProductVariantSortingInput>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type QueryReportProductSalesArgs = {
    period: ReportingPeriod;
    channel: Scalars['String'];
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type QueryPaymentArgs = {
    id: Scalars['ID'];
};


export type QueryPaymentsArgs = {
    filter?: InputMaybe<PaymentFilterInput>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type QueryPageArgs = {
    id?: InputMaybe<Scalars['ID']>;
    slug?: InputMaybe<Scalars['String']>;
};


export type QueryPagesArgs = {
    sortBy?: InputMaybe<PageSortingInput>;
    filter?: InputMaybe<PageFilterInput>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type QueryPageTypeArgs = {
    id: Scalars['ID'];
};


export type QueryPageTypesArgs = {
    sortBy?: InputMaybe<PageTypeSortingInput>;
    filter?: InputMaybe<PageTypeFilterInput>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type QueryHomepageEventsArgs = {
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type QueryOrderArgs = {
    id: Scalars['ID'];
};


export type QueryOrdersArgs = {
    sortBy?: InputMaybe<OrderSortingInput>;
    filter?: InputMaybe<OrderFilterInput>;
    channel?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type QueryDraftOrdersArgs = {
    sortBy?: InputMaybe<OrderSortingInput>;
    filter?: InputMaybe<OrderDraftFilterInput>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type QueryOrdersTotalArgs = {
    period?: InputMaybe<ReportingPeriod>;
    channel?: InputMaybe<Scalars['String']>;
};


export type QueryOrderByTokenArgs = {
    token: Scalars['UUID'];
};


export type QueryMenuArgs = {
    channel?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    slug?: InputMaybe<Scalars['String']>;
};


export type QueryMenusArgs = {
    channel?: InputMaybe<Scalars['String']>;
    sortBy?: InputMaybe<MenuSortingInput>;
    filter?: InputMaybe<MenuFilterInput>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type QueryMenuItemArgs = {
    id: Scalars['ID'];
    channel?: InputMaybe<Scalars['String']>;
};


export type QueryMenuItemsArgs = {
    channel?: InputMaybe<Scalars['String']>;
    sortBy?: InputMaybe<MenuItemSortingInput>;
    filter?: InputMaybe<MenuItemFilterInput>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type QueryGiftCardArgs = {
    id: Scalars['ID'];
};


export type QueryGiftCardsArgs = {
    sortBy?: InputMaybe<GiftCardSortingInput>;
    filter?: InputMaybe<GiftCardFilterInput>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type QueryGiftCardTagsArgs = {
    filter?: InputMaybe<GiftCardTagFilterInput>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type QueryPluginArgs = {
    id: Scalars['ID'];
};


export type QueryPluginsArgs = {
    filter?: InputMaybe<PluginFilterInput>;
    sortBy?: InputMaybe<PluginSortingInput>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type QuerySaleArgs = {
    id: Scalars['ID'];
    channel?: InputMaybe<Scalars['String']>;
};


export type QuerySalesArgs = {
    filter?: InputMaybe<SaleFilterInput>;
    sortBy?: InputMaybe<SaleSortingInput>;
    query?: InputMaybe<Scalars['String']>;
    channel?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type QueryVoucherArgs = {
    id: Scalars['ID'];
    channel?: InputMaybe<Scalars['String']>;
};


export type QueryVouchersArgs = {
    filter?: InputMaybe<VoucherFilterInput>;
    sortBy?: InputMaybe<VoucherSortingInput>;
    query?: InputMaybe<Scalars['String']>;
    channel?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type QueryExportFileArgs = {
    id: Scalars['ID'];
};


export type QueryExportFilesArgs = {
    filter?: InputMaybe<ExportFileFilterInput>;
    sortBy?: InputMaybe<ExportFileSortingInput>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type QueryCheckoutArgs = {
    token?: InputMaybe<Scalars['UUID']>;
};


export type QueryCheckoutsArgs = {
    sortBy?: InputMaybe<CheckoutSortingInput>;
    filter?: InputMaybe<CheckoutFilterInput>;
    channel?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type QueryCheckoutLinesArgs = {
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type QueryChannelArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryAttributesArgs = {
    filter?: InputMaybe<AttributeFilterInput>;
    sortBy?: InputMaybe<AttributeSortingInput>;
    channel?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type QueryAttributeArgs = {
    id?: InputMaybe<Scalars['ID']>;
    slug?: InputMaybe<Scalars['String']>;
};


export type QueryAppsArgs = {
    filter?: InputMaybe<AppFilterInput>;
    sortBy?: InputMaybe<AppSortingInput>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type QueryAppArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryAppExtensionsArgs = {
    filter?: InputMaybe<AppExtensionFilterInput>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type QueryAppExtensionArgs = {
    id: Scalars['ID'];
};


export type QueryAddressValidationRulesArgs = {
    countryCode: CountryCode;
    countryArea?: InputMaybe<Scalars['String']>;
    city?: InputMaybe<Scalars['String']>;
    cityArea?: InputMaybe<Scalars['String']>;
};


export type QueryAddressArgs = {
    id: Scalars['ID'];
};


export type QueryCustomersArgs = {
    filter?: InputMaybe<CustomerFilterInput>;
    sortBy?: InputMaybe<UserSortingInput>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type QueryPermissionGroupsArgs = {
    filter?: InputMaybe<PermissionGroupFilterInput>;
    sortBy?: InputMaybe<PermissionGroupSortingInput>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type QueryPermissionGroupArgs = {
    id: Scalars['ID'];
};


export type QueryStaffUsersArgs = {
    filter?: InputMaybe<StaffUserInput>;
    sortBy?: InputMaybe<UserSortingInput>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type QueryUserArgs = {
    id?: InputMaybe<Scalars['ID']>;
    email?: InputMaybe<Scalars['String']>;
};


export type Query_EntitiesArgs = {
    representations?: InputMaybe<Array<InputMaybe<Scalars['_Any']>>>;
};

export type ReducedRate = {
    __typename?: 'ReducedRate';
    rate: Scalars['Float'];
    rateType: Scalars['String'];
};

export type RefreshToken = {
    __typename?: 'RefreshToken';
    token?: Maybe<Scalars['String']>;
    user?: Maybe<User>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type ReorderInput = {
    id: Scalars['ID'];
    sortOrder?: InputMaybe<Scalars['Int']>;
};

export enum ReportingPeriod {
    Today = 'TODAY',
    ThisMonth = 'THIS_MONTH'
}

export type RequestEmailChange = {
    __typename?: 'RequestEmailChange';
    user?: Maybe<User>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type RequestPasswordReset = {
    __typename?: 'RequestPasswordReset';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type Sale = Node & ObjectWithMetadata & {
    __typename?: 'Sale';
    id: Scalars['ID'];
    privateMetadata: Array<Maybe<MetadataItem>>;
    metadata: Array<Maybe<MetadataItem>>;
    name: Scalars['String'];
    type: SaleType;
    startDate: Scalars['DateTime'];
    endDate?: Maybe<Scalars['DateTime']>;
    created: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    categories?: Maybe<CategoryCountableConnection>;
    collections?: Maybe<CollectionCountableConnection>;
    products?: Maybe<ProductCountableConnection>;
    variants?: Maybe<ProductVariantCountableConnection>;
    translation?: Maybe<SaleTranslation>;
    channelListings?: Maybe<Array<SaleChannelListing>>;
    discountValue?: Maybe<Scalars['Float']>;
    currency?: Maybe<Scalars['String']>;
};


export type SaleCategoriesArgs = {
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type SaleCollectionsArgs = {
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type SaleProductsArgs = {
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type SaleVariantsArgs = {
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type SaleTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type SaleAddCatalogues = {
    __typename?: 'SaleAddCatalogues';
    sale?: Maybe<Sale>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    discountErrors: Array<DiscountError>;
    errors: Array<DiscountError>;
};

export type SaleBulkDelete = {
    __typename?: 'SaleBulkDelete';
    count: Scalars['Int'];
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    discountErrors: Array<DiscountError>;
    errors: Array<DiscountError>;
};

export type SaleChannelListing = Node & {
    __typename?: 'SaleChannelListing';
    id: Scalars['ID'];
    channel: Channel;
    discountValue: Scalars['Float'];
    currency: Scalars['String'];
};

export type SaleChannelListingAddInput = {
    channelId: Scalars['ID'];
    discountValue: Scalars['PositiveDecimal'];
};

export type SaleChannelListingInput = {
    addChannels?: InputMaybe<Array<SaleChannelListingAddInput>>;
    removeChannels?: InputMaybe<Array<Scalars['ID']>>;
};

export type SaleChannelListingUpdate = {
    __typename?: 'SaleChannelListingUpdate';
    sale?: Maybe<Sale>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    discountErrors: Array<DiscountError>;
    errors: Array<DiscountError>;
};

export type SaleCountableConnection = {
    __typename?: 'SaleCountableConnection';
    pageInfo: PageInfo;
    edges: Array<SaleCountableEdge>;
    totalCount?: Maybe<Scalars['Int']>;
};

export type SaleCountableEdge = {
    __typename?: 'SaleCountableEdge';
    node: Sale;
    cursor: Scalars['String'];
};

export type SaleCreate = {
    __typename?: 'SaleCreate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    discountErrors: Array<DiscountError>;
    errors: Array<DiscountError>;
    sale?: Maybe<Sale>;
};

export type SaleDelete = {
    __typename?: 'SaleDelete';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    discountErrors: Array<DiscountError>;
    errors: Array<DiscountError>;
    sale?: Maybe<Sale>;
};

export type SaleFilterInput = {
    status?: InputMaybe<Array<InputMaybe<DiscountStatusEnum>>>;
    saleType?: InputMaybe<DiscountValueTypeEnum>;
    started?: InputMaybe<DateTimeRangeInput>;
    search?: InputMaybe<Scalars['String']>;
    metadata?: InputMaybe<Array<InputMaybe<MetadataFilter>>>;
    updatedAt?: InputMaybe<DateTimeRangeInput>;
};

export type SaleInput = {
    name?: InputMaybe<Scalars['String']>;
    type?: InputMaybe<DiscountValueTypeEnum>;
    value?: InputMaybe<Scalars['PositiveDecimal']>;
    products?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    variants?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    collections?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    startDate?: InputMaybe<Scalars['DateTime']>;
    endDate?: InputMaybe<Scalars['DateTime']>;
};

export type SaleRemoveCatalogues = {
    __typename?: 'SaleRemoveCatalogues';
    sale?: Maybe<Sale>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    discountErrors: Array<DiscountError>;
    errors: Array<DiscountError>;
};

export enum SaleSortField {
    Name = 'NAME',
    StartDate = 'START_DATE',
    EndDate = 'END_DATE',
    Value = 'VALUE',
    Type = 'TYPE',
    CreatedAt = 'CREATED_AT',
    LastModifiedAt = 'LAST_MODIFIED_AT'
}

export type SaleSortingInput = {
    direction: OrderDirection;
    channel?: InputMaybe<Scalars['String']>;
    field: SaleSortField;
};

export type SaleTranslatableContent = Node & {
    __typename?: 'SaleTranslatableContent';
    id: Scalars['ID'];
    name: Scalars['String'];
    translation?: Maybe<SaleTranslation>;
    /** @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries. */
    sale?: Maybe<Sale>;
};


export type SaleTranslatableContentTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type SaleTranslate = {
    __typename?: 'SaleTranslate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    translationErrors: Array<TranslationError>;
    errors: Array<TranslationError>;
    sale?: Maybe<Sale>;
};

export type SaleTranslation = Node & {
    __typename?: 'SaleTranslation';
    id: Scalars['ID'];
    language: LanguageDisplay;
    name?: Maybe<Scalars['String']>;
};

export enum SaleType {
    Fixed = 'FIXED',
    Percentage = 'PERCENTAGE'
}

export type SaleUpdate = {
    __typename?: 'SaleUpdate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    discountErrors: Array<DiscountError>;
    errors: Array<DiscountError>;
    sale?: Maybe<Sale>;
};

export type SelectedAttribute = {
    __typename?: 'SelectedAttribute';
    attribute: Attribute;
    values: Array<Maybe<AttributeValue>>;
};

export type SeoInput = {
    title?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
};

export type SetPassword = {
    __typename?: 'SetPassword';
    token?: Maybe<Scalars['String']>;
    refreshToken?: Maybe<Scalars['String']>;
    csrfToken?: Maybe<Scalars['String']>;
    user?: Maybe<User>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type ShippingError = {
    __typename?: 'ShippingError';
    field?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    code: ShippingErrorCode;
    warehouses?: Maybe<Array<Scalars['ID']>>;
    channels?: Maybe<Array<Scalars['ID']>>;
};

export enum ShippingErrorCode {
    AlreadyExists = 'ALREADY_EXISTS',
    GraphqlError = 'GRAPHQL_ERROR',
    Invalid = 'INVALID',
    MaxLessThanMin = 'MAX_LESS_THAN_MIN',
    NotFound = 'NOT_FOUND',
    Required = 'REQUIRED',
    Unique = 'UNIQUE',
    DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM'
}

export type ShippingMethod = Node & ObjectWithMetadata & {
    __typename?: 'ShippingMethod';
    id: Scalars['ID'];
    privateMetadata: Array<Maybe<MetadataItem>>;
    metadata: Array<Maybe<MetadataItem>>;
    /** @deprecated This field will be removed in Saleor 4.0. */
    type?: Maybe<ShippingMethodTypeEnum>;
    name: Scalars['String'];
    description?: Maybe<Scalars['JSONString']>;
    maximumDeliveryDays?: Maybe<Scalars['Int']>;
    minimumDeliveryDays?: Maybe<Scalars['Int']>;
    /** @deprecated This field will be removed in Saleor 4.0. */
    maximumOrderWeight?: Maybe<Weight>;
    /** @deprecated This field will be removed in Saleor 4.0. */
    minimumOrderWeight?: Maybe<Weight>;
    translation?: Maybe<ShippingMethodTranslation>;
    price: Money;
    maximumOrderPrice?: Maybe<Money>;
    minimumOrderPrice?: Maybe<Money>;
    active: Scalars['Boolean'];
    message?: Maybe<Scalars['String']>;
};


export type ShippingMethodTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type ShippingMethodChannelListing = Node & {
    __typename?: 'ShippingMethodChannelListing';
    id: Scalars['ID'];
    channel: Channel;
    maximumOrderPrice?: Maybe<Money>;
    minimumOrderPrice?: Maybe<Money>;
    price?: Maybe<Money>;
};

export type ShippingMethodChannelListingAddInput = {
    channelId: Scalars['ID'];
    price?: InputMaybe<Scalars['PositiveDecimal']>;
    minimumOrderPrice?: InputMaybe<Scalars['PositiveDecimal']>;
    maximumOrderPrice?: InputMaybe<Scalars['PositiveDecimal']>;
};

export type ShippingMethodChannelListingInput = {
    addChannels?: InputMaybe<Array<ShippingMethodChannelListingAddInput>>;
    removeChannels?: InputMaybe<Array<Scalars['ID']>>;
};

export type ShippingMethodChannelListingUpdate = {
    __typename?: 'ShippingMethodChannelListingUpdate';
    shippingMethod?: Maybe<ShippingMethodType>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    shippingErrors: Array<ShippingError>;
    errors: Array<ShippingError>;
};

export type ShippingMethodPostalCodeRule = Node & {
    __typename?: 'ShippingMethodPostalCodeRule';
    id: Scalars['ID'];
    start?: Maybe<Scalars['String']>;
    end?: Maybe<Scalars['String']>;
    inclusionType?: Maybe<PostalCodeRuleInclusionTypeEnum>;
};

export type ShippingMethodTranslatableContent = Node & {
    __typename?: 'ShippingMethodTranslatableContent';
    id: Scalars['ID'];
    name: Scalars['String'];
    description?: Maybe<Scalars['JSONString']>;
    translation?: Maybe<ShippingMethodTranslation>;
    /** @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries. */
    shippingMethod?: Maybe<ShippingMethodType>;
};


export type ShippingMethodTranslatableContentTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type ShippingMethodTranslation = Node & {
    __typename?: 'ShippingMethodTranslation';
    id: Scalars['ID'];
    language: LanguageDisplay;
    name?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['JSONString']>;
};

export type ShippingMethodType = Node & ObjectWithMetadata & {
    __typename?: 'ShippingMethodType';
    id: Scalars['ID'];
    privateMetadata: Array<Maybe<MetadataItem>>;
    metadata: Array<Maybe<MetadataItem>>;
    name: Scalars['String'];
    description?: Maybe<Scalars['JSONString']>;
    type?: Maybe<ShippingMethodTypeEnum>;
    translation?: Maybe<ShippingMethodTranslation>;
    channelListings?: Maybe<Array<ShippingMethodChannelListing>>;
    maximumOrderPrice?: Maybe<Money>;
    minimumOrderPrice?: Maybe<Money>;
    postalCodeRules?: Maybe<Array<Maybe<ShippingMethodPostalCodeRule>>>;
    excludedProducts?: Maybe<ProductCountableConnection>;
    minimumOrderWeight?: Maybe<Weight>;
    maximumOrderWeight?: Maybe<Weight>;
    maximumDeliveryDays?: Maybe<Scalars['Int']>;
    minimumDeliveryDays?: Maybe<Scalars['Int']>;
};


export type ShippingMethodTypeTranslationArgs = {
    languageCode: LanguageCodeEnum;
};


export type ShippingMethodTypeExcludedProductsArgs = {
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};

export enum ShippingMethodTypeEnum {
    Price = 'PRICE',
    Weight = 'WEIGHT'
}

export type ShippingPostalCodeRulesCreateInputRange = {
    start: Scalars['String'];
    end?: InputMaybe<Scalars['String']>;
};

export type ShippingPriceBulkDelete = {
    __typename?: 'ShippingPriceBulkDelete';
    count: Scalars['Int'];
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    shippingErrors: Array<ShippingError>;
    errors: Array<ShippingError>;
};

export type ShippingPriceCreate = {
    __typename?: 'ShippingPriceCreate';
    shippingZone?: Maybe<ShippingZone>;
    shippingMethod?: Maybe<ShippingMethodType>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    shippingErrors: Array<ShippingError>;
    errors: Array<ShippingError>;
};

export type ShippingPriceDelete = {
    __typename?: 'ShippingPriceDelete';
    shippingMethod?: Maybe<ShippingMethodType>;
    shippingZone?: Maybe<ShippingZone>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    shippingErrors: Array<ShippingError>;
    errors: Array<ShippingError>;
};

export type ShippingPriceExcludeProducts = {
    __typename?: 'ShippingPriceExcludeProducts';
    shippingMethod?: Maybe<ShippingMethodType>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    shippingErrors: Array<ShippingError>;
    errors: Array<ShippingError>;
};

export type ShippingPriceExcludeProductsInput = {
    products: Array<InputMaybe<Scalars['ID']>>;
};

export type ShippingPriceInput = {
    name?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['JSONString']>;
    minimumOrderWeight?: InputMaybe<Scalars['WeightScalar']>;
    maximumOrderWeight?: InputMaybe<Scalars['WeightScalar']>;
    maximumDeliveryDays?: InputMaybe<Scalars['Int']>;
    minimumDeliveryDays?: InputMaybe<Scalars['Int']>;
    type?: InputMaybe<ShippingMethodTypeEnum>;
    shippingZone?: InputMaybe<Scalars['ID']>;
    addPostalCodeRules?: InputMaybe<Array<ShippingPostalCodeRulesCreateInputRange>>;
    deletePostalCodeRules?: InputMaybe<Array<Scalars['ID']>>;
    inclusionType?: InputMaybe<PostalCodeRuleInclusionTypeEnum>;
};

export type ShippingPriceRemoveProductFromExclude = {
    __typename?: 'ShippingPriceRemoveProductFromExclude';
    shippingMethod?: Maybe<ShippingMethodType>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    shippingErrors: Array<ShippingError>;
    errors: Array<ShippingError>;
};

export type ShippingPriceTranslate = {
    __typename?: 'ShippingPriceTranslate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    translationErrors: Array<TranslationError>;
    errors: Array<TranslationError>;
    shippingMethod?: Maybe<ShippingMethodType>;
};

export type ShippingPriceTranslationInput = {
    name?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['JSONString']>;
};

export type ShippingPriceUpdate = {
    __typename?: 'ShippingPriceUpdate';
    shippingZone?: Maybe<ShippingZone>;
    shippingMethod?: Maybe<ShippingMethodType>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    shippingErrors: Array<ShippingError>;
    errors: Array<ShippingError>;
};

export type ShippingZone = Node & ObjectWithMetadata & {
    __typename?: 'ShippingZone';
    id: Scalars['ID'];
    privateMetadata: Array<Maybe<MetadataItem>>;
    metadata: Array<Maybe<MetadataItem>>;
    name: Scalars['String'];
    default: Scalars['Boolean'];
    priceRange?: Maybe<MoneyRange>;
    countries?: Maybe<Array<Maybe<CountryDisplay>>>;
    shippingMethods?: Maybe<Array<Maybe<ShippingMethodType>>>;
    warehouses: Array<Warehouse>;
    channels: Array<Channel>;
    description?: Maybe<Scalars['String']>;
};

export type ShippingZoneBulkDelete = {
    __typename?: 'ShippingZoneBulkDelete';
    count: Scalars['Int'];
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    shippingErrors: Array<ShippingError>;
    errors: Array<ShippingError>;
};

export type ShippingZoneCountableConnection = {
    __typename?: 'ShippingZoneCountableConnection';
    pageInfo: PageInfo;
    edges: Array<ShippingZoneCountableEdge>;
    totalCount?: Maybe<Scalars['Int']>;
};

export type ShippingZoneCountableEdge = {
    __typename?: 'ShippingZoneCountableEdge';
    node: ShippingZone;
    cursor: Scalars['String'];
};

export type ShippingZoneCreate = {
    __typename?: 'ShippingZoneCreate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    shippingErrors: Array<ShippingError>;
    errors: Array<ShippingError>;
    shippingZone?: Maybe<ShippingZone>;
};

export type ShippingZoneCreateInput = {
    name?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    countries?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    default?: InputMaybe<Scalars['Boolean']>;
    addWarehouses?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    addChannels?: InputMaybe<Array<Scalars['ID']>>;
};

export type ShippingZoneDelete = {
    __typename?: 'ShippingZoneDelete';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    shippingErrors: Array<ShippingError>;
    errors: Array<ShippingError>;
    shippingZone?: Maybe<ShippingZone>;
};

export type ShippingZoneFilterInput = {
    search?: InputMaybe<Scalars['String']>;
    channels?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ShippingZoneUpdate = {
    __typename?: 'ShippingZoneUpdate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    shippingErrors: Array<ShippingError>;
    errors: Array<ShippingError>;
    shippingZone?: Maybe<ShippingZone>;
};

export type ShippingZoneUpdateInput = {
    name?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    countries?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    default?: InputMaybe<Scalars['Boolean']>;
    addWarehouses?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    addChannels?: InputMaybe<Array<Scalars['ID']>>;
    removeWarehouses?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    removeChannels?: InputMaybe<Array<Scalars['ID']>>;
};

export type Shop = {
    __typename?: 'Shop';
    availablePaymentGateways: Array<PaymentGateway>;
    availableExternalAuthentications: Array<ExternalAuthentication>;
    availableShippingMethods?: Maybe<Array<Maybe<ShippingMethod>>>;
    channelCurrencies: Array<Scalars['String']>;
    countries: Array<CountryDisplay>;
    defaultCountry?: Maybe<CountryDisplay>;
    defaultMailSenderName?: Maybe<Scalars['String']>;
    defaultMailSenderAddress?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    domain: Domain;
    languages: Array<Maybe<LanguageDisplay>>;
    name: Scalars['String'];
    permissions: Array<Maybe<Permission>>;
    phonePrefixes: Array<Maybe<Scalars['String']>>;
    headerText?: Maybe<Scalars['String']>;
    includeTaxesInPrices: Scalars['Boolean'];
    fulfillmentAutoApprove: Scalars['Boolean'];
    fulfillmentAllowUnpaid: Scalars['Boolean'];
    displayGrossPrices: Scalars['Boolean'];
    chargeTaxesOnShipping: Scalars['Boolean'];
    trackInventoryByDefault?: Maybe<Scalars['Boolean']>;
    defaultWeightUnit?: Maybe<WeightUnitsEnum>;
    translation?: Maybe<ShopTranslation>;
    automaticFulfillmentDigitalProducts?: Maybe<Scalars['Boolean']>;
    reserveStockDurationAnonymousUser?: Maybe<Scalars['Int']>;
    reserveStockDurationAuthenticatedUser?: Maybe<Scalars['Int']>;
    limitQuantityPerCheckout?: Maybe<Scalars['Int']>;
    defaultDigitalMaxDownloads?: Maybe<Scalars['Int']>;
    defaultDigitalUrlValidDays?: Maybe<Scalars['Int']>;
    companyAddress?: Maybe<Address>;
    customerSetPasswordUrl?: Maybe<Scalars['String']>;
    staffNotificationRecipients?: Maybe<Array<Maybe<StaffNotificationRecipient>>>;
    limits: LimitInfo;
    version: Scalars['String'];
};


export type ShopAvailablePaymentGatewaysArgs = {
    currency?: InputMaybe<Scalars['String']>;
    channel?: InputMaybe<Scalars['String']>;
};


export type ShopAvailableShippingMethodsArgs = {
    channel: Scalars['String'];
    address?: InputMaybe<AddressInput>;
};


export type ShopCountriesArgs = {
    languageCode?: InputMaybe<LanguageCodeEnum>;
    filter?: InputMaybe<CountryFilterInput>;
};


export type ShopTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type ShopAddressUpdate = {
    __typename?: 'ShopAddressUpdate';
    shop?: Maybe<Shop>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    shopErrors: Array<ShopError>;
    errors: Array<ShopError>;
};

export type ShopDomainUpdate = {
    __typename?: 'ShopDomainUpdate';
    shop?: Maybe<Shop>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    shopErrors: Array<ShopError>;
    errors: Array<ShopError>;
};

export type ShopError = {
    __typename?: 'ShopError';
    field?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    code: ShopErrorCode;
};

export enum ShopErrorCode {
    AlreadyExists = 'ALREADY_EXISTS',
    CannotFetchTaxRates = 'CANNOT_FETCH_TAX_RATES',
    GraphqlError = 'GRAPHQL_ERROR',
    Invalid = 'INVALID',
    NotFound = 'NOT_FOUND',
    Required = 'REQUIRED',
    Unique = 'UNIQUE'
}

export type ShopFetchTaxRates = {
    __typename?: 'ShopFetchTaxRates';
    shop?: Maybe<Shop>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    shopErrors: Array<ShopError>;
    errors: Array<ShopError>;
};

export type ShopSettingsInput = {
    headerText?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    includeTaxesInPrices?: InputMaybe<Scalars['Boolean']>;
    displayGrossPrices?: InputMaybe<Scalars['Boolean']>;
    chargeTaxesOnShipping?: InputMaybe<Scalars['Boolean']>;
    trackInventoryByDefault?: InputMaybe<Scalars['Boolean']>;
    defaultWeightUnit?: InputMaybe<WeightUnitsEnum>;
    automaticFulfillmentDigitalProducts?: InputMaybe<Scalars['Boolean']>;
    fulfillmentAutoApprove?: InputMaybe<Scalars['Boolean']>;
    fulfillmentAllowUnpaid?: InputMaybe<Scalars['Boolean']>;
    defaultDigitalMaxDownloads?: InputMaybe<Scalars['Int']>;
    defaultDigitalUrlValidDays?: InputMaybe<Scalars['Int']>;
    defaultMailSenderName?: InputMaybe<Scalars['String']>;
    defaultMailSenderAddress?: InputMaybe<Scalars['String']>;
    customerSetPasswordUrl?: InputMaybe<Scalars['String']>;
    reserveStockDurationAnonymousUser?: InputMaybe<Scalars['Int']>;
    reserveStockDurationAuthenticatedUser?: InputMaybe<Scalars['Int']>;
    limitQuantityPerCheckout?: InputMaybe<Scalars['Int']>;
};

export type ShopSettingsTranslate = {
    __typename?: 'ShopSettingsTranslate';
    shop?: Maybe<Shop>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    translationErrors: Array<TranslationError>;
    errors: Array<TranslationError>;
};

export type ShopSettingsTranslationInput = {
    headerText?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
};

export type ShopSettingsUpdate = {
    __typename?: 'ShopSettingsUpdate';
    shop?: Maybe<Shop>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    shopErrors: Array<ShopError>;
    errors: Array<ShopError>;
};

export type ShopTranslation = Node & {
    __typename?: 'ShopTranslation';
    id: Scalars['ID'];
    language: LanguageDisplay;
    headerText: Scalars['String'];
    description: Scalars['String'];
};

export type SiteDomainInput = {
    domain?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
};

export type StaffBulkDelete = {
    __typename?: 'StaffBulkDelete';
    count: Scalars['Int'];
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    staffErrors: Array<StaffError>;
    errors: Array<StaffError>;
};

export type StaffCreate = {
    __typename?: 'StaffCreate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    staffErrors: Array<StaffError>;
    errors: Array<StaffError>;
    user?: Maybe<User>;
};

export type StaffCreateInput = {
    firstName?: InputMaybe<Scalars['String']>;
    lastName?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    isActive?: InputMaybe<Scalars['Boolean']>;
    note?: InputMaybe<Scalars['String']>;
    addGroups?: InputMaybe<Array<Scalars['ID']>>;
    redirectUrl?: InputMaybe<Scalars['String']>;
};

export type StaffDelete = {
    __typename?: 'StaffDelete';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    staffErrors: Array<StaffError>;
    errors: Array<StaffError>;
    user?: Maybe<User>;
};

export type StaffError = {
    __typename?: 'StaffError';
    field?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    code: AccountErrorCode;
    addressType?: Maybe<AddressTypeEnum>;
    permissions?: Maybe<Array<PermissionEnum>>;
    groups?: Maybe<Array<Scalars['ID']>>;
    users?: Maybe<Array<Scalars['ID']>>;
};

export enum StaffMemberStatus {
    Active = 'ACTIVE',
    Deactivated = 'DEACTIVATED'
}

export type StaffNotificationRecipient = Node & {
    __typename?: 'StaffNotificationRecipient';
    id: Scalars['ID'];
    user?: Maybe<User>;
    email?: Maybe<Scalars['String']>;
    active?: Maybe<Scalars['Boolean']>;
};

export type StaffNotificationRecipientCreate = {
    __typename?: 'StaffNotificationRecipientCreate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    shopErrors: Array<ShopError>;
    errors: Array<ShopError>;
    staffNotificationRecipient?: Maybe<StaffNotificationRecipient>;
};

export type StaffNotificationRecipientDelete = {
    __typename?: 'StaffNotificationRecipientDelete';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    shopErrors: Array<ShopError>;
    errors: Array<ShopError>;
    staffNotificationRecipient?: Maybe<StaffNotificationRecipient>;
};

export type StaffNotificationRecipientInput = {
    user?: InputMaybe<Scalars['ID']>;
    email?: InputMaybe<Scalars['String']>;
    active?: InputMaybe<Scalars['Boolean']>;
};

export type StaffNotificationRecipientUpdate = {
    __typename?: 'StaffNotificationRecipientUpdate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    shopErrors: Array<ShopError>;
    errors: Array<ShopError>;
    staffNotificationRecipient?: Maybe<StaffNotificationRecipient>;
};

export type StaffUpdate = {
    __typename?: 'StaffUpdate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    staffErrors: Array<StaffError>;
    errors: Array<StaffError>;
    user?: Maybe<User>;
};

export type StaffUpdateInput = {
    firstName?: InputMaybe<Scalars['String']>;
    lastName?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    isActive?: InputMaybe<Scalars['Boolean']>;
    note?: InputMaybe<Scalars['String']>;
    addGroups?: InputMaybe<Array<Scalars['ID']>>;
    removeGroups?: InputMaybe<Array<Scalars['ID']>>;
};

export type StaffUserInput = {
    status?: InputMaybe<StaffMemberStatus>;
    search?: InputMaybe<Scalars['String']>;
    ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type Stock = Node & {
    __typename?: 'Stock';
    id: Scalars['ID'];
    warehouse: Warehouse;
    productVariant: ProductVariant;
    quantity: Scalars['Int'];
    quantityAllocated: Scalars['Int'];
    quantityReserved: Scalars['Int'];
};

export enum StockAvailability {
    InStock = 'IN_STOCK',
    OutOfStock = 'OUT_OF_STOCK'
}

export type StockCountableConnection = {
    __typename?: 'StockCountableConnection';
    pageInfo: PageInfo;
    edges: Array<StockCountableEdge>;
    totalCount?: Maybe<Scalars['Int']>;
};

export type StockCountableEdge = {
    __typename?: 'StockCountableEdge';
    node: Stock;
    cursor: Scalars['String'];
};

export type StockError = {
    __typename?: 'StockError';
    field?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    code: StockErrorCode;
};

export enum StockErrorCode {
    AlreadyExists = 'ALREADY_EXISTS',
    GraphqlError = 'GRAPHQL_ERROR',
    Invalid = 'INVALID',
    NotFound = 'NOT_FOUND',
    Required = 'REQUIRED',
    Unique = 'UNIQUE'
}

export type StockFilterInput = {
    quantity?: InputMaybe<Scalars['Float']>;
    search?: InputMaybe<Scalars['String']>;
};

export type StockInput = {
    warehouse: Scalars['ID'];
    quantity: Scalars['Int'];
};

export enum StorePaymentMethodEnum {
    OnSession = 'ON_SESSION',
    OffSession = 'OFF_SESSION',
    None = 'NONE'
}

export type TaxedMoney = {
    __typename?: 'TaxedMoney';
    currency: Scalars['String'];
    gross: Money;
    net: Money;
    tax: Money;
};

export type TaxedMoneyRange = {
    __typename?: 'TaxedMoneyRange';
    start?: Maybe<TaxedMoney>;
    stop?: Maybe<TaxedMoney>;
};

export type TaxType = {
    __typename?: 'TaxType';
    description?: Maybe<Scalars['String']>;
    taxCode?: Maybe<Scalars['String']>;
};

export type TimePeriod = {
    __typename?: 'TimePeriod';
    amount: Scalars['Int'];
    type: TimePeriodTypeEnum;
};

export type TimePeriodInputType = {
    amount: Scalars['Int'];
    type: TimePeriodTypeEnum;
};

export enum TimePeriodTypeEnum {
    Day = 'DAY',
    Week = 'WEEK',
    Month = 'MONTH',
    Year = 'YEAR'
}

export type Transaction = Node & {
    __typename?: 'Transaction';
    id: Scalars['ID'];
    created: Scalars['DateTime'];
    payment: Payment;
    token: Scalars['String'];
    kind: TransactionKind;
    isSuccess: Scalars['Boolean'];
    error?: Maybe<Scalars['String']>;
    gatewayResponse: Scalars['JSONString'];
    amount?: Maybe<Money>;
};

export enum TransactionKind {
    External = 'EXTERNAL',
    Auth = 'AUTH',
    Pending = 'PENDING',
    ActionToConfirm = 'ACTION_TO_CONFIRM',
    Refund = 'REFUND',
    RefundOngoing = 'REFUND_ONGOING',
    Capture = 'CAPTURE',
    Void = 'VOID',
    Confirm = 'CONFIRM',
    Cancel = 'CANCEL'
}

export type TranslatableItem = ProductTranslatableContent | CollectionTranslatableContent | CategoryTranslatableContent | AttributeTranslatableContent | AttributeValueTranslatableContent | ProductVariantTranslatableContent | PageTranslatableContent | ShippingMethodTranslatableContent | SaleTranslatableContent | VoucherTranslatableContent | MenuItemTranslatableContent;

export type TranslatableItemConnection = {
    __typename?: 'TranslatableItemConnection';
    pageInfo: PageInfo;
    edges: Array<TranslatableItemEdge>;
    totalCount?: Maybe<Scalars['Int']>;
};

export type TranslatableItemEdge = {
    __typename?: 'TranslatableItemEdge';
    node: TranslatableItem;
    cursor: Scalars['String'];
};

export enum TranslatableKinds {
    Attribute = 'ATTRIBUTE',
    AttributeValue = 'ATTRIBUTE_VALUE',
    Category = 'CATEGORY',
    Collection = 'COLLECTION',
    MenuItem = 'MENU_ITEM',
    Page = 'PAGE',
    Product = 'PRODUCT',
    Sale = 'SALE',
    ShippingMethod = 'SHIPPING_METHOD',
    Variant = 'VARIANT',
    Voucher = 'VOUCHER'
}

export type TranslationError = {
    __typename?: 'TranslationError';
    field?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    code: TranslationErrorCode;
};

export enum TranslationErrorCode {
    GraphqlError = 'GRAPHQL_ERROR',
    Invalid = 'INVALID',
    NotFound = 'NOT_FOUND',
    Required = 'REQUIRED'
}

export type TranslationInput = {
    seoTitle?: InputMaybe<Scalars['String']>;
    seoDescription?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['JSONString']>;
};

export type UpdateInvoiceInput = {
    number?: InputMaybe<Scalars['String']>;
    url?: InputMaybe<Scalars['String']>;
};

export type UpdateMetadata = {
    __typename?: 'UpdateMetadata';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    metadataErrors: Array<MetadataError>;
    errors: Array<MetadataError>;
    item?: Maybe<ObjectWithMetadata>;
};

export type UpdatePrivateMetadata = {
    __typename?: 'UpdatePrivateMetadata';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    metadataErrors: Array<MetadataError>;
    errors: Array<MetadataError>;
    item?: Maybe<ObjectWithMetadata>;
};

export type UploadError = {
    __typename?: 'UploadError';
    field?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    code: UploadErrorCode;
};

export enum UploadErrorCode {
    GraphqlError = 'GRAPHQL_ERROR'
}

export type User = Node & ObjectWithMetadata & {
    __typename?: 'User';
    id: Scalars['ID'];
    privateMetadata: Array<Maybe<MetadataItem>>;
    metadata: Array<Maybe<MetadataItem>>;
    email: Scalars['String'];
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    isStaff: Scalars['Boolean'];
    isActive: Scalars['Boolean'];
    addresses?: Maybe<Array<Maybe<Address>>>;
    /** @deprecated This field will be removed in Saleor 4.0. Use the `checkoutTokens` field to fetch the user checkouts. */
    checkout?: Maybe<Checkout>;
    checkoutTokens?: Maybe<Array<Scalars['UUID']>>;
    giftCards?: Maybe<GiftCardCountableConnection>;
    note?: Maybe<Scalars['String']>;
    orders?: Maybe<OrderCountableConnection>;
    userPermissions?: Maybe<Array<Maybe<UserPermission>>>;
    permissionGroups?: Maybe<Array<Maybe<Group>>>;
    editableGroups?: Maybe<Array<Maybe<Group>>>;
    avatar?: Maybe<Image>;
    events?: Maybe<Array<Maybe<CustomerEvent>>>;
    storedPaymentSources?: Maybe<Array<Maybe<PaymentSource>>>;
    languageCode: LanguageCodeEnum;
    defaultShippingAddress?: Maybe<Address>;
    defaultBillingAddress?: Maybe<Address>;
    lastLogin?: Maybe<Scalars['DateTime']>;
    dateJoined: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
};


export type UserCheckoutTokensArgs = {
    channel?: InputMaybe<Scalars['String']>;
};


export type UserGiftCardsArgs = {
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type UserOrdersArgs = {
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type UserAvatarArgs = {
    size?: InputMaybe<Scalars['Int']>;
};


export type UserStoredPaymentSourcesArgs = {
    channel?: InputMaybe<Scalars['String']>;
};

export type UserAvatarDelete = {
    __typename?: 'UserAvatarDelete';
    user?: Maybe<User>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type UserAvatarUpdate = {
    __typename?: 'UserAvatarUpdate';
    user?: Maybe<User>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type UserBulkSetActive = {
    __typename?: 'UserBulkSetActive';
    count: Scalars['Int'];
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export type UserCountableConnection = {
    __typename?: 'UserCountableConnection';
    pageInfo: PageInfo;
    edges: Array<UserCountableEdge>;
    totalCount?: Maybe<Scalars['Int']>;
};

export type UserCountableEdge = {
    __typename?: 'UserCountableEdge';
    node: User;
    cursor: Scalars['String'];
};

export type UserCreateInput = {
    defaultBillingAddress?: InputMaybe<AddressInput>;
    defaultShippingAddress?: InputMaybe<AddressInput>;
    firstName?: InputMaybe<Scalars['String']>;
    lastName?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    isActive?: InputMaybe<Scalars['Boolean']>;
    note?: InputMaybe<Scalars['String']>;
    languageCode?: InputMaybe<LanguageCodeEnum>;
    redirectUrl?: InputMaybe<Scalars['String']>;
    channel?: InputMaybe<Scalars['String']>;
};

export type UserPermission = {
    __typename?: 'UserPermission';
    code: PermissionEnum;
    name: Scalars['String'];
    sourcePermissionGroups?: Maybe<Array<Group>>;
};


export type UserPermissionSourcePermissionGroupsArgs = {
    userId: Scalars['ID'];
};

export enum UserSortField {
    FirstName = 'FIRST_NAME',
    LastName = 'LAST_NAME',
    Email = 'EMAIL',
    OrderCount = 'ORDER_COUNT',
    CreatedAt = 'CREATED_AT',
    LastModifiedAt = 'LAST_MODIFIED_AT'
}

export type UserSortingInput = {
    direction: OrderDirection;
    field: UserSortField;
};

export enum VariantAttributeScope {
    All = 'ALL',
    VariantSelection = 'VARIANT_SELECTION',
    NotVariantSelection = 'NOT_VARIANT_SELECTION'
}

export type VariantMediaAssign = {
    __typename?: 'VariantMediaAssign';
    productVariant?: Maybe<ProductVariant>;
    media?: Maybe<ProductMedia>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type VariantMediaUnassign = {
    __typename?: 'VariantMediaUnassign';
    productVariant?: Maybe<ProductVariant>;
    media?: Maybe<ProductMedia>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    productErrors: Array<ProductError>;
    errors: Array<ProductError>;
};

export type VariantPricingInfo = {
    __typename?: 'VariantPricingInfo';
    onSale?: Maybe<Scalars['Boolean']>;
    discount?: Maybe<TaxedMoney>;
    discountLocalCurrency?: Maybe<TaxedMoney>;
    price?: Maybe<TaxedMoney>;
    priceUndiscounted?: Maybe<TaxedMoney>;
    priceLocalCurrency?: Maybe<TaxedMoney>;
};

export type Vat = {
    __typename?: 'VAT';
    countryCode: Scalars['String'];
    standardRate?: Maybe<Scalars['Float']>;
    reducedRates: Array<Maybe<ReducedRate>>;
};

export type VerifyToken = {
    __typename?: 'VerifyToken';
    user?: Maybe<User>;
    isValid: Scalars['Boolean'];
    payload?: Maybe<Scalars['GenericScalar']>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    accountErrors: Array<AccountError>;
    errors: Array<AccountError>;
};

export enum VolumeUnitsEnum {
    CubicMillimeter = 'CUBIC_MILLIMETER',
    CubicCentimeter = 'CUBIC_CENTIMETER',
    CubicDecimeter = 'CUBIC_DECIMETER',
    CubicMeter = 'CUBIC_METER',
    Liter = 'LITER',
    CubicFoot = 'CUBIC_FOOT',
    CubicInch = 'CUBIC_INCH',
    CubicYard = 'CUBIC_YARD',
    Qt = 'QT',
    Pint = 'PINT',
    FlOz = 'FL_OZ',
    AcreIn = 'ACRE_IN',
    AcreFt = 'ACRE_FT'
}

export type Voucher = Node & ObjectWithMetadata & {
    __typename?: 'Voucher';
    id: Scalars['ID'];
    privateMetadata: Array<Maybe<MetadataItem>>;
    metadata: Array<Maybe<MetadataItem>>;
    name?: Maybe<Scalars['String']>;
    code: Scalars['String'];
    usageLimit?: Maybe<Scalars['Int']>;
    used: Scalars['Int'];
    startDate: Scalars['DateTime'];
    endDate?: Maybe<Scalars['DateTime']>;
    applyOncePerOrder: Scalars['Boolean'];
    applyOncePerCustomer: Scalars['Boolean'];
    onlyForStaff: Scalars['Boolean'];
    minCheckoutItemsQuantity?: Maybe<Scalars['Int']>;
    categories?: Maybe<CategoryCountableConnection>;
    collections?: Maybe<CollectionCountableConnection>;
    products?: Maybe<ProductCountableConnection>;
    variants?: Maybe<ProductVariantCountableConnection>;
    countries?: Maybe<Array<Maybe<CountryDisplay>>>;
    translation?: Maybe<VoucherTranslation>;
    discountValueType: DiscountValueTypeEnum;
    discountValue?: Maybe<Scalars['Float']>;
    currency?: Maybe<Scalars['String']>;
    minSpent?: Maybe<Money>;
    type: VoucherTypeEnum;
    channelListings?: Maybe<Array<VoucherChannelListing>>;
};


export type VoucherCategoriesArgs = {
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type VoucherCollectionsArgs = {
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type VoucherProductsArgs = {
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type VoucherVariantsArgs = {
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};


export type VoucherTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type VoucherAddCatalogues = {
    __typename?: 'VoucherAddCatalogues';
    voucher?: Maybe<Voucher>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    discountErrors: Array<DiscountError>;
    errors: Array<DiscountError>;
};

export type VoucherBulkDelete = {
    __typename?: 'VoucherBulkDelete';
    count: Scalars['Int'];
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    discountErrors: Array<DiscountError>;
    errors: Array<DiscountError>;
};

export type VoucherChannelListing = Node & {
    __typename?: 'VoucherChannelListing';
    id: Scalars['ID'];
    channel: Channel;
    discountValue: Scalars['Float'];
    currency: Scalars['String'];
    minSpent?: Maybe<Money>;
};

export type VoucherChannelListingAddInput = {
    channelId: Scalars['ID'];
    discountValue?: InputMaybe<Scalars['PositiveDecimal']>;
    minAmountSpent?: InputMaybe<Scalars['PositiveDecimal']>;
};

export type VoucherChannelListingInput = {
    addChannels?: InputMaybe<Array<VoucherChannelListingAddInput>>;
    removeChannels?: InputMaybe<Array<Scalars['ID']>>;
};

export type VoucherChannelListingUpdate = {
    __typename?: 'VoucherChannelListingUpdate';
    voucher?: Maybe<Voucher>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    discountErrors: Array<DiscountError>;
    errors: Array<DiscountError>;
};

export type VoucherCountableConnection = {
    __typename?: 'VoucherCountableConnection';
    pageInfo: PageInfo;
    edges: Array<VoucherCountableEdge>;
    totalCount?: Maybe<Scalars['Int']>;
};

export type VoucherCountableEdge = {
    __typename?: 'VoucherCountableEdge';
    node: Voucher;
    cursor: Scalars['String'];
};

export type VoucherCreate = {
    __typename?: 'VoucherCreate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    discountErrors: Array<DiscountError>;
    errors: Array<DiscountError>;
    voucher?: Maybe<Voucher>;
};

export type VoucherDelete = {
    __typename?: 'VoucherDelete';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    discountErrors: Array<DiscountError>;
    errors: Array<DiscountError>;
    voucher?: Maybe<Voucher>;
};

export enum VoucherDiscountType {
    Fixed = 'FIXED',
    Percentage = 'PERCENTAGE',
    Shipping = 'SHIPPING'
}

export type VoucherFilterInput = {
    status?: InputMaybe<Array<InputMaybe<DiscountStatusEnum>>>;
    timesUsed?: InputMaybe<IntRangeInput>;
    discountType?: InputMaybe<Array<InputMaybe<VoucherDiscountType>>>;
    started?: InputMaybe<DateTimeRangeInput>;
    search?: InputMaybe<Scalars['String']>;
    metadata?: InputMaybe<Array<InputMaybe<MetadataFilter>>>;
};

export type VoucherInput = {
    type?: InputMaybe<VoucherTypeEnum>;
    name?: InputMaybe<Scalars['String']>;
    code?: InputMaybe<Scalars['String']>;
    startDate?: InputMaybe<Scalars['DateTime']>;
    endDate?: InputMaybe<Scalars['DateTime']>;
    discountValueType?: InputMaybe<DiscountValueTypeEnum>;
    products?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    variants?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    collections?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    minCheckoutItemsQuantity?: InputMaybe<Scalars['Int']>;
    countries?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    applyOncePerOrder?: InputMaybe<Scalars['Boolean']>;
    applyOncePerCustomer?: InputMaybe<Scalars['Boolean']>;
    onlyForStaff?: InputMaybe<Scalars['Boolean']>;
    usageLimit?: InputMaybe<Scalars['Int']>;
};

export type VoucherRemoveCatalogues = {
    __typename?: 'VoucherRemoveCatalogues';
    voucher?: Maybe<Voucher>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    discountErrors: Array<DiscountError>;
    errors: Array<DiscountError>;
};

export enum VoucherSortField {
    Code = 'CODE',
    StartDate = 'START_DATE',
    EndDate = 'END_DATE',
    Value = 'VALUE',
    Type = 'TYPE',
    UsageLimit = 'USAGE_LIMIT',
    MinimumSpentAmount = 'MINIMUM_SPENT_AMOUNT'
}

export type VoucherSortingInput = {
    direction: OrderDirection;
    channel?: InputMaybe<Scalars['String']>;
    field: VoucherSortField;
};

export type VoucherTranslatableContent = Node & {
    __typename?: 'VoucherTranslatableContent';
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    translation?: Maybe<VoucherTranslation>;
    /** @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries. */
    voucher?: Maybe<Voucher>;
};


export type VoucherTranslatableContentTranslationArgs = {
    languageCode: LanguageCodeEnum;
};

export type VoucherTranslate = {
    __typename?: 'VoucherTranslate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    translationErrors: Array<TranslationError>;
    errors: Array<TranslationError>;
    voucher?: Maybe<Voucher>;
};

export type VoucherTranslation = Node & {
    __typename?: 'VoucherTranslation';
    id: Scalars['ID'];
    language: LanguageDisplay;
    name?: Maybe<Scalars['String']>;
};

export enum VoucherTypeEnum {
    Shipping = 'SHIPPING',
    EntireOrder = 'ENTIRE_ORDER',
    SpecificProduct = 'SPECIFIC_PRODUCT'
}

export type VoucherUpdate = {
    __typename?: 'VoucherUpdate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    discountErrors: Array<DiscountError>;
    errors: Array<DiscountError>;
    voucher?: Maybe<Voucher>;
};

export type Warehouse = Node & ObjectWithMetadata & {
    __typename?: 'Warehouse';
    id: Scalars['ID'];
    privateMetadata: Array<Maybe<MetadataItem>>;
    metadata: Array<Maybe<MetadataItem>>;
    name: Scalars['String'];
    slug: Scalars['String'];
    email: Scalars['String'];
    isPrivate: Scalars['Boolean'];
    address: Address;
    /** @deprecated This field will be removed in Saleor 4.0. Use `Address.companyName` instead. */
    companyName: Scalars['String'];
    clickAndCollectOption: WarehouseClickAndCollectOptionEnum;
    shippingZones: ShippingZoneCountableConnection;
};


export type WarehouseShippingZonesArgs = {
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};

export enum WarehouseClickAndCollectOptionEnum {
    Disabled = 'DISABLED',
    Local = 'LOCAL',
    All = 'ALL'
}

export type WarehouseCountableConnection = {
    __typename?: 'WarehouseCountableConnection';
    pageInfo: PageInfo;
    edges: Array<WarehouseCountableEdge>;
    totalCount?: Maybe<Scalars['Int']>;
};

export type WarehouseCountableEdge = {
    __typename?: 'WarehouseCountableEdge';
    node: Warehouse;
    cursor: Scalars['String'];
};

export type WarehouseCreate = {
    __typename?: 'WarehouseCreate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    warehouseErrors: Array<WarehouseError>;
    errors: Array<WarehouseError>;
    warehouse?: Maybe<Warehouse>;
};

export type WarehouseCreateInput = {
    slug?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    name: Scalars['String'];
    address: AddressInput;
    shippingZones?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type WarehouseDelete = {
    __typename?: 'WarehouseDelete';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    warehouseErrors: Array<WarehouseError>;
    errors: Array<WarehouseError>;
    warehouse?: Maybe<Warehouse>;
};

export type WarehouseError = {
    __typename?: 'WarehouseError';
    field?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    code: WarehouseErrorCode;
};

export enum WarehouseErrorCode {
    AlreadyExists = 'ALREADY_EXISTS',
    GraphqlError = 'GRAPHQL_ERROR',
    Invalid = 'INVALID',
    NotFound = 'NOT_FOUND',
    Required = 'REQUIRED',
    Unique = 'UNIQUE'
}

export type WarehouseFilterInput = {
    clickAndCollectOption?: InputMaybe<WarehouseClickAndCollectOptionEnum>;
    search?: InputMaybe<Scalars['String']>;
    ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    isPrivate?: InputMaybe<Scalars['Boolean']>;
};

export type WarehouseShippingZoneAssign = {
    __typename?: 'WarehouseShippingZoneAssign';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    warehouseErrors: Array<WarehouseError>;
    errors: Array<WarehouseError>;
    warehouse?: Maybe<Warehouse>;
};

export type WarehouseShippingZoneUnassign = {
    __typename?: 'WarehouseShippingZoneUnassign';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    warehouseErrors: Array<WarehouseError>;
    errors: Array<WarehouseError>;
    warehouse?: Maybe<Warehouse>;
};

export enum WarehouseSortField {
    Name = 'NAME'
}

export type WarehouseSortingInput = {
    direction: OrderDirection;
    field: WarehouseSortField;
};

export type WarehouseUpdate = {
    __typename?: 'WarehouseUpdate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    warehouseErrors: Array<WarehouseError>;
    errors: Array<WarehouseError>;
    warehouse?: Maybe<Warehouse>;
};

export type WarehouseUpdateInput = {
    slug?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    address?: InputMaybe<AddressInput>;
    clickAndCollectOption?: InputMaybe<WarehouseClickAndCollectOptionEnum>;
    isPrivate?: InputMaybe<Scalars['Boolean']>;
};

export type Webhook = Node & {
    __typename?: 'Webhook';
    id: Scalars['ID'];
    name: Scalars['String'];
    /** @deprecated This field will be removed in Saleor 4.0. Use `asyncEvents` or `syncEvents` instead. */
    events: Array<WebhookEvent>;
    syncEvents: Array<WebhookEventSync>;
    asyncEvents: Array<WebhookEventAsync>;
    app: App;
    eventDeliveries?: Maybe<EventDeliveryCountableConnection>;
    targetUrl: Scalars['String'];
    isActive: Scalars['Boolean'];
    secretKey?: Maybe<Scalars['String']>;
};


export type WebhookEventDeliveriesArgs = {
    sortBy?: InputMaybe<EventDeliverySortingInput>;
    filter?: InputMaybe<EventDeliveryFilterInput>;
    before?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};

export type WebhookCreate = {
    __typename?: 'WebhookCreate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    webhookErrors: Array<WebhookError>;
    errors: Array<WebhookError>;
    webhook?: Maybe<Webhook>;
};

export type WebhookCreateInput = {
    name?: InputMaybe<Scalars['String']>;
    targetUrl?: InputMaybe<Scalars['String']>;
    events?: InputMaybe<Array<InputMaybe<WebhookEventTypeEnum>>>;
    asyncEvents?: InputMaybe<Array<WebhookEventTypeAsyncEnum>>;
    syncEvents?: InputMaybe<Array<WebhookEventTypeSyncEnum>>;
    app?: InputMaybe<Scalars['ID']>;
    isActive?: InputMaybe<Scalars['Boolean']>;
    secretKey?: InputMaybe<Scalars['String']>;
};

export type WebhookDelete = {
    __typename?: 'WebhookDelete';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    webhookErrors: Array<WebhookError>;
    errors: Array<WebhookError>;
    webhook?: Maybe<Webhook>;
};

export type WebhookError = {
    __typename?: 'WebhookError';
    field?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    code: WebhookErrorCode;
};

export enum WebhookErrorCode {
    GraphqlError = 'GRAPHQL_ERROR',
    Invalid = 'INVALID',
    NotFound = 'NOT_FOUND',
    Required = 'REQUIRED',
    Unique = 'UNIQUE'
}

export type WebhookEvent = {
    __typename?: 'WebhookEvent';
    name: Scalars['String'];
    eventType: WebhookEventTypeEnum;
};

export type WebhookEventAsync = {
    __typename?: 'WebhookEventAsync';
    name: Scalars['String'];
    eventType: WebhookEventTypeAsyncEnum;
};

export type WebhookEventSync = {
    __typename?: 'WebhookEventSync';
    name: Scalars['String'];
    eventType: WebhookEventTypeSyncEnum;
};

export enum WebhookEventTypeAsyncEnum {
    AnyEvents = 'ANY_EVENTS',
    OrderCreated = 'ORDER_CREATED',
    OrderConfirmed = 'ORDER_CONFIRMED',
    OrderFullyPaid = 'ORDER_FULLY_PAID',
    OrderUpdated = 'ORDER_UPDATED',
    OrderCancelled = 'ORDER_CANCELLED',
    OrderFulfilled = 'ORDER_FULFILLED',
    DraftOrderCreated = 'DRAFT_ORDER_CREATED',
    DraftOrderUpdated = 'DRAFT_ORDER_UPDATED',
    DraftOrderDeleted = 'DRAFT_ORDER_DELETED',
    SaleCreated = 'SALE_CREATED',
    SaleUpdated = 'SALE_UPDATED',
    SaleDeleted = 'SALE_DELETED',
    InvoiceRequested = 'INVOICE_REQUESTED',
    InvoiceDeleted = 'INVOICE_DELETED',
    InvoiceSent = 'INVOICE_SENT',
    CustomerCreated = 'CUSTOMER_CREATED',
    CustomerUpdated = 'CUSTOMER_UPDATED',
    CollectionCreated = 'COLLECTION_CREATED',
    CollectionUpdated = 'COLLECTION_UPDATED',
    CollectionDeleted = 'COLLECTION_DELETED',
    ProductCreated = 'PRODUCT_CREATED',
    ProductUpdated = 'PRODUCT_UPDATED',
    ProductDeleted = 'PRODUCT_DELETED',
    ProductVariantCreated = 'PRODUCT_VARIANT_CREATED',
    ProductVariantUpdated = 'PRODUCT_VARIANT_UPDATED',
    ProductVariantDeleted = 'PRODUCT_VARIANT_DELETED',
    ProductVariantOutOfStock = 'PRODUCT_VARIANT_OUT_OF_STOCK',
    ProductVariantBackInStock = 'PRODUCT_VARIANT_BACK_IN_STOCK',
    CheckoutCreated = 'CHECKOUT_CREATED',
    CheckoutUpdated = 'CHECKOUT_UPDATED',
    FulfillmentCreated = 'FULFILLMENT_CREATED',
    FulfillmentCanceled = 'FULFILLMENT_CANCELED',
    NotifyUser = 'NOTIFY_USER',
    PageCreated = 'PAGE_CREATED',
    PageUpdated = 'PAGE_UPDATED',
    PageDeleted = 'PAGE_DELETED',
    TranslationCreated = 'TRANSLATION_CREATED',
    TranslationUpdated = 'TRANSLATION_UPDATED'
}

export enum WebhookEventTypeEnum {
    AnyEvents = 'ANY_EVENTS',
    OrderCreated = 'ORDER_CREATED',
    OrderConfirmed = 'ORDER_CONFIRMED',
    OrderFullyPaid = 'ORDER_FULLY_PAID',
    OrderUpdated = 'ORDER_UPDATED',
    OrderCancelled = 'ORDER_CANCELLED',
    OrderFulfilled = 'ORDER_FULFILLED',
    DraftOrderCreated = 'DRAFT_ORDER_CREATED',
    DraftOrderUpdated = 'DRAFT_ORDER_UPDATED',
    DraftOrderDeleted = 'DRAFT_ORDER_DELETED',
    SaleCreated = 'SALE_CREATED',
    SaleUpdated = 'SALE_UPDATED',
    SaleDeleted = 'SALE_DELETED',
    InvoiceRequested = 'INVOICE_REQUESTED',
    InvoiceDeleted = 'INVOICE_DELETED',
    InvoiceSent = 'INVOICE_SENT',
    CustomerCreated = 'CUSTOMER_CREATED',
    CustomerUpdated = 'CUSTOMER_UPDATED',
    CollectionCreated = 'COLLECTION_CREATED',
    CollectionUpdated = 'COLLECTION_UPDATED',
    CollectionDeleted = 'COLLECTION_DELETED',
    ProductCreated = 'PRODUCT_CREATED',
    ProductUpdated = 'PRODUCT_UPDATED',
    ProductDeleted = 'PRODUCT_DELETED',
    ProductVariantCreated = 'PRODUCT_VARIANT_CREATED',
    ProductVariantUpdated = 'PRODUCT_VARIANT_UPDATED',
    ProductVariantDeleted = 'PRODUCT_VARIANT_DELETED',
    ProductVariantOutOfStock = 'PRODUCT_VARIANT_OUT_OF_STOCK',
    ProductVariantBackInStock = 'PRODUCT_VARIANT_BACK_IN_STOCK',
    CheckoutCreated = 'CHECKOUT_CREATED',
    CheckoutUpdated = 'CHECKOUT_UPDATED',
    FulfillmentCreated = 'FULFILLMENT_CREATED',
    FulfillmentCanceled = 'FULFILLMENT_CANCELED',
    NotifyUser = 'NOTIFY_USER',
    PageCreated = 'PAGE_CREATED',
    PageUpdated = 'PAGE_UPDATED',
    PageDeleted = 'PAGE_DELETED',
    TranslationCreated = 'TRANSLATION_CREATED',
    TranslationUpdated = 'TRANSLATION_UPDATED',
    PaymentAuthorize = 'PAYMENT_AUTHORIZE',
    PaymentCapture = 'PAYMENT_CAPTURE',
    PaymentConfirm = 'PAYMENT_CONFIRM',
    PaymentListGateways = 'PAYMENT_LIST_GATEWAYS',
    PaymentProcess = 'PAYMENT_PROCESS',
    PaymentRefund = 'PAYMENT_REFUND',
    PaymentVoid = 'PAYMENT_VOID',
    ShippingListMethodsForCheckout = 'SHIPPING_LIST_METHODS_FOR_CHECKOUT',
    OrderFilterShippingMethods = 'ORDER_FILTER_SHIPPING_METHODS',
    CheckoutFilterShippingMethods = 'CHECKOUT_FILTER_SHIPPING_METHODS'
}

export enum WebhookEventTypeSyncEnum {
    PaymentAuthorize = 'PAYMENT_AUTHORIZE',
    PaymentCapture = 'PAYMENT_CAPTURE',
    PaymentConfirm = 'PAYMENT_CONFIRM',
    PaymentListGateways = 'PAYMENT_LIST_GATEWAYS',
    PaymentProcess = 'PAYMENT_PROCESS',
    PaymentRefund = 'PAYMENT_REFUND',
    PaymentVoid = 'PAYMENT_VOID',
    ShippingListMethodsForCheckout = 'SHIPPING_LIST_METHODS_FOR_CHECKOUT',
    OrderFilterShippingMethods = 'ORDER_FILTER_SHIPPING_METHODS',
    CheckoutFilterShippingMethods = 'CHECKOUT_FILTER_SHIPPING_METHODS'
}

export enum WebhookSampleEventTypeEnum {
    OrderCreated = 'ORDER_CREATED',
    OrderConfirmed = 'ORDER_CONFIRMED',
    OrderFullyPaid = 'ORDER_FULLY_PAID',
    OrderUpdated = 'ORDER_UPDATED',
    OrderCancelled = 'ORDER_CANCELLED',
    OrderFulfilled = 'ORDER_FULFILLED',
    DraftOrderCreated = 'DRAFT_ORDER_CREATED',
    DraftOrderUpdated = 'DRAFT_ORDER_UPDATED',
    DraftOrderDeleted = 'DRAFT_ORDER_DELETED',
    SaleCreated = 'SALE_CREATED',
    SaleUpdated = 'SALE_UPDATED',
    SaleDeleted = 'SALE_DELETED',
    InvoiceRequested = 'INVOICE_REQUESTED',
    InvoiceDeleted = 'INVOICE_DELETED',
    InvoiceSent = 'INVOICE_SENT',
    CustomerCreated = 'CUSTOMER_CREATED',
    CustomerUpdated = 'CUSTOMER_UPDATED',
    CollectionCreated = 'COLLECTION_CREATED',
    CollectionUpdated = 'COLLECTION_UPDATED',
    CollectionDeleted = 'COLLECTION_DELETED',
    ProductCreated = 'PRODUCT_CREATED',
    ProductUpdated = 'PRODUCT_UPDATED',
    ProductDeleted = 'PRODUCT_DELETED',
    ProductVariantCreated = 'PRODUCT_VARIANT_CREATED',
    ProductVariantUpdated = 'PRODUCT_VARIANT_UPDATED',
    ProductVariantDeleted = 'PRODUCT_VARIANT_DELETED',
    ProductVariantOutOfStock = 'PRODUCT_VARIANT_OUT_OF_STOCK',
    ProductVariantBackInStock = 'PRODUCT_VARIANT_BACK_IN_STOCK',
    CheckoutCreated = 'CHECKOUT_CREATED',
    CheckoutUpdated = 'CHECKOUT_UPDATED',
    FulfillmentCreated = 'FULFILLMENT_CREATED',
    FulfillmentCanceled = 'FULFILLMENT_CANCELED',
    NotifyUser = 'NOTIFY_USER',
    PageCreated = 'PAGE_CREATED',
    PageUpdated = 'PAGE_UPDATED',
    PageDeleted = 'PAGE_DELETED',
    TranslationCreated = 'TRANSLATION_CREATED',
    TranslationUpdated = 'TRANSLATION_UPDATED'
}

export type WebhookUpdate = {
    __typename?: 'WebhookUpdate';
    /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
    webhookErrors: Array<WebhookError>;
    errors: Array<WebhookError>;
    webhook?: Maybe<Webhook>;
};

export type WebhookUpdateInput = {
    name?: InputMaybe<Scalars['String']>;
    targetUrl?: InputMaybe<Scalars['String']>;
    events?: InputMaybe<Array<InputMaybe<WebhookEventTypeEnum>>>;
    asyncEvents?: InputMaybe<Array<WebhookEventTypeAsyncEnum>>;
    syncEvents?: InputMaybe<Array<WebhookEventTypeSyncEnum>>;
    app?: InputMaybe<Scalars['ID']>;
    isActive?: InputMaybe<Scalars['Boolean']>;
    secretKey?: InputMaybe<Scalars['String']>;
};

export type Weight = {
    __typename?: 'Weight';
    unit: WeightUnitsEnum;
    value: Scalars['Float'];
};

export enum WeightUnitsEnum {
    G = 'G',
    Lb = 'LB',
    Oz = 'OZ',
    Kg = 'KG',
    Tonne = 'TONNE'
}

export type ProductPathsQueryVariables = Exact<{
    after?: InputMaybe<Scalars['String']>;
    channel: Scalars['String'];
}>;


export type ProductPathsQuery = { __typename?: 'Query', products?: { __typename?: 'ProductCountableConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null }, edges: Array<{ __typename?: 'ProductCountableEdge', node: { __typename?: 'Product', slug: string } }> } | null };

export type PageInfoFragmentFragment = { __typename?: 'PageInfo', hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null };

export const PageInfoFragmentFragmentDoc = `
    fragment PageInfoFragment on PageInfo {
  hasNextPage
  startCursor
  endCursor
}
    `;
export const ProductPathsDocument = `
    query ProductPaths($after: String, $channel: String!) {
  products(first: 100, channel: $channel, after: $after) {
    pageInfo {
      ...PageInfoFragment
    }
    edges {
      node {
        slug
      }
    }
  }
}
    ${PageInfoFragmentFragmentDoc}`;
export const useProductPathsQuery = <
    TData = ProductPathsQuery,
    TError = unknown
>(
    dataSource: { endpoint: string, fetchParams?: RequestInit },
    variables: ProductPathsQueryVariables,
    options?: UseQueryOptions<ProductPathsQuery, TError, TData>
) =>
    useQuery<ProductPathsQuery, TError, TData>(
        ['ProductPaths', variables],
        fetcher<ProductPathsQuery, ProductPathsQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, ProductPathsDocument, variables),
        options
    );