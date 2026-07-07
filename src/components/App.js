import React, { useState } from "react";
import { Button, IconButton, FAB, ButtonGroup } from "./ui/Button";
import CartIcon from "./icons/CartIcon";
import SearchIcon from "./icons/SearchIcon";
import HeartIcon from "./icons/HeartIcon";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [activeView, setActiveView] = useState("day");
  const [cartCount, setCartCount] = useState(5);
  const [wishlistCount, setWishlistCount] = useState(12);

  const handleSubmit = async () => {
    setLoading(true);
    // Simulate API call - 2 seconds delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    alert("Form submitted successfully! ✅");
  };

  const handleCartClick = () => {
    setCartCount((prev) => prev + 1);
    console.log("Added to cart");
  };

  return (
    <div className="App">
      <div className="container">
        <h1>🎨 Button Components Showcase</h1>
        <p className="subtitle">
          A complete collection of beautiful and functional button components
        </p>

        {/* Basic Buttons */}
        <section className="section">
          <h2>📌 Basic Buttons</h2>
          <p className="description">
            Primary, Secondary, Outline, and Ghost variants
          </p>
          <div className="button-row">
            <Button
              variant="primary"
              onClick={() => console.log("Primary clicked")}
            >
              Primary
            </Button>
            <Button
              variant="secondary"
              onClick={() => console.log("Secondary clicked")}
            >
              Secondary
            </Button>
            <Button
              variant="outline"
              onClick={() => console.log("Outline clicked")}
            >
              Outline
            </Button>
            <Button
              variant="ghost"
              onClick={() => console.log("Ghost clicked")}
            >
              Ghost
            </Button>
          </div>
        </section>

        {/* Button Sizes */}
        <section className="section">
          <h2>📏 Button Sizes</h2>
          <p className="description">
            Small, Medium, and Large sizes available
          </p>
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
          <p className="description">
            Add icons to enhance visual communication
          </p>
          <div className="button-row">
            <Button variant="primary" icon={CartIcon} onClick={handleCartClick}>
              Add to Cart
            </Button>
            <Button variant="secondary" icon={HeartIcon}>
              Add to Wishlist
            </Button>
            <Button variant="outline" icon={SearchIcon} iconPosition="right">
              Search
            </Button>
            <Button variant="ghost" icon={CartIcon}>
              View Cart
            </Button>
          </div>
        </section>

        {/* Icon Buttons */}
        <section className="section">
          <h2>🔔 Icon Buttons</h2>
          <p className="description">
            Icon-only buttons with badge notifications and tooltips
          </p>
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
              active={wishlistCount > 0}
              onClick={() => setWishlistCount((prev) => prev + 1)}
            />
            <IconButton
              icon={SearchIcon}
              label="Search Products"
              onClick={() => console.log("Search clicked")}
            />
            <IconButton icon={CartIcon} label="Empty Cart" badge={0} disabled />
          </div>
        </section>

        {/* Loading Buttons */}
        <section className="section">
          <h2>⏳ Loading Buttons</h2>
          <p className="description">
            Show loading spinner during async operations
          </p>
          <div className="button-row">
            <Button variant="primary" loading={loading} onClick={handleSubmit}>
              {loading ? "Submitting..." : "Submit Form"}
            </Button>
            <Button variant="secondary" loading={true}>
              Always Loading
            </Button>
            <Button variant="outline" loading={loading} onClick={handleSubmit}>
              {loading ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </section>

        {/* Button Groups */}
        <section className="section">
          <h2>🔗 Button Groups</h2>
          <p className="description">Group related buttons together</p>

          <div style={{ marginBottom: "20px" }}>
            <h3
              style={{
                fontSize: "14px",
                color: "#6b7280",
                marginBottom: "10px",
              }}
            >
              Default Group
            </h3>
            <div className="button-row">
              <ButtonGroup variant="outline">
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
              </ButtonGroup>
            </div>
          </div>

          <div>
            <h3
              style={{
                fontSize: "14px",
                color: "#6b7280",
                marginBottom: "10px",
              }}
            >
              Segmented Control
            </h3>
            <div className="button-row">
              <ButtonGroup segmented>
                <Button
                  data-active={activeView === "day"}
                  onClick={() => setActiveView("day")}
                >
                  📅 Day
                </Button>
                <Button
                  data-active={activeView === "week"}
                  onClick={() => setActiveView("week")}
                >
                  📊 Week
                </Button>
                <Button
                  data-active={activeView === "month"}
                  onClick={() => setActiveView("month")}
                >
                  📈 Month
                </Button>
              </ButtonGroup>
            </div>
            <p
              style={{ marginTop: "10px", color: "#6366f1", fontSize: "14px" }}
            >
              Active view: <strong>{activeView}</strong>
            </p>
          </div>
        </section>

        {/* Vertical Button Group */}
        <section className="section">
          <h2>📋 Vertical Button Group</h2>
          <p className="description">Stack buttons vertically</p>
          <ButtonGroup variant="outline" vertical>
            <Button>Profile</Button>
            <Button>Settings</Button>
            <Button>Messages</Button>
            <Button>Logout</Button>
          </ButtonGroup>
        </section>

        {/* Disabled State */}
        <section className="section">
          <h2>🚫 Disabled State</h2>
          <p className="description">
            Prevent user interaction with disabled buttons
          </p>
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
            <IconButton icon={CartIcon} label="Cart" disabled />
          </div>
        </section>

        {/* Full Width Button */}
        <section className="section">
          <h2>📱 Full Width Button</h2>
          <p className="description">
            Button that takes full width of container
          </p>
          <Button
            variant="primary"
            size="lg"
            icon={CartIcon}
            style={{ width: "100%" }}
            onClick={handleCartClick}
          >
            Proceed to Checkout - ${(cartCount * 29.99).toFixed(2)}
          </Button>
        </section>
      </div>

      {/* Floating Action Buttons */}
      <FAB
        icon={CartIcon}
        label="Quick Chat Support"
        color="primary"
        position="bottom-right"
        onClick={() => alert("Opening chat support... 💬")}
      />

      <FAB
        icon={HeartIcon}
        label="Scroll to Top"
        color="secondary"
        position="bottom-left"
        size="sm"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    </div>
  );
}

export default App;
