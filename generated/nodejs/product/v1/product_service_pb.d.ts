// package: product.v1
// file: product/v1/product_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoyproxy_validate_validate_pb from "../../envoyproxy/validate/validate_pb";

export class GetCategoriesRequest extends jspb.Message { 
    getTenant(): string;
    setTenant(value: string): GetCategoriesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCategoriesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetCategoriesRequest): GetCategoriesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCategoriesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCategoriesRequest;
    static deserializeBinaryFromReader(message: GetCategoriesRequest, reader: jspb.BinaryReader): GetCategoriesRequest;
}

export namespace GetCategoriesRequest {
    export type AsObject = {
        tenant: string,
    }
}

export class GetCategoriesResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<Category>;
    setDataList(value: Array<Category>): GetCategoriesResponse;
    addData(value?: Category, index?: number): Category;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCategoriesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetCategoriesResponse): GetCategoriesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCategoriesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCategoriesResponse;
    static deserializeBinaryFromReader(message: GetCategoriesResponse, reader: jspb.BinaryReader): GetCategoriesResponse;
}

export namespace GetCategoriesResponse {
    export type AsObject = {
        dataList: Array<Category.AsObject>,
    }
}

export class Category extends jspb.Message { 
    getId(): number;
    setId(value: number): Category;
    getName(): string;
    setName(value: string): Category;
    getParentId(): number;
    setParentId(value: number): Category;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category.AsObject;
    static toObject(includeInstance: boolean, msg: Category): Category.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category;
    static deserializeBinaryFromReader(message: Category, reader: jspb.BinaryReader): Category;
}

export namespace Category {
    export type AsObject = {
        id: number,
        name: string,
        parentId: number,
    }
}

export class ProductFilter extends jspb.Message { 
    clearCategoryIdsList(): void;
    getCategoryIdsList(): Array<string>;
    setCategoryIdsList(value: Array<string>): ProductFilter;
    addCategoryIds(value: string, index?: number): string;
    getPriceLte(): number;
    setPriceLte(value: number): ProductFilter;
    getPriceGte(): number;
    setPriceGte(value: number): ProductFilter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProductFilter.AsObject;
    static toObject(includeInstance: boolean, msg: ProductFilter): ProductFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProductFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProductFilter;
    static deserializeBinaryFromReader(message: ProductFilter, reader: jspb.BinaryReader): ProductFilter;
}

export namespace ProductFilter {
    export type AsObject = {
        categoryIdsList: Array<string>,
        priceLte: number,
        priceGte: number,
    }
}

export class Pagination extends jspb.Message { 
    getOffset(): number;
    setOffset(value: number): Pagination;
    getLimit(): number;
    setLimit(value: number): Pagination;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Pagination.AsObject;
    static toObject(includeInstance: boolean, msg: Pagination): Pagination.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Pagination, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Pagination;
    static deserializeBinaryFromReader(message: Pagination, reader: jspb.BinaryReader): Pagination;
}

export namespace Pagination {
    export type AsObject = {
        offset: number,
        limit: number,
    }
}

export class SearchProductsRequest extends jspb.Message { 
    getTenant(): string;
    setTenant(value: string): SearchProductsRequest;
    getQuery(): string;
    setQuery(value: string): SearchProductsRequest;

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): ProductFilter | undefined;
    setFilter(value?: ProductFilter): SearchProductsRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): Pagination | undefined;
    setPagination(value?: Pagination): SearchProductsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchProductsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SearchProductsRequest): SearchProductsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchProductsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchProductsRequest;
    static deserializeBinaryFromReader(message: SearchProductsRequest, reader: jspb.BinaryReader): SearchProductsRequest;
}

export namespace SearchProductsRequest {
    export type AsObject = {
        tenant: string,
        query: string,
        filter?: ProductFilter.AsObject,
        pagination?: Pagination.AsObject,
    }
}

export class SearchProductsResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<Product>;
    setDataList(value: Array<Product>): SearchProductsResponse;
    addData(value?: Product, index?: number): Product;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchProductsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SearchProductsResponse): SearchProductsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchProductsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchProductsResponse;
    static deserializeBinaryFromReader(message: SearchProductsResponse, reader: jspb.BinaryReader): SearchProductsResponse;
}

export namespace SearchProductsResponse {
    export type AsObject = {
        dataList: Array<Product.AsObject>,
    }
}

export class ProductAttributeValue extends jspb.Message { 
    getId(): number;
    setId(value: number): ProductAttributeValue;
    getName(): string;
    setName(value: string): ProductAttributeValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProductAttributeValue.AsObject;
    static toObject(includeInstance: boolean, msg: ProductAttributeValue): ProductAttributeValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProductAttributeValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProductAttributeValue;
    static deserializeBinaryFromReader(message: ProductAttributeValue, reader: jspb.BinaryReader): ProductAttributeValue;
}

export namespace ProductAttributeValue {
    export type AsObject = {
        id: number,
        name: string,
    }
}

export class ProductVariantCombination extends jspb.Message { 
    getId(): number;
    setId(value: number): ProductVariantCombination;
    getPriceExtra(): number;
    setPriceExtra(value: number): ProductVariantCombination;

    hasAttributeValue(): boolean;
    clearAttributeValue(): void;
    getAttributeValue(): ProductAttributeValue | undefined;
    setAttributeValue(value?: ProductAttributeValue): ProductVariantCombination;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProductVariantCombination.AsObject;
    static toObject(includeInstance: boolean, msg: ProductVariantCombination): ProductVariantCombination.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProductVariantCombination, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProductVariantCombination;
    static deserializeBinaryFromReader(message: ProductVariantCombination, reader: jspb.BinaryReader): ProductVariantCombination;
}

export namespace ProductVariantCombination {
    export type AsObject = {
        id: number,
        priceExtra: number,
        attributeValue?: ProductAttributeValue.AsObject,
    }
}

export class ProductVariant extends jspb.Message { 
    getId(): number;
    setId(value: number): ProductVariant;
    getDefaultCode(): string;
    setDefaultCode(value: string): ProductVariant;
    clearCombinationsList(): void;
    getCombinationsList(): Array<ProductVariantCombination>;
    setCombinationsList(value: Array<ProductVariantCombination>): ProductVariant;
    addCombinations(value?: ProductVariantCombination, index?: number): ProductVariantCombination;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProductVariant.AsObject;
    static toObject(includeInstance: boolean, msg: ProductVariant): ProductVariant.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProductVariant, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProductVariant;
    static deserializeBinaryFromReader(message: ProductVariant, reader: jspb.BinaryReader): ProductVariant;
}

export namespace ProductVariant {
    export type AsObject = {
        id: number,
        defaultCode: string,
        combinationsList: Array<ProductVariantCombination.AsObject>,
    }
}

export class ProductAttribute extends jspb.Message { 
    getId(): number;
    setId(value: number): ProductAttribute;
    getName(): string;
    setName(value: string): ProductAttribute;
    getDisplayType(): ProductAttribute.DisplayType;
    setDisplayType(value: ProductAttribute.DisplayType): ProductAttribute;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProductAttribute.AsObject;
    static toObject(includeInstance: boolean, msg: ProductAttribute): ProductAttribute.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProductAttribute, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProductAttribute;
    static deserializeBinaryFromReader(message: ProductAttribute, reader: jspb.BinaryReader): ProductAttribute;
}

export namespace ProductAttribute {
    export type AsObject = {
        id: number,
        name: string,
        displayType: ProductAttribute.DisplayType,
    }

    export enum DisplayType {
    RADIO = 0,
    SELECT = 1,
    }

}

export class ProductAttributeLine extends jspb.Message { 

    hasAttribute(): boolean;
    clearAttribute(): void;
    getAttribute(): ProductAttribute | undefined;
    setAttribute(value?: ProductAttribute): ProductAttributeLine;
    clearValuesList(): void;
    getValuesList(): Array<ProductAttributeValue>;
    setValuesList(value: Array<ProductAttributeValue>): ProductAttributeLine;
    addValues(value?: ProductAttributeValue, index?: number): ProductAttributeValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProductAttributeLine.AsObject;
    static toObject(includeInstance: boolean, msg: ProductAttributeLine): ProductAttributeLine.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProductAttributeLine, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProductAttributeLine;
    static deserializeBinaryFromReader(message: ProductAttributeLine, reader: jspb.BinaryReader): ProductAttributeLine;
}

export namespace ProductAttributeLine {
    export type AsObject = {
        attribute?: ProductAttribute.AsObject,
        valuesList: Array<ProductAttributeValue.AsObject>,
    }
}

export class Product extends jspb.Message { 
    getId(): number;
    setId(value: number): Product;
    getName(): string;
    setName(value: string): Product;
    getListPrice(): number;
    setListPrice(value: number): Product;
    clearCategoriesList(): void;
    getCategoriesList(): Array<Category>;
    setCategoriesList(value: Array<Category>): Product;
    addCategories(value?: Category, index?: number): Category;
    clearVariantsList(): void;
    getVariantsList(): Array<ProductVariant>;
    setVariantsList(value: Array<ProductVariant>): Product;
    addVariants(value?: ProductVariant, index?: number): ProductVariant;
    clearProductAttributeLinesList(): void;
    getProductAttributeLinesList(): Array<ProductAttributeLine>;
    setProductAttributeLinesList(value: Array<ProductAttributeLine>): Product;
    addProductAttributeLines(value?: ProductAttributeLine, index?: number): ProductAttributeLine;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Product.AsObject;
    static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Product;
    static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
}

export namespace Product {
    export type AsObject = {
        id: number,
        name: string,
        listPrice: number,
        categoriesList: Array<Category.AsObject>,
        variantsList: Array<ProductVariant.AsObject>,
        productAttributeLinesList: Array<ProductAttributeLine.AsObject>,
    }
}
