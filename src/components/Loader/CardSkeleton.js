import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const HeaderCardSkeleton = () => {
  return (
    <div>
      <div className="card-header">
        <Skeleton className="w-25 p-1" />
      </div>

      <div className="card-body row">
        <div className="col-2">
          <Skeleton className="mt-2 py-2" />
        </div>
        <div className="col-2">
          <Skeleton className="mt-2 py-2" />
        </div>
        <div className="col-2">
          <Skeleton className="mt-2 py-2" />
        </div>
        <div className="col-2">
          <Skeleton className="mt-2 py-2" />
        </div>
        <div className="col-2">
          <Skeleton className="mt-2 py-2" />
        </div>
        <div className="col-2">
          <Skeleton className="mt-2 py-2" />
        </div>

        <div className="col-2">
          <Skeleton count={5} className="mt-2" />
        </div>
        <div className="col-2">
          <Skeleton count={5} className="mt-2" />
        </div>
        <div className="col-2">
          <Skeleton count={5} className="mt-2" />
        </div>
        <div className="col-2">
          <Skeleton count={5} className="mt-2" />
        </div>
        <div className="col-2">
          <Skeleton count={5} className="mt-2" />
        </div>
        <div className="col-2">
          <Skeleton count={5} className="mt-2" />
        </div>
      </div>
    </div>
  );
};

export const CardSkeleton = () => {
  return (
    <div>
      <div className="card-body row">
        <div className="col-2">
          <Skeleton className="mt-2 py-2" />
        </div>
        <div className="col-2">
          <Skeleton className="mt-2 py-2" />
        </div>
        <div className="col-2">
          <Skeleton className="mt-2 py-2" />
        </div>
        <div className="col-2">
          <Skeleton className="mt-2 py-2" />
        </div>
        <div className="col-2">
          <Skeleton className="mt-2 py-2" />
        </div>
        <div className="col-2">
          <Skeleton className="mt-2 py-2" />
        </div>
        <div className="col-2">
          <Skeleton count={5} className="mt-2" />
        </div>
        <div className="col-2">
          <Skeleton count={5} className="mt-2" />
        </div>
        <div className="col-2">
          <Skeleton count={5} className="mt-2" />
        </div>
        <div className="col-2">
          <Skeleton count={5} className="mt-2" />
        </div>
        <div className="col-2">
          <Skeleton count={5} className="mt-2" />
        </div>
        <div className="col-2">
          <Skeleton count={5} className="mt-2" />
        </div>
      </div>
    </div>
  );
};

export const PaymentSkeleton = () => {
  return (
    <div>
      <div className="card-header">
        <Skeleton className="w-25 p-1" />
      </div>

      <div className="card-body row">
        <div className="col-4">
          <Skeleton count={1} className="mt-2 py-1 w-50" />
          <Skeleton count={1} className="mt-2 w-75" />
        </div>
        <div className="col-4">
          <Skeleton count={1} className="mt-2 py-1 w-50" />
          <Skeleton count={1} className="mt-2 w-75" />
        </div>
        <div className="col-4">
          <Skeleton count={1} className="mt-2 py-1 w-50" />
          <Skeleton count={1} className="mt-2 w-75" />
        </div>

        <div className="col-4 mt-2">
          <Skeleton count={1} className="mt-2 py-1 w-50" />
          <Skeleton count={1} className="mt-2 w-75" />
        </div>
        <div className="col-4 mt-2">
          <Skeleton count={1} className="mt-2 py-1 w-50" />
          <Skeleton count={1} className="mt-2 w-75" />
        </div>
        <div className="col-4 mt-2">
          <Skeleton count={1} className="mt-2 py-1 w-50" />
          <Skeleton count={1} className="mt-2 w-75" />
        </div>
      </div>
    </div>
  );
};

export const DetailsCerdSkeleton = () => {
  return (
    <div>
      <div className="card  border-0 details-box mt-3 pt-4">
        <div className="card-header border-bottom card-view">
          <Skeleton
            count={1}
            baseColor="#c7f4f800"
            highlightColor="#c4e6f9"
            className="py-1 my-1"
            width={130}
          />
        </div>
        <div className="card-body">
          <table className="table table-borderless table1">
            <tbody>
              <tr>
                <td>
                  <Skeleton count={1} className="py-1 my-1" width={130} />
                </td>
                <td>
                  <Skeleton count={1} className="py-1 ms-2 my-1" width={120} />
                </td>
              </tr>
              <tr>
                <td>
                  <Skeleton count={1} className="py-1 my-1" width={130} />
                </td>
                <td>
                  <Skeleton count={1} className="py-1 ms-2 my-1" width={120} />
                </td>
              </tr>
              <tr>
                <td>
                  <Skeleton count={1} className="py-1 my-1" width={130} />
                </td>
                <td>
                  <Skeleton count={1} className="py-1 ms-2 my-1" width={120} />
                </td>
              </tr>
              <tr>
                <td>
                  <Skeleton count={1} className="py-1 my-1" width={130} />
                </td>
                <td>
                  <Skeleton count={1} className="py-1 ms-2 my-1" width={120} />
                </td>
              </tr>
              <tr>
                <td>
                  <Skeleton count={1} className="py-1 my-1" width={130} />
                </td>
                <td>
                  <Skeleton count={1} className="py-1 ms-2 my-1" width={120} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export const ActivityLogsSkeleton = () => {
  return (
    <div>
      <div className="card-header">
        <Skeleton className="p-1" width={140} />
      </div>
      <d iv className="row px-0 py-2 pt-4">
        <div className="col-1 me-2 px-0 d-flex justify-content-end">
          <Skeleton circle width={40} height={40} className="mx-0" />
        </div>
        <div className="col-1 ms-1 px-0 mt-1">
          <Skeleton count={2} className="ms-0" width={65} />
        </div>
        <div className="col-5 px-0 mt-1">
          <Skeleton count={2} className="ms-0" />
        </div>
      </d>

      <div className="row px-0 py-2">
        <div className="col-1 me-2 px-0 d-flex justify-content-end">
          <Skeleton circle width={40} height={40} className="mx-0" />
        </div>
        <div className="col-1 ms-1 px-0 mt-1">
          <Skeleton count={2} className="ms-0" width={65} />
        </div>
        <div className="col-5 px-0 mt-1">
          <Skeleton count={2} className="ms-0" />
        </div>
      </div>

      <div className="row px-0 py-2">
        <div className="col-1 me-2 px-0 d-flex justify-content-end">
          <Skeleton circle width={40} height={40} className="mx-0" />
        </div>
        <div className="col-1 ms-1 px-0 mt-1">
          <Skeleton count={2} className="ms-0" width={65} />
        </div>
        <div className="col-5 px-0 mt-1">
          <Skeleton count={2} className="ms-0" />
        </div>
      </div>

      <div className="row px-0 py-2">
        <div className="col-1 me-2 px-0 d-flex justify-content-end">
          <Skeleton circle width={40} height={40} className="mx-0" />
        </div>
        <div className="col-1 ms-1 px-0 mt-1">
          <Skeleton count={2} className="ms-0" width={65} />
        </div>
        <div className="col-5 px-0 mt-1">
          <Skeleton count={2} className="ms-0" />
        </div>
      </div>

      <div className="row px-0 py-2">
        <div className="col-1 me-2 px-0 d-flex justify-content-end">
          <Skeleton circle width={40} height={40} className="mx-0" />
        </div>
        <div className="col-1 ms-1 px-0 mt-1">
          <Skeleton count={2} className="ms-0" width={65} />
        </div>
        <div className="col-5 px-0 mt-1">
          <Skeleton count={2} className="ms-0" />
        </div>
      </div>
      <div className="row px-0 py-2">
        <div className="col-1 me-2 px-0 d-flex justify-content-end">
          <Skeleton circle width={40} height={40} className="mx-0" />
        </div>
        <div className="col-1 ms-1 px-0 mt-1">
          <Skeleton count={2} className="ms-0" width={65} />
        </div>
        <div className="col-5 px-0 mt-1">
          <Skeleton count={2} className="ms-0" />
        </div>
      </div>

      <div className="row px-0 py-2 pb-4">
        <div className="col-1 me-2 px-0 d-flex justify-content-end">
          <Skeleton circle width={40} height={40} className="mx-0" />
        </div>
        <div className="col-1 ms-1 px-0 mt-1">
          <Skeleton count={2} className="ms-0" width={65} />
        </div>
        <div className="col-5 px-0 mt-1">
          <Skeleton count={2} className="ms-0" />
        </div>
      </div>
    </div>
  );
};
