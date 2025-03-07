import {
  Dimensions,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import {
  Canvas,
  Fill,
  LinearGradient,
  Path,
  Skia,
  SweepGradient,
  vec,
} from "@shopify/react-native-skia";

const Wallpaper = () => {
  const { width, height } = Dimensions.get("window");
  const origin = vec(width / 2, height / 2);
  const halfCircle = Skia.Path.Make();
  halfCircle.addCircle(origin.x, origin.y, width / 2);
  halfCircle.trim(0.5, 1, false);

  return (
    <Canvas style={{ flex: 1 }}>
      <Fill>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(0, height)}
          colors={["#013158", "#016579", "#016579", "#013158"]}
        />
      </Fill>
      <Path
        path={halfCircle}
        transform={[{ rotate: Math.PI / 6 }, { translateX: -width / 4 }]}
        origin={origin}
      >
        <SweepGradient
          c={origin}
          transform={[
            { scaleY: -1 },
            { translateX: width / 4 },
            { rotate: -Math.PI / 6 },
          ]}
          start={0}
          end={180}
          colors={["#000423", "#0C88B6", "#1DF7BC", "#D4FDAE"]}
          origin={origin}
        />
      </Path>
      <Path
        path={halfCircle}
        transform={[
          { scaleY: -1 },
          { rotate: -Math.PI / 6 },
          { translateX: width / 4 },
        ]}
        origin={origin}
      >
        <SweepGradient
          c={origin}
          start={180}
          end={360}
          colors={["#043648", "#0C88B6", "#0C88B6", "#F592C7", "#F592C7"]}
          transform={[{ translateX: -width / 4 }, { rotate: Math.PI / 6 }]}
          origin={origin}
        />
      </Path>
    </Canvas>
  );
};

export default Wallpaper;

const styles = StyleSheet.create({});
