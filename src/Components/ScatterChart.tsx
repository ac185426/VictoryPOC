import { Box, Card, CardContent, Typography } from '@mui/material';
import { ScatterPoint } from './ScatterPoint';
import { VictoryChart, VictoryScatter } from 'victory';
import useCard from './useCard';

export const ScatterChart = () => {
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

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: background,
        height: 350,
        width: '55em',
        m: 5,
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
            Gauge chart displays
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
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <VictoryChart
          events={[
            {
              target: 'data',
              childName: 'Bar-1',
              eventHandlers: {
                onClick: () => ({
                  target: 'data',
                  mutation: () => ({ style: { fill: 'orange' } }),
                }),
              },
            },
          ]}
        >
          <VictoryScatter
            name="scatter1"
            data={[
              { x: 1, y: 7 },
              { x: 2, y: 5 },
              { x: 3, y: 2 },
              { x: 4, y: 6 },
              { x: 5, y: 3 },
            ]}
            dataComponent={<ScatterPoint />}
          />
        </VictoryChart>
      </Box>
    </Card>
  );
};
