export declare function bootstrap(port?: number): Promise<{
    app: import("express-serve-static-core").Express;
    url: string;
}>;
