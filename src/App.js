import React, { useState } from 'react';
import logo from "./logo.svg";
import "./App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

const INITIAL_VALUES = {
  "toasterWatts": 1500,
  "toasterHours": 0.5,
  "kettleWatts": 800,
  "kettleHours": 0.5,
  "microwaveWatts": 1200,
  "microwaveHours": 0.5,
  "fridgeWatts": 140,
  "fridgeHours": 24,
  "ovenWatts": 2300,
  "ovenHours": 2,
  "cooktopWatts": 11100,
  "cooktopHours": 2,
  "coffeeMachineWatts": 1700,
  "coffeeMachineHours": 1,
  "hairDryerWatts": 2400,
  "hairDryerHours": 0.5,
  "hairStraightenerWatts": 200,
  "hairStraightenerHours": 0.5,
  "dryerWatts": 2400,
  "dryerHours": 3,
  "washingMachineWatts": 800,
  "washingMachineHours": 2,
  "ironWatts": 1100,
  "ironHours": 0.5,
  "tvWatts": 100,
  "tvHours": 8,
  "soundSystemWatts": 420,
  "soundSystemHours": 8,
  "bedroomTvWatts": 100,
  "bedroomTvHours": 8,
}

function updatePowerConsumption(values, update) {

  // do the maths
  let appliances = [];

  Object.keys(values).forEach(key => {
      const appliance = key.replace('Watts', '').replace('Hours', '')
      const valueName = key.replace(appliance, '')
      appliances[appliance] ? appliances[appliance][valueName] = values[key] : appliances[appliance] = { [valueName]: values[key] };
  })

  let totalPower = 0

  Object.keys(appliances).forEach(appliance => {
      totalPower += appliances[appliance].Watts * appliances[appliance].Hours
  })


  update(totalPower);

  return totalPower;
}

function App() {
  const [powerConsumptionPerkWh, setPowerConsumptionPerkWh] = useState(0);

  return (
    <div className="App">
      <Formik
        initialValues={INITIAL_VALUES}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, values }) => (
          <Form onChange={(e) => updatePowerConsumption(values, setPowerConsumptionPerkWh)}>
            <div>
              <div>
                <h1>Kitchen</h1>
                <div>
                  <div>
                    <div>Toaster</div>
                    <label htmlFor="toasterWatts">Watts</label>
                    <Field
                      type="number"
                      id="toasterWatts"
                      name="toasterWatts"
                    />
                    <label htmlFor="toasterHours">Hours</label>
                    <Field
                      type="number"
                      id="toasterHours"
                      name="toasterHours"
                    />
                  </div>
                  <div>
                    <div>Kettle</div>
                    <label htmlFor="kettleWatts">Watts</label>
                    <Field
                      type="number"
                      id="kettleWatts"
                      name="kettleWatts"
                    />
                    <label htmlFor="kettleHours">Hours</label>
                    <Field
                      type="number"
                      id="kettleHours"
                      name="kettleHours"
                    />
                  </div>
                  <div>
                    <div>Microwave</div>
                    <label htmlFor="microwaveWatts">Watts</label>
                    <Field
                      type="number"
                      id="microwaveWatts"
                      name="microwaveWatts"
                    />
                    <label htmlFor="microwaveHours">Hours</label>
                    <Field
                      type="number"
                      id="microwaveHours"
                      name="microwaveHours"
                    />
                  </div>
                  <div>
                    <div>Fridge</div>
                    <label htmlFor="fridgeWatts">Watts</label>
                    <Field
                      type="number"
                      id="fridgeWatts"
                      name="fridgeWatts"
                    />
                    <label htmlFor="fridgeHours">Hours</label>
                    <Field
                      type="number"
                      id="fridgeHours"
                      name="fridgeHours"
                    />
                  </div>
                  <div>
                    <div>Oven</div>
                    <label htmlFor="ovenWatts">Watts</label>
                    <Field
                      type="number"
                      id="ovenWatts"
                      name="ovenWatts"
                    />
                    <label htmlFor="ovenHours">Hours</label>
                    <Field
                      type="number"
                      id="ovenHours"
                      name="ovenHours"
                    />
                  </div>
                  <div>
                    <div>Cooktop</div>
                    <label htmlFor="cooktopWatts">Watts</label>
                    <Field
                      type="number"
                      id="cooktopWatts"
                      name="cooktopWatts"
                    />
                    <label htmlFor="cooktopHours">Hours</label>
                    <Field
                      type="number"
                      id="cooktopHours"
                      name="cooktopHours"
                    />
                  </div>
                  <div>
                    <div>Coffee Machine</div>
                    <label htmlFor="coffeeMachineWatts">Watts</label>
                    <Field
                      type="number"
                      id="coffeeMachineWatts"
                      name="coffeeMachineWatts"
                    />
                    <label htmlFor="coffeeMachineHours">Hours</label>
                    <Field
                      type="number"
                      id="coffeeMachineHours"
                      name="coffeeMachineHours"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h1>Bathroom</h1>
                <div>
                  <div>
                    <div>Hair Dryer</div>
                    <label htmlFor="hairDryerWatts">Watts</label>
                    <Field
                      type="number"
                      id="hairDryerWatts"
                      name="hairDryerWatts"
                    />
                    <label htmlFor="hairDryerHours">Hours</label>
                    <Field
                      type="number"
                      id="hairDryerHours"
                      name="hairDryerHours"
                    />
                  </div>
                  <div>
                    <div>Hair Straightener</div>
                    <label htmlFor="hairStraightenerWatts">Watts</label>
                    <Field
                      type="number"
                      id="hairStraightenerWatts"
                      name="hairStraightenerWatts"
                    />
                    <label htmlFor="hairStraightenerHours">Hours</label>
                    <Field
                      type="number"
                      id="hairStraightenerHours"
                      name="hairStraightenerHours"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h1>Laundry</h1>

                <div>
                  <div>
                    <div>Dryer</div>
                    <label htmlFor="dryerWatts">Watts</label>
                    <Field
                      type="number"
                      id="dryerWatts"
                      name="dryerWatts"
                    />
                    <label htmlFor="dryerHours">Hours</label>
                    <Field
                      type="number"
                      id="dryerHours"
                      name="dryerHours"
                    />
                  </div>

                  <div>
                    <div>Washing Machine</div>
                    <label htmlFor="washingMachineWatts">Watts</label>
                    <Field
                      type="number"
                      id="washingMachineWatts"
                      name="washingMachineWatts"
                    />
                    <label htmlFor="washingMachineHours">Hours</label>
                    <Field
                      type="number"
                      id="washingMachineHours"
                      name="washingMachineHours"
                    />
                  </div>

                  <div>
                    <div>Iron</div>
                    <label htmlFor="ironWatts">Watts</label>
                    <Field
                      type="number"
                      id="ironWatts"
                      name="ironWatts"
                    />
                    <label htmlFor="ironHours">Hours</label>
                    <Field
                      type="number"
                      id="ironHours"
                      name="ironHours"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h1>Living</h1>
                <div>
                  <div>
                    <div>TV</div>
                    <label htmlFor="tvWatts">Watts</label>
                    <Field
                      type="number"
                      id="tvWatts"
                      name="tvWatts"
                    />
                    <label htmlFor="tvHours">Hours</label>
                    <Field
                      type="number"
                      id="tvHours"
                      name="tvHours"
                    />
                  </div>

                  <div>
                    <div>Sound System</div>
                    <label htmlFor="soundSystemWatts">Watts</label>
                    <Field
                      type="number"
                      id="soundSystemWatts"
                      name="soundSystemWatts"
                    />
                    <label htmlFor="soundSystemHours">Hours</label>
                    <Field
                      type="number"
                      id="soundSystemHours"
                      name="soundSystemHours"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h1>Bedroom</h1>

                <div>
                  <div>
                    <div>TV</div>
                    <label htmlFor="bedroomTvWatts">Watts</label>
                    <Field
                      type="number"
                      id="bedroomTvWatts"
                      name="bedroomTvWatts"
                    />
                    <label htmlFor="bedroomTvHours">Hours</label>
                    <Field
                      type="number"
                      id="bedroomTvHours"
                      name="bedroomTvHours"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      
      <div style={{ paddingTop: '20px' }}>Total power consumption per day <b>{powerConsumptionPerkWh}</b> kWh</div>
    </div>
  );
}

export default App;
