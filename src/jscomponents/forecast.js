import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";


const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {

  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

  return (
    <>
      <label className="title">Daily Forecast</label>

      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">{item.weather[0].description}</label>
                  <label className="min-max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label className="label-description">Pressure:</label>
                  <label className="label-value">{item.main.pressure} hpa</label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="label-description">Humidity:</label>
                  <label className="label-value">{item.main.humidity} %</label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="label-description">Clouds:</label>
                  <label className="label-value">{item.clouds.all} oktas</label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="label-description">Wind Speed:</label>
                  <label className="label-value">{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="label-description">Sea Level:</label>
                  <label className="label-value">{item.main.sea_level} m</label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="label-description">Feels Like:</label>
                  <label className="label-value">{Math.round(item.main.feels_like)} °C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}

      </Accordion>


    </>
  );
}

export default Forecast;