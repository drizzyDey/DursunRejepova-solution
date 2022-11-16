import { Suspense, lazy, PureComponent } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "component/Header";

const ProductsPage = lazy(() =>
    import("route/ProductsPage")
);
const ProductPage = lazy(() =>
    import("route/ProductPage")
);
const CartPage = lazy(() =>
    import("route/CartPage")
);

class App extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <Suspense fallback={<Header />}>
                    <Routes>
                        <Route path="/Scandiweb/" element={<Header />}>
                            <Route index element={<ProductsPage />} />
                            <Route
                                path="category/:category"
                                element={<ProductsPage />}
                            />
                            <Route
                                path="product/:productId"
                                element={<ProductPage />}
                            />
                            <Route path="cart" element={<CartPage />} />
                        </Route>
                        <Route
                            path="*"
                            element={
                                <Navigate to="/Scandiweb/" replace={true} />
                            }
                        />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        );
    }
}

export default App;
