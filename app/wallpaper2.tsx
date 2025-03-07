import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import {
  Canvas,
  Fill,
  Group,
  interpolate,
  LinearGradient,
  Mask,
  rect,
  Rect,
  Shadow,
  Turbulence,
  vec,
} from "@shopify/react-native-skia";

const length = 7;
const STRIPES = new Array(length).fill(0).map((_, i) => i);

const Wallpaper = () => {
  const { height, width: wWidth } = useWindowDimensions();
  const width = wWidth / length;
  const origin = vec(width / 2, height / 2);

  return (
    <Canvas style={{ flex: 1 }}>
      <Fill>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(0, height)}
          colors={["#1A0049", "#2F0604"]}
        />
      </Fill>
      <Group>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(0, height)}
          colors={["#5a5ec3", "#eba5c5", "#e1d4b7", "#e9b74c", "red"]}
        />
        <Shadow dx={0} dy={0} blur={10} color="black" />
        {STRIPES.map((_, i) => {
          return (
            <Group
              origin={origin}
              transform={[
                {
                  scaleY: interpolate(
                    i,
                    [0, (length - 1) / 2, length - 1],
                    [1, 0.6, 1]
                  ),
                },
              ]}
            >
              <Mask
                mask={
                  <Rect x={i * width} y={0} width={width} height={height}>
                    <LinearGradient
                      start={vec(0, 0)}
                      end={vec(0, height)}
                      colors={["transparent", "black", "black", "transparent"]}
                    />
                  </Rect>
                }
              >
                <Rect x={i * width} y={0} width={width} height={height} />
              </Mask>
            </Group>
          );
        })}
        <Fill blendMode={"softLight"}>
          <Turbulence freqX={1} freqY={1} octaves={3} />
        </Fill>
      </Group>
    </Canvas>
  );
};

export default Wallpaper;

const styles = StyleSheet.create({});
