# Pictorial Person Chart - Looker Custom Visualization

This Looker custom visualization allows you to create engaging pictorial charts, where data is represented by a series of images (people, light bulbs, etc.). It's built using Highcharts and offers flexibility in styling and data formatting.

## Features

* Choose from various background images (person, light bulb, more)
* Customize chart title, colors, legend position, and data label formatting
* Format data labels with units (numbers, percentages, thousands, millions)
* Control stacking type (normal, percent)

## Installation

1. **Clone or download this repository.**

2. **Bundle with Webpack:**
    * Make sure you have Node.js and npm installed.
    * Navigate to the project directory in your terminal.
    * Run `npm install` to install dependencies.
    * Run `webpack` to build the `dist/pictorial.js` bundle.

3. **Upload to Looker:**
    * In your Looker instance, go to **Admin > Visualizations**.
    * Click **+ Add** and select **From Production**.
    * Upload the `dist/pictorial.js` file.
    * Fill in the visualization details (Title, Description, etc.).

4. **Use in an Explore:**
    * Create a query with at least one dimension and one measure.
    * Select the "Pictorial Person Chart" visualization.
    * Configure the visualization options as needed.

## Configuration Options

* **Title:** Set the chart title.
* **Image:** Choose the background image for the chart.
* **Y-axis Max:** Set the maximum value for the Y-axis.
* **Stacking Type:** Choose between normal or percent stacking.
* **Colors:** Customize the colors used in the chart.
* **Legend Align/Vertical Align:** Control the position of the legend.
* **Data Label Align:** Set the alignment of data labels.
* **Data Label Unit:** Choose how to format data labels (number, percent, etc.).
* **Legend Layout:** Select horizontal or vertical legend layout.

## Dependencies

* Highcharts (bundled within `pictorial.js`)

## Notes

* Ensure your Looker instance supports custom visualizations.
* The Webpack configuration is included to facilitate bundling.

## Contributing

Feel free to contribute by opening issues or pull requests!

## License

This project is licensed under the MIT License.   
