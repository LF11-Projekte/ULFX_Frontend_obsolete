/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface IUser {
	id: string;
	/** @format date-time */
	creationDate: string;
	/** @format date-time */
	updateDate: string;
	email: string;
	username: string;
	description: string;
}

/** From T, pick a set of properties whose keys are in the union K */
export interface PickIUserEmailOrUsernameOrDescription {
	email: string;
	username: string;
	description: string;
}

export type IUserProps = PickIUserEmailOrUsernameOrDescription;

export interface ISubscription {
	id: string;
	/** @format date-time */
	creationDate: string;
	/** @format date-time */
	updateDate: string;
	userId: string;
	publisherId: string;
}

/** From T, pick a set of properties whose keys are in the union K */
export interface PickISubscriptionUserIdOrPublisherId {
	userId: string;
	publisherId: string;
}

export type ISubscriptionProps = PickISubscriptionUserIdOrPublisherId;

export interface IReaction {
	id: string;
	/** @format date-time */
	creationDate: string;
	/** @format date-time */
	updateDate: string;
	userId: string;
	referenceId: string;
	referenceType: "COMMENT" | "POST";
	reactionType: "LIKE" | "DISLIKE";
}

/** From T, pick a set of properties whose keys are in the union K */
export interface PickIReactionUserIdOrReferenceIdOrReferenceTypeOrReactionType {
	userId: string;
	referenceId: string;
	referenceType: "COMMENT" | "POST";
	reactionType: "LIKE" | "DISLIKE";
}

export type IReactionProps = PickIReactionUserIdOrReferenceIdOrReferenceTypeOrReactionType;

export interface IPublisher {
	id: string;
	/** @format date-time */
	creationDate: string;
	/** @format date-time */
	updateDate: string;
	referenceId: string;
	referenceType: "USER" | "GROUP" | "CHANNEL";
}

/** From T, pick a set of properties whose keys are in the union K */
export interface PickIPublisherReferenceIdOrReferenceType {
	referenceId: string;
	referenceType: "USER" | "GROUP" | "CHANNEL";
}

export type IPublisherProps = PickIPublisherReferenceIdOrReferenceType;

export interface IPost {
	id: string;
	/** @format date-time */
	creationDate: string;
	/** @format date-time */
	updateDate: string;
	title: string;
	publisherId: string;
	creatorId: string;
	editorIds: string[];
	images: string[];
	text: string;
}

/** From T, pick a set of properties whose keys are in the union K */
export interface PickIPostTitleOrPublisherIdOrCreatorIdOrEditorIdsOrImagesOrText {
	publisherId: string;
	title: string;
	creatorId: string;
	editorIds: string[];
	images: string[];
	text: string;
}

export type IPostProps = PickIPostTitleOrPublisherIdOrCreatorIdOrEditorIdsOrImagesOrText;

export interface IGroup {
	id: string;
	/** @format date-time */
	creationDate: string;
	/** @format date-time */
	updateDate: string;
	name: string;
	adminIds: string[];
	memberIds: string[];
}

/** From T, pick a set of properties whose keys are in the union K */
export interface PickIGroupNameOrAdminIdsOrMemberIds {
	name: string;
	adminIds: string[];
	memberIds: string[];
}

export type IGroupProps = PickIGroupNameOrAdminIdsOrMemberIds;

export interface IComment {
	id: string;
	/** @format date-time */
	creationDate: string;
	/** @format date-time */
	updateDate: string;
	userId: string;
	referenceId: string;
	referenceType: "COMMENT" | "POST";
	text: string;
}

/** From T, pick a set of properties whose keys are in the union K */
export interface PickICommentUserIdOrReferenceIdOrReferenceTypeOrText {
	userId: string;
	referenceId: string;
	referenceType: "COMMENT" | "POST";
	text: string;
}

export type ICommentProps = PickICommentUserIdOrReferenceIdOrReferenceTypeOrText;

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
	/** set parameter to `true` for call `securityWorker` for this request */
	secure?: boolean;
	/** request path */
	path: string;
	/** content type of request body */
	type?: ContentType;
	/** query params */
	query?: QueryParamsType;
	/** format of response (i.e. response.json() -> format: "json") */
	format?: ResponseFormat;
	/** request body */
	body?: unknown;
	/** base url */
	baseUrl?: string;
	/** request cancellation token */
	cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
	baseUrl?: string;
	baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
	securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
	customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
	data: D;
	error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
	Json = "application/json",
	FormData = "multipart/form-data",
	UrlEncoded = "application/x-www-form-urlencoded",
	Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
	public baseUrl: string = "/api";
	private securityData: SecurityDataType | null = null;
	private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
	private abortControllers = new Map<CancelToken, AbortController>();
	private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

	private baseApiParams: RequestParams = {
		credentials: "same-origin",
		headers: {},
		redirect: "follow",
		referrerPolicy: "no-referrer",
	};

	constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
		Object.assign(this, apiConfig);
	}

	public setSecurityData = (data: SecurityDataType | null) => {
		this.securityData = data;
	};

	protected encodeQueryParam(key: string, value: any) {
		const encodedKey = encodeURIComponent(key);
		return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
	}

	protected addQueryParam(query: QueryParamsType, key: string) {
		return this.encodeQueryParam(key, query[key]);
	}

	protected addArrayQueryParam(query: QueryParamsType, key: string) {
		const value = query[key];
		return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
	}

	protected toQueryString(rawQuery?: QueryParamsType): string {
		const query = rawQuery || {};
		const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
		return keys
			.map((key) =>
				Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key),
			)
			.join("&");
	}

	protected addQueryParams(rawQuery?: QueryParamsType): string {
		const queryString = this.toQueryString(rawQuery);
		return queryString ? `?${queryString}` : "";
	}

	private contentFormatters: Record<ContentType, (input: any) => any> = {
		[ContentType.Json]: (input: any) =>
			input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
		[ContentType.Text]: (input: any) =>
			input !== null && typeof input !== "string" ? JSON.stringify(input) : input,
		[ContentType.FormData]: (input: any) =>
			Object.keys(input || {}).reduce((formData, key) => {
				const property = input[key];
				formData.append(
					key,
					property instanceof Blob
						? property
						: typeof property === "object" && property !== null
						? JSON.stringify(property)
						: `${property}`,
				);
				return formData;
			}, new FormData()),
		[ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
	};

	protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
		return {
			...this.baseApiParams,
			...params1,
			...(params2 || {}),
			headers: {
				...(this.baseApiParams.headers || {}),
				...(params1.headers || {}),
				...((params2 && params2.headers) || {}),
			},
		};
	}

	protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
		if (this.abortControllers.has(cancelToken)) {
			const abortController = this.abortControllers.get(cancelToken);
			if (abortController) {
				return abortController.signal;
			}
			return void 0;
		}

		const abortController = new AbortController();
		this.abortControllers.set(cancelToken, abortController);
		return abortController.signal;
	};

	public abortRequest = (cancelToken: CancelToken) => {
		const abortController = this.abortControllers.get(cancelToken);

		if (abortController) {
			abortController.abort();
			this.abortControllers.delete(cancelToken);
		}
	};

	public request = async <T = any, E = any>({
		body,
		secure,
		path,
		type,
		query,
		format,
		baseUrl,
		cancelToken,
		...params
	}: FullRequestParams): Promise<HttpResponse<T, E>> => {
		const secureParams =
			((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
				this.securityWorker &&
				(await this.securityWorker(this.securityData))) ||
			{};
		const requestParams = this.mergeRequestParams(params, secureParams);
		const queryString = query && this.toQueryString(query);
		const payloadFormatter = this.contentFormatters[type || ContentType.Json];
		const responseFormat = format || requestParams.format;

		return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
			...requestParams,
			headers: {
				...(requestParams.headers || {}),
				...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
			},
			signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
			body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
		}).then(async (response) => {
			const r = response as HttpResponse<T, E>;
			r.data = null as unknown as T;
			r.error = null as unknown as E;

			const data = !responseFormat
				? r
				: await response[responseFormat]()
						.then((data) => {
							if (r.ok) {
								r.data = data;
							} else {
								r.error = data;
							}
							return r;
						})
						.catch((e) => {
							r.error = e;
							return r;
						});

			if (cancelToken) {
				this.abortControllers.delete(cancelToken);
			}

			if (!response.ok) throw data;
			return data;
		});
	};
}

/**
 * @title ulfx-api
 * @version 0.1.0
 * @baseUrl /api
 * @contact Karl Jahn
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
	user = {
		/**
		 * No description
		 *
		 * @tags User
		 * @name Get
		 * @request GET:/User/{userId}
		 */
		get: (userId: string, params: RequestParams = {}) =>
			this.request<IUser | "NOT_FOUND", any>({
				path: `/User/${userId}`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags User
		 * @name Delete
		 * @request DELETE:/User/{userId}
		 */
		delete: (userId: string, params: RequestParams = {}) =>
			this.request<boolean, any>({
				path: `/User/${userId}`,
				method: "DELETE",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags User
		 * @name GetAll
		 * @request GET:/User
		 */
		getAll: (params: RequestParams = {}) =>
			this.request<IUser[] | "NOT_FOUND", any>({
				path: `/User`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags User
		 * @name Create
		 * @request POST:/User/create
		 */
		create: (data: IUserProps, params: RequestParams = {}) =>
			this.request<IUser, any>({
				path: `/User/create`,
				method: "POST",
				body: data,
				type: ContentType.Json,
				format: "json",
				...params,
			}),
	};
	subscription = {
		/**
		 * No description
		 *
		 * @tags Subscriptions
		 * @name Get
		 * @request GET:/Subscription/{subscriptionId}
		 */
		get: (subscriptionId: string, params: RequestParams = {}) =>
			this.request<ISubscription | "NOT_FOUND", any>({
				path: `/Subscription/${subscriptionId}`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Subscriptions
		 * @name Delete
		 * @request DELETE:/Subscription/{subscriptionId}
		 */
		delete: (subscriptionId: string, params: RequestParams = {}) =>
			this.request<boolean, any>({
				path: `/Subscription/${subscriptionId}`,
				method: "DELETE",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Subscriptions
		 * @name GetAll
		 * @request GET:/Subscription
		 */
		getAll: (params: RequestParams = {}) =>
			this.request<ISubscription[] | "NOT_FOUND", any>({
				path: `/Subscription`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Subscriptions
		 * @name Create
		 * @request POST:/Subscription/create
		 */
		create: (data: ISubscriptionProps, params: RequestParams = {}) =>
			this.request<ISubscription, any>({
				path: `/Subscription/create`,
				method: "POST",
				body: data,
				type: ContentType.Json,
				format: "json",
				...params,
			}),
	};
	reaction = {
		/**
		 * No description
		 *
		 * @tags Reaction
		 * @name Get
		 * @request GET:/Reaction/{reactionId}
		 */
		get: (reactionId: string, params: RequestParams = {}) =>
			this.request<IReaction | "NOT_FOUND", any>({
				path: `/Reaction/${reactionId}`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Reaction
		 * @name Delete
		 * @request DELETE:/Reaction/{reactionId}
		 */
		delete: (reactionId: string, params: RequestParams = {}) =>
			this.request<boolean, any>({
				path: `/Reaction/${reactionId}`,
				method: "DELETE",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Reaction
		 * @name GetCountOf
		 * @request GET:/Reaction/{referenceType}/{referenceId}
		 */
		getCountOf: (referenceType: "COMMENT" | "POST", referenceId: string, params: RequestParams = {}) =>
			this.request<
				{
					/** @format double */
					dislikes: number;
					/** @format double */
					likes: number;
				},
				any
			>({
				path: `/Reaction/${referenceType}/${referenceId}`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Reaction
		 * @name GetAll
		 * @request GET:/Reaction
		 */
		getAll: (params: RequestParams = {}) =>
			this.request<IReaction[] | "NOT_FOUND", any>({
				path: `/Reaction`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Reaction
		 * @name GetAllOfType
		 * @request GET:/Reaction/{referenceType}/all
		 */
		getAllOfType: (referenceType: "POST" | "COMMENT", params: RequestParams = {}) =>
			this.request<IReaction[] | "NOT_FOUND", any>({
				path: `/Reaction/${referenceType}/all`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Reaction
		 * @name Create
		 * @request POST:/Reaction/create
		 */
		create: (data: IReactionProps, params: RequestParams = {}) =>
			this.request<IReaction, any>({
				path: `/Reaction/create`,
				method: "POST",
				body: data,
				type: ContentType.Json,
				format: "json",
				...params,
			}),
	};
	publisher = {
		/**
		 * No description
		 *
		 * @tags Publisher
		 * @name Get
		 * @request GET:/Publisher/{publisherId}
		 */
		get: (publisherId: string, params: RequestParams = {}) =>
			this.request<IPublisher | "NOT_FOUND", any>({
				path: `/Publisher/${publisherId}`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Publisher
		 * @name Delete
		 * @request DELETE:/Publisher/{publisherId}
		 */
		delete: (publisherId: string, params: RequestParams = {}) =>
			this.request<boolean, any>({
				path: `/Publisher/${publisherId}`,
				method: "DELETE",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Publisher
		 * @name GetAll
		 * @request GET:/Publisher
		 */
		getAll: (params: RequestParams = {}) =>
			this.request<IPublisher[] | "NOT_FOUND", any>({
				path: `/Publisher`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Publisher
		 * @name Create
		 * @request POST:/Publisher/create
		 */
		create: (data: IPublisherProps, params: RequestParams = {}) =>
			this.request<IPublisher, any>({
				path: `/Publisher/create`,
				method: "POST",
				body: data,
				type: ContentType.Json,
				format: "json",
				...params,
			}),
	};
	post = {
		/**
		 * No description
		 *
		 * @tags Post
		 * @name Get
		 * @request GET:/Post/{postId}
		 */
		get: (postId: string, params: RequestParams = {}) =>
			this.request<IPost | "NOT_FOUND", any>({
				path: `/Post/${postId}`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Post
		 * @name Delete
		 * @request DELETE:/Post/{postId}
		 */
		delete: (postId: string, params: RequestParams = {}) =>
			this.request<boolean, any>({
				path: `/Post/${postId}`,
				method: "DELETE",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Post
		 * @name GetAll
		 * @request GET:/Post
		 */
		getAll: (params: RequestParams = {}) =>
			this.request<IPost[] | "NOT_FOUND", any>({
				path: `/Post`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Post
		 * @name Create
		 * @request POST:/Post/create
		 */
		create: (data: IPostProps, params: RequestParams = {}) =>
			this.request<IPost, any>({
				path: `/Post/create`,
				method: "POST",
				body: data,
				type: ContentType.Json,
				format: "json",
				...params,
			}),
	};
	group = {
		/**
		 * No description
		 *
		 * @tags Group
		 * @name Get
		 * @request GET:/Group/{groupId}
		 */
		get: (groupId: string, params: RequestParams = {}) =>
			this.request<IGroup | "NOT_FOUND", any>({
				path: `/Group/${groupId}`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Group
		 * @name Delete
		 * @request DELETE:/Group/{groupId}
		 */
		delete: (groupId: string, params: RequestParams = {}) =>
			this.request<boolean, any>({
				path: `/Group/${groupId}`,
				method: "DELETE",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Group
		 * @name GetAll
		 * @request GET:/Group
		 */
		getAll: (params: RequestParams = {}) =>
			this.request<IGroup[] | "NOT_FOUND", any>({
				path: `/Group`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags Group
		 * @name Create
		 * @request POST:/Group/create
		 */
		create: (data: IGroupProps, params: RequestParams = {}) =>
			this.request<IGroup, any>({
				path: `/Group/create`,
				method: "POST",
				body: data,
				type: ContentType.Json,
				format: "json",
				...params,
			}),
	};
	comment = {
		/**
		 * No description
		 *
		 * @tags PostComment
		 * @name Get
		 * @request GET:/Comment/{postCommentId}
		 */
		get: (postCommentId: string, params: RequestParams = {}) =>
			this.request<IComment | "NOT_FOUND", any>({
				path: `/Comment/${postCommentId}`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags PostComment
		 * @name Delete
		 * @request DELETE:/Comment/{postCommentId}
		 */
		delete: (postCommentId: string, params: RequestParams = {}) =>
			this.request<boolean, any>({
				path: `/Comment/${postCommentId}`,
				method: "DELETE",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags PostComment
		 * @name GetAll
		 * @request GET:/Comment
		 */
		getAll: (params: RequestParams = {}) =>
			this.request<IComment[] | "NOT_FOUND", any>({
				path: `/Comment`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @tags PostComment
		 * @name Create
		 * @request POST:/Comment/create
		 */
		create: (data: ICommentProps, params: RequestParams = {}) =>
			this.request<IComment, any>({
				path: `/Comment/create`,
				method: "POST",
				body: data,
				type: ContentType.Json,
				format: "json",
				...params,
			}),
	};
}
