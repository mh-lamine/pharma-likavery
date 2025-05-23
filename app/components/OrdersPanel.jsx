

export default function OrdersPanel({title, children}) {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          {title}
        </h5>
        <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          View all
        </a>
      </div>
      {children}
    </div>
  );
}
