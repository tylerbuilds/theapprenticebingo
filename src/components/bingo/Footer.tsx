'use client';

import * as React from 'react';
import Link from 'next/link';
import { Github, Globe, X } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 to-gray-950 border-t border-gray-800 py-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          {/* GitHub Link */}
          <a
            href="https://github.com/tylerbuilds/theapprenticebingo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 group"
          >
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            <span className="text-sm font-medium">GitHub</span>
          </a>

          {/* TylerBuilds.com Link */}
          <a
            href="https://tylerbuilds.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 group"
          >
            <Globe className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            <span className="text-sm font-medium">TylerBuilds.com</span>
          </a>

          {/* X (Twitter) Link */}
          <a
            href="https://x.com/TylerIsBuilding"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 group"
          >
            <X className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            <span className="text-sm font-medium">@TylerIsBuilding</span>
          </a>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 leading-relaxed">
            <span className="block sm:inline">
              Unofficial fan project. Not affiliated with BBC or The Apprentice.
            </span>
            <span className="hidden sm:inline mx-2">|</span>
            <span className="block sm:inline">
              Made with ❤️ by fans
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
