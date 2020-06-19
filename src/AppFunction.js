import React, {useState, useEffect } from 'react';

const initialLocation = {
  latitude: null,
  longitude: null,
  speed: null 
}

const AppFunction = () => {
  const [count, setCount] = useState(0);
  const [isOn, setisOn] = useState(false); 
  const [mousePosition, setMousePosition] = useState({x: null, y: null})
  const [status, setStatus] = useState(navigator.onLine);
  //destructure: location.latitude, location:longtitude...
  const [{ latitude, longitude, speed}, setLocation] = useState(initialLocation);
  let mounted = true;
  

  //By default useEffect runs each render
  //useEffect can do both componendDidMount & cDidUpdate
  useEffect(() => {
    document.title = `${count} times!`
    window.addEventListener('mouseover', handleMouseMove)
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    navigator.geolocation.getCurrentPosition(handleGeolocation);
    const watchId = navigator.geolocation.watchPosition(handleGeolocation);
    //componentWillUnmount
    return () => {
      window.removeEventListener('mouseover', handleMouseMove)
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
      navigator.geolocation.clearWatch(watchId);
      mounted = false;
    }
    //[] means userEffect only runs twice(coponentDidMount & componentWillUnmount) -> clearning (don't leave the last date next time)
    // when we put an argument (count), state 'count' won't unMound. (whenever clicked, it will change) => when you do not want to unMound, you can add argument in the array
  },[count])

  const handleGeolocation = event => {
    if(mounted) {
      setLocation({
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed
      })
    }
  }

  const handleOnline = () => {
    setStatus(true)
  }

  const handleOffline = () => {
    setStatus(false)
  }

  const handleMouseMove = event => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    })
  }

  const incrementCount = () => {
    setCount(prevCount => (prevCount + 1))
  }
  // or simply this (since without prevCount it may not all the time.. according to lecture)
  // const incrementCount = () => {
  //   setCount(count + 1))
  // }

  // const toggleLight = () => { 
  //   setisOn(prevState => !prevState)
  // }
  // or simply
  const toggleLight = () => { 
    setisOn(!isOn)
  }

  return <div>
    <h1>Function</h1>
    <button onClick={incrementCount} >Incremented {count} times</button>

    <h2>Toggle Light</h2>
    <div
    style={{
      height: "50px",
      width: "50px",
      background: isOn ? "pink" : 'grey'
    }}
    onClick={toggleLight}
    >
    </div>
    <h3>Mouse Position!</h3>
    <p>x: {mousePosition.x}</p>
    <p>y: {mousePosition.y}</p>

    <h2>Network Status</h2>
    <p>You are {status ? "online" : "offline"}</p>

    <h2>Geolocation</h2>
    <p>Latitude: {latitude}</p>
    <p>Longitude: {longitude}</p>
    <p>Speed: {speed ? speed : "0"}</p>
  </div> 
}

export default AppFunction;