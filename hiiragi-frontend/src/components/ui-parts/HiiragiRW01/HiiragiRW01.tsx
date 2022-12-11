/* react */
import { useEffect, useState } from 'react';

/* mui5 */
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';

/* api */
import FetcherGet from 'api/FetcherGet';

/* common/types */
import { HiiragiResponse } from 'common/types/HiiragiResponse';

/* ui-parts */
import { Copyright } from 'components/ui-parts/Copyright/Copyright';
import { ApiUrl } from 'common/constant/ApiUrl';

export function HiiragiRW01() {

  const [staCode, setStaCode] = useState('');
  const [data, setData] = useState<HiiragiResponse[]>()

  useEffect(() => {
    FetcherGet(ApiUrl.HiiragiRW01).then((result) => {
      setData(result);
    });
  }, [])

  const handleChange = (event: SelectChangeEvent) => {
    setStaCode(event.target.value as string);
    console.log(staCode);
  };

  return(
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Stack spacing={3}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">駅名</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={staCode}
            label="StaCode"
            onChange={handleChange}
          >
            {data && data.map((item: HiiragiResponse) => (
              <MenuItem
                key = {item.staCode}
                value = {item.staCode}
              >
                {item.staName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      <Copyright sx={{ pt: 4 }} />
    </Container>
  )
};
