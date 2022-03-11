import { Box, Card, CardContent, Typography } from '@mui/material';
import useCard from './useCard';
import { VictoryLabel, VictoryPie } from 'victory';
import Props from 'react';

interface Props {
  percent: any;
  dataGauge: any;
}

const GaugeCard = ({ percent, dataGauge }: Props) => {
  const {
    chartTheme,
    lob,
    background,
    themeHandler,
    LightStyles,
    DarkStyles,
    textTheme,
    subTextTheme,
  } = useCard();

  const backgroundData = [{ y: 100 }];

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: background,
        height: 350,
        width: '55em',
        mt: 5,
        ml: 5,
        mr: 5,
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          {/* Header & Subheader */}
          <Typography component="div" variant="h5" sx={{ color: textTheme }}>
            Victory POC
          </Typography>

          {/* Subheader*/}
          <Typography variant="subtitle1" sx={{ color: subTextTheme }}>
            {lob}
          </Typography>

          {/* Description */}
          <Typography sx={{ color: textTheme, maxWidth: 400, mt: 3 }}>
            Gauge chart displays...
          </Typography>
        </CardContent>

        {/* Theme Button for Light + dark theme */}
        <Box sx={{ display: 'block', alignItems: 'center', pl: 1, pb: 1 }}>
          {lob === 'Light' && (
            <div>
              <LightStyles variant="outlined" onClick={themeHandler}>
                Change Theme
              </LightStyles>
            </div>
          )}

          {lob === 'Dark' && (
            <div>
              <DarkStyles variant="outlined" onClick={themeHandler}>
                Change Theme
              </DarkStyles>
            </div>
          )}
        </Box>
      </Box>
      <Box sx={{ color: '#EBEBF599', height: 400, width: 800, mt: 6 }}>
        <svg viewBox="0 0 400 400" width="100%" height="100%">
          {/* Background Gray Gauge */}
          <VictoryPie
            standalone={false}
            theme={chartTheme}
            colorScale={['lightgray']}
            startAngle={-90}
            endAngle={90}
            data={backgroundData}
            innerRadius={120}
            cornerRadius={25}
            labels={() => null}
          />

          {/* Main Purple Gauge */}
          <VictoryPie
            animate={{
              duration: 2000,
            }}
            standalone={false}
            theme={chartTheme}
            startAngle={-90}
            endAngle={90}
            data={dataGauge}
            innerRadius={120}
            cornerRadius={25}
            labels={() => null}
          />

          {/* Gauge Percent Label */}
          <VictoryLabel
            textAnchor="middle"
            //verticalAnchor="middle"
            x={200}
            y={175}
            text={percent + '%'}
            style={{ fontSize: 45, fill: textTheme }}
          />

          {/* Gauge Title */}
          <VictoryLabel
            text="Network Availability"
            textAnchor="middle"
            x={200}
            y={20}
            style={[{ fill: textTheme, fontSize: 20 }]}
          />
        </svg>
      </Box>
    </Card>
  );
};

export default GaugeCard;
