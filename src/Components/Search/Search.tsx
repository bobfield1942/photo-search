import { FormEvent, useState } from "react";

type Props = { handleSubmit: (query: string) => void };

function Search({ handleSubmit }: Props) {
  const [query, setQuery] = useState("");

  const searchPhotos = (e: FormEvent) => {
    e.preventDefault();
    return handleSubmit(query);
  };

  return (
    <div className="mt-4 min-w-full">
      <form className="sm:flex" onSubmit={searchPhotos}>
        <label htmlFor="search-query" className="sr-only">
          Email address
        </label>
        <input
          id="search-query"
          data-testid="input-search-query"
          name="search"
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          required
          className="w-full rounded-md border border-transparent px-5 py-3 placeholder-gray-500  focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 focus:ring-offset-gray-800 sm:max-w-xs"
          placeholder="Search for image..."
        />
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            data-testid="button-search"
            type="submit"
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-teal-600 px-5 py-3 text-base font-medium text-white hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            Go 📷
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
