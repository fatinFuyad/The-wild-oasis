import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBooking() {
  const { bookingId } = useParams();

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking", bookingId],
    // if we don't add the bookingId the queryKey will be same for the booking and so each time a booking we visit will be read from the cache and then it will be replaced by the new one
    queryFn: () => getBooking(bookingId),
    retry: false,
  });

  // react fetches data for three times if it fails to find or fetch data but in this case we are assuring that if it fails to fetch data then it might not exist

  return { isLoading, error, booking };
}
