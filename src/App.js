import React, { useState } from "react";
import { Button, IconButton, FAB, ButtonGroup } from "./components/ui/Button";
import CartIcon from "./components/icons/CartIcon";
import SearchIcon from "./components/icons/SearchIcon";
import HeartIcon from "./components/icons/HeartIcon";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [activeView, setActiveView] = useState("day");
  const [cartCount, setCartCount] = useState(5);
  const [wishlistCount, setWishlistCount] = useState(12);

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    alert("Form submitted successfully! ✅");
  };

  const handleCartClick = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>🎨 Button Components Showcase</h1>
        <p className="subtitle">
          Primary / Secondary / Outline / Ghost / Icon / FAB / Button Group /
          Loading
        </p>

        {/* Basic Buttons */}
        <section className="section">
          <h2>📌 Basic Buttons</h2>
          <div className="button-row">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </section>

        {/* Button Sizes */}
        <section className="section">
          <h2>📏 Button Sizes</h2>
          <div className="button-row">
            <Button variant="primary" size="sm">
              Small
            </Button>
            <Button variant="primary" size="md">
              Medium
            </Button>
            <Button variant="primary" size="lg">
              Large
            </Button>
          </div>
        </section>

        {/* Buttons with Icons */}
        <section className="section">
          <h2>🎯 Buttons with Icons</h2>
          <div className="button-row">
            <Button variant="primary" icon={CartIcon} onClick={handleCartClick}>
              Add to Cart
            </Button>
            <Button variant="secondary" icon={HeartIcon}>
              Add to Wishlist
            </Button>
            <Button variant="outline" icon={SearchIcon}>
              Search
            </Button>
            <Button variant="ghost" icon={CartIcon}>
              View Cart
            </Button>
          </div>
        </section>

        {/* Icon Buttons with Badge */}
        <section className="section">
          <h2>🔔 Icon Buttons (with Badge)</h2>
          <div className="button-row">
            <IconButton
              icon={CartIcon}
              label="Shopping Cart"
              badge={cartCount}
              variant="filled"
              onClick={handleCartClick}
            />
            <IconButton
              icon={HeartIcon}
              label="Wishlist"
              badge={wishlistCount}
              active
              onClick={() => setWishlistCount((prev) => prev + 1)}
            />
            <IconButton icon={SearchIcon} label="Search Products" />
            <IconButton icon={CartIcon} label="Empty Cart" badge={0} disabled />
          </div>
        </section>

        {/* Loading Buttons */}
        <section className="section">
          <h2>⏳ Loading Button (with Spinner)</h2>
          <div className="button-row">
            <Button variant="primary" loading={loading} onClick={handleSubmit}>
              {loading ? "Submitting..." : "Submit Form"}
            </Button>
            <Button variant="secondary" loading={true}>
              Always Loading
            </Button>
          </div>
        </section>

        {/* Button Groups - Horizontal */}
        <section className="section">
          <h2>🔗 Button Group</h2>
          <div className="button-row">
            <ButtonGroup>
              <Button variant="outline">Left</Button>
              <Button variant="outline">Center</Button>
              <Button variant="outline">Right</Button>
            </ButtonGroup>
          </div>
          <div className="button-row" style={{ marginTop: "20px" }}>
            <ButtonGroup segmented>
              <Button
                variant={activeView === "day" ? "primary" : "ghost"}
                onClick={() => setActiveView("day")}
              >
                📅 Day
              </Button>
              <Button
                variant={activeView === "week" ? "primary" : "ghost"}
                onClick={() => setActiveView("week")}
              >
                📊 Week
              </Button>
              <Button
                variant={activeView === "month" ? "primary" : "ghost"}
                onClick={() => setActiveView("month")}
              >
                📈 Month
              </Button>
            </ButtonGroup>
          </div>
        </section>

        {/* Disabled State */}
        <section className="section">
          <h2>🚫 Disabled State</h2>
          <div className="button-row">
            <Button variant="primary" disabled>
              Disabled Primary
            </Button>
            <Button variant="secondary" disabled>
              Disabled Secondary
            </Button>
            <Button variant="outline" disabled>
              Disabled Outline
            </Button>
            <Button variant="ghost" disabled>
              Disabled Ghost
            </Button>
          </div>
        </section>

        {/* Full Width Button */}
        <section className="section">
          <h2>📱 Full Width Button</h2>
          <Button
            variant="primary"
            size="lg"
            icon={CartIcon}
            onClick={handleCartClick}
            style={{ width: "100%" }}
          >
            Proceed to Checkout - ${(cartCount * 29.99).toFixed(2)}
          </Button>
        </section>
      </div>

      {/* Floating Action Buttons */}
      <FAB
        icon={CartIcon}
        label="Chat with us"
        color="primary"
        position="bottom-right"
        onClick={() => alert("Opening chat... 💬")}
      />

      <FAB
        icon={HeartIcon}
        label="Back to Top"
        color="secondary"
        position="bottom-left"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    </div>
  );
}

export default App;
