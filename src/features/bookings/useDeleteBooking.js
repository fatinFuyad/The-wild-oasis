import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as apiDeleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isLoading: isDeleting } = useMutation({
    mutationFn: (bookingId) => apiDeleteBooking(bookingId),
    onSuccess: () => {
      toast.success("The booking has been successfully deleted.");
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: () => {
      toast.error("There was a probem while deleting the booking");
    },
  });
  return { deleteBooking, isDeleting };
}
// onSuccess we want to navigate to the booking table but as delete is also in menu so we don't want to add navigation from here but from the BookingDetail page so we want to add that functionality from BookingDetail
