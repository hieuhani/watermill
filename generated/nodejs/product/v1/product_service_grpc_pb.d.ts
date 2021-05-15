// package: product.v1
// file: product/v1/product_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as product_v1_product_service_pb from "../../product/v1/product_service_pb";
import * as envoyproxy_validate_validate_pb from "../../envoyproxy/validate/validate_pb";

interface IProductServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getCategories: IProductServiceService_IGetCategories;
    searchProducts: IProductServiceService_ISearchProducts;
}

interface IProductServiceService_IGetCategories extends grpc.MethodDefinition<product_v1_product_service_pb.GetCategoriesRequest, product_v1_product_service_pb.GetCategoriesResponse> {
    path: "/product.v1.ProductService/GetCategories";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<product_v1_product_service_pb.GetCategoriesRequest>;
    requestDeserialize: grpc.deserialize<product_v1_product_service_pb.GetCategoriesRequest>;
    responseSerialize: grpc.serialize<product_v1_product_service_pb.GetCategoriesResponse>;
    responseDeserialize: grpc.deserialize<product_v1_product_service_pb.GetCategoriesResponse>;
}
interface IProductServiceService_ISearchProducts extends grpc.MethodDefinition<product_v1_product_service_pb.SearchProductsRequest, product_v1_product_service_pb.SearchProductsResponse> {
    path: "/product.v1.ProductService/SearchProducts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<product_v1_product_service_pb.SearchProductsRequest>;
    requestDeserialize: grpc.deserialize<product_v1_product_service_pb.SearchProductsRequest>;
    responseSerialize: grpc.serialize<product_v1_product_service_pb.SearchProductsResponse>;
    responseDeserialize: grpc.deserialize<product_v1_product_service_pb.SearchProductsResponse>;
}

export const ProductServiceService: IProductServiceService;

export interface IProductServiceServer extends grpc.UntypedServiceImplementation {
    getCategories: grpc.handleUnaryCall<product_v1_product_service_pb.GetCategoriesRequest, product_v1_product_service_pb.GetCategoriesResponse>;
    searchProducts: grpc.handleUnaryCall<product_v1_product_service_pb.SearchProductsRequest, product_v1_product_service_pb.SearchProductsResponse>;
}

export interface IProductServiceClient {
    getCategories(request: product_v1_product_service_pb.GetCategoriesRequest, callback: (error: grpc.ServiceError | null, response: product_v1_product_service_pb.GetCategoriesResponse) => void): grpc.ClientUnaryCall;
    getCategories(request: product_v1_product_service_pb.GetCategoriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_v1_product_service_pb.GetCategoriesResponse) => void): grpc.ClientUnaryCall;
    getCategories(request: product_v1_product_service_pb.GetCategoriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_v1_product_service_pb.GetCategoriesResponse) => void): grpc.ClientUnaryCall;
    searchProducts(request: product_v1_product_service_pb.SearchProductsRequest, callback: (error: grpc.ServiceError | null, response: product_v1_product_service_pb.SearchProductsResponse) => void): grpc.ClientUnaryCall;
    searchProducts(request: product_v1_product_service_pb.SearchProductsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_v1_product_service_pb.SearchProductsResponse) => void): grpc.ClientUnaryCall;
    searchProducts(request: product_v1_product_service_pb.SearchProductsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_v1_product_service_pb.SearchProductsResponse) => void): grpc.ClientUnaryCall;
}

export class ProductServiceClient extends grpc.Client implements IProductServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getCategories(request: product_v1_product_service_pb.GetCategoriesRequest, callback: (error: grpc.ServiceError | null, response: product_v1_product_service_pb.GetCategoriesResponse) => void): grpc.ClientUnaryCall;
    public getCategories(request: product_v1_product_service_pb.GetCategoriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_v1_product_service_pb.GetCategoriesResponse) => void): grpc.ClientUnaryCall;
    public getCategories(request: product_v1_product_service_pb.GetCategoriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_v1_product_service_pb.GetCategoriesResponse) => void): grpc.ClientUnaryCall;
    public searchProducts(request: product_v1_product_service_pb.SearchProductsRequest, callback: (error: grpc.ServiceError | null, response: product_v1_product_service_pb.SearchProductsResponse) => void): grpc.ClientUnaryCall;
    public searchProducts(request: product_v1_product_service_pb.SearchProductsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_v1_product_service_pb.SearchProductsResponse) => void): grpc.ClientUnaryCall;
    public searchProducts(request: product_v1_product_service_pb.SearchProductsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_v1_product_service_pb.SearchProductsResponse) => void): grpc.ClientUnaryCall;
}
