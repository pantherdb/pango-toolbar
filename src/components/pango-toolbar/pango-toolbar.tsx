import { Component, Prop, h, State, Element } from '@stencil/core';
import { type ApiVersion, ApiVersions, getConfig } from '../../utils/environment';

// Import images
import goLogo from './../../assets/images/go-logo-yellow.png';
import pantherLogo from './../../assets/images/panther-logo-yellow.png';

@Component({
  tag: 'pango-toolbar',
  styleUrl: 'pango-toolbar.scss',
  shadow: true,
  assetsDirs: ['assets'],
})
export class PangoToolbar {
  @Element() el: HTMLElement;

  @Prop() headerTitle: string = 'PAN-GO';
  @Prop() headerSubTitle: string = 'Human Functionome';
  @Prop() pangoHome: string = '/';
  @Prop() apiVersion: ApiVersion = ApiVersions.V2;

  @State() isMobile: boolean = false;

  private mediaQuery: MediaQueryList;
  private mediaHandler = (e: MediaQueryListEvent) => {
    this.isMobile = e.matches;
  };

  connectedCallback() {
    this.mediaQuery = window.matchMedia('(max-width: 767px)');
    this.isMobile = this.mediaQuery.matches;
    this.mediaQuery.addEventListener('change', this.mediaHandler);

    // Auto-detect version from URL query param if prop was not explicitly set
    if (!this.el.hasAttribute('api-version')) {
      const searchParams = new URLSearchParams(window.location.search);
      const urlVersion = searchParams.get('apiVersion') as ApiVersion;
      if (urlVersion && (urlVersion === ApiVersions.V1 || urlVersion === ApiVersions.V2)) {
        this.apiVersion = urlVersion;
      }
    }
  }

  disconnectedCallback() {
    this.mediaQuery?.removeEventListener('change', this.mediaHandler);
  }

  private renderGitHubIcon() {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    );
  }

  private renderDownloadIcon() {
    return (
      <svg width="18" height="18" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
        <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" />
      </svg>
    );
  }

  private renderInfoIcon() {
    return (
      <svg width="18" height="18" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
        <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" />
      </svg>
    );
  }

  private renderHelpIcon() {
    return (
      <svg width="18" height="18" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
        <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.679 0-89.844 28.093-89.844 73.924 0 16.571 7.4 31.429 24.727 31.429 28.093 0 16.964-40.308 63.406-40.308 22.461 0 39.321 11.461 39.321 32.258 0 24.297-27.045 37.927-44.875 52.976-16.178 13.637-37.927 36.098-37.927 83.107 0 20.372 7.959 26.659 24.727 26.659 21.406 0 28.376-10.506 28.376-21.308 0-28.376.571-43.07 37.927-70.116 18.862-13.637 48.901-35.225 48.901-80.311C356.394 120.368 320.608 90 262.655 90zM256 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46z" />
      </svg>
    );
  }

  private renderDownloadLinks() {
    const config = getConfig(this.apiVersion);
    return [
      <a href={config.DOWNLOAD_ALL_DATA_CSV_URL}>All data as CSV</a>,
      <a href={config.DOWNLOAD_ALL_DATA_JSON_URL}>All data as JSON</a>,
      <a href={config.DOWNLOAD_ANNOTATIONS_GAF_URL}>Annotations as GAF</a>,
      <a href={config.DOWNLOAD_EVOLUTIONARY_MODELS_GAF_URL} target="_blank" rel="noopener noreferrer">
        Evolutionary models as GAF
      </a>,
      <a href={config.DOWNLOAD_ONTOLOGY_FILES_URL} target="_blank" rel="noopener noreferrer">
        Ontology Files
      </a>,
    ];
  }

  private renderDesktopActions() {
    return [
      <div class="pango-toolbar__action-buttons">
        <pango-dropdown>
          <span slot="trigger">Download</span>
          <div slot="content" class="dropdown-content">
            {this.renderDownloadLinks()}
          </div>
        </pango-dropdown>
        <a href={`${this.pangoHome}/about`} class="pango-toolbar__action-link">
          About
        </a>
        <a href={`${this.pangoHome}/help`} class="pango-toolbar__action-link">
          Help
        </a>
      </div>,
      <div class="pango-toolbar__logo-section">
        <div class="pango-toolbar__logo-divider">
          <a href="http://geneontology.org/" target="_blank" rel="noopener noreferrer" class="pango-toolbar__partner-logo">
            <img src={goLogo} alt="GO Logo" class="pango-toolbar__logo-image" />
          </a>
        </div>
        <div class="pango-toolbar__logo-divider">
          <a href="http://pantherdb.org" target="_blank" rel="noopener noreferrer" class="pango-toolbar__partner-logo">
            <img src={pantherLogo} alt="Panther Logo" class="pango-toolbar__logo-image" />
          </a>
        </div>
      </div>,
    ];
  }

  private renderMobileActions() {
    return (
      <div class="pango-toolbar__mobile-actions">
        <pango-dropdown>
          <span slot="trigger" class="pango-toolbar__icon-button">
            {this.renderDownloadIcon()}
          </span>
          <div slot="content" class="dropdown-content">
            {this.renderDownloadLinks()}
          </div>
        </pango-dropdown>

        <a href={`${this.pangoHome}/about`} class="pango-toolbar__icon-button" title="About">
          {this.renderInfoIcon()}
        </a>

        <a href={`${this.pangoHome}/help`} class="pango-toolbar__icon-button" title="Help">
          {this.renderHelpIcon()}
        </a>

        <pango-dropdown align="right">
          <span slot="trigger" class="pango-toolbar__icon-button">
            <img src={goLogo} alt="Partners" class="pango-toolbar__mobile-logo-icon" />
          </span>
          <div slot="content" class="pango-toolbar__logos-dropdown">
            <a href="http://geneontology.org/" target="_blank" rel="noopener noreferrer" class="pango-toolbar__logos-dropdown-item">
              <img src={goLogo} alt="GO Logo" />
              <span>Gene Ontology</span>
            </a>
            <a href="http://pantherdb.org" target="_blank" rel="noopener noreferrer" class="pango-toolbar__logos-dropdown-item">
              <img src={pantherLogo} alt="Panther Logo" />
              <span>PANTHER</span>
            </a>
          </div>
        </pango-dropdown>
      </div>
    );
  }

  render() {
    return (
      <div class="pango-toolbar">
        <div class="pango-toolbar__container">
          <div class="pango-toolbar__logo-container">
            <a href={this.pangoHome} class="pango-toolbar__logo-link">
              <span class="pango-toolbar__logo-text">{this.headerTitle}</span>
            </a>
            <a href={this.pangoHome} class="pango-toolbar__logo-link">
              <span class="pango-toolbar__header-text">{this.headerSubTitle}</span>
            </a>
          </div>

          <div class="pango-toolbar__actions">
            <div class="pango-toolbar__social-links">
              <a href="https://github.com/pantherdb/pango" target="_blank" class="pango-toolbar__menu-button" rel="noopener noreferrer">
                {this.renderGitHubIcon()}
              </a>
            </div>

            {this.isMobile ? this.renderMobileActions() : this.renderDesktopActions()}
          </div>
        </div>
      </div>
    );
  }
}
