import Link from "next/link";

export default function Footer() {
  return (
    <div id="footer" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-16 text-sm text-gray-600">
      <div className="border-t py-5 border-gray-200" />
      
      <span className="block">
        Created by <Link href="https://twitter.com/ccarnino">clacla.eth</Link>. View source code on <Link href="https://github.com/ccarnino/cairo-utils-web">Github</Link>.
      </span>
      
      <span className="block pt-3">
        Thanks to <a href="https://github.com/sekai-studio/starknet-libs">sekai-studio/starknet-libs</a> for their cairo_string library.
      </span>
    </div>
  )
}
