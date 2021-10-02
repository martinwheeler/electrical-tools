import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { InputNumber } from "primereact/inputnumber";

const INITIAL_VALUES = {
  volts: 12,
  ampHours: 100,
};

function updatePowerConsumption(values, update, updateCost) {
  update((values["volts"] * values["ampHours"]) / 1000);
}

function BatterySizeCalculator() {
  const [totalkWh, setkWh] = useState(0.0);

  return (
    <div>
      <Formik
        initialValues={INITIAL_VALUES}
        validateOnMount={true}
        validate={(values) => {
          updatePowerConsumption(values, setkWh);
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, values, validateForm, handleChange }) => (
          <Form>
            <div>
              <div>
                <h1>Ah to kWh</h1>
                <div>
                  <div>
                    <label htmlFor="volts" className="space-sml">
                      Volts
                    </label>
                    <InputNumber
                      id="volts"
                      name="volts"
                      value={values.volts}
                      onValueChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="ampHours" className="space-sml">
                      Amp Hours
                    </label>
                    <InputNumber
                      id="ampHours"
                      name="ampHours"
                      value={values.ampHours}
                      onValueChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <br />
              <br />
              <br />
              <div className={"resultText"}>{totalkWh} kWh</div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default BatterySizeCalculator;
