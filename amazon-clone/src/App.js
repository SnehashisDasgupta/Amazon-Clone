import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51OJcS4SA37fBPmSubD9JLTEr5TZ1AwT1dbLqNoSXubhtBRSYKaBkzNzrfqm9GAPBKDwiRUiIkuB7Dchj25Mb3XCo00Ly7sxJwB"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once whenthe app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        // the user is logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      {/* BEM convention */}
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* Render header bar in all pages except for login page */}
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header /> <Checkout />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header /> <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
