'use client'

import { DateRange, Range, RangeKeyDict } from "react-date-range"
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
interface CalendarProps {
    disabledDates: Date[],
    value: Range,
    onChange: (value: RangeKeyDict) => void;
}
const Calendar: React.FC<CalendarProps> = ({
    disabledDates,
    value,
    onChange
}) => {
  return (
    <div>
        <DateRange />
    </div>
  )
}

export default Calendar