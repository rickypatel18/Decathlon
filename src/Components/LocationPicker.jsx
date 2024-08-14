import React, { useState, useEffect, useRef } from "react";
import locationIcon from "./svg/location.svg";
import close from "./svg/close.svg";
import landmark from "./svg/landmark.svg";

const LocationPicker = () => {
  const [showInput, setShowInput] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [recentSearches, setRecentSearches] = useState([]); // To store recent searches
  const locationPickerRef = useRef(null);

  useEffect(() => {
    // Load recent searches from localStorage on component mount
    const storedSearches = JSON.parse(localStorage.getItem("recentSearches"));
    if (storedSearches) {
      setRecentSearches(storedSearches);
    }
  }, []);

  const handleLocationClick = () => {
    setShowInput((prev) => !prev);
  };

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const city = await reverseGeocode(latitude, longitude);
          setSelectedLocation(city);
          setShowInput(false);
        },
        (error) => {
          console.error("Error retrieving location:", error);
          alert("Unable to retrieve location. Please try again.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const reverseGeocode = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
      );
      const data = await response.json();
      return data.city || data.locality || "Unknown location";
    } catch (error) {
      console.error("Error reverse geocoding:", error);
      return "Unknown location";
    }
  };
  const handleInputChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && selectedLocation.trim() !== "") {
      const newSearches = [
        selectedLocation.trim(),
        ...recentSearches.slice(0, 2), // Keep only the last 4 searches
      ];
      setRecentSearches(newSearches);
      localStorage.setItem("recentSearches", JSON.stringify(newSearches)); // Save to localStorage
      setSelectedLocation(""); // Clear the input field
    }
  };

  const handleClickOutside = (event) => {
    if (
      locationPickerRef.current &&
      !locationPickerRef.current.contains(event.target)
    ) {
      setShowInput(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleCloseClick = () => {
    setShowInput(false);
  };

  return (
    <div className="location-picker" ref={locationPickerRef}>
      <img
        width="19"
        height="19"
        src={locationIcon}
        alt="Location icon"
        className="location-icon"
        onClick={handleLocationClick}
      />
      <p className="p" onClick={handleLocationClick}>
        {selectedLocation || "location"}
      </p>
      {showInput && (
        <div className="location-input-container">
          <div className="loc-left">
            <div className="left-up">
              <h5>LOCATION</h5>
              <p>Set your location to discover sport activities near you</p>
            </div>
            <div className="left-down">
              <img
                src="https://play.decathlon.in/static/media/location-hero.23099943.svg"
                alt="img"
              />
            </div>
          </div>
          <div className="loc-right">
            <div className="loc-right-img" onClick={handleCloseClick}>
              <img src={close} alt="close" />
            </div>
            <div className="loc-right-div">
              <div
                className="top"
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  marginTop: "0px",
                }}
              >
                <input
                  type="text"
                  className="search-input"
                  value={selectedLocation}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Search for area, landmark"
                  style={{
                    paddingRight: "40px",
                    backgroundColor: "rgb(239, 241, 243)",
                  }}
                />
                <div
                  className="blinking-cursor"
                  style={{ position: "absolute", right: "45px" }}
                ></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="search-icon"
                  style={{ position: "absolute", right: "5px" }}
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <button
                className="use-location-button"
                onClick={handleUseCurrentLocation}
              >
                <img src={landmark} alt="" />
                <p>Use Current Location</p>
              </button>
              <div className="viwed">
                <p>Recent Searches</p>
                <div className="searched">
                  {recentSearches.length > 0 ? (
                    recentSearches.map((city, index) => (
                      <div key={index} className="serach">
                        {city}
                      </div>
                    ))
                  ) : (
                    <img
                      src="https://play.decathlon.in/static/media/location-bg.7f6b8bd7.svg"
                      alt="No recent searches"
                      className="no-searches-img"
                      style={{ width: "50%" }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationPicker;
