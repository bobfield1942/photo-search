import { ClockLoader } from "react-spinners";
import { Photos } from "../../types/photo";

type Props = { photos?: Photos; loading: boolean };

function Results({ photos, loading }: Props) {
  return (
    <>
      {!loading && (
        <ul className="m-4 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {photos?.hits?.map((photo) => {
            return (
              <li key={photo.id} className="relative">
                <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  <img
                    src={photo.webformatURL}
                    alt=""
                    className="pointer-events-none object-cover group-hover:opacity-75"
                  />
                </div>
                <div className="flex w-full items-center justify-between space-x-6 p-2">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="truncate text-sm font-medium text-gray-900">
                        <b>User</b> {photo.user}
                      </h3>
                    </div>
                    <p className="mt-1 truncate text-sm text-gray-500">
                      <b>Tags</b> {photo.tags}
                    </p>
                  </div>
                  {photo.userImageURL ? (
                    <img
                      className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                      src={photo.userImageURL}
                      alt=""
                    />
                  ) : (
                    <span className="inline-block h-10 w-10 overflow-hidden rounded-full bg-gray-100">
                      <svg
                        className="h-full w-full text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <div className="w-40 mx-auto my-20">
        <ClockLoader
          color={"#198ccfff"}
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </>
  );
}

export default Results;
