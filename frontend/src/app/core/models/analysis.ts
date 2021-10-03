type AnalysisResultType = 'warning' | 'error';

export interface AnalysisResult {
  type: AnalysisResultType;
  message: string;
}
