// @flow
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import Button from "./Button";

import styles from "./style";

import type { Step } from "../types";

type Props = {
  isFirstStep: boolean,
  isLastStep: boolean,
  handleNext: func,
  handlePrev: func,
  handleStop: func,
  currentStep: Step,
  labels: Object,
  actionBtnStyle: Object,
};

const Tooltip = ({
  isFirstStep,
  isLastStep,
  handleNext,
  handlePrev,
  handleStop,
  currentStep,
  labels,
  l10n,
  actionBtnStyle,
  forceFirstSkip,
}: Props) => (
    <View>
      <View style={styles.tooltipContainer}>
        {currentStep.copilotComponent ? (
          <currentStep.copilotComponent />
        ) : (
            <Text testID="stepDescription" style={styles.tooltipText}>
              {currentStep.text}
            </Text>
          )}
      </View>
      <View style={[styles.bottomBar]}>
        {!isLastStep && !forceFirstSkip ? (
          <TouchableOpacity onPress={handleStop}>
            <Button style={actionBtnStyle || {}}>{l10n.skip || "Skip"}</Button>
          </TouchableOpacity>
        ) : null}
        {!isFirstStep ? (
          <TouchableOpacity onPress={handlePrev}>
            <Button style={actionBtnStyle || {}}>
              {l10n.previous || "Previous"}
            </Button>
          </TouchableOpacity>
        ) : null}
        {!isLastStep ? (
          <TouchableOpacity onPress={handleNext}>
            <Button style={actionBtnStyle || {}}>{l10n.next || "Next"}</Button>
          </TouchableOpacity>
        ) : (
            <TouchableOpacity onPress={handleStop}>
              <Button style={actionBtnStyle || {}}>
                {l10n.finish || "Finish"}
              </Button>
            </TouchableOpacity>
          )}
      </View>
    </View>
  );

export default Tooltip;
